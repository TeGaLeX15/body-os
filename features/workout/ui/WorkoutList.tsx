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
        <Card key={w.id} className="leading-6">
          <p className="text-white/60 text-sm leading-6">
            {new Date(w.date).toLocaleDateString()}
          </p>

          <p className="mt-2 text-base leading-6">
            🏋️ {w.pullups} / {w.dips} / {w.pushups} / {w.squats}
          </p>
        </Card>
      ))}
    </div>
  );
}
