"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import WorkoutForm from "@/features/workout/ui/WorkoutForm";
import WorkoutList from "@/features/workout/ui/WorkoutList";

import { getWorkouts } from "@/shared/lib/storage";
import type { WorkoutEntry } from "@/features/workout/model/workout.types";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function WorkoutPage() {
  const [workouts, setWorkouts] = useState<WorkoutEntry[]>([]);
  const [expanded, setExpanded] = useState(false);

  const refresh = () => setWorkouts(getWorkouts());

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refresh();
  }, []);

  // 🔥 сортировка: новые сверху
  const sortedWorkouts = useMemo(() => {
    return [...workouts].sort(
      (a, b) => +new Date(b.date) - +new Date(a.date)
    );
  }, [workouts]);

  // 🔥 ограничение 5 + expand
  const visibleWorkouts = expanded
    ? sortedWorkouts
    : sortedWorkouts.slice(0, 5);

  const isEmpty = workouts.length === 0;

  return (
    <div className="mx-auto max-w-md space-y-6 p-4 pb-28">
      {/* HEADER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.25 }}
        className="space-y-1 text-center"
      >
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Workout Log
        </h1>

        <p className="text-sm text-muted-foreground">
          Track every rep. Build your strength.
        </p>
      </motion.div>

      {/* FORM */}
      <WorkoutForm onSaved={refresh} />

      {/* LIST */}
      {!isEmpty ? (
        <>
          <WorkoutList
            workouts={visibleWorkouts}
            totalCount={workouts.length}
          />

          {workouts.length > 5 && (
            <div className="flex justify-center pt-2">
              <button
                onClick={() => setExpanded((v) => !v)}
                className="text-sm text-violet-400"
              >
                {expanded
                  ? "Show less"
                  : `Show all (${workouts.length})`}
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-6 py-10 text-center">
          {/* glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl" />
            <div className="absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl" />
          </div>

          <div className="relative space-y-3">
            <p className="text-lg font-semibold text-foreground">
              Start your first workout
            </p>

            <p className="text-sm text-muted-foreground leading-6">
              Log your training to start building consistency and track progress over time.
            </p>

            <p className="text-xs text-violet-400">
              One session is enough to begin
            </p>
          </div>
        </div>
      )}
    </div>
  );
}