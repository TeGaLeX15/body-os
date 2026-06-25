This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
body-os
├─ AGENTS.md
├─ app
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ progress
│  │  └─ page.tsx
│  ├─ providers
│  │  ├─ AppProviders.tsx
│  │  └─ AppShell.tsx
│  ├─ settings
│  │  └─ page.tsx
│  └─ workout
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
│  ├─ home
│  │  ├─ components
│  │  │  ├─ stat-card
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ StatCard.tsx
│  │  │  │  ├─ StatCardHeader.tsx
│  │  │  │  ├─ StatCardHint.tsx
│  │  │  │  └─ StatCardValue.tsx
│  │  │  └─ StatTile.tsx
│  │  ├─ hooks
│  │  │  └─ useHomeStats.ts
│  │  ├─ lib
│  │  │  ├─ formatWorkoutDate.ts
│  │  │  ├─ getLastWorkout.ts
│  │  │  ├─ level.ts
│  │  │  └─ xp.ts
│  │  ├─ ui
│  │  │  ├─ HeroCard.tsx
│  │  │  ├─ InlineStat.tsx
│  │  │  ├─ LatestQuestCard.tsx
│  │  │  ├─ LatestQuestEmptyState.tsx
│  │  │  └─ LatestQuestGrid.tsx
│  │  └─ view
│  │     └─ HomeView.tsx
│  ├─ progress
│  │  ├─ lib
│  │  │  ├─ analytics.ts
│  │  │  ├─ groupInsights.ts
│  │  │  ├─ heatmap.ts
│  │  │  ├─ insightEngine.ts
│  │  │  └─ stats.ts
│  │  ├─ model
│  │  │  └─ useProgressData.ts
│  │  ├─ repository
│  │  │  └─ progressRepository.ts
│  │  └─ ui
│  │     ├─ Heatmap.tsx
│  │     ├─ InsightCards.tsx
│  │     ├─ MuscleBalance.tsx
│  │     ├─ MuscleBalanceCard.tsx
│  │     ├─ ProgressChart.tsx
│  │     ├─ ProgressSummaryHero.tsx
│  │     ├─ ProgressView.tsx
│  │     ├─ StatCard.tsx
│  │     ├─ StatsOverview.tsx
│  │     └─ WeeklyBreakdown.tsx
│  ├─ workout
│  │  ├─ data
│  │  │  ├─ storage.ts
│  │  │  └─ workoutRepository.ts
│  │  ├─ domain
│  │  │  ├─ getWorkoutPreview.ts
│  │  │  └─ sortWorkouts.ts
│  │  ├─ hooks
│  │  │  └─ useWorkouts.ts
│  │  ├─ lib
│  │  │  ├─ stats.ts
│  │  │  ├─ streak.ts
│  │  │  └─ strengthIndex.ts
│  │  ├─ model
│  │  │  ├─ workout.types.ts
│  │  │  └─ workoutService.ts
│  │  └─ ui
│  │     ├─ EmptyWorkoutState.tsx
│  │     ├─ OpenLogButton.tsx
│  │     ├─ SaveWorkoutButton.tsx
│  │     ├─ WorkoutForm.tsx
│  │     └─ WorkoutList.tsx
│  └─ workout-log
│     ├─ lib
│     │  └─ selectors.ts
│     └─ ui
│        ├─ WorkoutFilters.tsx
│        ├─ WorkoutLogHeader.tsx
│        ├─ WorkoutLogPage.tsx
│        ├─ WorkoutLogsSheet.tsx
│        └─ WorkoutRow.tsx
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
│  └─ ui
│     ├─ BottomNavigation.tsx
│     ├─ EmptyState.tsx
│     ├─ Icon.tsx
│     ├─ PageContainer.tsx
│     ├─ PageHeader.tsx
│     └─ Section.tsx
└─ tsconfig.json

```
```
body-os
├─ AGENTS.md
├─ app
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ progress
│  │  └─ page.tsx
│  ├─ providers
│  │  ├─ AppProviders.tsx
│  │  └─ AppShell.tsx
│  ├─ settings
│  │  └─ page.tsx
│  └─ workout
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
│  │  │  ├─ formatWorkoutDate.ts
│  │  │  ├─ getLastWorkout.ts
│  │  │  ├─ level.ts
│  │  │  └─ xp.ts
│  │  ├─ ui
│  │  │  ├─ HeroCard.tsx
│  │  │  ├─ InlineStat.tsx
│  │  │  ├─ LatestQuestCard.tsx
│  │  │  ├─ LatestQuestEmptyState.tsx
│  │  │  └─ LatestQuestGrid.tsx
│  │  └─ view
│  ├─ progress
│  │  ├─ lib
│  │  │  ├─ analytics.ts
│  │  │  ├─ groupInsights.ts
│  │  │  ├─ heatmap.ts
│  │  │  ├─ insightEngine.ts
│  │  │  └─ stats.ts
│  │  ├─ model
│  │  │  └─ useProgressData.ts
│  │  ├─ ProgressView.tsx
│  │  ├─ repository
│  │  │  └─ progressRepository.ts
│  │  └─ ui
│  │     ├─ Heatmap.tsx
│  │     ├─ InsightCards.tsx
│  │     ├─ MuscleBalance.tsx
│  │     ├─ MuscleBalanceCard.tsx
│  │     ├─ ProgressChart.tsx
│  │     ├─ ProgressSummaryHero.tsx
│  │     ├─ ProgressView.tsx
│  │     ├─ StatCard.tsx
│  │     ├─ StatsOverview.tsx
│  │     └─ WeeklyBreakdown.tsx
│  ├─ workout
│  │  ├─ data
│  │  │  ├─ storage.ts
│  │  │  └─ workoutRepository.ts
│  │  ├─ domain
│  │  │  ├─ getWorkoutPreview.ts
│  │  │  └─ sortWorkouts.ts
│  │  ├─ hooks
│  │  │  └─ useWorkouts.ts
│  │  ├─ lib
│  │  │  ├─ stats.ts
│  │  │  ├─ streak.ts
│  │  │  └─ strengthIndex.ts
│  │  ├─ model
│  │  │  ├─ workout.types.ts
│  │  │  └─ workoutService.ts
│  │  ├─ ui
│  │  │  ├─ EmptyWorkoutState.tsx
│  │  │  ├─ OpenLogButton.tsx
│  │  │  ├─ SaveWorkoutButton.tsx
│  │  │  ├─ WorkoutForm.tsx
│  │  │  └─ WorkoutList.tsx
│  │  └─ WorkoutView.tsx
│  └─ workout-log
│     ├─ lib
│     │  └─ selectors.ts
│     └─ ui
│        ├─ WorkoutFilters.tsx
│        ├─ WorkoutLogHeader.tsx
│        ├─ WorkoutLogPage.tsx
│        ├─ WorkoutLogsSheet.tsx
│        └─ WorkoutRow.tsx
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
│  └─ ui
│     ├─ BottomNavigation.tsx
│     ├─ EmptyState.tsx
│     ├─ Icon.tsx
│     ├─ PageContainer.tsx
│     ├─ PageHeader.tsx
│     └─ Section.tsx
└─ tsconfig.json

```
```
body-os
├─ AGENTS.md
├─ app
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ progress
│  │  └─ page.tsx
│  ├─ providers
│  │  ├─ AppProviders.tsx
│  │  └─ AppShell.tsx
│  ├─ settings
│  │  └─ page.tsx
│  └─ workout
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
│  │  │  ├─ formatWorkoutDate.ts
│  │  │  ├─ getLastWorkout.ts
│  │  │  ├─ level.ts
│  │  │  └─ xp.ts
│  │  ├─ ui
│  │  │  ├─ HeroCard.tsx
│  │  │  ├─ InlineStat.tsx
│  │  │  ├─ LatestQuestCard.tsx
│  │  │  ├─ LatestQuestEmptyState.tsx
│  │  │  └─ LatestQuestGrid.tsx
│  │  └─ view
│  ├─ progress
│  │  ├─ lib
│  │  │  ├─ analytics.ts
│  │  │  ├─ groupInsights.ts
│  │  │  ├─ heatmap.ts
│  │  │  ├─ insightEngine.ts
│  │  │  └─ stats.ts
│  │  ├─ model
│  │  │  └─ useProgressData.ts
│  │  ├─ ProgressView.tsx
│  │  ├─ repository
│  │  │  └─ progressRepository.ts
│  │  └─ ui
│  │     ├─ Heatmap.tsx
│  │     ├─ InsightCards.tsx
│  │     ├─ MuscleBalance.tsx
│  │     ├─ MuscleBalanceCard.tsx
│  │     ├─ ProgressChart.tsx
│  │     ├─ ProgressSummaryHero.tsx
│  │     ├─ ProgressView.tsx
│  │     ├─ StatCard.tsx
│  │     ├─ StatsOverview.tsx
│  │     └─ WeeklyBreakdown.tsx
│  ├─ workout
│  │  ├─ data
│  │  │  ├─ storage.ts
│  │  │  └─ workoutRepository.ts
│  │  ├─ domain
│  │  │  ├─ getWorkoutPreview.ts
│  │  │  └─ sortWorkouts.ts
│  │  ├─ hooks
│  │  │  └─ useWorkouts.ts
│  │  ├─ lib
│  │  │  ├─ stats.ts
│  │  │  ├─ streak.ts
│  │  │  └─ strengthIndex.ts
│  │  ├─ model
│  │  │  ├─ workout.types.ts
│  │  │  └─ workoutService.ts
│  │  ├─ ui
│  │  │  ├─ EmptyWorkoutState.tsx
│  │  │  ├─ OpenLogButton.tsx
│  │  │  ├─ SaveWorkoutButton.tsx
│  │  │  ├─ WorkoutForm.tsx
│  │  │  └─ WorkoutList.tsx
│  │  └─ WorkoutView.tsx
│  └─ workout-log
│     ├─ lib
│     │  └─ selectors.ts
│     └─ ui
│        ├─ WorkoutFilters.tsx
│        ├─ WorkoutLogHeader.tsx
│        ├─ WorkoutLogPage.tsx
│        ├─ WorkoutLogsSheet.tsx
│        └─ WorkoutRow.tsx
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
│  └─ ui
│     ├─ BottomNavigation.tsx
│     ├─ EmptyState.tsx
│     ├─ Icon.tsx
│     ├─ PageContainer.tsx
│     ├─ PageHeader.tsx
│     └─ Section.tsx
└─ tsconfig.json

```
```
body-os
├─ AGENTS.md
├─ app
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ progress
│  │  └─ page.tsx
│  ├─ providers
│  │  ├─ AppProviders.tsx
│  │  └─ AppShell.tsx
│  ├─ settings
│  │  └─ page.tsx
│  └─ workout
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
│  │  │  ├─ formatWorkoutDate.ts
│  │  │  └─ getLastWorkout.ts
│  │  └─ ui
│  │     ├─ HeroCard.tsx
│  │     ├─ InlineStat.tsx
│  │     ├─ LatestQuestCard.tsx
│  │     ├─ LatestQuestEmptyState.tsx
│  │     └─ LatestQuestGrid.tsx
│  ├─ progress
│  │  ├─ lib
│  │  │  ├─ analytics.ts
│  │  │  ├─ groupInsights.ts
│  │  │  ├─ heatmap.ts
│  │  │  ├─ insightEngine.ts
│  │  │  └─ stats.ts
│  │  ├─ model
│  │  │  └─ useProgressData.ts
│  │  ├─ ProgressView.tsx
│  │  ├─ repository
│  │  │  └─ progressRepository.ts
│  │  └─ ui
│  │     ├─ Heatmap.tsx
│  │     ├─ InsightCards.tsx
│  │     ├─ MuscleBalance.tsx
│  │     ├─ MuscleBalanceCard.tsx
│  │     ├─ ProgressChart.tsx
│  │     ├─ ProgressSummaryHero.tsx
│  │     ├─ ProgressView.tsx
│  │     ├─ StatCard.tsx
│  │     ├─ StatsOverview.tsx
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
│  │  │  ├─ workoutStats.ts
│  │  │  ├─ workoutStreak.ts
│  │  │  ├─ workoutStrength.ts
│  │  │  └─ workoutXP.ts
│  │  ├─ hooks
│  │  │  └─ useWorkouts.ts
│  │  ├─ model
│  │  │  ├─ workout.types.ts
│  │  │  └─ workoutService.ts
│  │  ├─ ui
│  │  │  ├─ EmptyWorkoutState.tsx
│  │  │  ├─ OpenLogButton.tsx
│  │  │  ├─ SaveWorkoutButton.tsx
│  │  │  ├─ WorkoutForm.tsx
│  │  │  └─ WorkoutList.tsx
│  │  └─ WorkoutView.tsx
│  └─ workout-log
│     └─ ui
│        ├─ WorkoutLogPage.tsx
│        ├─ WorkoutLogsSheet.tsx
│        └─ WorkoutRow.tsx
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
│  └─ ui
│     ├─ BottomNavigation.tsx
│     ├─ EmptyState.tsx
│     ├─ Icon.tsx
│     ├─ PageContainer.tsx
│     ├─ PageHeader.tsx
│     └─ Section.tsx
└─ tsconfig.json

```
```
body-os
├─ AGENTS.md
├─ app
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ progress
│  │  └─ page.tsx
│  ├─ providers
│  │  ├─ AppProviders.tsx
│  │  └─ AppShell.tsx
│  ├─ settings
│  │  └─ page.tsx
│  └─ workout
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
│  │  │  ├─ formatWorkoutDate.ts
│  │  │  └─ getLastWorkout.ts
│  │  └─ ui
│  │     ├─ HeroCard.tsx
│  │     ├─ InlineStat.tsx
│  │     ├─ LatestQuestCard.tsx
│  │     ├─ LatestQuestEmptyState.tsx
│  │     └─ LatestQuestGrid.tsx
│  ├─ progress
│  │  ├─ lib
│  │  │  └─ coach.ts
│  │  ├─ model
│  │  │  └─ useProgressData.ts
│  │  ├─ ProgressView.tsx
│  │  ├─ repository
│  │  │  └─ progressRepository.ts
│  │  └─ ui
│  │     ├─ Heatmap.tsx
│  │     ├─ InsightCards.tsx
│  │     ├─ MuscleBalance.tsx
│  │     ├─ MuscleBalanceCard.tsx
│  │     ├─ ProgressChart.tsx
│  │     ├─ ProgressSummaryHero.tsx
│  │     ├─ ProgressView.tsx
│  │     ├─ StatCard.tsx
│  │     ├─ StatsOverview.tsx
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
│  │  │  ├─ workoutStats.ts
│  │  │  ├─ workoutStreak.ts
│  │  │  ├─ workoutStrength.ts
│  │  │  └─ workoutXP.ts
│  │  ├─ hooks
│  │  │  └─ useWorkouts.ts
│  │  ├─ model
│  │  │  ├─ workout.types.ts
│  │  │  └─ workoutService.ts
│  │  ├─ ui
│  │  │  ├─ EmptyWorkoutState.tsx
│  │  │  ├─ OpenLogButton.tsx
│  │  │  ├─ SaveWorkoutButton.tsx
│  │  │  ├─ WorkoutForm.tsx
│  │  │  └─ WorkoutList.tsx
│  │  └─ WorkoutView.tsx
│  └─ workout-log
│     └─ ui
│        ├─ WorkoutLogPage.tsx
│        ├─ WorkoutLogsSheet.tsx
│        └─ WorkoutRow.tsx
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
│  └─ ui
│     ├─ BottomNavigation.tsx
│     ├─ EmptyState.tsx
│     ├─ Icon.tsx
│     ├─ PageContainer.tsx
│     ├─ PageHeader.tsx
│     └─ Section.tsx
└─ tsconfig.json

```
```
body-os
├─ AGENTS.md
├─ app
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ progress
│  │  └─ page.tsx
│  ├─ providers
│  │  ├─ AppProviders.tsx
│  │  └─ AppShell.tsx
│  ├─ settings
│  │  └─ page.tsx
│  └─ workout
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
│  │  │  ├─ formatWorkoutDate.ts
│  │  │  └─ getLastWorkout.ts
│  │  └─ ui
│  │     ├─ HeroCard.tsx
│  │     ├─ InlineStat.tsx
│  │     ├─ LatestQuestCard.tsx
│  │     ├─ LatestQuestEmptyState.tsx
│  │     └─ LatestQuestGrid.tsx
│  ├─ progress
│  │  ├─ lib
│  │  │  └─ coach.ts
│  │  ├─ model
│  │  │  └─ useProgressData.ts
│  │  ├─ ProgressView.tsx
│  │  ├─ repository
│  │  │  └─ progressRepository.ts
│  │  └─ ui
│  │     ├─ Heatmap.tsx
│  │     ├─ InsightCards.tsx
│  │     ├─ MuscleBalance.tsx
│  │     ├─ MuscleBalanceCard.tsx
│  │     ├─ ProgressChart.tsx
│  │     ├─ ProgressSummaryHero.tsx
│  │     ├─ ProgressView.tsx
│  │     ├─ StatsOverview.tsx
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
│  │  │  ├─ workoutStats.ts
│  │  │  ├─ workoutStreak.ts
│  │  │  ├─ workoutStrength.ts
│  │  │  └─ workoutXP.ts
│  │  ├─ hooks
│  │  │  └─ useWorkouts.ts
│  │  ├─ model
│  │  │  ├─ workout.types.ts
│  │  │  └─ workoutService.ts
│  │  ├─ ui
│  │  │  ├─ EmptyWorkoutState.tsx
│  │  │  ├─ OpenLogButton.tsx
│  │  │  ├─ SaveWorkoutButton.tsx
│  │  │  ├─ WorkoutForm.tsx
│  │  │  └─ WorkoutList.tsx
│  │  └─ WorkoutView.tsx
│  └─ workout-log
│     └─ ui
│        ├─ WorkoutLogPage.tsx
│        ├─ WorkoutLogsSheet.tsx
│        └─ WorkoutRow.tsx
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
│  └─ ui
│     ├─ BottomNavigation.tsx
│     ├─ EmptyState.tsx
│     ├─ Icon.tsx
│     ├─ PageContainer.tsx
│     ├─ PageHeader.tsx
│     └─ Section.tsx
└─ tsconfig.json

```
```
body-os
├─ AGENTS.md
├─ app
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ progress
│  │  └─ page.tsx
│  ├─ providers
│  │  ├─ AppProviders.tsx
│  │  └─ AppShell.tsx
│  ├─ settings
│  │  └─ page.tsx
│  └─ workout
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
│  │  │  ├─ formatWorkoutDate.ts
│  │  │  └─ getLastWorkout.ts
│  │  └─ ui
│  │     ├─ HeroCard.tsx
│  │     ├─ InlineStat.tsx
│  │     ├─ LatestQuestCard.tsx
│  │     ├─ LatestQuestEmptyState.tsx
│  │     └─ LatestQuestGrid.tsx
│  ├─ progress
│  │  ├─ lib
│  │  │  └─ coach.ts
│  │  ├─ model
│  │  │  └─ useProgressData.ts
│  │  ├─ ProgressView.tsx
│  │  ├─ repository
│  │  │  └─ progressRepository.ts
│  │  └─ ui
│  │     ├─ Heatmap.tsx
│  │     ├─ InsightCards.tsx
│  │     ├─ MuscleBalance.tsx
│  │     ├─ ProgressChart.tsx
│  │     ├─ ProgressSummaryHero.tsx
│  │     ├─ ProgressView.tsx
│  │     ├─ StatsOverview.tsx
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
│  │  │  ├─ workoutStats.ts
│  │  │  ├─ workoutStreak.ts
│  │  │  ├─ workoutStrength.ts
│  │  │  └─ workoutXP.ts
│  │  ├─ hooks
│  │  │  └─ useWorkouts.ts
│  │  ├─ model
│  │  │  ├─ workout.types.ts
│  │  │  └─ workoutService.ts
│  │  ├─ ui
│  │  │  ├─ EmptyWorkoutState.tsx
│  │  │  ├─ OpenLogButton.tsx
│  │  │  ├─ SaveWorkoutButton.tsx
│  │  │  ├─ WorkoutForm.tsx
│  │  │  └─ WorkoutList.tsx
│  │  └─ WorkoutView.tsx
│  └─ workout-log
│     └─ ui
│        ├─ WorkoutLogPage.tsx
│        ├─ WorkoutLogsSheet.tsx
│        └─ WorkoutRow.tsx
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
│  └─ ui
│     ├─ BottomNavigation.tsx
│     ├─ EmptyState.tsx
│     ├─ Icon.tsx
│     ├─ PageContainer.tsx
│     ├─ PageHeader.tsx
│     └─ Section.tsx
└─ tsconfig.json

```
```
body-os
├─ AGENTS.md
├─ app
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ progress
│  │  └─ page.tsx
│  ├─ providers
│  │  ├─ AppProviders.tsx
│  │  └─ AppShell.tsx
│  ├─ settings
│  │  └─ page.tsx
│  └─ workout
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
│  │  │  ├─ formatWorkoutDate.ts
│  │  │  └─ getLastWorkout.ts
│  │  └─ ui
│  │     ├─ HeroCard.tsx
│  │     ├─ InlineStat.tsx
│  │     ├─ LatestQuestCard.tsx
│  │     ├─ LatestQuestEmptyState.tsx
│  │     └─ LatestQuestGrid.tsx
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
│  │     │  ├─ HeroStatCard.tsx
│  │     │  ├─ HeroXPBar.tsx
│  │     │  ├─ index.tsx
│  │     │  └─ LastWorkoutCard.tsx
│  │     ├─ StatsOverview
│  │     │  ├─ DominantCard.tsx
│  │     │  ├─ index.tsx
│  │     │  ├─ StatCard.tsx
│  │     │  ├─ StreakCard.tsx
│  │     │  └─ TrendCard.tsx
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
│  │  │  ├─ workoutStats.ts
│  │  │  ├─ workoutStreak.ts
│  │  │  ├─ workoutStrength.ts
│  │  │  └─ workoutXP.ts
│  │  ├─ hooks
│  │  │  └─ useWorkouts.ts
│  │  ├─ model
│  │  │  ├─ workout.types.ts
│  │  │  └─ workoutService.ts
│  │  ├─ ui
│  │  │  ├─ EmptyWorkoutState.tsx
│  │  │  ├─ OpenLogButton.tsx
│  │  │  ├─ SaveWorkoutButton.tsx
│  │  │  ├─ WorkoutForm.tsx
│  │  │  └─ WorkoutList.tsx
│  │  └─ WorkoutView.tsx
│  └─ workout-log
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
│        ├─ WorkoutRow.tsx
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
│  └─ ui
│     ├─ BottomNavigation.tsx
│     ├─ EmptyState.tsx
│     ├─ Icon.tsx
│     ├─ PageContainer.tsx
│     ├─ PageHeader.tsx
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
│  ├─ page.tsx
│  ├─ progress
│  │  └─ page.tsx
│  ├─ providers
│  │  ├─ AppProviders.tsx
│  │  └─ AppShell.tsx
│  ├─ settings
│  │  └─ page.tsx
│  └─ workout
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
│  │  │  ├─ formatWorkoutDate.ts
│  │  │  └─ getLastWorkout.ts
│  │  └─ ui
│  │     ├─ HeroCard.tsx
│  │     ├─ InlineStat.tsx
│  │     ├─ LatestQuestCard.tsx
│  │     ├─ LatestQuestEmptyState.tsx
│  │     └─ LatestQuestGrid.tsx
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
│  │     │  ├─ HeroStatCard.tsx
│  │     │  ├─ HeroXPBar.tsx
│  │     │  ├─ index.tsx
│  │     │  └─ LastWorkoutCard.tsx
│  │     ├─ StatsOverview
│  │     │  ├─ DominantCard.tsx
│  │     │  ├─ index.tsx
│  │     │  ├─ StatCard.tsx
│  │     │  ├─ StreakCard.tsx
│  │     │  └─ TrendCard.tsx
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
│  │  │  ├─ workoutStats.ts
│  │  │  ├─ workoutStreak.ts
│  │  │  ├─ workoutStrength.ts
│  │  │  └─ workoutXP.ts
│  │  ├─ hooks
│  │  │  └─ useWorkouts.ts
│  │  ├─ model
│  │  │  ├─ workout.types.ts
│  │  │  └─ workoutService.ts
│  │  ├─ ui
│  │  │  ├─ EmptyWorkoutState.tsx
│  │  │  ├─ OpenLogButton.tsx
│  │  │  ├─ SaveWorkoutButton.tsx
│  │  │  ├─ WorkoutForm.tsx
│  │  │  └─ WorkoutList.tsx
│  │  └─ WorkoutView.tsx
│  └─ workout-log
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
│  └─ ui
│     ├─ BottomNavigation.tsx
│     ├─ EmptyState.tsx
│     ├─ Icon.tsx
│     ├─ PageContainer.tsx
│     ├─ PageHeader.tsx
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
│  ├─ page.tsx
│  ├─ progress
│  │  └─ page.tsx
│  ├─ providers
│  │  ├─ AppProviders.tsx
│  │  └─ AppShell.tsx
│  ├─ settings
│  │  └─ page.tsx
│  └─ workout
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
│  │  │  ├─ formatWorkoutDate.ts
│  │  │  └─ getLastWorkout.ts
│  │  └─ ui
│  │     ├─ HeroCard.tsx
│  │     ├─ InlineStat.tsx
│  │     ├─ LatestQuestCard.tsx
│  │     ├─ LatestQuestEmptyState.tsx
│  │     └─ LatestQuestGrid.tsx
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
│  │     │  ├─ HeroStatCard.tsx
│  │     │  ├─ HeroXPBar.tsx
│  │     │  ├─ index.tsx
│  │     │  └─ LastWorkoutCard.tsx
│  │     ├─ StatsOverview
│  │     │  ├─ DominantCard.tsx
│  │     │  ├─ index.tsx
│  │     │  ├─ StatCard.tsx
│  │     │  ├─ StreakCard.tsx
│  │     │  └─ TrendCard.tsx
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
│  └─ ui
│     ├─ BottomNavigation.tsx
│     ├─ EmptyState.tsx
│     ├─ Icon.tsx
│     ├─ PageContainer.tsx
│     ├─ PageHeader.tsx
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
│  ├─ page.tsx
│  ├─ progress
│  │  └─ page.tsx
│  ├─ providers
│  │  ├─ AppProviders.tsx
│  │  └─ AppShell.tsx
│  ├─ settings
│  │  └─ page.tsx
│  └─ workout
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
│  │  │  ├─ formatWorkoutDate.ts
│  │  │  └─ getLastWorkout.ts
│  │  └─ ui
│  │     ├─ HeroCard.tsx
│  │     ├─ InlineStat.tsx
│  │     ├─ LatestQuestCard.tsx
│  │     ├─ LatestQuestEmptyState.tsx
│  │     └─ LatestQuestGrid.tsx
│  ├─ profile
│  │  ├─ data
│  │  │  └─ profileStorage.ts
│  │  ├─ domain
│  │  │  ├─ calculateBMR.ts
│  │  │  ├─ calculateGoalProgress.ts
│  │  │  └─ profileEngine.ts
│  │  ├─ model
│  │  │  ├─ profile.types.ts
│  │  │  └─ useProfile.ts
│  │  └─ ui
│  │     ├─ GoalCard.tsx
│  │     ├─ ProfileForm.tsx
│  │     └─ ProfileSummary.tsx
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
│  │     │  ├─ HeroStatCard.tsx
│  │     │  ├─ HeroXPBar.tsx
│  │     │  ├─ index.tsx
│  │     │  └─ LastWorkoutCard.tsx
│  │     ├─ StatsOverview
│  │     │  ├─ DominantCard.tsx
│  │     │  ├─ index.tsx
│  │     │  ├─ StatCard.tsx
│  │     │  ├─ StreakCard.tsx
│  │     │  └─ TrendCard.tsx
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
│  └─ ui
│     ├─ BottomNavigation.tsx
│     ├─ EmptyState.tsx
│     ├─ Icon.tsx
│     ├─ PageContainer.tsx
│     ├─ PageHeader.tsx
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
│  │  │  ├─ formatWorkoutDate.ts
│  │  │  └─ getLastWorkout.ts
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
│  │  │  └─ hydrationStorage.ts
│  │  ├─ model
│  │  │  └─ useHydration.ts
│  │  └─ ui
│  │     └─ WaterTracker.tsx
│  ├─ profile
│  │  ├─ data
│  │  │  └─ profileStorage.ts
│  │  ├─ domain
│  │  │  ├─ calculateBMR.ts
│  │  │  ├─ calculateGoalProgress.ts
│  │  │  └─ profileEngine.ts
│  │  ├─ model
│  │  │  ├─ profile.types.ts
│  │  │  └─ useProfile.ts
│  │  └─ ui
│  │     ├─ GoalCard.tsx
│  │     ├─ ProfileForm.tsx
│  │     └─ ProfileSummary.tsx
│  ├─ profile-onboarding
│  │  ├─ lib
│  │  │  ├─ steps.ts
│  │  │  └─ validators.ts
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
│  │     │  ├─ HeroStatCard.tsx
│  │     │  ├─ HeroXPBar.tsx
│  │     │  ├─ index.tsx
│  │     │  └─ LastWorkoutCard.tsx
│  │     ├─ StatsOverview
│  │     │  ├─ DominantCard.tsx
│  │     │  ├─ index.tsx
│  │     │  ├─ StatCard.tsx
│  │     │  ├─ StreakCard.tsx
│  │     │  └─ TrendCard.tsx
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