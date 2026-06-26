// features/exercise/ui/ExerciseScreen.tsx
"use client";

import type { ExerciseType } from "../model/exercise.routes";
import { useExerciseStore } from "../model/useExerciseStore";
import { generateWeekPlan } from "../domain/generateProgram";

import { ExerciseTestMax } from "./ExerciseTestMax";
import { ExercisePlan } from "./ExercisePlan";

type Props = {
  type: ExerciseType;
};

export function ExerciseScreen({ type }: Props) {
  const { state, update } = useExerciseStore();
  const exercise = state[type];

  const needsTest =
    !exercise?.max ||
    !exercise?.lastTestedAt ||
    !exercise?.week;

    if (needsTest) {
    return (
        <ExerciseTestMax
        type={type}
        onConfirm={(max) => {
            update(type, {
            max,
            lastTestedAt: Date.now(),
            week: generateWeekPlan(max),
            });
        }}
        />
    );
    }

  if (!exercise?.week) return null;

  return <ExercisePlan plan={exercise.week} type={type} />;
}