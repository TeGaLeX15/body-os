"use client";

import { motion, AnimatePresence } from "framer-motion";
import StatsOverview from "@/features/progress/ui/StatsOverview";
import InsightCards from "@/features/progress/ui/InsightCards";
import WeeklyBreakdown from "@/features/progress/ui/WeeklyBreakdown";
import MuscleBalance from "@/features/progress/ui/MuscleBalance";
import ProgressChart from "@/features/progress/ui/ProgressChart";
import Heatmap from "@/features/progress/ui/Heatmap";

import { useProgressData } from "@/features/progress/model/useProgressData";

/* ---------------- HERO ---------------- */


function ProgressSummaryHero({ total }: { total: number }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 space-y-1">
      <p className="text-[11px] uppercase tracking-wider text-white/40">
        Training overview
      </p>

      <p className="text-sm font-semibold text-white">
        {total === 0
          ? "No training data yet"
          : `${total} training sessions tracked`}
      </p>

      <p className="text-xs text-white/60 leading-5">
        Your progress is being analyzed across strength, balance and consistency.
      </p>
    </div>
  );
}

/* ---------------- PAGE ---------------- */

export default function ProgressPage() {
  const { workouts, total } = useProgressData();

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
          <p className="text-xs text-white/50">
            Analytics dashboard • strength tracking
          </p>
        </div>

        {/* HERO */}
        <ProgressSummaryHero total={total} />

        {/* CORE */}
        {/* CORE */}
        <StatsOverview workouts={workouts} />

        {/* INSIGHTS */}
        <InsightCards workouts={workouts} />




        {/* STRUCTURE */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <MuscleBalance workouts={workouts} />
          <WeeklyBreakdown workouts={workouts} />

        </div>


        {/* TREND */}
        <ProgressChart workouts={workouts} />

        {/* HEATMAP */}
        <Heatmap workouts={workouts} />


      </motion.div>
    </AnimatePresence>
  );
}