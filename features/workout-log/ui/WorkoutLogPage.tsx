"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { getWorkouts } from "@/shared/lib/storage";
import type { WorkoutEntry } from "@/features/workout/model/workout.types";
import { WorkoutRow } from "./WorkoutRow";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const INITIAL_LIMIT = 5;

export default function WorkoutLogPage() {
  const [workouts, setWorkouts] = useState<WorkoutEntry[]>([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWorkouts(getWorkouts());
  }, []);

  const sorted = useMemo(() => {
    return [...workouts].sort(
      (a, b) => +new Date(b.date) - +new Date(a.date)
    );
  }, [workouts]);

  const total = sorted.length;

  const visible = useMemo(() => {
    if (expanded) return sorted;

    return sorted.slice(0, INITIAL_LIMIT);
  }, [expanded, sorted]);

  const getWorkoutIndex = (index: number) => {
    // номер тренировки от общего списка (новые сверху)
    return total - index;
  };

  return (
    <div className="mx-auto max-w-md p-4 pb-28 space-y-4">
      {/* HEADER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-center space-y-1"
      >
        <h1 className="text-2xl font-bold text-foreground">
          Workout Log
        </h1>

        <p className="text-sm text-muted-foreground">
          {total} total sessions
        </p>
      </motion.div>

      {/* LIST */}
      <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
        {visible.length === 0 ? (
          <div className="p-6 text-center text-sm text-muted-foreground">
            No workouts yet
          </div>
        ) : (
          visible.map((workout, index) => (
            <WorkoutRow
              key={workout.id}
              workout={workout}
              index={getWorkoutIndex(index)}
            />
          ))
        )}

        {/* EXPAND BUTTON */}
        {total > INITIAL_LIMIT && (
          <button
            onClick={() => setExpanded(v => !v)}
            className="
              w-full py-3 text-sm text-violet-400
              hover:bg-white/5 transition
              border-t border-white/10
            "
          >
            {expanded
              ? "Show less"
              : `Show all (${total})`}
          </button>
        )}
      </div>
    </div>
  );
}