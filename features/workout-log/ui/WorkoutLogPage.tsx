// features/workout-log/ui/WorkoutLogPage.tsx
"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { WorkoutCard } from "./WorkoutCard";
import { WorkoutSkeleton } from "./WorkoutSkeleton";

import {
  useWorkoutLog,
  INITIAL_LIMIT,
  getWorkoutNumber,
} from "@/features/workout-log";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function WorkoutLogPage() {
  const [expanded, setExpanded] =
    useState(false);

  const {
    visible,
    total,
    totalXP,
    loading,
  } = useWorkoutLog(expanded);

  return (
    <div className="mx-auto flex h-dvh max-w-md flex-col">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="shrink-0 space-y-1 p-4 text-center"
      >
        <h1 className="text-2xl font-bold text-foreground">
          Workout Log
        </h1>

        <p className="text-sm text-muted-foreground">
          Track progress over time
        </p>
      </motion.div>

      {!loading && (
        <div className="mx-4 mb-3 flex items-center justify-between rounded-xl border border-white/10 bg-background/80 px-4 py-3 backdrop-blur">
          <div>
            <p className="text-xs text-muted-foreground">
              Sessions
            </p>

            <p className="text-sm font-semibold">
              {total}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-muted-foreground">
              Total XP
            </p>

            <p className="text-sm font-bold tabular-nums text-violet-400">
              +{totalXP}
            </p>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto px-4 pb-[calc(var(--bottom-nav-height)+env(safe-area-inset-bottom)+32px)]">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
          {loading ? (
            <WorkoutSkeleton />
          ) : visible.length === 0 ? (
            <div className="p-6 text-center text-sm text-muted-foreground">
              No workouts yet
            </div>
          ) : (
            visible.map(
              (workout, index) => (
                <WorkoutCard
                  key={workout.id}
                  compact
                  workout={workout}
                  workoutNumber={getWorkoutNumber(
                    total,
                    index,
                  )}
                />
              ),
            )
          )}

          {!loading &&
            total >
              INITIAL_LIMIT && (
              <button
                onClick={() =>
                  setExpanded(
                    (v) => !v,
                  )
                }
                className="w-full border-t border-white/10 py-3 text-sm text-violet-400 transition hover:bg-white/5"
              >
                {expanded
                  ? "Show less"
                  : `Show all (${total})`}
              </button>
            )}
        </div>
      </div>
    </div>
  );
}