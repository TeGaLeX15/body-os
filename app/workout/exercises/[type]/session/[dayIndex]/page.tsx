"use client";

import { useParams } from "next/navigation";
import { ExerciseSessionScreen } from "@/features/exercise/ui/ExerciseSessionScreen";
import { useExerciseStore } from "@/features/exercise/model/useExerciseStore";
import { isExerciseType } from "@/features/exercise/model/exercise.routes";

export default function Page() {
  const params = useParams();

  const type = params?.type;
  const dayIndex = params?.dayIndex;

  if (typeof type !== "string" || !isExerciseType(type)) {
    return <div className="p-4 text-red-400">Invalid type</div>;
  }

  if (typeof dayIndex !== "string") {
    return <div className="p-4 text-red-400">Invalid day</div>;
  }

  const parsedDay = Number(dayIndex);

  if (Number.isNaN(parsedDay)) {
    return <div className="p-4 text-red-400">Invalid day</div>;
  }

  return (
    <PageInner type={type} dayIndex={parsedDay} />
  );
}

function PageInner({
  type,
  dayIndex,
}: {
  type: "pullups" | "dips" | "pushups" | "squats";
  dayIndex: number;
}) {
  const { state } = useExerciseStore();

  const exercise = state[type];

  if (!exercise?.week) {
    return <div className="p-4 text-white/60">No plan yet</div>;
  }

  return (
    <ExerciseSessionScreen
      type={type}
      dayIndex={dayIndex}
      plan={exercise.week}
    />
  );
}