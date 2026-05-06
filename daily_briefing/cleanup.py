#!/usr/bin/env python3
"""
Daily folder cleanup for projects/ai_governance.

Idempotent. Safe to run every day. Never touches:
- the live GitHub Pages site at root (HTML, CNAME, package.json, site.css,
  node_modules/, assets/, charts/, photos/, briefings.json, README, CLAUDE.md)
- any file referenced from a live HTML page (verified via the PINNED_AT_ROOT list)
- .git/, .claude/, .fuse_hidden*, .DS_Store

Sorts loose root files into:
  deploy_reports/        DAILY_BRIEFING_DEPLOY_*.md
  working_docs/frameworks/      AI Fluency, data governance, key terminology, brand
  working_docs/correspondence/  Letters, peer reviews, sample portfolio
  working_docs/synthesis/       Weekly synthesis, blog drafts, onboarding plan
  working_docs/pilot_design/    Pilot task designs, skill architecture
  conference_materials/  Conference slide PDFs
  audits/                QA reports
  scripts/               Apps Script JS files
  _quarantine/           Empty test files, redundant zips

Run: python3 daily_briefing/cleanup.py
"""
import os
import re
import shutil
import sys
from datetime import datetime
from pathlib import Path

# Workspace = parent of this script's parent (script lives in daily_briefing/)
WORKSPACE = Path(__file__).resolve().parent.parent
os.chdir(WORKSPACE)

# Files that must NEVER move from root (live site + things HTML references).
PINNED_AT_ROOT = {
    "index.html",
    "CNAME",
    "site.css",
    "package.json",
    "package-lock.json",
    "briefings.json",
    "README.md",
    "CLAUDE.md",
    ".gitignore",
    # Linked from pilot_hub.html (line ~2378):
    "UserGuide_Claude_DCCAP_V1_20260313.docx",
    # Referenced in preston_analytics.html error messages (lines 293, 561):
    "apps_script_doGet_addition.js",
    # This script's own infrastructure:
    "cleanup.py",
}

# Folders that stay at root (live site or already-organized).
PINNED_DIRS = {
    "assets", "charts", "photos", "node_modules",
    "_archived_pilot_task_skills_v1", "_archived_pilot_task_skills_v3",
    "_internal", "daily_briefing", "daily_briefing_patches",
    "financial_modeling", "remotion",
    ".git", ".claude",
    # Targets we manage:
    "deploy_reports", "working_docs", "conference_materials",
    "audits", "scripts", "_quarantine",
}

# Sort rules: (regex matched against filename) -> destination folder.
# First matching rule wins. Order matters.
RULES = [
    # Deploy reports
    (re.compile(r"^DAILY_BRIEFING_DEPLOY_\d{8}\.md$"), "deploy_reports"),

    # Frameworks (canonical / governance materials)
    (re.compile(r"^Framework_for_AI_Fluency.*\.(md|pdf)$", re.IGNORECASE), "working_docs/frameworks"),
    (re.compile(r"^AI_Fluency_Key_Terminology\.md$"), "working_docs/frameworks"),
    (re.compile(r"^DCCAP_AI_Data_Governance_Framework.*\.docx$"), "working_docs/frameworks"),
    (re.compile(r"^dccap-brand\.md$"), "working_docs/frameworks"),
    # Extension-less synthesis files left at root early in the project
    (re.compile(r"^ai_governance_goals_framework$"), "working_docs/frameworks"),
    (re.compile(r"^ai_nonprofit_onboarding_strategy$"), "working_docs/synthesis"),

    # Correspondence (letters, reviews, samples)
    (re.compile(r"^Brian_CareerIntel_Response.*\.docx$"), "working_docs/correspondence"),
    (re.compile(r"^CTO_Peer_Review.*\.docx$"), "working_docs/correspondence"),
    (re.compile(r"^sample_portfolio\.docx$"), "working_docs/correspondence"),

    # Synthesis & narrative drafts
    (re.compile(r"^WEEK\d+_.*_SYNTHESIS_\d{8}\.md$"), "working_docs/synthesis"),
    (re.compile(r"^blog_.*\.md$"), "working_docs/synthesis"),
    (re.compile(r"^AI_Onboarding_Implementation_Plan\.md$"), "working_docs/synthesis"),

    # Pilot design and architecture
    (re.compile(r"^pilot_task_designs.*\.md$"), "working_docs/pilot_design"),
    (re.compile(r"^skill_per_task_master_architecture\.md$"), "working_docs/pilot_design"),

    # Conference slide PDFs (standalone delivery artifacts)
    (re.compile(r"^magouirk_cio4good_slides_\d{8}\.pdf$"), "conference_materials"),
    (re.compile(r"^conference_deck_.*\.pdf$"), "conference_materials"),

    # Audits
    (re.compile(r"^QA_VERIFICATION_REPORT_\d{8}\.txt$"), "audits"),

    # Scripts (the standalone Apps Script reference; the doGet partial stays at root)
    (re.compile(r"^google_apps_script_complete\.js$"), "scripts"),

    # Skill manifest files
    (re.compile(r"^.*\.skill$"), "working_docs/pilot_design"),

    # Quarantine: empty test files and redundant archives
    (re.compile(r"^test_unlink_\d+$"), "_quarantine"),
    (re.compile(r"^photos\.zip$"), "_quarantine"),
]

# Patterns to leave alone at root regardless (HTML, hidden files, etc.)
DO_NOT_TOUCH = [
    re.compile(r"^.*\.html$"),
    re.compile(r"^\.fuse_hidden.*$"),
    re.compile(r"^\.DS_Store$"),
    re.compile(r"^\..*$"),  # any other dotfile not in PINNED_AT_ROOT
]


def is_pinned(name: str) -> bool:
    if name in PINNED_AT_ROOT:
        return True
    for pat in DO_NOT_TOUCH:
        if pat.match(name):
            return True
    return False


def find_destination(name: str):
    for pat, dest in RULES:
        if pat.match(name):
            return dest
    return None


def main():
    log_lines = []
    log_lines.append(f"# Cleanup run — {datetime.now().isoformat(timespec='seconds')}")
    log_lines.append(f"# Workspace: {WORKSPACE}")
    log_lines.append("")

    moved = []
    left_alone = []
    unrouted = []

    # Walk only the top-level files, not recursive
    for entry in sorted(os.listdir(WORKSPACE)):
        full = WORKSPACE / entry

        # Skip directories (they're either pinned or already organized)
        if full.is_dir():
            continue

        if is_pinned(entry):
            left_alone.append(entry)
            continue

        dest_rel = find_destination(entry)
        if dest_rel is None:
            unrouted.append(entry)
            continue

        dest_dir = WORKSPACE / dest_rel
        dest_dir.mkdir(parents=True, exist_ok=True)
        dest_path = dest_dir / entry

        # If target already exists with same name, leave the root file alone
        # (likely a prior run already moved it; the duplicate at root may be an
        # accidental re-export — surface it under unrouted instead of overwriting).
        if dest_path.exists():
            unrouted.append(f"{entry} (target exists at {dest_rel}/{entry} — manual review)")
            continue

        shutil.move(str(full), str(dest_path))
        moved.append(f"{entry} -> {dest_rel}/")

    log_lines.append(f"## Moved ({len(moved)})")
    log_lines.extend(f"- {m}" for m in moved) if moved else log_lines.append("(none)")
    log_lines.append("")
    log_lines.append(f"## Left at root ({len(left_alone)})")
    log_lines.extend(f"- {f}" for f in left_alone)
    log_lines.append("")
    log_lines.append(f"## Unrouted — review manually ({len(unrouted)})")
    log_lines.extend(f"- {u}" for u in unrouted) if unrouted else log_lines.append("(none)")

    log_dir = WORKSPACE / "daily_briefing" / "cleanup_logs"
    log_dir.mkdir(parents=True, exist_ok=True)
    log_path = log_dir / f"cleanup_{datetime.now().strftime('%Y%m%d')}.log"
    log_path.write_text("\n".join(log_lines))

    print("\n".join(log_lines))
    print(f"\nLog written to: {log_path.relative_to(WORKSPACE)}")

    # Exit non-zero if there are unrouted files so the scheduled task notices.
    # The scheduled-task wrapper can decide how to surface; for now, just warn.
    if unrouted:
        sys.stderr.write(f"\nWARN: {len(unrouted)} unrouted file(s) at root. Review the log.\n")
    return 0


if __name__ == "__main__":
    sys.exit(main())
