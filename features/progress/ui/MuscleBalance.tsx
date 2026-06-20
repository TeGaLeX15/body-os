"use client";

import { getWorkouts } from "@/shared/lib/storage";

/* ---------------- HELPERS ---------------- */

function sum(workouts: WorkoutEntry[], key: keyof WorkoutEntry) {
  return workouts.reduce((acc, w) => acc + w[key], 0);
}

type WorkoutEntry = {
  pullups: number;
  dips: number;
  pushups: number;
  squats: number;
};

type BarProps = {
  label: string;
  value: number;
  total: number;
  color: string;
};

function Bar({ label, value, total, color }: BarProps) {
  const percent = total === 0 ? 0 : (value / total) * 100;

  return (
    <div className="space-y-1">
      {/* header */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-white/60">{label}</span>

        <span className="text-[11px] font-semibold tabular-nums text-white">
          {Math.round(percent)}%
        </span>
      </div>

      {/* bar */}
      <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            width: `${percent}%`,
            backgroundColor: color,
          }}
        />
      </div>

      {/* value */}
      <div className="text-[10px] text-muted-foreground tabular-nums">
        {value} reps
      </div>
    </div>
  );
}

/* ---------------- MAIN ---------------- */

export default function MuscleBalance() {
  const workouts = getWorkouts();

  const pull = sum(workouts, "pullups");
  const push = sum(workouts, "pushups") + sum(workouts, "dips");
  const legs = sum(workouts, "squats");

  const total = pull + push + legs;

  const dominant =
    pull > push && pull > legs
      ? "Pull dominant"
      : push > legs
      ? "Push dominant"
      : "Legs dominant";

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3 space-y-3">
      {/* header */}
      <div className="flex items-center justify-between">
        <p className="text-[10px] uppercase tracking-wider text-white/40">
          Muscle balance
        </p>

        <p className="text-[10px] text-emerald-300 font-semibold">
          {dominant}
        </p>
      </div>

      {/* bars */}
      <div className="space-y-3">
        <Bar label="Push" value={push} total={total} color="#a855f7" />
        <Bar label="Pull" value={pull} total={total} color="#22c55e" />
        <Bar label="Legs" value={legs} total={total} color="#f59e0b" />
      </div>
    </div>
  );
}