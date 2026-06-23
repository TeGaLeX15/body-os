"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import WorkoutForm from "@/features/workout/ui/WorkoutForm";
import WorkoutList from "@/features/workout/ui/WorkoutList";
import WorkoutLogsSheet from "@/features/workout-log/ui/WorkoutLogsSheet";

import { useWorkouts } from "@/features/workout/hooks/useWorkouts";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function WorkoutPage() {
  const { workouts, refresh } = useWorkouts();
  const [logOpen, setLogOpen] = useState(false);

  useEffect(() => {
    if (logOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [logOpen]);

  const sorted = useMemo(() => {
    return [...workouts].sort(
      (a, b) => +new Date(b.date) - +new Date(a.date)
    );
  }, [workouts]);

  const preview = sorted.slice(0, 5);
  const isEmpty = workouts.length === 0;

  return (
    <div className="mx-auto max-w-md space-y-6 p-4 pb-28">
      {/* HEADER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="space-y-1 text-center"
      >
        <h1 className="text-2xl font-bold text-foreground">
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
        <div className="space-y-3">
          <WorkoutList workouts={preview} totalCount={workouts.length} />

          {workouts.length > 5 && (
            <button
              onClick={() => setLogOpen(true)}
              className="w-full rounded-xl border border-white/10 bg-white/5 py-3 text-sm text-white/80"
            >
              Open full workout log ({workouts.length})
            </button>
          )}
        </div>
      ) : (
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-6 py-10 text-center">
          <div className="relative space-y-3">
            <p className="text-lg font-semibold text-foreground">
              Start your first workout
            </p>

            <p className="text-sm text-muted-foreground">
              Log your training to build consistency.
            </p>
          </div>
        </div>
      )}

      {/* FULL LOG SHEET */}
      <WorkoutLogsSheet
        open={logOpen}
        onClose={() => setLogOpen(false)}
        workouts={workouts}
      />
    </div>
  );
}
