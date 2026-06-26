
```
body-os
├─ AGENTS.md
├─ app
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ onboarding
│  │  └─ page.tsx
│  ├─ page.tsx
│  ├─ profile
│  │  └─ page.tsx
│  ├─ progress
│  │  └─ page.tsx
│  ├─ providers
│  │  ├─ AppGate.tsx
│  │  ├─ AppHeader.tsx
│  │  ├─ AppProviders.tsx
│  │  └─ AppShell.tsx
│  ├─ settings
│  │  └─ page.tsx
│  └─ workout
│     ├─ exercises
│     │  ├─ page.tsx
│     │  └─ [type]
│     │     ├─ page.tsx
│     │     └─ session
│     │        └─ [dayIndex]
│     │           └─ page.tsx
│     ├─ legacy
│     │  └─ page.tsx
│     └─ page.tsx
├─ CLAUDE.md
├─ components
│  └─ ui
│     ├─ badge.tsx
│     ├─ button.tsx
│     ├─ card.tsx
│     ├─ input.tsx
│     ├─ separator.tsx
│     └─ tabs.tsx
├─ components.json
├─ eslint.config.mjs
├─ features
│  ├─ daily-state
│  │  ├─ lib
│  │  │  ├─ goals.ts
│  │  │  ├─ streak.ts
│  │  │  ├─ water.ts
│  │  │  └─ workout.ts
│  │  └─ model
│  │     ├─ dailyState.types.ts
│  │     └─ useDailyState.ts
│  ├─ exercise
│  │  ├─ data
│  │  │  ├─ exerciseRepository.ts
│  │  │  └─ exerciseStorage.ts
│  │  ├─ domain
│  │  │  ├─ exerciseEngine.ts
│  │  │  ├─ generateProgram.ts
│  │  │  └─ progression.ts
│  │  ├─ model
│  │  │  ├─ exercise.config.ts
│  │  │  ├─ exercise.routes.ts
│  │  │  ├─ exercise.types.ts
│  │  │  └─ useExerciseStore.ts
│  │  └─ ui
│  │     ├─ ExerciseHub.tsx
│  │     ├─ ExercisePlan.tsx
│  │     ├─ ExerciseScreen.tsx
│  │     ├─ ExerciseSessionScreen.tsx
│  │     └─ ExerciseTestMax.tsx
│  ├─ home
│  │  ├─ components
│  │  │  ├─ stat-card
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ StatCard.tsx
│  │  │  │  ├─ StatCardHeader.tsx
│  │  │  │  ├─ StatCardHint.tsx
│  │  │  │  └─ StatCardValue.tsx
│  │  │  └─ StatTile.tsx
│  │  ├─ HomeView.tsx
│  │  ├─ hooks
│  │  │  └─ useHomeStats.ts
│  │  ├─ lib
│  │  │  └─ formatWorkoutDate.ts
│  │  └─ ui
│  │     ├─ BodySnapshotCard.tsx
│  │     ├─ GoalJourneyCard.tsx
│  │     ├─ HeroCard.tsx
│  │     ├─ InlineStat.tsx
│  │     ├─ LatestQuestCard.tsx
│  │     ├─ LatestQuestEmptyState.tsx
│  │     └─ LatestQuestGrid.tsx
│  ├─ hydration
│  │  ├─ data
│  │  │  ├─ hydrationRepository.ts
│  │  │  └─ hydrationStorage.ts
│  │  ├─ model
│  │  │  └─ useHydration.ts
│  │  └─ ui
│  │     └─ WaterTracker.tsx
│  ├─ profile
│  │  ├─ data
│  │  │  ├─ profileRepository.ts
│  │  │  └─ profileStorage.ts
│  │  ├─ domain
│  │  │  ├─ calculateBMR.ts
│  │  │  ├─ calculateBodyScore.ts
│  │  │  ├─ calculateGoalProgress.ts
│  │  │  ├─ profile.metrics.ts
│  │  │  └─ signals
│  │  │     └─ workoutSignals.ts
│  │  ├─ engine
│  │  │  └─ profile.reducer.ts
│  │  ├─ model
│  │  │  ├─ profile.types.ts
│  │  │  └─ useProfile.ts
│  │  └─ ui
│  │     ├─ BMIBar.tsx
│  │     ├─ CharacterCard
│  │     │  ├─ CharacterAttributes.tsx
│  │     │  ├─ CharacterBMI.tsx
│  │     │  ├─ CharacterCard.tsx
│  │     │  ├─ CharacterHeader.tsx
│  │     │  ├─ CharacterJourney.tsx
│  │     │  ├─ CharacterScore.tsx
│  │     │  ├─ index.ts
│  │     │  ├─ MiniAttribute.tsx
│  │     │  └─ types.ts
│  │     ├─ GoalCard.tsx
│  │     ├─ ProfileAchievements.tsx
│  │     ├─ ProfileForm.tsx
│  │     ├─ ProfileHero.tsx
│  │     ├─ ProfileSummary.tsx
│  │     └─ ProfileVitals.tsx
│  ├─ profile-onboarding
│  │  ├─ lib
│  │  │  └─ steps.ts
│  │  ├─ model
│  │  │  ├─ onboarding.types.ts
│  │  │  └─ useOnboarding.ts
│  │  └─ ui
│  │     ├─ OnboardingFlow.tsx
│  │     └─ steps
│  │        ├─ ActivityStep.tsx
│  │        ├─ BodyStep.tsx
│  │        ├─ FinishStep.tsx
│  │        ├─ GoalStep.tsx
│  │        └─ TargetStep.tsx
│  ├─ progress
│  │  ├─ domain
│  │  │  ├─ getBestTrainingDay.ts
│  │  │  ├─ progressDerived.ts
│  │  │  └─ progressSummary.ts
│  │  ├─ lib
│  │  │  └─ coach.ts
│  │  ├─ model
│  │  │  └─ useProgressData.ts
│  │  ├─ ProgressView.tsx
│  │  ├─ repository
│  │  │  └─ progressRepository.ts
│  │  └─ ui
│  │     ├─ Heatmap
│  │     │  ├─ HeatmapCell.tsx
│  │     │  ├─ HeatmapGrid.tsx
│  │     │  └─ index.tsx
│  │     ├─ InsightCards
│  │     │  ├─ CoachCard.tsx
│  │     │  ├─ getInsightIcon.tsx
│  │     │  ├─ index.tsx
│  │     │  ├─ InsightItem.tsx
│  │     │  └─ InsightList.tsx
│  │     ├─ MuscleBalance
│  │     │  ├─ Bar.tsx
│  │     │  └─ index.tsx
│  │     ├─ ProgressChart
│  │     │  ├─ ChartHeader.tsx
│  │     │  ├─ ChartMetrics.tsx
│  │     │  ├─ index.tsx
│  │     │  └─ TrendAreaChart.tsx
│  │     ├─ ProgressSummaryHero
│  │     │  ├─ HeroXPBar.tsx
│  │     │  └─ index.tsx
│  │     ├─ StatsOverview
│  │     │  ├─ DominantCard.tsx
│  │     │  ├─ index.tsx
│  │     │  ├─ RepsCard.tsx
│  │     │  ├─ StatCard.tsx
│  │     │  ├─ StreakCard.tsx
│  │     │  ├─ TrendCard.tsx
│  │     │  └─ WorkCard.tsx
│  │     └─ WeeklyBreakdown.tsx
│  ├─ workout
│  │  ├─ data
│  │  │  ├─ storage.ts
│  │  │  └─ workoutRepository.ts
│  │  ├─ domain
│  │  │  ├─ getWorkoutPreview.ts
│  │  │  ├─ sortWorkouts.ts
│  │  │  ├─ workoutAnalytics.ts
│  │  │  ├─ workoutLevel.ts
│  │  │  ├─ workoutProgress.ts
│  │  │  ├─ workoutRank.ts
│  │  │  ├─ workoutStats.ts
│  │  │  ├─ workoutStreak.ts
│  │  │  ├─ workoutStrength.ts
│  │  │  └─ workoutXP.ts
│  │  ├─ hooks
│  │  │  └─ useWorkouts.ts
│  │  ├─ index.ts
│  │  ├─ model
│  │  │  ├─ workout.types.ts
│  │  │  └─ workoutService.ts
│  │  ├─ ui
│  │  │  ├─ EmptyWorkoutState.tsx
│  │  │  ├─ OpenLogButton.tsx
│  │  │  ├─ SaveWorkoutButton.tsx
│  │  │  ├─ WorkoutForm.tsx
│  │  │  ├─ WorkoutHub.tsx
│  │  │  └─ WorkoutList.tsx
│  │  └─ WorkoutView.tsx
│  └─ workout-log
│     ├─ index.ts
│     ├─ lib
│     │  ├─ formatters.ts
│     │  └─ workoutLog.ts
│     ├─ model
│     │  └─ useWorkoutLog.ts
│     └─ ui
│        ├─ StatChip.tsx
│        ├─ WorkoutCard.tsx
│        ├─ WorkoutLogPage.tsx
│        ├─ WorkoutLogsSheet.tsx
│        └─ WorkoutSkeleton.tsx
├─ lib
│  └─ utils.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ icons
│  │  ├─ dips.svg
│  │  ├─ pull-up.svg
│  │  ├─ push-up.svg
│  │  └─ squat.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ shared
│  ├─ animations
│  │  ├─ fadeUp.ts
│  │  └─ pageTransition.ts
│  ├─ api
│  │  ├─ client.ts
│  │  ├─ config.ts
│  │  ├─ index.ts
│  │  ├─ types.ts
│  │  └─ v1
│  │     ├─ exercise.ts
│  │     ├─ hydration.ts
│  │     ├─ index.ts
│  │     ├─ profile.ts
│  │     └─ workout.ts
│  ├─ config
│  │  ├─ navigation.ts
│  │  └─ routeIcons.ts
│  ├─ hooks
│  │  └─ useScrollRestoration.ts
│  ├─ icons
│  │  └─ icon-mapper.ts
│  ├─ lib
│  │  └─ navigation
│  │     ├─ initSwipeNavigation.ts
│  │     ├─ navigationEngine.ts
│  │     └─ types.ts
│  ├─ storage
│  │  └─ localStorage.ts
│  └─ ui
│     ├─ BottomNavigation.tsx
│     ├─ EmptyState.tsx
│     ├─ Icon.tsx
│     ├─ NumberField.tsx
│     ├─ PageContainer.tsx
│     ├─ PageHeader.tsx
│     ├─ ProgressIndicator.tsx
│     ├─ Section.tsx
│     └─ SectionHeader.tsx
└─ tsconfig.json

```
```
body-os
├─ AGENTS.md
├─ app
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ onboarding
│  │  └─ page.tsx
│  ├─ page.tsx
│  ├─ profile
│  │  └─ page.tsx
│  ├─ progress
│  │  └─ page.tsx
│  ├─ providers
│  │  ├─ AppGate.tsx
│  │  ├─ AppHeader.tsx
│  │  ├─ AppProviders.tsx
│  │  └─ AppShell.tsx
│  ├─ settings
│  │  └─ page.tsx
│  └─ workout
│     ├─ exercises
│     │  ├─ page.tsx
│     │  └─ [type]
│     │     ├─ page.tsx
│     │     └─ session
│     │        └─ [dayIndex]
│     │           └─ page.tsx
│     ├─ legacy
│     │  └─ page.tsx
│     └─ page.tsx
├─ CLAUDE.md
├─ components
│  └─ ui
│     ├─ badge.tsx
│     ├─ button.tsx
│     ├─ card.tsx
│     ├─ input.tsx
│     ├─ separator.tsx
│     └─ tabs.tsx
├─ components.json
├─ eslint.config.mjs
├─ features
│  ├─ daily-state
│  │  ├─ lib
│  │  │  ├─ goals.ts
│  │  │  ├─ streak.ts
│  │  │  ├─ water.ts
│  │  │  └─ workout.ts
│  │  └─ model
│  │     ├─ dailyState.types.ts
│  │     └─ useDailyState.ts
│  ├─ exercise
│  │  ├─ api
│  │  │  └─ exerciseApi.ts
│  │  ├─ data
│  │  │  ├─ exerciseRepository.ts
│  │  │  └─ exerciseStorage.ts
│  │  ├─ domain
│  │  │  ├─ exerciseEngine.ts
│  │  │  ├─ generateProgram.ts
│  │  │  └─ progression.ts
│  │  ├─ model
│  │  │  ├─ exercise.config.ts
│  │  │  ├─ exercise.routes.ts
│  │  │  ├─ exercise.types.ts
│  │  │  └─ useExerciseStore.ts
│  │  └─ ui
│  │     ├─ ExerciseHub.tsx
│  │     ├─ ExercisePlan.tsx
│  │     ├─ ExerciseScreen.tsx
│  │     ├─ ExerciseSessionScreen.tsx
│  │     └─ ExerciseTestMax.tsx
│  ├─ home
│  │  ├─ components
│  │  │  ├─ stat-card
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ StatCard.tsx
│  │  │  │  ├─ StatCardHeader.tsx
│  │  │  │  ├─ StatCardHint.tsx
│  │  │  │  └─ StatCardValue.tsx
│  │  │  └─ StatTile.tsx
│  │  ├─ HomeView.tsx
│  │  ├─ hooks
│  │  │  └─ useHomeStats.ts
│  │  ├─ lib
│  │  │  └─ formatWorkoutDate.ts
│  │  └─ ui
│  │     ├─ BodySnapshotCard.tsx
│  │     ├─ GoalJourneyCard.tsx
│  │     ├─ HeroCard.tsx
│  │     ├─ InlineStat.tsx
│  │     ├─ LatestQuestCard.tsx
│  │     ├─ LatestQuestEmptyState.tsx
│  │     └─ LatestQuestGrid.tsx
│  ├─ hydration
│  │  ├─ api
│  │  │  └─ hydrationApi.ts
│  │  ├─ data
│  │  │  ├─ hydrationRepository.ts
│  │  │  └─ hydrationStorage.ts
│  │  ├─ model
│  │  │  └─ useHydration.ts
│  │  └─ ui
│  │     └─ WaterTracker.tsx
│  ├─ profile
│  │  ├─ api
│  │  │  └─ profileApi.ts
│  │  ├─ data
│  │  │  ├─ profileRepository.ts
│  │  │  └─ profileStorage.ts
│  │  ├─ domain
│  │  │  ├─ calculateBMR.ts
│  │  │  ├─ calculateBodyScore.ts
│  │  │  ├─ calculateGoalProgress.ts
│  │  │  ├─ profile.metrics.ts
│  │  │  └─ signals
│  │  │     └─ workoutSignals.ts
│  │  ├─ engine
│  │  │  └─ profile.reducer.ts
│  │  ├─ model
│  │  │  ├─ profile.types.ts
│  │  │  └─ useProfile.ts
│  │  └─ ui
│  │     ├─ BMIBar.tsx
│  │     ├─ CharacterCard
│  │     │  ├─ CharacterAttributes.tsx
│  │     │  ├─ CharacterBMI.tsx
│  │     │  ├─ CharacterCard.tsx
│  │     │  ├─ CharacterHeader.tsx
│  │     │  ├─ CharacterJourney.tsx
│  │     │  ├─ CharacterScore.tsx
│  │     │  ├─ index.ts
│  │     │  ├─ MiniAttribute.tsx
│  │     │  └─ types.ts
│  │     ├─ GoalCard.tsx
│  │     ├─ ProfileAchievements.tsx
│  │     ├─ ProfileForm.tsx
│  │     ├─ ProfileHero.tsx
│  │     ├─ ProfileSummary.tsx
│  │     └─ ProfileVitals.tsx
│  ├─ profile-onboarding
│  │  ├─ lib
│  │  │  └─ steps.ts
│  │  ├─ model
│  │  │  ├─ onboarding.types.ts
│  │  │  └─ useOnboarding.ts
│  │  └─ ui
│  │     ├─ OnboardingFlow.tsx
│  │     └─ steps
│  │        ├─ ActivityStep.tsx
│  │        ├─ BodyStep.tsx
│  │        ├─ FinishStep.tsx
│  │        ├─ GoalStep.tsx
│  │        └─ TargetStep.tsx
│  ├─ progress
│  │  ├─ domain
│  │  │  ├─ getBestTrainingDay.ts
│  │  │  ├─ progressDerived.ts
│  │  │  └─ progressSummary.ts
│  │  ├─ lib
│  │  │  └─ coach.ts
│  │  ├─ model
│  │  │  └─ useProgressData.ts
│  │  ├─ ProgressView.tsx
│  │  ├─ repository
│  │  │  └─ progressRepository.ts
│  │  └─ ui
│  │     ├─ Heatmap
│  │     │  ├─ HeatmapCell.tsx
│  │     │  ├─ HeatmapGrid.tsx
│  │     │  └─ index.tsx
│  │     ├─ InsightCards
│  │     │  ├─ CoachCard.tsx
│  │     │  ├─ getInsightIcon.tsx
│  │     │  ├─ index.tsx
│  │     │  ├─ InsightItem.tsx
│  │     │  └─ InsightList.tsx
│  │     ├─ MuscleBalance
│  │     │  ├─ Bar.tsx
│  │     │  └─ index.tsx
│  │     ├─ ProgressChart
│  │     │  ├─ ChartHeader.tsx
│  │     │  ├─ ChartMetrics.tsx
│  │     │  ├─ index.tsx
│  │     │  └─ TrendAreaChart.tsx
│  │     ├─ ProgressSummaryHero
│  │     │  ├─ HeroXPBar.tsx
│  │     │  └─ index.tsx
│  │     ├─ StatsOverview
│  │     │  ├─ DominantCard.tsx
│  │     │  ├─ index.tsx
│  │     │  ├─ RepsCard.tsx
│  │     │  ├─ StatCard.tsx
│  │     │  ├─ StreakCard.tsx
│  │     │  ├─ TrendCard.tsx
│  │     │  └─ WorkCard.tsx
│  │     └─ WeeklyBreakdown.tsx
│  ├─ workout
│  │  ├─ api
│  │  │  └─ workoutApi.ts
│  │  ├─ data
│  │  │  ├─ storage.ts
│  │  │  └─ workoutRepository.ts
│  │  ├─ domain
│  │  │  ├─ getWorkoutPreview.ts
│  │  │  ├─ sortWorkouts.ts
│  │  │  ├─ workoutAnalytics.ts
│  │  │  ├─ workoutLevel.ts
│  │  │  ├─ workoutProgress.ts
│  │  │  ├─ workoutRank.ts
│  │  │  ├─ workoutStats.ts
│  │  │  ├─ workoutStreak.ts
│  │  │  ├─ workoutStrength.ts
│  │  │  └─ workoutXP.ts
│  │  ├─ hooks
│  │  │  └─ useWorkouts.ts
│  │  ├─ index.ts
│  │  ├─ model
│  │  │  ├─ workout.types.ts
│  │  │  └─ workoutService.ts
│  │  ├─ ui
│  │  │  ├─ EmptyWorkoutState.tsx
│  │  │  ├─ OpenLogButton.tsx
│  │  │  ├─ SaveWorkoutButton.tsx
│  │  │  ├─ WorkoutForm.tsx
│  │  │  ├─ WorkoutHub.tsx
│  │  │  └─ WorkoutList.tsx
│  │  └─ WorkoutView.tsx
│  └─ workout-log
│     ├─ index.ts
│     ├─ lib
│     │  ├─ formatters.ts
│     │  └─ workoutLog.ts
│     ├─ model
│     │  └─ useWorkoutLog.ts
│     └─ ui
│        ├─ StatChip.tsx
│        ├─ WorkoutCard.tsx
│        ├─ WorkoutLogPage.tsx
│        ├─ WorkoutLogsSheet.tsx
│        └─ WorkoutSkeleton.tsx
├─ lib
│  └─ utils.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ icons
│  │  ├─ dips.svg
│  │  ├─ pull-up.svg
│  │  ├─ push-up.svg
│  │  └─ squat.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ shared
│  ├─ animations
│  │  ├─ fadeUp.ts
│  │  └─ pageTransition.ts
│  ├─ api
│  │  ├─ client.ts
│  │  ├─ config.ts
│  │  ├─ index.ts
│  │  ├─ types.ts
│  │  └─ v1
│  │     ├─ exercise.ts
│  │     ├─ hydration.ts
│  │     ├─ index.ts
│  │     ├─ profile.ts
│  │     └─ workout.ts
│  ├─ config
│  │  ├─ navigation.ts
│  │  └─ routeIcons.ts
│  ├─ hooks
│  │  └─ useScrollRestoration.ts
│  ├─ icons
│  │  └─ icon-mapper.ts
│  ├─ lib
│  │  └─ navigation
│  │     ├─ initSwipeNavigation.ts
│  │     ├─ navigationEngine.ts
│  │     └─ types.ts
│  ├─ storage
│  │  └─ localStorage.ts
│  └─ ui
│     ├─ BottomNavigation.tsx
│     ├─ EmptyState.tsx
│     ├─ Icon.tsx
│     ├─ NumberField.tsx
│     ├─ PageContainer.tsx
│     ├─ PageHeader.tsx
│     ├─ ProgressIndicator.tsx
│     ├─ Section.tsx
│     └─ SectionHeader.tsx
└─ tsconfig.json

```