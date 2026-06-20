import type { WorkoutEntry } from "@/features/workout/model/workout.types";

type DayKey =
  | "Mon"
  | "Tue"
  | "Wed"
  | "Thu"
  | "Fri"
  | "Sat"
  | "Sun";

export type WeeklyPoint = {
  day: DayKey;
  workouts: number;
  volume: number;
};

const order: DayKey[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function getDayKey(date: string): DayKey {
  const d = new Date(date);
  const day = d.getDay();

  const map: DayKey[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return map[day];
}

function empty(day: DayKey): WeeklyPoint {
  return {
    day,
    workouts: 0,
    volume: 0,
  };
}

export function buildWeeklyBreakdown(
  workouts: WorkoutEntry[],
): WeeklyPoint[] {
  const base: Record<DayKey, WeeklyPoint> = {
    Mon: empty("Mon"),
    Tue: empty("Tue"),
    Wed: empty("Wed"),
    Thu: empty("Thu"),
    Fri: empty("Fri"),
    Sat: empty("Sat"),
    Sun: empty("Sun"),
  };

  for (const w of workouts) {
    const day = getDayKey(w.date);
    const target = base[day];

    target.workouts += 1;
    target.volume += w.pullups + w.pushups + w.dips + w.squats;
  }

  return order.map((d) => base[d]);
}