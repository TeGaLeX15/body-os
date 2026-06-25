// features/home/view/HomeView.tsx
"use client";

import { motion } from "framer-motion";

import { HeroCard } from "@/features/home/ui/HeroCard";
import { LatestQuestCard } from "@/features/home/ui/LatestQuestCard";
import { StatTile } from "@/features/home/components/StatTile";

import { PageContainer } from "@/shared/ui/PageContainer";
import { PageHeader } from "@/shared/ui/PageHeader";
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

  level: number;
  currentXP: number;
  xpToNextLevel: number;
};

export function HomeView({
  streak,
  strength,
  weekly,
  pr,
  lastWorkout,
  level,
  currentXP,
  xpToNextLevel,
}: Props) {
  return (
    <PageContainer>
      <motion.div {...pageTransition}>
        <Section>
          <PageHeader
            title="BODY OS"
            description="Train • Progress • Evolve"
          />
        </Section>

        <Section>
          <SectionHeader
            icon="👤"
            title="Athlete"
            description="Your current level and progression."
          />

          <div className="mt-3">
            <HeroCard
              level={level}
              xp={currentXP}
              xpMax={xpToNextLevel}
            />
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