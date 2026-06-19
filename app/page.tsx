"use client";

import { useState } from "react";
import { getWorkouts } from "@/shared/lib/storage";
import { calculateStrengthIndex } from "@/features/workout/lib/strengthIndex";
import { WorkoutEntry } from "@/features/workout/model/workout.types";

export default function Home() {
  const [workouts, setWorkouts] = useState<WorkoutEntry[]>(() => getWorkouts());

  const strengthIndex = calculateStrengthIndex(workouts);
  const lastWorkout = workouts[0];

  function refresh() {
    setWorkouts(getWorkouts());
  }

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold">Body OS</h1>
        <p className="text-white/50">Your progress system</p>
      </div>

      {/* STRENGTH INDEX */}
      <div className="p-5 border border-white/10 rounded-xl bg-white/5">
        <p className="text-white/50 text-sm">Strength Index</p>
        <p className="text-4xl font-bold mt-2">{strengthIndex}</p>
      </div>

      {/* LAST WORKOUT */}
      <div className="p-4 border border-white/10 rounded-xl">
        <p className="text-white/60 text-sm mb-2">Last workout</p>

        {lastWorkout ? (
          <div className="text-sm">
            <p>
              🏋️ {lastWorkout.pullups} / {lastWorkout.dips} /{" "}
              {lastWorkout.pushups} / {lastWorkout.squats}
            </p>
            <p className="text-white/40 text-xs mt-1">
              {new Date(lastWorkout.date).toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p className="text-white/40">No workouts yet</p>
        )}
      </div>

      {/* REFRESH BUTTON (временное решение) */}
      <button
        onClick={refresh}
        className="w-full py-2 border border-white/10 rounded-lg text-white/70"
      >
        Refresh data
      </button>
    </div>
  );
}
