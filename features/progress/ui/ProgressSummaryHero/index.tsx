// features/progress/ui/ProgressSummaryHero/index.tsx
"use client";

import type { WorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";

import { buildHeroStats } from "../../domain/buildHeroStats";

import HeroXPBar from "./HeroXPBar";
import HeroStatCard from "./HeroStatCard";
import LastWorkoutCard from "./LastWorkoutCard";

type Props = {
  analytics: WorkoutAnalytics;
};

export function ProgressSummaryHero({
  analytics,
}: Props) {
  const hero = buildHeroStats(analytics);

  return (
    <div className="rounded-2xl border border-border bg-card p-4 space-y-4">
      {/* HEADER */}
      <div>
        <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
          Athlete Profile
        </p>

        <h2 className="text-xl font-bold">
          Level {hero.level}
        </h2>
      </div>

      {/* XP */}
      <HeroXPBar
        currentXP={hero.currentXP}
        xpToNextLevel={hero.xpToNextLevel}
        totalXP={hero.xp}
        progress={hero.levelProgress}
      />

      {/* STATS */}
      <div className="grid grid-cols-2 gap-3">
        <HeroStatCard
          label="Strength"
          value={hero.strength}
        />

        <HeroStatCard
          label="Streak"
          value={`${hero.streak}d`}
        />
      </div>

      {/* LAST WORKOUT */}
      <LastWorkoutCard
        date={hero.lastWorkout?.date}
      />
    </div>
  );
}