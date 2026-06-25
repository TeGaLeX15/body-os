"use client";

import { memo } from "react";
import { calculateWorkoutXP } from "@/features/workout/domain/workoutXP";
import type { WorkoutEntry } from "@/features/workout/model/workout.types";

type Props = {
  workout: WorkoutEntry;
  index: number;
};

function WorkoutRowComponent({ workout, index }: Props) {
  const xp = calculateWorkoutXP(workout);

  const date = new Date(workout.date);

  return (
    <div className="flex items-center justify-between px-3 py-2 border-b border-white/5">
      {/* LEFT */}
      <div className="min-w-0">
        <p className="text-sm text-white/80">
          #{index + 1}
        </p>

        <p className="text-xs text-white/50">
          {date.toLocaleDateString()} •{" "}
          {date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>

      {/* CENTER */}
      <div className="flex gap-3 text-xs text-white/60">
        <span>P {workout.pullups}</span>
        <span>D {workout.dips}</span>
        <span>Pu {workout.pushups}</span>
        <span>S {workout.squats}</span>
      </div>

      {/* RIGHT */}
      <div className="text-sm font-bold text-violet-400 tabular-nums">
        +{xp}
      </div>
    </div>
  );
}

export const WorkoutRow = memo(WorkoutRowComponent);