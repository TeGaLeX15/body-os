// app/workout/page.tsx
"use client";

import { useWorkouts } from "@/features/workout/hooks/useWorkouts";
import { WorkoutView } from "@/features/workout/WorkoutView";

export default function WorkoutPage() {
  const { workouts, refresh } = useWorkouts();

  return <WorkoutView workouts={workouts} refresh={refresh} />;
}
