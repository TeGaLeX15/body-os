// features/progress/ui/ProgressSummaryHero/index.tsx
"use client";

import type { WorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";
import { Card } from "@/components/ui/card";

import { buildHeroStats } from "../../domain/buildHeroStats";

import HeroXPBar from "./HeroXPBar";

type Props = {
  analytics: WorkoutAnalytics;
};

export function ProgressSummaryHero({ analytics }: Props) {
  const hero = buildHeroStats(analytics);

  return (
    <Card variant="glow" className="space-y-4">
      {/* HEADER */}
      <div>
        <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
          Athlete Profile
        </p>

        <h2 className="text-xl font-bold">Level {hero.level}</h2>
      </div>

      {/* XP */}
      <HeroXPBar
        currentXP={hero.currentXP}
        xpToNextLevel={hero.xpToNextLevel}
        totalXP={hero.xp}
        progress={hero.levelProgress}
      />
    </Card>
  );
}
