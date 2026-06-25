"use client";

import { useMemo } from "react";

import { useProfile } from "@/features/profile/model/useProfile";
import { useWorkouts } from "@/features/workout/hooks/useWorkouts";

import { getProfileMetrics } from "@/features/profile/domain/profile.metrics";
import { buildWorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";

import { CharacterCard } from "@/features/profile/ui/CharacterCard";
import { ProfileForm } from "@/features/profile/ui/ProfileForm";

export default function ProfilePage() {
  const { profile, updateProfile } = useProfile();
  const { workouts } = useWorkouts();

  const analytics = useMemo(() => {
    return buildWorkoutAnalytics(workouts);
  }, [workouts]);

  const metrics = useMemo(() => {
    if (!profile) return null;
    return getProfileMetrics(profile, workouts);
  }, [profile, workouts]);

  if (!profile || !metrics) {
    return (
      <div className="p-6 text-center text-white/60">Loading profile...</div>
    );
  }

  return (
    <div className="mx-auto max-w-md space-y-6 p-4">
      <CharacterCard
        profile={profile}
        metrics={metrics}
        analytics={analytics}
      />

      <ProfileForm profile={profile} onSave={updateProfile} />
    </div>
  );
}
