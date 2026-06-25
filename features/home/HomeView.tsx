// features/home/view/HomeView.tsx
"use client";

import { motion } from "framer-motion";

import { LatestQuestCard } from "@/features/home/ui/LatestQuestCard";
import { StatTile } from "@/features/home/components/StatTile";
import { GoalJourneyCard } from "@/features/home/ui/GoalJourneyCard";

import { PageContainer } from "@/shared/ui/PageContainer";
import { Section } from "@/shared/ui/Section";

import { pageTransition } from "@/shared/animations/pageTransition";

import type { WorkoutEntry } from "@/features/workout/model/workout.types";

import {
  Dumbbell,
  Move3D,
  Flame,
  BarChart3,
} from "lucide-react";
import { SectionHeader } from "@/shared/ui/SectionHeader";
import { WaterTracker } from "@/features/hydration/ui/WaterTracker";

type Props = {
  streak: number;
  strength: number;

  weekly: {
    pullups: number;
  };

  pr: {
    pullups: number;
  };

  lastWorkout: WorkoutEntry | null;

  currentWeight: number;
  startWeight: number;
  goalWeight: number;
};

export function HomeView({
  streak,
  strength,
  weekly,
  pr,
  lastWorkout,

  currentWeight,
  startWeight,
  goalWeight,
}: Props) {
  return (
    <PageContainer>
      <motion.div {...pageTransition}>
        <Section>
          <SectionHeader
            icon="🎯"
            title="Goal Journey"
            description="Track progress toward your target."
          />

          <div className="mt-3">
            <GoalJourneyCard
              currentWeight={currentWeight}
              startWeight={startWeight}
              goalWeight={goalWeight}
            />
          </div>
        </Section>

        <Section>
          <SectionHeader
            icon="💧"
            title="Hydration"
            description="Track your daily water intake."
          />

          <div className="mt-3">
            <WaterTracker />
          </div>
        </Section>

        {/* STATS */}
        <Section>
          <SectionHeader
            icon="📊"
            title="Quick Stats"
            description="Current performance overview."
          />

          <div className="mt-3 grid grid-cols-2 gap-3">
            <StatTile
              title="Streak"
              value={streak}
              hint="consistency"
              icon={<Flame size={16} />}
            />

            <StatTile
              title="Strength"
              value={strength}
              hint="index score"
              icon={<Move3D size={16} />}
            />

            <StatTile
              title="Weekly"
              value={weekly.pullups}
              hint="total pull-ups"
              icon={<Dumbbell size={16} />}
            />

            <StatTile
              title="PR"
              value={pr.pullups}
              hint="personal best"
              icon={<BarChart3 size={16} />}
            />
          </div>
        </Section>

        {/* ACTIVITY */}
        <Section>
          <SectionHeader
            icon="🎯"
            title="Latest Activity"
            description="Your most recent workout session."
          />

          <div className="mt-3">
            <LatestQuestCard
              lastWorkout={lastWorkout}
            />
          </div>
        </Section>
      </motion.div>
    </PageContainer>
  );
}