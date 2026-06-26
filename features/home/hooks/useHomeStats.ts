// features/home/hooks/useHomeStats.ts
import { useEffect, useMemo, useState } from "react";

import { useWorkouts } from "@/features/workout/hooks/useWorkouts";
import { buildWorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";

import { profileRepository } from "@/features/profile/data/profileRepository";

type ProfileData = {
  startWeight?: number;
  currentWeight?: number;
  goalWeight?: number;
};

export function useHomeStats() {
  const { workouts } = useWorkouts();

  const workoutStats = useMemo(
    () => buildWorkoutAnalytics(workouts),
    [workouts],
  );

  const [profile, setProfile] = useState<ProfileData>({});

  useEffect(() => {
    const data = profileRepository.get();

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProfile(data ?? {});
  }, []);

  const currentWeight = Number(profile.currentWeight ?? 0);

  const startWeight = Number(
    profile.startWeight ?? currentWeight,
  );

  const goalWeight = Number(
    profile.goalWeight ?? currentWeight,
  );

  return {
    ...workoutStats,

    currentWeight,
    startWeight,
    goalWeight,
  };
}