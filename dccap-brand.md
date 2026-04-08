---
name: dccap-brand
description: >
  DC CAP Scholars brand system guide for creating on-brand documents, presentations,
  emails, reports, social assets, and any other materials. Use this skill whenever
  someone at DC CAP is creating, editing, or producing any visual or written output
  that represents the organization — including Word docs, PowerPoints, PDFs, emails,
  one-pagers, donor materials, social posts, letterhead, and branded data reports.
  Trigger especially when the user mentions "DC CAP," "branded," "on-brand," "our
  colors," "our fonts," "letterhead," "a deck for DC CAP," or anything involving
  creating materials for students, donors, board members, or the public that carries
  the DC CAP name.
---

# DC CAP Scholars Brand System

## Before Creating Any Document

Run the font installer first so all brand fonts are available on the system:

```bash
python /path/to/dccap-brand/scripts/setup_fonts.py
```

The script auto-locates the Fonts folder relative to where the skill lives inside
the DC CAP Branding Materials folder. Run it once per session. It installs all fonts
silently and only copies files not already present.

---

## Brand Identity at a Glance

**Organization:** DC CAP Scholars
**Tagline:** EXCEL BEYOND BELIEF
**Website:** dccap.org
**Email:** info@dccap.org
**Phone:** 202.783.7933
**Address:** 1425 K Street, NW, Suite 200, Washington DC, 20005

**Mission framing:** DC CAP provides crucial resources for D.C. students to get to
and through college with confidence. The brand communicates achievement, D.C. pride,
forward movement, and academic excellence.

---

## Color Palette

These are the exact hex values extracted from the official brand assets.

| Color  | Hex       | Role / Value Word        | Usage Notes                              |
|--------|-----------|--------------------------|------------------------------------------|
| Navy   | `#101A4C` | Confidence               | Primary text, backgrounds, dominant tone |
| Purple | `#8352FF` | Ambition                 | Accent, headers, calls to action         |
| Blue   | `#87B7D5` | Excellence               | Supporting color, overlays, highlights   |
| Gold   | `#FCB017` | Legacy                   | Student-audience only; omit for donors   |
| Tan    | `#FFF4ED` | Openness                 | Light backgrounds, warmth, spaciousness  |
| White  | `#FFFFFF` | —                        | Clean backgrounds, reversed text         |
| Black  | `#000000` | —                        | Grayscale use only                       |

**Tints available:** Each brand color can be used at 100%, 75%, or 25% opacity,
or darkened by 25% for contrast. Grayscale: 100%, 70%, 40%, 20%, or 5%.

**Audience rule:**
- Student materials: full palette, all five colors are fair game
- Donor materials: remove Gold; stick to Navy, Purple, Blue, Tan, and White

**Contrast rule:** Always prioritize the highest-contrast combination. Navy on White
and White on Navy are the safest defaults. When using lighter colors (Tan, Blue) as
backgrounds, verify that text remains clearly legible.

---

## Typography

### Font Families

Three typefaces make up the DC CAP type system. All font files live in the
`Fonts/` folder of the branding materials and install automatically via
`setup_fonts.py`.

#### 1. Akkordeon — Headlines & Logo

The logo uses **Akkordeon Eight** (never modify this in the logo).
For headlines in documents and decks, use weights Five through Fourteen.

- **System font name:** `Akkordeon Eight`, `Akkordeon Five`, `Akkordeon Ten`, etc.
  (each weight is its own registered font family — use the specific name)
- Set headlines in ALL CAPS
- Tight leading: decrease by 10–15 pt below font size for large type; by 5 pt for smaller
- Tracking: 15
- Kerning: optical

```python
# python-pptx / python-docx example
run.font.name = "Akkordeon Eight"   # for logo-weight text
run.font.name = "Akkordeon Ten"     # for a bold headline
run.font.name = "Akkordeon Five"    # for a lighter headline or eyebrow
```

#### 2. Noto Serif SemiCondensed — Subheadlines

- **System font name:** `Noto Serif SemiCondensed`
- Weights: Light (default), Medium, Bold, Black
- Case-sensitive (sentence or title case); ALL CAPS acceptable
- Leading: font size + at least 5 pt (e.g., 12 pt type → 17 pt leading)
- Kerning: optical

```python
run.font.name = "Noto Serif SemiCondensed"
```

#### 3. Noto Serif — Body Copy & Captions

- **System font name:** `Noto Serif`
- Weights: Regular (default), Bold, Black, Italic
- Case-sensitive
- Leading: font size + at least 5 pt
- Kerning: optical

```python
run.font.name = "Noto Serif"
```

### Typographic Hierarchy

| Level        | Font                          | Notes                                |
|--------------|-------------------------------|--------------------------------------|
| Eyebrow      | Akkordeon Five                | ALL CAPS, small, above headline      |
| H1           | Akkordeon (heavy weight)      | ALL CAPS, tight leading              |
| H2           | Akkordeon (medium weight)     | ALL CAPS or title case               |
| H3           | Noto Serif SemiCondensed Light| Sentence case                        |
| Body         | Noto Serif Regular            | Sentence case; bold first line ok    |
| Pull Quote   | Noto Serif SemiCondensed Light Italic | Indented or offset              |
| Caption      | Noto Serif Regular Italic     | Small size                           |
| CTA          | Noto Serif SemiCondensed Black| ALL CAPS or title case               |

---

## Logo

### Primary vs Secondary Lockup
- **Stacked (Primary):** Use whenever space permits. Minimum width ~0.75" / 50px.
- **Wide (Secondary):** Use when horizontal space is constrained. Minimum width ~1" / 72px.

### Clear Space
Maintain clear space equal to the height of the "DC" letterforms on all four sides.
Never crowd the logo against edges, images, or other elements.

### Color Usage Rules
- **Single Color logo:** Use on white or light backgrounds — cleanest and most common
- **Duo-Color logo:** Use when placing on a brand color background
- **Reversed (White logo):** Use on dark (Navy, Purple) backgrounds
- **Grayscale:** Use when color printing is unavailable

On dark backgrounds, the column in the icon should be Tan (`#FFF4ED`).
The Tan column variants should only appear on Tan or lighter backgrounds.

### What to Avoid
Do not stretch, distort, alter proportions, change component scale, add shadows,
change opacity, rotate, flip, place on busy or photographic backgrounds without
sufficient contrast, or use colors outside the brand palette.

### Logo File Locations

For detailed file paths by color variant, see `references/brand-assets.md`.

**Quick reference (PNG, primary stacked lockup):**
- Navy on white: `Logos/Primary/PNG/Single Color/DCCAP_Logo_SingleColor_Navy.png`
- Blue on white: `Logos/Primary/PNG/Single Color/DCCAP_Logo_SingleColor_Blue.png`
- Purple on white: `Logos/Primary/PNG/Single Color/DCCAP_Logo_SingleColor_Purple.png`
- Gold on white: `Logos/Primary/PNG/Single Color/DCCAP_Logo_SingleColor_Gold.png`
- Blue column + Navy text: `Logos/Primary/PNG/Color Column Navy Text/DCCAP_Logo_BlueColumn.png`
- White (reversed): `Logos/Primary/PNG/Greyscale/DCCAP_Logo_White.png`
- Black: `Logos/Primary/PNG/Greyscale/DCCAP_Logo_Black.png`

---

## Voice and Tone

DC CAP materials speak with confidence and warmth. The brand voice is assertive
without being corporate, celebratory without being performative. The organization
is a credible, results-driven partner for students and a trustworthy steward of
donor investment.

**Core voice qualities:**
- **Confident:** Make direct claims. Lead with achievement and outcomes.
- **Empowering:** Center student agency and potential, not organizational paternalism.
- **D.C.-rooted:** Acknowledge the city, its students, and their neighborhoods.
- **Academic and credible:** Ground claims in evidence and organizational expertise.
- **Accessible:** Clear, active sentences. No unnecessary jargon.

**Audience-specific tone:**

*For students:* Energetic, colorful, celebratory. Use the full palette. Imagery
and language should make students feel seen, proud, and capable. Match their energy.

*For donors:* Professional, direct, evidence-focused. Use the limited palette
(no Gold). Lead with outcomes and impact data. Acknowledge legacy and investment.
Tone is warmer than a typical nonprofit pitch — this is a credible partner, not
a supplicant.

*For board and executive audiences:* Strategic, concise, data-grounded. Emphasize
organizational performance, programmatic rigor, and forward direction.

**Tagline use:** "EXCEL BEYOND BELIEF" appears in ALL CAPS, set in Akkordeon.
Use it as a closer, a footer, or a focal graphic element — not as a mid-sentence phrase.

---

## Document Creation Guidance

### Word Documents (.docx)
- Use Noto Serif as the body font (12 pt, 17 pt leading)
- Use Akkordeon weights for section headers (if embedding fonts) or fallback to
  a bold Noto Serif SemiCondensed for headers in simpler docs
- Letterhead templates are available in `Letterhead Templates/`:
  - `DC_Letterhead_Short_Digital_Template.dotx` — digital use
  - `DC_Letterhead_LongForm_PrintSafe_Template.dotx` — print
  - `AcknowledgementTemplate_DCCAP.dotx` — acknowledgment letters
  - `BODTemplate_Dev.dotx` — board materials

### Presentations (.pptx)
- Headlines in Akkordeon (caps, tight leading)
- Subheads in Noto Serif SemiCondensed Light
- Body in Noto Serif Regular
- Slide backgrounds: Navy, White, or Tan — use sparingly; one dominant background per deck
- Charts and data visuals: use brand colors in order (Navy first, then Purple, Blue, Gold)
- The angular shapes from the logo icon can be used as graphic frame elements

### PDFs and Print
- Embed all fonts when exporting
- For print, use EPS logo files from `Logos/` — EPS files are in every color variant
- Photo overlays: Blue (`#87B7D5`) and Purple (`#8352FF`) gradient overlays create
  branded photo treatments

### Emails and Digital
- Use the Short Digital letterhead template as a starting point
- Subject lines and headers: Noto Serif SemiCondensed or fallback to a system serif
- Donor email palette: Navy + Blue + Tan + White; omit Gold

### HTML Deliverables (.html)

Every HTML file that carries the DC CAP brand must include the following — no exceptions.

#### Google Fonts Import

Place this `<link>` tag in `<head>` before any stylesheets:

```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Noto+Serif+SemiCondensed:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

#### CSS Custom Properties

Declare these in `:root` so every component inherits them consistently:

```css
:root {
    --font-display: 'Akkordeon Ten', 'Noto Serif SemiCondensed', Georgia, serif;
    --font-body: 'Noto Serif', Georgia, serif;
    --font-subhead: 'Noto Serif SemiCondensed', 'Noto Serif', Georgia, serif;
    --font-mono: 'JetBrains Mono', monospace;
}
```

#### Typography Rules for HTML

| Level | Font Variable | CSS Role | Style Notes |
|-------|--------------|----------|-------------|
| H1, H2 | `--font-display` | Headlines | ALL CAPS, `letter-spacing: 0.02em`, tight `line-height` (1.0–1.1) |
| H3, tabs, labels | `--font-subhead` | Subheadlines | Sentence case, `font-weight: 300` |
| Body copy | `--font-body` | Paragraphs, lists | Sentence case, `font-weight: 400` |
| Code | `--font-mono` | Code blocks, data | `font-weight: 400` or `500` |

#### Akkordeon Fallback Handling

Akkordeon is a custom OTF font — it renders only on systems where it is installed. The `--font-display` stack lists it first so those systems pick it up automatically. The immediate fallback, `Noto Serif SemiCondensed`, is visually consistent with the brand and available via the Google Fonts import above.

Never substitute Archivo, Inter, Nunito, or other generic sans-serif fonts as Akkordeon fallbacks. The brand relies on a serif type system; any fallback must remain within that system.

#### Responsive Sizing

Scale display type fluidly rather than locking to fixed pixel values. A reasonable baseline:

```css
h1 { font-family: var(--font-display); font-size: clamp(2rem, 5vw, 4rem); text-transform: uppercase; letter-spacing: 0.02em; line-height: 1.05; }
h2 { font-family: var(--font-display); font-size: clamp(1.5rem, 3.5vw, 2.75rem); text-transform: uppercase; letter-spacing: 0.02em; line-height: 1.1; }
h3 { font-family: var(--font-subhead); font-size: clamp(1.1rem, 2vw, 1.5rem); font-weight: 300; }
body { font-family: var(--font-body); font-size: 1rem; font-weight: 400; line-height: 1.6; }
```

---

## Quick Reference Card

| Element         | Specification                                           |
|-----------------|---------------------------------------------------------|
| Primary color   | Navy `#101A4C`                                          |
| Accent          | Purple `#8352FF`                                        |
| Supporting blue | `#87B7D5`                                               |
| Gold (students) | `#FCB017`                                               |
| Background tan  | `#FFF4ED`                                               |
| Headline font   | Akkordeon Eight–Fourteen (ALL CAPS, tight leading)      |
| Subhead font    | Noto Serif SemiCondensed (Light default)                |
| Body font       | Noto Serif (Regular default)                            |
| Logo min width  | 0.75" stacked / 1" wide                                 |
| Tagline         | EXCEL BEYOND BELIEF (Akkordeon, ALL CAPS)               |
| Phone           | 202.783.7933                                            |
| Email           | info@dccap.org                                          |
| Web             | dccap.org                                               |
| Address         | 1425 K Street, NW, Ste. 200, Washington DC, 20005       |

For full file listings of all logo variants, icon files, and templates, see
`references/brand-assets.md`.

---

## HTML Presentation Mode (Slide Decks)

For browser-based decks (conference talks, kickoff, capstone, board presentations). Each slide fills exactly one viewport. Single self-contained HTML file with inline CSS and JS. No npm, no build tools. Google Fonts via CDN is the only external resource.

### Viewport Fitting Rules (NON-NEGOTIABLE)

- Every `.slide` must have `height: 100vh; height: 100dvh; overflow: hidden;`
- ALL sizes use `clamp()` — never fixed px/rem
- Content containers need `max-height` constraints
- Images: `max-height: min(50vh, 400px)`
- Height breakpoints required: 700px, 600px, 500px
- Include `prefers-reduced-motion` support
- Use `scroll-snap-type: y mandatory` on `html` for slide-to-slide snapping

```css
html, body { height: 100%; overflow-x: hidden; }
html { scroll-snap-type: y mandatory; scroll-behavior: smooth; }

.slide {
    width: 100vw; height: 100vh; height: 100dvh;
    overflow: hidden; scroll-snap-align: start;
    display: flex; flex-direction: column; position: relative;
}

.slide-content {
    flex: 1; display: flex; flex-direction: column;
    justify-content: flex-start;
    max-height: 100%; overflow: hidden;
    padding: clamp(2.5rem, 7vh, 5rem) var(--slide-padding) clamp(1.5rem, 3vh, 2.5rem);
}
```

### Responsive Slide Variables

```css
:root {
    --title-size: clamp(2.2rem, 6vw, 4.5rem);
    --h2-size: clamp(1.8rem, 4.5vw, 3.2rem);
    --h3-size: clamp(1.3rem, 3vw, 2rem);
    --body-size: clamp(1rem, 1.8vw, 1.35rem);
    --body-lg: clamp(1.1rem, 2.2vw, 1.55rem);
    --small-size: clamp(0.85rem, 1.3vw, 1.05rem);
    --mono-size: clamp(0.75rem, 1.1vw, 0.9rem);
    --slide-padding: clamp(2rem, 6vw, 6rem);
    --content-gap: clamp(1rem, 2.5vw, 2.5rem);
    --card-padding: clamp(1.25rem, 2.5vw, 2rem);
    --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
    --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
    --duration-normal: 0.6s;
    --duration-slow: 1s;
}

@media (max-height: 700px) {
    :root {
        --title-size: clamp(1.6rem, 5vw, 3rem);
        --h2-size: clamp(1.4rem, 3.5vw, 2.2rem);
        --body-size: clamp(0.85rem, 1.4vw, 1.1rem);
        --body-lg: clamp(0.95rem, 1.8vw, 1.25rem);
    }
}
@media (max-height: 600px) {
    :root {
        --title-size: clamp(1.3rem, 4vw, 2.2rem);
        --h2-size: clamp(1.1rem, 3vw, 1.7rem);
        --body-size: clamp(0.8rem, 1.2vw, 0.95rem);
    }
}
@media (max-height: 500px) {
    :root { --title-size: clamp(1.1rem, 3.5vw, 1.8rem); --body-size: clamp(0.7rem, 1vw, 0.85rem); }
}
```

### Content Density Limits

| Slide Type | Maximum Content |
|---|---|
| Title slide | 1 heading + 1 subtitle + optional tagline |
| Content slide | 1 heading + 4-6 bullets OR 1 heading + 2 paragraphs |
| Feature grid | 1 heading + 6 cards maximum (2x3 or 3x2) |
| Data slide | 1 heading + 1 visualization + 1 caption |
| Quote slide | 1 quote (max 3 lines) + attribution |

**Content exceeds limits? Split into multiple slides. Never cram, never scroll.**

### Slide Navigation (Required JS)

Every slide presentation must include keyboard navigation (arrows, space, page up/down), IntersectionObserver for `.visible` class triggering, a progress bar, and navigation dots.

### Print CSS for PDF Export

```css
@media print {
    html { scroll-snap-type: none; }
    .slide { page-break-after: always; page-break-inside: avoid; scroll-snap-align: unset; height: 100vh; }
    .slide:last-child { page-break-after: auto; }
    .nav-dots, .progress-bar { display: none !important; }
    .reveal, .reveal-scale { opacity: 1 !important; transform: none !important; }
    .bar-fill { width: var(--target-width) !important; }
}
```

---

## Dark Theme Variant

For conference decks and presentations on projected screens, use the dark theme. Navy dominant, with purple/blue/gold accents on dark backgrounds.

### Dark Theme CSS Custom Properties

```css
:root {
    /* Deep backgrounds */
    --navy-deep: #0B1236;
    --navy-mid: #162060;
    --purple-glow: rgba(131, 82, 255, 0.15);
    --blue-glow: rgba(135, 183, 213, 0.12);

    /* Dark theme text */
    --text-main: rgba(255, 255, 255, 0.92);
    --text-secondary: rgba(255, 255, 255, 0.6);
    --text-dim: rgba(255, 255, 255, 0.35);

    /* Dark theme surfaces */
    --card-bg: rgba(255, 255, 255, 0.05);
    --card-border: rgba(255, 255, 255, 0.08);
}

body { color: var(--text-main); background: var(--navy-deep); }
h1, h2, h3 { color: var(--white); }
p { color: var(--text-main); }
```

### Gradient Mesh Backgrounds (per-slide atmosphere)

Each slide gets a unique gradient mesh for depth. Vary the position and color of the radial gradients to create visual rhythm across the deck.

```css
/* Hero slide — purple + blue glow */
.slide-hero {
    background: radial-gradient(ellipse at 20% 80%, var(--purple-glow) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 20%, var(--blue-glow) 0%, transparent 50%),
                var(--navy);
}

/* Content slide — single subtle glow */
.slide-content-bg {
    background: radial-gradient(ellipse at 50% 80%, rgba(131,82,255,0.06) 0%, transparent 60%),
                var(--navy-deep);
}

/* Gold accent slide */
.slide-gold-accent {
    background: radial-gradient(ellipse at 70% 70%, rgba(252,176,23,0.08) 0%, transparent 50%),
                var(--navy);
}
```

### Dark Theme Card Patterns

```css
.card-dark {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: clamp(8px, 1.2vw, 12px);
    padding: clamp(1rem, 2vw, 1.75rem);
}

/* Accent top-border variants (for 4D cards, category cards) */
.card-dark.purple-top { border-top: 4px solid var(--purple); }
.card-dark.blue-top { border-top: 4px solid var(--blue); }
.card-dark.gold-top { border-top: 4px solid var(--gold); }

/* Left-border variants (for tier/classification cards) */
.card-dark.restricted { background: rgba(220,38,38,0.1); border-left: 5px solid #DC2626; }
.card-dark.sensitive { background: rgba(252,176,23,0.08); border-left: 5px solid var(--gold); }
.card-dark.internal { background: rgba(131,82,255,0.08); border-left: 5px solid var(--purple); }
.card-dark.public { background: rgba(135,183,213,0.08); border-left: 5px solid var(--blue); }
```

---

## Animation System

Both slide and page modes share the same reveal animation system. Animations fire when elements enter the viewport via IntersectionObserver.

### Core Reveal Classes

```css
/* Fade + Slide Up (default, most versatile) */
.reveal {
    opacity: 0;
    transform: translateY(clamp(15px, 3vh, 30px));
    transition: opacity var(--duration-normal) var(--ease-out-expo),
                transform var(--duration-normal) var(--ease-out-expo);
}

/* Scale In (for cards, key metrics) */
.reveal-scale {
    opacity: 0;
    transform: scale(0.92);
    transition: opacity var(--duration-normal) var(--ease-out-expo),
                transform var(--duration-normal) var(--ease-spring);
}

/* Slide from Left (for timelines, sequential items) */
.reveal-left {
    opacity: 0;
    transform: translateX(clamp(-30px, -4vw, -50px));
    transition: opacity var(--duration-normal) var(--ease-out-expo),
                transform var(--duration-normal) var(--ease-out-expo);
}

/* Slide from Right */
.reveal-right {
    opacity: 0;
    transform: translateX(clamp(30px, 4vw, 50px));
    transition: opacity var(--duration-normal) var(--ease-out-expo),
                transform var(--duration-normal) var(--ease-out-expo);
}

/* Blur In (for hero text, dramatic moments) */
.reveal-blur {
    opacity: 0;
    filter: blur(8px);
    transition: opacity 0.8s var(--ease-out-expo),
                filter 0.8s var(--ease-out-expo);
}

/* Visible state — applied by IntersectionObserver */
.visible .reveal, .visible .reveal-scale, .visible .reveal-left,
.visible .reveal-right, .visible .reveal-blur {
    opacity: 1;
    transform: translateY(0) translateX(0) scale(1);
    filter: blur(0);
}

/* Staggered children (apply to sequential elements) */
.reveal:nth-child(1) { transition-delay: 0s; }
.reveal:nth-child(2) { transition-delay: 0.1s; }
.reveal:nth-child(3) { transition-delay: 0.15s; }
.reveal:nth-child(4) { transition-delay: 0.2s; }
.reveal:nth-child(5) { transition-delay: 0.25s; }
.reveal:nth-child(6) { transition-delay: 0.3s; }

/* Stagger for cards in grids */
.reveal-scale:nth-child(1) { transition-delay: 0s; }
.reveal-scale:nth-child(2) { transition-delay: 0.08s; }
.reveal-scale:nth-child(3) { transition-delay: 0.16s; }
.reveal-scale:nth-child(4) { transition-delay: 0.24s; }
.reveal-scale:nth-child(5) { transition-delay: 0.32s; }
.reveal-scale:nth-child(6) { transition-delay: 0.4s; }
```

### IntersectionObserver (Required in Both Modes)

```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('section, .card-grid, .reveal-container').forEach(el => {
    observer.observe(el);
});
```

### Reduced Motion Support (Required)

```css
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.2s !important;
    }
    html { scroll-behavior: auto; }
    .reveal, .reveal-scale, .reveal-left, .reveal-right, .reveal-blur {
        opacity: 1 !important;
        transform: none !important;
        filter: none !important;
    }
}
```

---

## Background & Atmosphere Effects

### Gradient Mesh (for hero sections — light theme)

```css
.hero {
    background:
        radial-gradient(ellipse at 20% 80%, rgba(131, 82, 255, 0.15) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 20%, rgba(135, 183, 213, 0.12) 0%, transparent 50%),
        var(--navy);
}
```

### Subtle Grid Pattern (for section backgrounds)

```css
.grid-bg {
    background-image:
        linear-gradient(rgba(16, 26, 76, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(16, 26, 76, 0.03) 1px, transparent 1px);
    background-size: clamp(30px, 5vw, 50px) clamp(30px, 5vw, 50px);
}
```

### Noise Texture (subtle grain for depth)

```css
.noise-overlay::after {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.03;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    pointer-events: none;
}
```

---

## Card Patterns

### Standard Card (Light Theme)

```css
.card {
    background: var(--white);
    border-radius: clamp(8px, 1.5vw, 16px);
    padding: var(--card-padding);
    box-shadow: 0 1px 3px rgba(16, 26, 76, 0.08), 0 4px 12px rgba(16, 26, 76, 0.04);
    transition: transform 0.3s var(--ease-out-expo), box-shadow 0.3s ease;
    border-left: 4px solid transparent;
}

.card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(16, 26, 76, 0.1), 0 8px 24px rgba(16, 26, 76, 0.06);
}

/* Accent variants */
.card.navy-accent { border-left-color: var(--navy); }
.card.purple-accent { border-left-color: var(--purple); }
.card.blue-accent { border-left-color: var(--blue); }
.card.gold-accent { border-left-color: var(--gold); }
```

### Card Grid

```css
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, clamp(240px, 30vw, 320px)), 1fr));
    gap: clamp(1rem, 2vw, 1.5rem);
}
```

### Hover Lift (cards, buttons — light theme)

```css
.hover-lift {
    transition: transform 0.3s var(--ease-out-expo), box-shadow 0.3s ease;
}
.hover-lift:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(16, 26, 76, 0.1);
}
```

---

## Data Visualization Patterns

Use these CSS-only patterns for metrics, progress, and comparisons. Zero external libraries. No Chart.js, D3, or other charting libraries. CSS-only visualizations and Canvas API handle everything DC CAP needs.

### Animated Counter

```javascript
function animateCounter(element, target, duration = 1500) {
    const start = performance.now();
    const startVal = 0;
    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        element.textContent = Math.round(startVal + (target - startVal) * eased);
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}
```

### Metric Card (big number + label + trend)

```html
<div class="metric-card reveal-scale">
    <span class="metric-value" data-target="847">0</span>
    <span class="metric-label">Scholars Served</span>
    <span class="metric-trend positive">+12% YoY</span>
</div>
```

```css
.metric-card {
    text-align: center;
    padding: var(--card-padding);
    background: var(--white);
    border-radius: clamp(8px, 1.5vw, 16px);
    box-shadow: 0 2px 8px rgba(16, 26, 76, 0.06);
}
.metric-value {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 900;
    color: var(--navy);
    display: block;
    line-height: 1.1;
}
.metric-label {
    font-family: var(--font-subhead);
    font-size: var(--small-size);
    color: var(--dark-gray);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: 0.5em;
    display: block;
}
.metric-trend {
    font-family: var(--font-mono);
    font-size: var(--mono-size);
    margin-top: 0.25em;
    display: block;
}
.metric-trend.positive { color: #16a34a; }
.metric-trend.neutral { color: var(--dark-gray); }
```

**Dark theme variant:** Replace `.metric-card` background with `var(--card-bg)`, `.metric-value` color with `var(--purple)`, `.metric-label` color with `var(--text-main)`.

### CSS-Only Progress Bar

```html
<div class="progress-track">
    <div class="progress-fill" style="--target-width: 73%">
        <span class="progress-label">73%</span>
    </div>
</div>
```

```css
.progress-track {
    height: clamp(24px, 3vh, 36px);
    background: var(--light-gray);
    border-radius: 999px;
    overflow: hidden;
    position: relative;
}
.progress-fill {
    height: 100%;
    width: 0;
    background: linear-gradient(90deg, var(--navy), var(--purple));
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: clamp(8px, 1vw, 16px);
    transition: width 1.2s var(--ease-out-expo);
}
.visible .progress-fill { width: var(--target-width); }
.progress-label {
    font-family: var(--font-mono);
    font-size: var(--mono-size);
    color: var(--white);
    font-weight: 500;
}
```

**Dark theme variant:** Replace `.progress-track` background with `rgba(255,255,255,0.06)`.

### Donut Chart (CSS-only)

```html
<div class="donut" style="--percentage: 73; --color: var(--purple)">
    <span class="donut-value">73%</span>
    <span class="donut-label">Completion</span>
</div>
```

```css
.donut {
    --size: clamp(100px, 15vw, 160px);
    --thickness: clamp(8px, 1.5vw, 14px);
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    background: conic-gradient(
        var(--color) 0deg,
        var(--color) calc(var(--percentage) * 3.6deg),
        var(--light-gray) calc(var(--percentage) * 3.6deg)
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
}
.donut::before {
    content: '';
    position: absolute;
    width: calc(var(--size) - var(--thickness) * 2);
    height: calc(var(--size) - var(--thickness) * 2);
    border-radius: 50%;
    background: var(--white);
}
.donut-value, .donut-label { position: relative; z-index: 1; }
.donut-value {
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 900;
    color: var(--navy);
}
.donut-label {
    font-family: var(--font-subhead);
    font-size: var(--small-size);
    color: var(--dark-gray);
}
```

**Dark theme variant:** Replace `.donut::before` background with `var(--navy-deep)`. Replace `.donut-value` color with `var(--white)`. Replace the light-gray in `conic-gradient` with `rgba(255,255,255,0.06)`.

### Horizontal Bar Chart (CSS-only, animated)

```html
<div class="bar-chart">
    <div class="bar-row">
        <span class="bar-label">Phase 1</span>
        <div class="bar-track">
            <div class="bar-fill purple" style="--target-width: 100%"></div>
        </div>
        <span class="bar-value">100%</span>
    </div>
    <div class="bar-row">
        <span class="bar-label">Phase 2</span>
        <div class="bar-track">
            <div class="bar-fill gold" style="--target-width: 45%"></div>
        </div>
        <span class="bar-value">45%</span>
    </div>
</div>
```

```css
.bar-chart { display: flex; flex-direction: column; gap: clamp(8px, 1.5vh, 16px); }
.bar-row {
    display: grid;
    grid-template-columns: clamp(80px, 12vw, 120px) 1fr clamp(40px, 6vw, 60px);
    align-items: center;
    gap: clamp(8px, 1vw, 12px);
}
.bar-label {
    font-family: var(--font-subhead);
    font-size: var(--small-size);
    color: var(--navy);
    text-align: right;
}
.bar-track {
    height: clamp(16px, 2.5vh, 28px);
    background: var(--light-gray);
    border-radius: 999px;
    overflow: hidden;
}
.bar-fill {
    height: 100%;
    width: 0;
    border-radius: 999px;
    transition: width 1s var(--ease-out-expo);
}
.bar-fill.navy { background: var(--navy); }
.bar-fill.purple { background: var(--purple); }
.bar-fill.blue { background: var(--blue); }
.bar-fill.gold { background: var(--gold); }
.visible .bar-fill { width: var(--target-width); }
.bar-value {
    font-family: var(--font-mono);
    font-size: var(--mono-size);
    color: var(--dark-gray);
}
```

**Dark theme variant:** Replace `.bar-track` background with `rgba(255,255,255,0.06)`. Replace `.bar-label` and `.bar-value` colors with `var(--text-main)` and `var(--text-secondary)` respectively. Use gradient fills: `.bar-fill.purple { background: linear-gradient(90deg, var(--navy-mid), var(--purple)); }`.

### Timeline

```css
.timeline {
    position: relative;
    padding-left: clamp(30px, 5vw, 50px);
}
.timeline::before {
    content: '';
    position: absolute;
    left: clamp(10px, 2vw, 18px);
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, var(--navy), var(--purple), var(--blue));
    border-radius: 2px;
}
.timeline-item {
    position: relative;
    margin-bottom: clamp(1.5rem, 3vh, 2.5rem);
}
.timeline-item::before {
    content: '';
    position: absolute;
    left: calc(clamp(-20px, -3vw, -32px) - 5px);
    top: 6px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: var(--purple);
    border: 3px solid var(--white);
    box-shadow: 0 0 0 2px var(--purple);
}
.timeline-item.active::before { background: var(--gold); box-shadow: 0 0 0 2px var(--gold); }
.timeline-item.completed::before { background: var(--navy); box-shadow: 0 0 0 2px var(--navy); }
```

### Canvas API Radar Chart

For multi-dimensional competency displays (survey results, 4D fluency profiles). Use Canvas API directly — no libraries.

```javascript
function drawRadarChart(canvas, labels, values, options = {}) {
    const ctx = canvas.getContext('2d');
    const {
        fillColor = 'rgba(131, 82, 255, 0.2)',
        strokeColor = '#8352FF',
        gridColor = 'rgba(16, 26, 76, 0.1)',
        labelColor = '#101A4C',
        size = Math.min(canvas.width, canvas.height),
        levels = 5
    } = options;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const radius = size * 0.38;
    const n = labels.length;

    // Draw grid
    for (let l = 1; l <= levels; l++) {
        ctx.beginPath();
        const r = (radius / levels) * l;
        for (let i = 0; i <= n; i++) {
            const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    // Draw data polygon
    ctx.beginPath();
    values.forEach((v, i) => {
        const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
        const r = radius * (v / 100);
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Draw labels
    ctx.font = `500 ${Math.max(11, size * 0.035)}px 'Noto Serif SemiCondensed', serif`;
    ctx.fillStyle = labelColor;
    ctx.textAlign = 'center';
    labels.forEach((label, i) => {
        const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
        const x = cx + (radius + 24) * Math.cos(angle);
        const y = cy + (radius + 24) * Math.sin(angle);
        ctx.fillText(label, x, y + 4);
    });
}
```

**Dark theme variant:** Set `gridColor: 'rgba(255,255,255,0.08)'`, `labelColor: 'rgba(255,255,255,0.7)'`.

---

## Interactive Effects

### Tab Navigation

```css
.tab-nav {
    display: flex;
    gap: 0;
    border-bottom: 2px solid var(--light-gray);
}
.tab-btn {
    font-family: var(--font-subhead);
    font-size: var(--small-size);
    padding: clamp(8px, 1.5vh, 14px) clamp(12px, 2vw, 24px);
    background: none;
    border: none;
    border-bottom: 3px solid transparent;
    color: var(--dark-gray);
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
    margin-bottom: -2px;
}
.tab-btn:hover { color: var(--navy); }
.tab-btn.active {
    color: var(--navy);
    border-bottom-color: var(--purple);
    font-weight: 700;
}
```

### Tooltip

```css
[data-tooltip] {
    position: relative;
    cursor: help;
}
[data-tooltip]::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%) translateY(4px);
    background: var(--navy);
    color: var(--white);
    font-family: var(--font-body);
    font-size: var(--small-size);
    padding: 6px 12px;
    border-radius: 6px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s, transform 0.2s;
}
[data-tooltip]:hover::after {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
}
```

---

## HTML Enhancement Checklist

When upgrading or creating any HTML deliverable, verify:

- [ ] All colors use CSS custom properties from the brand system
- [ ] All font-family declarations use the DC CAP font stack variables
- [ ] All font-size, padding, margin, gap values use `clamp()`
- [ ] IntersectionObserver is present and observing all sections
- [ ] `.reveal` classes are applied to elements that should animate
- [ ] `prefers-reduced-motion` media query is present
- [ ] Cards have hover effects (light theme) or accent borders (dark theme)
- [ ] Hero section has gradient mesh background
- [ ] At least one data visualization is present if metrics/data exist on the page
- [ ] Responsive breakpoints at 700px, 600px, 500px height and 700px width

---

## What to Avoid in HTML

- **Generic AI aesthetics:** Purple gradients on white, Inter/Roboto fonts, centered-everything layouts, gratuitous glassmorphism
- **Fixed sizes:** Any `px` or `rem` value for font-size, padding, margin, or gap that should scale with viewport
- **System fonts:** Always use Google Fonts via CDN
- **Heavy libraries:** No Chart.js, D3, or other charting libraries. CSS-only visualizations and Canvas API handle everything DC CAP needs
- **Overanimation:** One well-orchestrated page load with staggered reveals creates more impact than scattered micro-interactions everywhere
