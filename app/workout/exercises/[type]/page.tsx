"use client";

import { useParams } from "next/navigation";
import { ExerciseScreen } from "@/features/exercise/ui/ExerciseScreen";
import { isExerciseType } from "@/features/exercise/model/exercise.routes";

export default function Page() {
  const params = useParams();

  const type = params?.type;

  if (!isExerciseType(type)) {
    return <div className="p-4 text-red-400">Invalid exercise type</div>;
  }

  return <ExerciseScreen type={type} />;
}