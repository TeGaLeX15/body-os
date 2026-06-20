"use client";

import { motion, AnimatePresence } from "framer-motion";

import StatsOverview from "@/features/progress/ui/StatsOverview";
import ProgressChart from "@/features/progress/ui/ProgressChart";
import InsightCards from "@/features/progress/ui/InsightCards";
import WeeklyBreakdown from "@/features/progress/ui/WeeklyBreakdown";
import MuscleBalance from "@/features/progress/ui/MuscleBalance";
import Heatmap from "@/features/progress/ui/Heatmap";
import { getWorkouts } from "@/shared/lib/storage";

export default function ProgressPage() {
  const workouts = getWorkouts();
  const total = workouts.length;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35 }}
        className="mx-auto w-full max-w-md px-4 pb-24 space-y-4"
      >
        {/* HEADER */}
        <div className="space-y-1">
          <h1 className="text-lg font-bold">Progress</h1>
          <p className="text-xs text-muted-foreground">
            {total} sessions • analytics engine
          </p>
        </div>

        {/* CORE */}
        <StatsOverview />

        {/* INSIGHTS (NEW CORE FEATURE) */}
        <InsightCards />

        {/* WEEK + BALANCE */}
        <div className="grid grid-cols-2 gap-2">
          <WeeklyBreakdown />
          <MuscleBalance />
        </div>

        {/* CHART */}
        <ProgressChart />

        {/* HEATMAP */}
        <Heatmap />
      </motion.div>
    </AnimatePresence>
  );
}