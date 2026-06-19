"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { getWorkouts } from "@/shared/lib/storage";
import { calculateStrengthIndex } from "@/features/workout/lib/strengthIndex";
import {
  calculateWeeklyVolume,
  calculatePR,
} from "@/features/workout/lib/stats";

import { Card } from "@/components/ui/card";
import { WorkoutEntry } from "@/features/workout/model/workout.types";

export default function Home() {
  const [workouts, setWorkouts] = useState<WorkoutEntry[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWorkouts(getWorkouts());
  }, []);

  const strengthIndex = useMemo(
    () => calculateStrengthIndex(workouts),
    [workouts],
  );

  const weekly = useMemo(() => calculateWeeklyVolume(workouts), [workouts]);

  const pr = useMemo(() => calculatePR(workouts), [workouts]);

  const lastWorkout = workouts[0];

  return (
    <div className="mx-auto max-w-md space-y-6 p-4">
      {/* HEADER */}
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">Body OS</h1>
        <p className="text-sm text-muted-foreground">Your progress system</p>
      </div>

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <Card className="p-6 text-center space-y-2">
          <p className="text-sm text-muted-foreground">Strength Index</p>

          <p className="text-5xl font-bold tracking-tight">{strengthIndex}</p>

          <p className="text-xs text-muted-foreground">
            Consistency builds strength
          </p>
        </Card>
      </motion.div>

      {/* INSIGHTS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 gap-3"
      >
        <Card className="p-4 space-y-1">
          <p className="text-xs text-muted-foreground">Weekly Pullups</p>
          <p className="text-xl font-semibold">{weekly.pullups}</p>
        </Card>

        <Card className="p-4 space-y-1">
          <p className="text-xs text-muted-foreground">PR Pullups</p>
          <p className="text-xl font-semibold">{pr.pullups}</p>
        </Card>
      </motion.div>

      {/* LAST WORKOUT */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15 }}
      >
        <Card className="p-4 space-y-3">
          <p className="text-sm text-muted-foreground">Last workout</p>

          {lastWorkout ? (
            <div className="space-y-1">
              <p className="text-sm font-medium">
                🏋️ {lastWorkout.pullups} / {lastWorkout.dips} /{" "}
                {lastWorkout.pushups} / {lastWorkout.squats}
              </p>

              <p className="text-xs text-muted-foreground">
                {new Date(lastWorkout.date).toLocaleDateString()}
              </p>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No workouts yet</p>
          )}
        </Card>
      </motion.div>
    </div>
  );
}
