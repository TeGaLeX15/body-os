"use client";

import React from "react";
import { getWorkouts } from "@/shared/lib/storage";
import {
  getCurrentStreak,
  getIndexChange,
  getPersonalRecords,
} from "../lib/stats";
import { Icon } from "@/shared/icons/Icon";

/* ---------------- TYPES ---------------- */

type WorkoutEntry = {
  pullups: number;
  dips: number;
  pushups: number;
  squats: number;
};

/* ---------------- HELPERS ---------------- */

function sum<K extends keyof WorkoutEntry>(
  workouts: WorkoutEntry[],
  key: K,
): number {
  return workouts.reduce((acc, w) => acc + (w[key] ?? 0), 0);
}

/* ---------------- UI ---------------- */

function MiniCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 flex flex-col justify-between min-h-[64px]">
      <div className="flex items-center gap-2 text-[10px] text-white/60">
        <div className="opacity-70 w-4 h-4 flex items-center justify-center">
          {icon}
        </div>
        <span className="truncate">{title}</span>
      </div>

      <div className="text-base font-bold tabular-nums text-white leading-none mt-1">
        {value}
      </div>
    </div>
  );
}

function RowCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
      <div className="flex items-center gap-2 min-w-0">
        {icon && <div className="opacity-70">{icon}</div>}
        <span className="text-xs text-white/60 truncate">{title}</span>
      </div>

      <span className="text-sm font-bold text-white tabular-nums">
        {value}
      </span>
    </div>
  );
}

/* ---------------- MAIN ---------------- */

export default function StatsOverview() {
  const workouts = getWorkouts();

  const streak = getCurrentStreak(workouts);
  const records = getPersonalRecords(workouts);
  const indexChange = getIndexChange(workouts);

  const totalWorkouts = workouts.length;

  /* 🧠 SINGLE SOURCE OF TRUTH */
  const pullups = sum(workouts, "pullups");
  const dips = sum(workouts, "dips");
  const pushups = sum(workouts, "pushups");
  const squats = sum(workouts, "squats");

  const totalReps = pullups + dips + pushups + squats;

  return (
    <div className="space-y-3">

      {/* CORE */}
      <div className="grid grid-cols-2 gap-2">
        <MiniCard
          title="Streak"
          value={`${streak}d`}
          icon={<Icon name="squat" size={12} />}
        />

        <MiniCard
          title="Trend"
          value={indexChange >= 0 ? `+${indexChange}` : `${indexChange}`}
          icon={<Icon name="pullUp" size={12} />}
        />

        <MiniCard
          title="Workouts"
          value={totalWorkouts}
          icon={<Icon name="dips" size={12} />}
        />

        <MiniCard
          title="Total reps"
          value={totalReps}
          icon={<Icon name="pushUp" size={12} />}
        />
      </div>

      {/* RECORDS */}
      <div className="space-y-2">
        <p className="text-[9px] uppercase tracking-wider text-white/35">
          Strength records
        </p>

        <RowCard title="Pull-ups (best)" value={records.pullups} icon={<Icon name="pullUp" size={12} />} />
        <RowCard title="Dips (best)" value={records.dips} icon={<Icon name="dips" size={12} />} />
        <RowCard title="Push-ups (best)" value={records.pushups} icon={<Icon name="pushUp" size={12} />} />
        <RowCard title="Squats (best)" value={records.squats} icon={<Icon name="squat" size={12} />} />
      </div>

      {/* VOLUME */}
      <div className="space-y-2">
        <p className="text-[9px] uppercase tracking-wider text-white/35">
          Total volume
        </p>

        <RowCard title="Pull-ups total" value={pullups} icon={<Icon name="pullUp" size={12} />} />
        <RowCard title="Dips total" value={dips} icon={<Icon name="dips" size={12} />} />
        <RowCard title="Push-ups total" value={pushups} icon={<Icon name="pushUp" size={12} />} />
        <RowCard title="Squats total" value={squats} icon={<Icon name="squat" size={12} />} />
      </div>

    </div>
  );
}
