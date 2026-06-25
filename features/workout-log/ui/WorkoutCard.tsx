// features/workout-log/ui/WorkoutCard.tsx
"use client";

import { Card } from "@/components/ui/card";
import { Icon } from "@/shared/ui/Icon";

import type { WorkoutEntry } from "@/features/workout/model/workout.types";
import { calculateWorkoutXP } from "@/features/workout";

import { StatChip } from "./StatChip";

import {
  formatWorkoutDate,
  formatWorkoutTime,
  formatXP,
} from "../lib/formatters";

type Props = {
  workout: WorkoutEntry;
  previousWorkout?: WorkoutEntry;
  workoutNumber: number;
  compact?: boolean;
};

export function WorkoutCard({
  workout,
  previousWorkout,
  workoutNumber,
  compact = false,
}: Props) {
  const xp = calculateWorkoutXP(workout);

  if (compact) {
    return (
      <div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
        <div className="min-w-0">
          <p className="text-sm text-white/80">
            #{workoutNumber}
          </p>

          <p className="text-xs text-white/50">
            {formatWorkoutDate(workout.date)}
            {" • "}
            {formatWorkoutTime(workout.date)}
          </p>
        </div>

        <div className="flex gap-3 text-xs text-white/60">
          <span>P {workout.pullups}</span>
          <span>D {workout.dips}</span>
          <span>Pu {workout.pushups}</span>
          <span>S {workout.squats}</span>
        </div>

        <div className="text-sm font-bold tabular-nums text-violet-400">
          {formatXP(xp)}
        </div>
      </div>
    );
  }

  return (
    <Card
      variant="soft"
      className="rounded-2xl px-3 py-3"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0 flex items-center gap-2">
          <span className="text-sm font-semibold tabular-nums text-foreground">
            #{workoutNumber}
          </span>

          <span className="truncate text-xs text-muted-foreground">
            {formatWorkoutDate(workout.date)}
            {" • "}
            {formatWorkoutTime(workout.date)}
          </span>
        </div>

        <span className="shrink-0 text-sm font-bold tabular-nums text-violet-400">
          {formatXP(xp)}
        </span>
      </div>

      <div className="mt-2 flex flex-wrap gap-1.5">
        <StatChip
          value={workout.pullups}
          prevValue={previousWorkout?.pullups}
          icon={
            <Icon
              name="pullUp"
              size={14}
              className="opacity-80"
            />
          }
        />

        <StatChip
          value={workout.dips}
          prevValue={previousWorkout?.dips}
          icon={
            <Icon
              name="dips"
              size={14}
              className="opacity-80"
            />
          }
        />

        <StatChip
          value={workout.pushups}
          prevValue={previousWorkout?.pushups}
          icon={
            <Icon
              name="pushUp"
              size={14}
              className="opacity-80"
            />
          }
        />

        <StatChip
          value={workout.squats}
          prevValue={previousWorkout?.squats}
          icon={
            <Icon
              name="squat"
              size={14}
              className="opacity-80"
            />
          }
        />
      </div>
    </Card>
  );
}