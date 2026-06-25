// features/profile/ui/CharacterCard/CharacterHeader.tsx
"use client";

import { User, Shield, Star } from "lucide-react";

import type { WorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";

type Props = {
  analytics: WorkoutAnalytics;
};

export function CharacterHeader({ analytics }: Props) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="
          flex h-20 w-20 items-center justify-center
          rounded-3xl
          border border-violet-400/30
          bg-gradient-to-br
          from-violet-500/20
          to-indigo-500/20
          shadow-lg shadow-violet-500/10
        "
      >
        <User size={34} />
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold tracking-wide">BODY ATHLETE</h2>

          <Star size={16} className="text-yellow-400" />
        </div>

        <div className="mt-1 text-sm text-white/60">The Returning Athlete</div>

        <div className="mt-3 flex flex-wrap gap-2">
          <Badge>Lv. {analytics.level}</Badge>

          <Badge>{analytics.rank}</Badge>

          <Badge icon={<Shield size={12} />}>
            {analytics.currentXP}/{analytics.xpToNextLevel} XP
          </Badge>
        </div>
      </div>
    </div>
  );
}

type BadgeProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
};

function Badge({ children, icon }: BadgeProps) {
  return (
    <div
      className="
        flex items-center gap-1
        rounded-full
        border border-white/10
        bg-white/5
        px-3 py-1
        text-xs
      "
    >
      {icon}
      {children}
    </div>
  );
}
