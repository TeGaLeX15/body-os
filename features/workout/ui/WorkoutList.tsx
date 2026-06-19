"use client";

import { useState } from "react";
import { getWorkouts } from "@/shared/lib/storage";
import { WorkoutEntry } from "../model/workout.types";
import { Card } from "@/shared/ui/Card";

export default function WorkoutList() {
  const [workouts] = useState<WorkoutEntry[]>(() => getWorkouts());

  return (
    <div className="mt-6 space-y-3">
      {workouts.map((w) => (
        <Card key={w.id}>
          <p className="text-white/60 text-xs">
            {new Date(w.date).toLocaleDateString()}
          </p>

          <p className="mt-2 text-sm">
            🏋️ {w.pullups} / {w.dips} / {w.pushups} / {w.squats}
          </p>
        </Card>
      ))}
    </div>
  );
}
