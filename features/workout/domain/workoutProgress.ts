// features/workout/domain/workoutProgress.ts
import type { WorkoutEntry } from "@/features/workout/model/workout.types";
import { calculateStrengthIndex } from "./workoutStrength";

/**
 * 📈 История силы (для графика прогресса)
 */
export type StrengthHistoryItem = {
  date: string;
  index: number;
};

export function buildStrengthHistory(
  workouts: WorkoutEntry[],
): StrengthHistoryItem[] {
  if (!workouts.length) return [];

  const sorted = [...workouts].sort(
    (a, b) => +new Date(a.date) - +new Date(b.date),
  );

  return sorted.map((w) => ({
    date: w.date,
    index: calculateStrengthIndex([w]),
  }));
}

/**
 * 📊 Общий недельный тренд (рост/падение)
 */
export function buildStrengthTrend(
  history: StrengthHistoryItem[],
): number {
  if (history.length < 2) return 0;

  const last = history.at(-1)!.index;
  const prev = history.at(-2)!.index;

  return last - prev;
}

/**
 * 📉 Сглаженный тренд (для красивых графиков)
 */
export function buildSmoothedStrength(history: StrengthHistoryItem[]) {
  return history.map((h, i, arr) => {
    const prev = arr[i - 1]?.index ?? h.index;
    const next = arr[i + 1]?.index ?? h.index;

    return {
      date: h.date,
      value: (prev + h.index + next) / 3,
    };
  });
}

/**
 * 📅 Группировка по неделям (для будущих графиков)
 */
function getWeekKey(date: string) {
  const d = new Date(date);
  const firstDay = new Date(d.getFullYear(), 0, 1);
  const days = Math.floor(
    (d.getTime() - firstDay.getTime()) / (24 * 60 * 60 * 1000),
  );
  const week = Math.ceil((days + firstDay.getDay() + 1) / 7);

  return `${d.getFullYear()}-W${week}`;
}

export function buildWeeklyStrengthProgress(
  workouts: WorkoutEntry[],
) {
  const weeks: Record<string, number> = {};

  for (const w of workouts) {
    const week = getWeekKey(w.date);

    weeks[week] =
      (weeks[week] || 0) + calculateStrengthIndex([w]);
  }

  return Object.entries(weeks).map(([week, value]) => ({
    week,
    value,
  }));
}