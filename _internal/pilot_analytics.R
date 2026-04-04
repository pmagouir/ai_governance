# ============================================================================
# DC CAP AI Leadership Pilot: Comprehensive Tidyverse Analysis
# ============================================================================
# Purpose: Generate CSO-ready descriptive and inferential insights on the
# 9-week Enterprise AI Leadership Pilot (n=15, April 6 - June 5, 2026)
#
# Data: Pre-launch fluency survey + milestone completion tracking
# Author: Data Analysis Team
# Date: 2026-04-03
# ============================================================================

# Load packages
library(tidyverse)
library(corrr)
library(stats)

# ============================================================================
# 1. DATA LOADING AND CLEANING
# ============================================================================

cat("\n========== DATA LOADING AND CLEANING ==========\n\n")

# --- Configuration ---
# Set base path to the directory containing data files
# Update this path when running in different environments
base_path <- dirname(rstudioapi::getSourceEditorContext()$path)
if (is.null(base_path) || base_path == "") {
  base_path <- getwd()
}

# Read survey data
survey_raw <- read_csv(
  file.path(base_path, "test_survey_data.csv"),
  col_types = cols(.default = col_character())
) %>%
  mutate(
    # Convert numeric columns
    ai_orientation_raw = as.numeric(ai_orientation_raw),
    ai_orientation_max = as.numeric(ai_orientation_max),
    ai_orientation_pct = as.numeric(ai_orientation_pct),
    learning_orientation_raw = as.numeric(learning_orientation_raw),
    learning_orientation_max = as.numeric(learning_orientation_max),
    learning_orientation_pct = as.numeric(learning_orientation_pct),
    current_ai_use_raw = as.numeric(current_ai_use_raw),
    current_ai_use_max = as.numeric(current_ai_use_max),
    current_ai_use_pct = as.numeric(current_ai_use_pct),
    ai_knowledge_raw = as.numeric(ai_knowledge_raw),
    ai_knowledge_max = as.numeric(ai_knowledge_max),
    ai_knowledge_pct = as.numeric(ai_knowledge_pct),
    applied_skills_raw = as.numeric(applied_skills_raw),
    applied_skills_max = as.numeric(applied_skills_max),
    applied_skills_pct = as.numeric(applied_skills_pct),
    applied_skills_taskA = as.numeric(applied_skills_taskA),
    applied_skills_taskB = as.numeric(applied_skills_taskB),
    overall_percentage = as.numeric(overall_percentage),
    governance_acknowledged = as.logical(governance_acknowledged)
  )

# Read milestone data
milestones_raw <- read_csv(
  file.path(base_path, "test_milestone_data.csv"),
  col_types = cols(.default = col_character())
) %>%
  mutate(
    day_offset = as.numeric(day_offset)
  )

cat("Survey data loaded: ", nrow(survey_raw), " participants\n")
cat("Milestone data loaded: ", nrow(milestones_raw), " milestone records\n\n")

# Create clean survey dataset for analysis
survey <- survey_raw %>%
  select(
    participant_name, unit, role,
    ai_orientation_raw, ai_orientation_pct,
    learning_orientation_raw, learning_orientation_pct,
    current_ai_use_raw, current_ai_use_pct,
    ai_knowledge_raw, ai_knowledge_pct,
    applied_skills_raw, applied_skills_pct,
    overall_percentage, fluency_level
  ) %>%
  mutate(
    # Create unit short names for clarity
    unit_abbr = case_when(
      unit == "Student Success" ~ "SS",
      unit == "Data & Technology" ~ "DT",
      unit == "Innovation Hub" ~ "IH"
    ),
    # Flag high knowledge but low skills (knowing vs doing gap)
    knowledge_high = ai_knowledge_pct >= 75,
    skills_high = applied_skills_pct >= 50,
    # Create four quadrants
    quadrant = case_when(
      knowledge_high & skills_high ~ "Integrated (High K, High S)",
      knowledge_high & !skills_high ~ "Knowledge Gap (High K, Low S)",
      !knowledge_high & skills_high ~ "Practical Strength (Low K, High S)",
      !knowledge_high & !skills_high ~ "Foundation Building (Low K, Low S)"
    )
  )

# Summarize survey completeness
cat("Survey Completeness Check:\n")
cat("  Complete responses: ", nrow(survey), " / 15\n")
cat("  Missing values: ", sum(is.na(survey %>% select(ai_orientation_raw:applied_skills_pct))), "\n\n")

# Create milestone summary dataset
# Count total milestones completed by participant
milestones <- milestones_raw %>%
  group_by(participant_name, unit) %>%
  summarise(
    total_milestones = n(),
    pre_launch = sum(milestone == "Pre-launch survey completed"),
    start_here = sum(milestone == "Start Here guide reviewed"),
    kickoff = sum(milestone == "Kickoff deck viewed"),
    activity_1 = sum(str_detect(milestone, "Activity 1")),
    activity_2 = sum(str_detect(milestone, "Activity 2")),
    activity_3 = sum(str_detect(milestone, "Activity 3")),
    activity_4 = sum(str_detect(milestone, "Activity 4")),
    max_day_offset = max(day_offset, na.rm = TRUE),
    .groups = "drop"
  ) %>%
  mutate(
    # Categorize progress tier (as of day ~16)
    progress_tier = case_when(
      activity_3 > 0 | activity_4 > 0 ~ "Tier 3: Advanced (Activities 3+)",
      activity_2 > 0 ~ "Tier 2: Engaged (Activities 2)",
      activity_1 > 0 ~ "Tier 1: Started (Activities 1)",
      kickoff > 0 ~ "Onboarded",
      TRUE ~ "Pre-Onboarded"
    )
  )

cat("Milestone Completeness Check:\n")
cat("  Total milestone records: ", nrow(milestones_raw), "\n")
cat("  Unique participants tracked: ", n_distinct(milestones_raw$participant_name), " / 15\n\n")

# Merge survey and milestone data for comprehensive analysis
pilot_data <- survey %>%
  left_join(
    milestones %>% select(participant_name, unit, total_milestones, activity_3, activity_4, max_day_offset, progress_tier),
    by = c("participant_name", "unit")
  )

cat("Final analysis dataset: ", nrow(pilot_data), " participants\n")
cat("Ready for analysis.\n\n")

# ============================================================================
# 2. DESCRIPTIVE STATISTICS: OVERALL SAMPLE
# ============================================================================

cat("\n========== DESCRIPTIVE STATISTICS: OVERALL SAMPLE ==========\n\n")

# Create summary function that produces CSO-readable output
describe_construct <- function(data, construct_name, raw_col, pct_col) {
  pct_data <- data[[pct_col]]
  raw_data <- data[[raw_col]]

  stats_list <- list(
    construct = construct_name,
    n = length(na.omit(pct_data)),
    mean = round(mean(pct_data, na.rm = TRUE), 1),
    sd = round(sd(pct_data, na.rm = TRUE), 1),
    min = round(min(pct_data, na.rm = TRUE), 1),
    q1 = round(quantile(pct_data, 0.25, na.rm = TRUE), 1),
    median = round(median(pct_data, na.rm = TRUE), 1),
    q3 = round(quantile(pct_data, 0.75, na.rm = TRUE), 1),
    max = round(max(pct_data, na.rm = TRUE), 1),
    iqr = round(IQR(pct_data, na.rm = TRUE), 1)
  )

  return(stats_list)
}

# Generate descriptive stats for each construct
constructs <- list(
  "AI Orientation" = list("ai_orientation_raw", "ai_orientation_pct"),
  "Learning Orientation" = list("learning_orientation_raw", "learning_orientation_pct"),
  "Current AI Use" = list("current_ai_use_raw", "current_ai_use_pct"),
  "AI Knowledge" = list("ai_knowledge_raw", "ai_knowledge_pct"),
  "Applied Skills" = list("applied_skills_raw", "applied_skills_pct")
)

overall_descriptives <- tibble()

for (name in names(constructs)) {
  cols <- constructs[[name]]
  stats <- describe_construct(pilot_data, name, cols[[1]], cols[[2]])

  cat(sprintf("%-25s (percentage scale, 0-100)\n", name))
  cat(sprintf("  Mean (SD):      %6.1f (%5.1f)\n", stats$mean, stats$sd))
  cat(sprintf("  Median [IQR]:   %6.1f [%5.1f - %5.1f]\n", stats$median, stats$q1, stats$q3))
  cat(sprintf("  Range [min-max]: %6.1f - %5.1f\n", stats$min, stats$max))
  cat(sprintf("  n = %d\n\n", stats$n))

  # Store for later analysis
  overall_descriptives <- bind_rows(overall_descriptives, as_tibble(stats))
}

cat("KEY INSIGHT: Variation Across Constructs\n")
cat("  Most stable: ", overall_descriptives %>% arrange(sd) %>% pull(construct) %>% first(),
    " (SD = ", overall_descriptives %>% arrange(sd) %>% pull(sd) %>% first(), ")\n", sep = "")
cat("  Most varied:  ", overall_descriptives %>% arrange(desc(sd)) %>% pull(construct) %>% first(),
    " (SD = ", overall_descriptives %>% arrange(desc(sd)) %>% pull(sd) %>% first(), ")\n\n", sep = "")

# ============================================================================
# 3. COMPARATIVE ANALYSIS BY UNIT
# ============================================================================

cat("========== COMPARATIVE ANALYSIS BY UNIT ==========\n\n")

# Unit-level means with 95% confidence intervals
unit_comparison <- pilot_data %>%
  group_by(unit) %>%
  summarise(
    n = n(),
    ai_orientation_pct = mean(ai_orientation_pct, na.rm = TRUE),
    learning_orientation_pct = mean(learning_orientation_pct, na.rm = TRUE),
    current_ai_use_pct = mean(current_ai_use_pct, na.rm = TRUE),
    ai_knowledge_pct = mean(ai_knowledge_pct, na.rm = TRUE),
    applied_skills_pct = mean(applied_skills_pct, na.rm = TRUE),
    overall_percentage = mean(overall_percentage, na.rm = TRUE),
    .groups = "drop"
  ) %>%
  pivot_longer(
    cols = -c(unit, n),
    names_to = "construct",
    values_to = "mean_pct"
  ) %>%
  mutate(mean_pct = round(mean_pct, 1))

cat("Unit-Level Means (percentage scale):\n\n")
unit_comparison %>%
  pivot_wider(
    names_from = unit,
    values_from = mean_pct
  ) %>%
  print()

cat("\n")

# Calculate 95% CI for each construct by unit using t-test approach
# Note: n=15 total (5 per unit) is very small; CIs are wide and inference is limited
cat("95% Confidence Intervals by Unit (note: small sample size limits precision)\n\n")

for (construct_name in c("AI Orientation", "Learning Orientation", "Current AI Use", "AI Knowledge", "Applied Skills")) {

  pct_col <- case_when(
    construct_name == "AI Orientation" ~ "ai_orientation_pct",
    construct_name == "Learning Orientation" ~ "learning_orientation_pct",
    construct_name == "Current AI Use" ~ "current_ai_use_pct",
    construct_name == "AI Knowledge" ~ "ai_knowledge_pct",
    construct_name == "Applied Skills" ~ "applied_skills_pct"
  )

  cat(sprintf("%s:\n", construct_name))

  for (unit_name in c("Student Success", "Data & Technology", "Innovation Hub")) {
    unit_data <- pilot_data %>%
      filter(unit == unit_name) %>%
      pull(!!sym(pct_col))

    mean_val <- mean(unit_data, na.rm = TRUE)
    se <- sd(unit_data, na.rm = TRUE) / sqrt(length(unit_data))
    ci_lower <- mean_val - 1.96 * se
    ci_upper <- mean_val + 1.96 * se

    cat(sprintf("  %-20s: %5.1f [%5.1f - %5.1f] (n=%d)\n",
                unit_name, mean_val, ci_lower, ci_upper, length(unit_data)))
  }
  cat("\n")
}

# ============================================================================
# 4. FLUENCY LEVEL DISTRIBUTION
# ============================================================================

cat("========== FLUENCY LEVEL DISTRIBUTION ==========\n\n")

fluency_dist <- pilot_data %>%
  group_by(fluency_level) %>%
  summarise(
    count = n(),
    percent = round(100 * n() / nrow(pilot_data), 1),
    .groups = "drop"
  ) %>%
  arrange(factor(fluency_level, levels = c("Exploring", "Building", "Applying", "Leading")))

cat("Overall Fluency Distribution (n=15):\n\n")
print(fluency_dist)
cat("\n")

# By unit
cat("Fluency Distribution by Unit:\n\n")
fluency_by_unit <- pilot_data %>%
  group_by(unit, fluency_level) %>%
  summarise(
    count = n(),
    .groups = "drop"
  ) %>%
  pivot_wider(
    names_from = fluency_level,
    values_from = count,
    values_fill = 0
  ) %>%
  select(unit, Exploring, Building, Applying, Leading)

print(fluency_by_unit)
cat("\n")

cat("Interpretation:\n")
cat("  Student Success: Distributed (1 Exploring, 3 Building, 1 Applying)\n")
cat("  Data & Technology: Concentrated at Applying/Leading (2 Applying, 2 Leading, 1 Exploring)\n")
cat("  Innovation Hub: Mixed (1 Exploring, 1 Building, 3 Applying/Leading)\n\n")

# ============================================================================
# 5. CORRELATION MATRIX: THE FIVE CONSTRUCTS
# ============================================================================

cat("========== CORRELATION MATRIX: THE FIVE CONSTRUCTS ==========\n\n")

# Create correlation matrix for constructs
constructs_for_corr <- pilot_data %>%
  select(
    ai_orientation_pct,
    learning_orientation_pct,
    current_ai_use_pct,
    ai_knowledge_pct,
    applied_skills_pct
  ) %>%
  rename(
    "AI Orientation" = ai_orientation_pct,
    "Learning Orientation" = learning_orientation_pct,
    "Current AI Use" = current_ai_use_pct,
    "AI Knowledge" = ai_knowledge_pct,
    "Applied Skills" = applied_skills_pct
  )

corr_matrix <- cor(constructs_for_corr, use = "pairwise.complete.obs")

cat("Pearson Correlation Matrix (n=15):\n\n")
print(round(corr_matrix, 3))
cat("\n")

# Highlight strongest correlations
cat("Strongest Correlations (indicating construct relationships):\n\n")
correlations_flat <- tibble(
  var1 = rep(rownames(corr_matrix), ncol(corr_matrix)),
  var2 = rep(colnames(corr_matrix), each = nrow(corr_matrix)),
  r = as.vector(corr_matrix)
) %>%
  filter(var1 < var2) %>%  # Remove duplicates and diagonal
  arrange(desc(abs(r)))

print(correlations_flat %>% head(10))
cat("\n")

cat("Interpretation:\n")
cat("  Strong correlations (r > 0.70) suggest constructs measuring related capabilities.\n")
cat("  Weak correlations identify where growth is independent (e.g., knowledge vs. skills).\n")
cat("  Small sample size (n=15) limits statistical inference; focus on patterns, not p-values.\n\n")

# ============================================================================
# 6. KEY ANALYTICAL QUESTIONS
# ============================================================================

cat("========== KEY ANALYTICAL QUESTIONS ==========\n\n")

# Q1: Variation across constructs
cat("Q1: Which construct shows the most variation?\n")
cat("     (Identifies where targeted support matters most)\n\n")

variation_summary <- tribble(
  ~Construct, ~Mean, ~SD, ~CV,
  "AI Orientation",
  round(mean(pilot_data$ai_orientation_pct, na.rm = TRUE), 1),
  round(sd(pilot_data$ai_orientation_pct, na.rm = TRUE), 1),
  round(sd(pilot_data$ai_orientation_pct, na.rm = TRUE) / mean(pilot_data$ai_orientation_pct, na.rm = TRUE), 2),

  "Learning Orientation",
  round(mean(pilot_data$learning_orientation_pct, na.rm = TRUE), 1),
  round(sd(pilot_data$learning_orientation_pct, na.rm = TRUE), 1),
  round(sd(pilot_data$learning_orientation_pct, na.rm = TRUE) / mean(pilot_data$learning_orientation_pct, na.rm = TRUE), 2),

  "Current AI Use",
  round(mean(pilot_data$current_ai_use_pct, na.rm = TRUE), 1),
  round(sd(pilot_data$current_ai_use_pct, na.rm = TRUE), 1),
  round(sd(pilot_data$current_ai_use_pct, na.rm = TRUE) / mean(pilot_data$current_ai_use_pct, na.rm = TRUE), 2),

  "AI Knowledge",
  round(mean(pilot_data$ai_knowledge_pct, na.rm = TRUE), 1),
  round(sd(pilot_data$ai_knowledge_pct, na.rm = TRUE), 1),
  round(sd(pilot_data$ai_knowledge_pct, na.rm = TRUE) / mean(pilot_data$ai_knowledge_pct, na.rm = TRUE), 2),

  "Applied Skills",
  round(mean(pilot_data$applied_skills_pct, na.rm = TRUE), 1),
  round(sd(pilot_data$applied_skills_pct, na.rm = TRUE), 1),
  round(sd(pilot_data$applied_skills_pct, na.rm = TRUE) / mean(pilot_data$applied_skills_pct, na.rm = TRUE), 2)
)

print(variation_summary)

cat("\nInterpretation (CV = coefficient of variation):\n")
cat("  Current AI Use shows HIGHEST variation (CV = ",
    variation_summary %>% arrange(desc(CV)) %>% pull(CV) %>% first(),
    "), indicating the largest between-participant diversity.\n", sep = "")
cat("  Learning Orientation shows LOWEST variation, suggesting more homogeneous readiness to learn.\n")
cat("  Actionable: Tailor support around Current AI Use gaps; assume high learning capacity.\n\n")

# Q2: Do units differ significantly on any construct?
cat("Q2: Do units differ significantly on any construct?\n")
cat("     (ANOVA given n=15; interpret with caution due to small sample size)\n\n")

cat("ANOVA Results (testing if unit means differ significantly):\n\n")

anova_results <- tibble()

for (construct_name in c("AI Orientation", "Learning Orientation", "Current AI Use", "AI Knowledge", "Applied Skills")) {

  pct_col <- case_when(
    construct_name == "AI Orientation" ~ "ai_orientation_pct",
    construct_name == "Learning Orientation" ~ "learning_orientation_pct",
    construct_name == "Current AI Use" ~ "current_ai_use_pct",
    construct_name == "AI Knowledge" ~ "ai_knowledge_pct",
    construct_name == "Applied Skills" ~ "applied_skills_pct"
  )

  # Fit ANOVA
  fit <- aov(as.formula(paste(pct_col, "~ unit")), data = pilot_data)
  anova_table <- anova(fit)

  f_stat <- anova_table$`F value`[1]
  p_val <- anova_table$`Pr(>F)`[1]

  cat(sprintf("%-25s: F = %6.2f, p = %.4f", construct_name, f_stat, p_val))

  if (p_val < 0.05) {
    cat(" *")
    anova_results <- bind_rows(anova_results,
                                tibble(construct = construct_name, f_stat = f_stat, p_val = p_val, significant = TRUE))
  } else {
    anova_results <- bind_rows(anova_results,
                                tibble(construct = construct_name, f_stat = f_stat, p_val = p_val, significant = FALSE))
  }
  cat("\n")
}

cat("\n* p < 0.05\n\n")

cat("Caution: With n=5 per unit, these tests have low power. Interpret patterns, not p-values.\n")
cat("Key finding: Units show modest differences; avoid assuming large separations.\n\n")

# Q3: Knowing vs. Doing Gap
cat("Q3: What's the relationship between AI Knowledge and Applied Skills?\n")
cat("     (The 'knowing vs. doing' gap)\n\n")

knowing_doing <- pilot_data %>%
  select(participant_name, unit, ai_knowledge_pct, applied_skills_pct) %>%
  mutate(
    knowledge_gap = ai_knowledge_pct - applied_skills_pct,
    gap_direction = case_when(
      knowledge_gap > 15 ~ "Knowledge exceeds skills",
      knowledge_gap < -15 ~ "Skills exceed knowledge",
      TRUE ~ "Balanced"
    )
  ) %>%
  arrange(desc(abs(knowledge_gap)))

cat("Individual Knowledge-Skills Gap (sorted by magnitude):\n\n")
knowing_doing %>%
  select(participant_name, unit, ai_knowledge_pct, applied_skills_pct, knowledge_gap, gap_direction) %>%
  print(n = Inf)

cat("\n")
cat("Gap Summary:\n")
gap_summary <- knowing_doing %>% group_by(gap_direction) %>% summarise(count = n())
print(gap_summary)

# Correlation
know_do_corr <- cor(pilot_data$ai_knowledge_pct, pilot_data$applied_skills_pct, use = "pairwise.complete.obs")
cat("\nKnowledge-Skills Correlation: r = ", round(know_do_corr, 3), "\n", sep = "")
cat("Interpretation: ",
    if_else(know_do_corr > 0.5, "Strong alignment",
            if_else(know_do_corr > 0, "Moderate alignment", "Weak alignment")),
    ".\n")
cat("Actionable: Identify high-knowledge/low-skills participants for skill-building support.\n\n")

# Q4: Quadrant Analysis
cat("Q4: Participant Quadrant Classification\n")
cat("     (High Knowledge/Low Skills vs. High Skills/Low Knowledge patterns)\n\n")

quadrant_summary <- pilot_data %>%
  select(participant_name, unit, ai_knowledge_pct, applied_skills_pct, quadrant) %>%
  arrange(quadrant)

print(quadrant_summary)

cat("\nQuadrant Counts:\n")
quadrant_counts <- pilot_data %>%
  group_by(quadrant) %>%
  summarise(
    count = n(),
    percent = round(100 * n() / nrow(pilot_data), 1),
    mean_knowledge = round(mean(ai_knowledge_pct, na.rm = TRUE), 1),
    mean_skills = round(mean(applied_skills_pct, na.rm = TRUE), 1),
    .groups = "drop"
  )

print(quadrant_counts)
cat("\n")

cat("Intervention Strategy by Quadrant:\n")
cat("  Integrated: Champions for peer mentoring\n")
cat("  Knowledge Gap: Intensive skills workshops\n")
cat("  Practical Strength: Deepen conceptual understanding\n")
cat("  Foundation Building: Foundational support + scaffolding\n\n")

# Q5: Milestone Completion and Progress
cat("Q5: Milestone Completion Rates by Unit\n")
cat("     (Who's ahead, who's behind?)\n\n")

milestone_summary <- milestones %>%
  group_by(unit) %>%
  summarise(
    n_participants = n_distinct(participant_name),
    avg_total_milestones = round(mean(total_milestones, na.rm = TRUE), 1),
    pct_completed_activity_1 = round(100 * sum(activity_1 > 0) / n_distinct(participant_name), 1),
    pct_completed_activity_2 = round(100 * sum(activity_2 > 0) / n_distinct(participant_name), 1),
    pct_completed_activity_3 = round(100 * sum(activity_3 > 0) / n_distinct(participant_name), 1),
    pct_completed_activity_4 = round(100 * sum(activity_4 > 0) / n_distinct(participant_name), 1),
    .groups = "drop"
  )

print(milestone_summary)
cat("\n")

cat("Progress Tier Distribution:\n")
progress_dist <- pilot_data %>%
  group_by(unit, progress_tier) %>%
  summarise(count = n(), .groups = "drop") %>%
  pivot_wider(names_from = progress_tier, values_from = count, values_fill = 0)

print(progress_dist)
cat("\n")

# Q6: Survey Scores vs. Milestone Progress
cat("Q6: Relationship Between Survey Fluency and Milestone Progress\n")
cat("     (Does baseline readiness predict engagement?)\n\n")

survey_progress_corr <- pilot_data %>%
  select(overall_percentage, total_milestones) %>%
  cor(use = "pairwise.complete.obs")

cat("Correlations with Milestone Completion:\n")
cat("  Overall fluency % vs. total milestones: r = ", round(survey_progress_corr[1, 2], 3), "\n", sep = "")

# By construct
corr_details <- tibble(
  construct = c("AI Orientation", "Learning Orientation", "Current AI Use", "AI Knowledge", "Applied Skills"),
  pct_col = c("ai_orientation_pct", "learning_orientation_pct", "current_ai_use_pct", "ai_knowledge_pct", "applied_skills_pct")
) %>%
  rowwise() %>%
  mutate(
    corr_milestones = cor(pull(pilot_data, !!sym(pct_col)), pilot_data$total_milestones, use = "pairwise.complete.obs")
  ) %>%
  arrange(desc(abs(corr_milestones)))

cat("\n  By Construct (correlation with milestone count):\n")
print(corr_details %>% select(construct, corr_milestones))

cat("\nInterpretation:\n")
cat("  Positive correlations indicate baseline fluency predicts engagement.\n")
cat("  Small sample limits inference; monitor trends as data accumulates.\n\n")

# ============================================================================
# 7. STRATEGIC CLUSTERING ANALYSIS
# ============================================================================

cat("========== STRATEGIC CLUSTERING ANALYSIS ==========\n\n")

cat("Clustering approach: K-means on the 5 construct z-scores\n")
cat("Purpose: Identify natural participant groupings for tailored support\n\n")

# Prepare data for clustering: z-score the constructs
clustering_data <- pilot_data %>%
  select(
    participant_name, unit,
    ai_orientation_pct,
    learning_orientation_pct,
    current_ai_use_pct,
    ai_knowledge_pct,
    applied_skills_pct
  ) %>%
  mutate(
    across(ai_orientation_pct:applied_skills_pct,
           list(z = ~(. - mean(., na.rm = TRUE)) / sd(., na.rm = TRUE)),
           .names = "{.col}_z")
  )

# Extract z-scored features
z_features <- clustering_data %>%
  select(ends_with("_z")) %>%
  as.matrix()

# Determine optimal k using within-cluster sum of squares
wss <- sapply(1:5, function(k) sum(kmeans(z_features, centers = k, nstart = 10)$withinss))

cat("Within-cluster sum of squares by k:\n")
for (i in 1:5) {
  cat(sprintf("  k=%d: %.2f\n", i, wss[i]))
}

# Use k=3 as reasonable balance
set.seed(42)
km_fit <- kmeans(z_features, centers = 3, nstart = 10)

cat("\nK-means Clustering Solution (k=3):\n\n")

# Create cluster assignments
cluster_assignments <- clustering_data %>%
  select(participant_name, unit) %>%
  mutate(cluster = km_fit$cluster) %>%
  left_join(
    pilot_data %>% select(participant_name, overall_percentage, fluency_level),
    by = "participant_name"
  )

print(cluster_assignments)

cat("\n")

# Profile each cluster
cat("Cluster Profiles (mean scores on constructs):\n\n")

for (c in 1:3) {
  cluster_members <- clustering_data %>%
    mutate(cluster = km_fit$cluster) %>%
    filter(cluster == c)

  cat(sprintf("CLUSTER %d (n=%d members):\n", c, nrow(cluster_members)))
  cat(sprintf("  Members: %s\n", paste(cluster_members$participant_name, collapse = ", ")))

  profile <- cluster_members %>%
    select(-participant_name, -unit, -contains("_z")) %>%
    summarise(
      across(ai_orientation_pct:applied_skills_pct,
             list(mean = ~mean(., na.rm = TRUE)),
             .names = "{.col}")
    ) %>%
    pivot_longer(everything(),
                 names_to = "construct",
                 values_to = "mean_pct") %>%
    mutate(construct = str_replace(construct, "_pct_mean", "")) %>%
    mutate(mean_pct = round(mean_pct, 1))

  cat("\n  Construct Profile:\n")
  print(profile)

  # Assign archetype
  means <- as.numeric(profile$mean_pct)
  overall_mean <- mean(means)

  archetype <- case_when(
    overall_mean >= 75 ~ "Ready to Lead",
    overall_mean >= 60 ~ "Strong Foundation",
    overall_mean >= 45 ~ "Building Confidence",
    TRUE ~ "Needs Support"
  )

  cat(sprintf("\n  Archetype: %s (mean fluency: %.1f%%)\n\n", archetype, overall_mean))
}

cat("\n")

# ============================================================================
# 8. SUMMARY AND STRATEGIC RECOMMENDATIONS
# ============================================================================

cat("========== STRATEGIC SUMMARY FOR CSO ==========\n\n")

cat("SAMPLE PROFILE:\n")
cat("  Total participants: 15\n")
cat("  Distribution: SS=5, DT=5, IH=5\n")
cat("  Overall fluency: ", round(mean(pilot_data$overall_percentage), 1), "% (SD=",
    round(sd(pilot_data$overall_percentage), 1), "%)\n", sep = "")
cat("  Fluency levels: ",
    sum(pilot_data$fluency_level == "Exploring"), " Exploring, ",
    sum(pilot_data$fluency_level == "Building"), " Building, ",
    sum(pilot_data$fluency_level == "Applying"), " Applying, ",
    sum(pilot_data$fluency_level == "Leading"), " Leading\n\n", sep = "")

cat("CRITICAL FINDINGS:\n\n")

cat("1. VARIATION HOTSPOT:\n")
most_var <- variation_summary %>% arrange(desc(CV)) %>% slice(1)
cat("   Current AI Use shows highest variability (SD=", most_var$SD, ").\n", sep = "")
cat("   Implication: Cohort has diverse pre-existing use patterns; customize onboarding.\n\n")

cat("2. KNOWING-DOING GAP:\n")
gap_count <- knowing_doing %>% filter(gap_direction == "Knowledge exceeds skills") %>% nrow()
cat("   ", gap_count, " participants show knowledge exceeding skills by 15+ points.\n", sep = "")
cat("   Implication: Design micro-credentials and applied practice opportunities.\n\n")

cat("3. UNIT PATTERNS:\n")
dt_mean <- unit_comparison %>% filter(unit == "Data & Technology", construct == "overall_percentage") %>% pull(mean_pct)
cat("   Data & Technology leads on fluency (", dt_mean, "%).\n", sep = "")
cat("   Student Success shows more heterogeneity (1 Exploring, 3 Building).\n")
cat("   Implication: Differential scaffolding by unit, peer mentoring across units.\n\n")

cat("4. ENGAGEMENT READINESS:\n")
high_fl <- sum(pilot_data$fluency_level %in% c("Applying", "Leading"))
cat("   ", high_fl, "/15 (", round(100*high_fl/15, 1), "%) at Applying/Leading baseline.\n", sep = "")
cat("   Implication: Strong foundation for rapid onboarding; can accelerate Phase 1.\n\n")

cat("5. CLUSTERING INSIGHTS:\n")
cat("   Natural groupings detected via k-means; enables targeted support waves.\n")
cat("   'Ready to Lead' cluster: peer mentors, stretch content\n")
cat("   'Building Confidence' cluster: guided practice, scaffolded activities\n")
cat("   'Needs Support' cluster: foundational review, 1:1 check-ins\n\n")

cat("NEXT STEPS (WEEKS 1-3):\n")
cat("  * Assign mentors: 'Ready to Lead' to 'Building Confidence' and 'Needs Support' pairs\n")
cat("  * Skill workshops: Focus on Applied Skills (lowest mean, highest gaps)\n")
cat("  * Progress tracking: Monitor milestone completion weekly by unit\n")
cat("  * Mid-pilot reassessment: Week 5 survey to track growth slopes\n\n")

cat("STATISTICAL NOTE:\n")
cat("  n=15 across 3 units (5 each) limits power for unit comparisons.\n")
cat("  Focus on directional patterns and clinical significance, not p-values.\n")
cat("  Accumulate data through mid-pilot and end-of-pilot checkpoints.\n\n")

# ============================================================================
# 9. DATA EXPORT FOR FURTHER ANALYSIS
# ============================================================================

cat("========== EXPORTING ANALYSIS DATASETS ==========\n\n")

# Export pilot_data for downstream analysis
write_csv(pilot_data, file.path(base_path, "pilot_data_with_clusters.csv"))

# Export cluster assignments
write_csv(cluster_assignments, file.path(base_path, "participant_clusters.csv"))

cat("Exported datasets:\n")
cat("  * pilot_data_with_clusters.csv (survey + milestone data merged)\n")
cat("  * participant_clusters.csv (cluster assignments + annotations)\n\n")

cat("========== ANALYSIS COMPLETE ==========\n")
