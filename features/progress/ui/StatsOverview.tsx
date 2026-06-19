"use client";

import { getWorkouts } from "@/shared/lib/storage";
import {
  getCurrentStreak,
  getIndexChange,
  getPersonalRecords,
} from "../lib/stats";

export default function StatsOverview() {
  const workouts = getWorkouts();

  const streak = getCurrentStreak(workouts);
  const records = getPersonalRecords(workouts);
  const indexChange = getIndexChange(workouts);

  return (
    <div className="grid grid-cols-2 gap-4">
      <StatCard title="Current streak" value={`${streak} 🔥`} />

      <StatCard
        title="Index change"
        value={indexChange >= 0 ? `+${indexChange}` : `${indexChange}`}
      />

      <StatCard title="Pull-up record" value={records.pullups} />

      <StatCard title="Dip record" value={records.dips} />

      <StatCard title="Push-up record" value={records.pushups} />

      <StatCard title="Squat record" value={records.squats} />
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm text-white/50">{title}</p>

      <p className="mt-2 text-2xl font-bold">{value}</p>
    </div>
  );
}
