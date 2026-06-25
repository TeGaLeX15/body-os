// features/progress/ui/WeeklyBreakdown.tsx
"use client";

import type { WorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";
import { useMemo } from "react";

import { buildWeeklyBreakdown } from "../domain/buildWeeklyBreakdown";
import { getBestTrainingDay } from "../domain/getBestTrainingDay";

type Props = {
  analytics: WorkoutAnalytics;
};

type RawDay = {
  day: string;
  volume: number;
};

function getLast7Days(): Date[] {
  const days: Date[] = [];
  const today = new Date();

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(today.getDate() - i);
    days.push(d);
  }

  return days;
}

function getDayKey(date: Date) {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
  });
}

export default function WeeklyBreakdown({ analytics }: Props) {
  const raw = buildWeeklyBreakdown(analytics.workouts) as RawDay[];

  const volumeMap = useMemo(() => {
    const map = new Map<string, number>();

    for (const item of raw) {
      map.set(item.day, item.volume);
    }

    return map;
  }, [raw]);

  const data = useMemo(() => {
    return getLast7Days().map((date) => {
      const key = getDayKey(date);

      return {
        day: key,
        volume: volumeMap.get(key) ?? 0,
        isToday: date.toDateString() === new Date().toDateString(),
      };
    });
  }, [volumeMap]);

  const bestDay = getBestTrainingDay(data);

  const max = Math.max(...data.map((d) => d.volume), 1);

  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      {/* HEADER */}
      <div className="mb-5 flex justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Last 7 days
          </p>
          <p className="text-xs text-muted-foreground">Training volume flow</p>
        </div>

        <div className="text-right">
          <p className="text-[10px] text-muted-foreground">Peak day</p>
          <p className="text-xs font-semibold text-primary">{bestDay.day}</p>
        </div>
      </div>

      {/* CHART */}
      <div className="flex h-40 items-end justify-between gap-2">
        {data.map((day) => {
          const height = (day.volume / max) * 100;
          const isBest = day.day === bestDay.day;

          return (
            <div key={day.day} className="flex flex-1 flex-col items-center">
              {/* value */}
              <span
                className={`
                  mb-1 text-[10px] font-medium tabular-nums
                  ${
                    day.volume > 0 ? "text-foreground" : "text-muted-foreground"
                  }
                `}
              >
                {day.volume}
              </span>

              {/* bar */}
              <div className="flex h-28 items-end">
                <div
                  className={`
                    w-6 rounded-t-md transition-all duration-300
                    ${
                      isBest
                        ? "bg-primary shadow-[0_0_18px_var(--primary)]"
                        : day.isToday
                          ? "bg-primary/70"
                          : "bg-muted-foreground/30"
                    }
                  `}
                  style={{
                    height: `${Math.max(height, day.volume > 0 ? 8 : 2)}%`,
                  }}
                />
              </div>

              {/* label */}
              <span
                className={`
                  mt-2 text-[10px] font-medium
                  ${isBest ? "text-primary" : "text-muted-foreground"}
                `}
              >
                {day.day}
              </span>
            </div>
          );
        })}
      </div>

      {/* FOOTER */}
      <div className="mt-4 border-t border-border pt-3">
        <p className="text-[11px] text-muted-foreground">
          Peak performance on{" "}
          <span className="text-foreground font-medium">{bestDay.day}</span>
        </p>
      </div>
    </div>
  );
}
