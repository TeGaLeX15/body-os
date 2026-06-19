"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { getWorkouts } from "@/shared/lib/storage";
import { buildStrengthHistory } from "../lib/buildProgress";

export default function ProgressChart() {
  const workouts = getWorkouts();
  const data = buildStrengthHistory(workouts);

  return (
    <div className="w-full h-72 p-4 border border-white/10 rounded-xl">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="index"
            stroke="#6C5CE7"
            strokeWidth={2}
            dot={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
