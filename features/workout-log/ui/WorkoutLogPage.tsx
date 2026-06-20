"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { getWorkouts } from "@/shared/lib/storage";
import type { WorkoutEntry } from "@/features/workout/model/workout.types";
import { WorkoutRow } from "./WorkoutRow";
import { calculateWorkoutXP } from "@/features/home/lib/xp";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const INITIAL_LIMIT = 5;

function WorkoutSkeleton() {
  return (
    <div className="space-y-2 p-3">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="h-20 w-full animate-pulse rounded-xl bg-white/5"
        />
      ))}
    </div>
  );
}

export default function WorkoutLogPage() {
  const [workouts, setWorkouts] = useState<WorkoutEntry[]>([]);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = getWorkouts();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWorkouts(data);
    setLoading(false);
  }, []);

  const sorted = useMemo(
    () => [...workouts].sort((a, b) => +new Date(b.date) - +new Date(a.date)),
    [workouts]
  );

  const total = sorted.length;

  const visible = expanded ? sorted : sorted.slice(0, INITIAL_LIMIT);

  const getWorkoutIndex = (index: number) => total - index;

  const totalXP = useMemo(() => {
    return sorted.reduce((sum, w) => sum + calculateWorkoutXP(w), 0);
  }, [sorted]);

  return (
    <div
      className="
        mx-auto max-w-md
        h-dvh
        flex flex-col
      "
    >
      {/* HEADER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="p-4 text-center space-y-1 shrink-0"
      >
        <h1 className="text-2xl font-bold text-foreground">
          Workout Log
        </h1>

        <p className="text-sm text-muted-foreground">
          Track progress over time
        </p>
      </motion.div>

      {/* STATS */}
      {!loading && (
        <div className="mx-4 mb-3 shrink-0 bg-background/80 backdrop-blur border border-white/10 rounded-xl px-4 py-3 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Sessions</p>
            <p className="text-sm font-semibold">{total}</p>
          </div>

          <div className="text-right">
            <p className="text-xs text-muted-foreground">Total XP</p>
            <p className="text-sm font-bold text-violet-400 tabular-nums">
              +{totalXP}
            </p>
          </div>
        </div>
      )}

      {/* SCROLL AREA */}
      <div
        className="
          flex-1 overflow-y-auto
          px-4

          /* 🔥 КЛЮЧЕВОЕ ИСПРАВЛЕНИЕ */
          pb-[calc(var(--bottom-nav-height)+env(safe-area-inset-bottom)+32px)]
        "
      >
        <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
          {loading ? (
            <WorkoutSkeleton />
          ) : visible.length === 0 ? (
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

          {/* EXPAND */}
          {!loading && total > INITIAL_LIMIT && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="
                w-full py-3 text-sm text-violet-400
                hover:bg-white/5 transition
                border-t border-white/10
              "
            >
              {expanded ? "Show less" : `Show all (${total})`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}