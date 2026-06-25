// features/profile/ui/ProfileSummary.tsx
"use client";

import { useWorkouts } from "@/features/workout/hooks/useWorkouts";
import { getProfileMetrics } from "../domain/profile.metrics";

import type { Profile } from "../model/profile.types";

type Props = {
  profile: Profile;
};

export function ProfileSummary({ profile }: Props) {
  const { workouts } = useWorkouts();

  const metrics = getProfileMetrics(profile, workouts);

  return (
    <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
      <Row label="BMR" value={`${metrics.bmr} kcal`} />
      <Row label="Goal progress" value={`${metrics.goalProgress}%`} highlight />
      <Row label="Water goal" value={`${metrics.waterGoalLiters} L`} />
      <Row label="Body score" value={`${metrics.bodyScore}`} highlight />
    </div>
  );
}

function Row({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between">
      <span className="text-sm text-white/60">{label}</span>
      <span
        className={
          highlight ? "text-violet-400 font-semibold" : "font-semibold"
        }
      >
        {value}
      </span>
    </div>
  );
}
