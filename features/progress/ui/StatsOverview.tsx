"use client";

import React from "react";
import { getWorkouts } from "@/shared/lib/storage";
import {
  getCurrentStreak,
  getIndexChange,
  getPersonalRecords,
} from "../lib/stats";

import {
  Flame,
  TrendingUp,
  TrendingDown,
  Activity,
  Dumbbell,
} from "lucide-react";
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

/* ---------------- STREAK ---------------- */

function StreakCard({ value }: { value: number }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="flex items-center gap-2 text-[11px] text-white/60">
        <Flame className="text-orange-400 animate-pulse" size={14} />
        <span>Streak</span>
      </div>

      <div className="mt-1 text-2xl font-bold text-white">{value}d</div>

      <div className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-orange-500/10 blur-2xl animate-pulse" />
    </div>
  );
}

/* ---------------- TREND ---------------- */

function TrendCard({ value }: { value: number }) {
  const isPositive = value > 0;
  const isNegative = value < 0;

  const IconCmp = isPositive ? TrendingUp : isNegative ? TrendingDown : Activity;

  const color = isPositive
    ? "text-emerald-400"
    : isNegative
      ? "text-rose-400"
      : "text-white/70";

  const glow = isPositive
    ? "bg-emerald-500/10"
    : isNegative
      ? "bg-rose-500/10"
      : "bg-white/5";

  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="flex items-center gap-2 text-[11px] text-white/60">
        <IconCmp size={14} className={color} />
        <span>Trend</span>
      </div>

      <div className={`mt-1 text-2xl font-bold tabular-nums ${color}`}>
        {value > 0 ? `+${value}` : value}
      </div>

      <div className={`pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full blur-2xl ${glow}`} />
    </div>
  );
}

/* ---------------- MINI CARD ---------------- */

function MiniCard({
  title,
  value,
  icon,
  active = false,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-xl border p-3 flex items-center justify-between transition-all",
        active
          ? "border-emerald-500/20 bg-emerald-500/5"
          : "border-white/10 bg-white/5",
      ].join(" ")}
    >
      <div className="flex items-center gap-2 text-xs text-white/60">
        {icon}
        <span>{title}</span>
      </div>

      <span
        className={[
          "text-sm font-bold tabular-nums",
          active ? "text-emerald-300" : "text-white",
        ].join(" ")}
      >
        {value}
      </span>
    </div>
  );
}

/* ---------------- MAIN ---------------- */

export default function StatsOverview() {
  const workouts = getWorkouts();

  const streak = getCurrentStreak(workouts);
  const trend = getIndexChange(workouts);
  const records = getPersonalRecords(workouts);

  const pullups = sum(workouts, "pullups");
  const dips = sum(workouts, "dips");
  const pushups = sum(workouts, "pushups");
  const squats = sum(workouts, "squats");

  const totalReps = pullups + dips + pushups + squats;

  /* ---------------- DOMINANT EXERCISE ---------------- */

  const totals = { pullups, dips, pushups, squats };

  const dominantKey = Object.entries(totals).reduce((a, b) =>
    b[1] > a[1] ? b : a,
  )[0] as keyof typeof totals;

  const isDominant = (key: keyof typeof totals) => key === dominantKey;

  const getIcon = (key: keyof typeof totals) =>
    isDominant(key) ? "text-emerald-300" : "text-white/40";

  return (
    <div className="space-y-4">

      {/* HERO */}
      <div className="grid grid-cols-2 gap-2">
        <StreakCard value={streak} />
        <TrendCard value={trend} />
      </div>

      {/* CORE */}
      <div className="grid grid-cols-2 gap-2">
        <MiniCard
          title="Workouts"
          value={workouts.length}
          icon={<Dumbbell size={14} className="text-white/70" />}
        />

        <MiniCard
          title="Total reps"
          value={totalReps}
          icon={<Activity size={14} className="text-white/70" />}
        />
      </div>

      {/* 🏆 RECORDS */}
      <div className="space-y-2">
        <p className="text-[9px] uppercase tracking-wider text-white/50">
          Records
        </p>

        <div className="grid grid-cols-2 gap-2">
          <MiniCard
            title="Pull-ups"
            value={records.pullups}
            icon={<Icon name="pullUp" size={14} className={getIcon("pullups")} />}
            active={isDominant("pullups")}
          />

          <MiniCard
            title="Dips"
            value={records.dips}
            icon={<Icon name="dips" size={14} className={getIcon("dips")} />}
            active={isDominant("dips")}
          />

          <MiniCard
            title="Push-ups"
            value={records.pushups}
            icon={<Icon name="pushUp" size={14} className={getIcon("pushups")} />}
            active={isDominant("pushups")}
          />

          <MiniCard
            title="Squats"
            value={records.squats}
            icon={<Icon name="squat" size={14} className={getIcon("squats")} />}
            active={isDominant("squats")}
          />
        </div>
      </div>

      {/* 📊 TOTAL VOLUME (dominant-aware strip) */}
      <div className="space-y-2">
        <p className="text-[9px] uppercase tracking-wider text-white/25">
          Total volume
        </p>

        <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-3 py-2">

          <div className="flex items-center gap-2 flex-1">
            <Icon name="pullUp" size={14} className={getIcon("pullups")} />
            <span className="text-xs tabular-nums text-white/60">
              {pullups}
            </span>
          </div>

          <div className="w-px h-4 bg-white/10 mx-2" />

          <div className="flex items-center gap-2 flex-1">
            <Icon name="dips" size={14} className={getIcon("dips")} />
            <span className="text-xs tabular-nums text-white/60">
              {dips}
            </span>
          </div>

          <div className="w-px h-4 bg-white/10 mx-2" />

          <div className="flex items-center gap-2 flex-1">
            <Icon name="pushUp" size={14} className={getIcon("pushups")} />
            <span className="text-xs tabular-nums text-white/60">
              {pushups}
            </span>
          </div>

          <div className="w-px h-4 bg-white/10 mx-2" />

          <div className="flex items-center gap-2 flex-1">
            <Icon name="squat" size={14} className={getIcon("squats")} />
            <span className="text-xs tabular-nums text-white/60">
              {squats}
            </span>
          </div>

        </div>
      </div>

    </div>
  );
}