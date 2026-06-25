// features/profile/ui/ProfileAchievements.tsx
"use client";

import { Trophy, Dumbbell, Calendar, Target, Activity } from "lucide-react";

import type { WorkoutEntry } from "@/features/workout/model/workout.types";

type Props = {
  workouts: WorkoutEntry[];
};

export function ProfileAchievements({ workouts }: Props) {
  const totalWorkouts = workouts.length;

  const totalReps = workouts.reduce(
    (sum, workout) =>
      sum + workout.pullups + workout.dips + workout.pushups + workout.squats,
    0,
  );

  const averageReps =
    totalWorkouts === 0 ? 0 : Math.round(totalReps / totalWorkouts);

  const joined =
    totalWorkouts > 0
      ? new Date(workouts[workouts.length - 1].date).toLocaleDateString()
      : "Today";

  const rank =
    totalWorkouts >= 200
      ? "Legend"
      : totalWorkouts >= 100
        ? "Elite Athlete"
        : totalWorkouts >= 50
          ? "Advanced Athlete"
          : totalWorkouts >= 20
            ? "Novice Athlete"
            : "Beginner";

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <h2 className="text-lg font-semibold">Athlete Statistics</h2>

      <p className="mt-1 text-sm text-white/50">
        Your overall training progress.
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <Item
          icon={<Dumbbell size={18} />}
          label="Workouts"
          value={totalWorkouts}
        />

        <Item
          icon={<Target size={18} />}
          label="Total Reps"
          value={totalReps}
        />

        <Item
          icon={<Activity size={18} />}
          label="Avg / Workout"
          value={averageReps}
        />

        <Item icon={<Calendar size={18} />} label="Joined" value={joined} />
      </div>

      <div className="mt-5 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-4">
        <div className="flex items-center gap-2">
          <Trophy size={18} className="text-violet-400" />

          <span className="font-semibold">Current Rank</span>
        </div>

        <div className="mt-2 text-2xl font-bold">{rank}</div>

        <p className="mt-1 text-sm text-white/50">
          Complete more workouts to unlock higher athlete ranks.
        </p>
      </div>
    </section>
  );
}

type ItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string | number;
};

function Item({ icon, label, value }: ItemProps) {
  return (
    <div className="rounded-2xl bg-white/5 p-4">
      <div className="flex items-center gap-2 text-xs text-white/50">
        {icon}
        {label}
      </div>

      <div className="mt-2 text-xl font-bold">{value}</div>
    </div>
  );
}
