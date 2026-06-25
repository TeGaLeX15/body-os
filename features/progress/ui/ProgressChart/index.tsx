// features/progress/ui/ProgressChart/index.tsx
"use client";

import type { WorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";

import { buildProgressTrend } from "@/features/progress/domain/buildProgressTrend";

import ChartHeader from "./ChartHeader";
import ChartMetrics from "./ChartMetrics";
import TrendAreaChart from "./TrendAreaChart";

type Props = {
  analytics: WorkoutAnalytics;
};

export default function ProgressChart({ analytics }: Props) {
  const trend = buildProgressTrend(analytics);

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-4">
      <ChartHeader delta={trend.delta} />

      <TrendAreaChart data={trend.data} />

      <ChartMetrics min={trend.min} avg={trend.avg} max={trend.max} />
    </div>
  );
}
