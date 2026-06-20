"use client";

import { useEffect, useState } from "react";
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

  const refresh = () => {
    setWorkouts(getWorkouts());
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refresh();
  }, []);

  return (
    <div className="mx-auto max-w-md space-y-6 p-4">
      {/* HEADER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.25 }}
        className="space-y-1 text-center"
      >
        <h1 className="text-2xl font-bold tracking-tight">
          Workout Log
        </h1>

        <p className="text-sm text-muted-foreground">
          Track every rep. Build your strength.
        </p>
      </motion.div>

      {/* FORM */}
      <WorkoutForm onSaved={refresh} />

      {/* LIST / EMPTY STATE */}
      {workouts.length === 0 ? (
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 text-center">
          {/* glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-violet-500/20 blur-2xl" />
            <div className="absolute -right-10 bottom-0 h-28 w-28 rounded-full bg-emerald-400/10 blur-2xl" />
          </div>

          <div className="relative space-y-2">
            <p className="text-sm font-medium text-white/80">
              No workouts yet
            </p>

            <p className="text-sm text-white/50">
              Start your first session 💪
            </p>

            <p className="text-xs text-violet-300/70">
              Your progress will appear here
            </p>
          </div>
        </div>
      ) : (
        <WorkoutList workouts={workouts} />
      )}
    </div>
  );
}