// features/progress/ProgressView.tsx
"use client";

import { motion } from "framer-motion";

import { useProgressData } from "./model/useProgressData";

import { PageContainer } from "@/shared/ui/PageContainer";
import { PageHeader } from "@/shared/ui/PageHeader";
import { Section } from "@/shared/ui/Section";

import { pageTransition } from "@/shared/animations/pageTransition";
import { SectionHeader } from "@/shared/ui/SectionHeader";

import StatsOverview from "./ui/StatsOverview";
import InsightCards from "./ui/InsightCards";
import WeeklyBreakdown from "./ui/WeeklyBreakdown";
import MuscleBalance from "./ui/MuscleBalance";
import ProgressChart from "./ui/ProgressChart";
import Heatmap from "./ui/Heatmap";
import { ProgressSummaryHero } from "./ui/ProgressSummaryHero";

export function ProgressView() {
  const {
    workouts,
    analytics,
    loading,
  } = useProgressData();

  if (loading || !analytics) {
    return null;
  }

  return (
    <PageContainer>
      <motion.div
        {...pageTransition}
        className="space-y-8"
      >
        {/* PAGE HEADER */}
        <Section>
          <PageHeader
            title="Progress Overview"
            description="Track your growth, strength and consistency."
          />
        </Section>

        {/* PROFILE */}
        <Section>
          <SectionHeader
            icon="👤"
            title="Athlete Profile"
            description="Level, strength and current status."
          />

          <div className="mt-3">
            <ProgressSummaryHero analytics={analytics} />
          </div>
        </Section>

        {/* PROGRESS */}
        <Section>
          <SectionHeader
            icon="📈"
            title="Progress"
            description="Track strength growth over time."
          />

          <div className="mt-3 space-y-3">
            <ProgressChart analytics={analytics} />
            <StatsOverview analytics={analytics} />
          </div>
        </Section>

        {/* INSIGHTS */}
        <Section>
          <SectionHeader
            icon="🧠"
            title="Insights"
            description="What your training data reveals."
          />

          <div className="mt-3">
            <InsightCards analytics={analytics} />
          </div>
        </Section>

        {/* BALANCE */}
        <Section>
          <SectionHeader
            icon="⚖️"
            title="Training Balance"
            description="Distribution of volume and muscle groups."
          />

          <div className="mt-3 space-y-3">
            <WeeklyBreakdown analytics={analytics} />
            <MuscleBalance analytics={analytics} />
          </div>
        </Section>

        {/* ACTIVITY */}
        <Section>
          <SectionHeader
            icon="🔥"
            title="Activity"
            description="Consistency across recent weeks."
          />

          <div className="mt-3">
            <Heatmap workouts={workouts} />
          </div>
        </Section>
      </motion.div>
    </PageContainer>
  );
}