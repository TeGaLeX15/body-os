"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import type { WorkoutEntry } from "@/features/workout/model/workout.types";

import { buildStrengthHistory } from "../lib/buildProgress";

type ProgressChartProps = {
  workouts: WorkoutEntry[];
};

export default function ProgressChart({ workouts }: ProgressChartProps) {

  const data = buildStrengthHistory(workouts);

  return (
    <div className="h-64 rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="mb-2">
        <p className="text-xs font-semibold text-white">
          Strength trend
        </p>
        <p className="text-[10px] text-muted-foreground">
          overall index progression
        </p>
      </div>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <XAxis
            dataKey="date"
            stroke="#555"
            tick={{ fontSize: 9 }}
          />

          <YAxis stroke="#555" tick={{ fontSize: 9 }} />

          <Tooltip
            contentStyle={{
              backgroundColor: "#0f0f0f",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 8,
              fontSize: 11,
            }}
          />

          <Line
            type="monotone"
            dataKey="index"
            stroke="#8B5CF6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}