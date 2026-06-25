// features/progress/ui/InsightCards/index.tsx
"use client";

import type { WorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";

import { buildInsights } from "@/features/progress/lib/buildInsights";
import { getCoachMode } from "@/features/progress/lib/coach";

import CoachCard from "./CoachCard";
import InsightList from "./InsightList";

type Props = {
  analytics: WorkoutAnalytics;
};

export default function InsightCards({ analytics }: Props) {
  const insights = buildInsights(analytics);
  const coach = getCoachMode(analytics);

  if (!insights.length) return null;

  return (
    <div className="space-y-4">
      <CoachCard coach={coach} />
      <InsightList insights={insights} />
    </div>
  );
}
