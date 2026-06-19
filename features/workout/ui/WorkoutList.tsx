"use client";

import { useState } from "react";
import { getWorkouts } from "@/shared/lib/storage";
import { WorkoutEntry } from "../model/workout.types";

export default function WorkoutList() {
  const [workouts] = useState<WorkoutEntry[]>(() => getWorkouts());

  return (
    <div className="mt-6 space-y-3">
      {workouts.map((w) => (
        <div key={w.id} className="p-3 border border-white/10 rounded-lg">
          <p className="text-white/60 text-xs">
            {new Date(w.date).toLocaleDateString()}
          </p>

          <p>
            🏋️ {w.pullups} / {w.dips} / {w.pushups} / {w.squats}
          </p>
        </div>
      ))}
    </div>
  );
}
