// features/profile/ui/ProfileSummary.tsx
"use client";

import type { Profile } from "../model/profile.types";
import { getProfileMetrics } from "../domain/profileEngine";

type Props = {
  profile: Profile;
};

export function ProfileSummary({ profile }: Props) {
  const metrics = getProfileMetrics(profile);

  return (
    <div className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="flex justify-between">
        <span className="text-sm text-white/60">BMR</span>
        <span className="font-semibold text-white">
          {metrics.bmr} kcal
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-sm text-white/60">Goal progress</span>
        <span className="font-semibold text-violet-400">
          {metrics.goalProgress}%
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-sm text-white/60">Water goal</span>
        <span className="font-semibold text-blue-300">
          {metrics.waterGoalLiters} L
        </span>
      </div>
    </div>
  );
}