// features/home/hooks/useHomeStats.ts
"use client";

import { useEffect, useMemo, useState } from "react";

import { useWorkouts } from "@/features/workout/hooks/useWorkouts";
import { buildWorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";

type ProfileData = {
  startWeight?: number;
  currentWeight?: number;
  goalWeight?: number;
  height?: number;
  waterGoalMl?: number;
  age?: number;
};

export function useHomeStats() {
  const { workouts } = useWorkouts();

  const workoutStats = useMemo(
    () => buildWorkoutAnalytics(workouts),
    [workouts],
  );

  const [profile, setProfile] = useState<ProfileData | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("body-os-profile");

    if (!raw) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setProfile({});
      return;
    }

    try {
      setProfile(JSON.parse(raw));
    } catch {
      setProfile({});
    }
  }, []);

  const currentWeight = Number(profile?.currentWeight ?? 0);

  const startWeight = Number(profile?.startWeight ?? currentWeight);

  const goalWeight = Number(profile?.goalWeight ?? currentWeight);

  return {
    ...workoutStats,

    currentWeight,
    startWeight,
    goalWeight,
  };
}
