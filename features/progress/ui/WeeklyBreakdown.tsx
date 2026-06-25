// features/progress/ui/WeeklyBreakdown.tsx
"use client";

import type { WorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";

import { buildWeeklyBreakdown } from "../domain/buildWeeklyBreakdown";
import { getBestTrainingDay } from "../domain/getBestTrainingDay";

type Props = {
  analytics: WorkoutAnalytics;
};

export default function WeeklyBreakdown({
  analytics,
}: Props) {
  const data = buildWeeklyBreakdown(
    analytics.workouts,
  );

  const bestDay =
    getBestTrainingDay(data);

  const max = Math.max(
    ...data.map((d) => d.volume),
    1,
  );

  return (
    <div className="rounded-xl border border-border bg-card p-4">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
            Weekly activity
          </p>

          <p className="text-xs text-muted-foreground">
            Training volume by weekday
          </p>
        </div>

        <div className="text-right">
          <p className="text-[10px] text-muted-foreground">
            Best day
          </p>

          <p className="text-xs font-semibold text-primary">
            {bestDay.day}
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="flex h-40 items-end justify-between gap-2">
        {data.map((day) => {
          const height =
            (day.volume / max) * 100;

          const isBest =
            day.day === bestDay.day;

          return (
            <div
              key={day.day}
              className="flex flex-1 flex-col items-center"
            >
              {/* value */}
              <span
                className={`
                  mb-1 text-[10px] font-medium tabular-nums
                  ${
                    day.volume > 0
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }
                `}
              >
                {day.volume}
              </span>

              {/* bar area */}
              <div className="flex h-28 items-end">
                <div
                  className={`
                    w-7 rounded-t-md transition-all
                    ${
                      isBest
                        ? "bg-primary"
                        : "bg-primary/40"
                    }
                  `}
                  style={{
                    height: `${Math.max(
                      height,
                      day.volume > 0 ? 8 : 2,
                    )}%`,
                  }}
                />
              </div>

              {/* day */}
              <span
                className={`
                  mt-2 text-[10px] font-medium
                  ${
                    isBest
                      ? "text-primary"
                      : "text-muted-foreground"
                  }
                `}
              >
                {day.day}
              </span>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-4 border-t border-border pt-3">
        <p className="text-[11px] text-muted-foreground">
          Highest training volume on{" "}
          <span className="font-medium text-foreground">
            {bestDay.day}
          </span>
        </p>
      </div>
    </div>
  );
}