import { WorkoutEntry } from "@/features/workout/model/workout.types";
import { calculateStrengthIndex } from "@/features/workout/lib/strengthIndex";

export function getPersonalRecords(workouts: WorkoutEntry[]) {
  return {
    pullups: Math.max(...workouts.map((w) => w.pullups), 0),
    dips: Math.max(...workouts.map((w) => w.dips), 0),
    pushups: Math.max(...workouts.map((w) => w.pushups), 0),
    squats: Math.max(...workouts.map((w) => w.squats), 0),
  };
}

export function getCurrentStreak(workouts: WorkoutEntry[]) {
  if (workouts.length === 0) return 0;

  const uniqueDays = Array.from(
    new Set(workouts.map((w) => new Date(w.date).toDateString())),
  )
    .map((date) => new Date(date))
    .sort((a, b) => b.getTime() - a.getTime());

  let streak = 1;

  for (let i = 0; i < uniqueDays.length - 1; i++) {
    const current = uniqueDays[i];
    const next = uniqueDays[i + 1];

    const diff = (current.getTime() - next.getTime()) / (1000 * 60 * 60 * 24);

    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}

export function getIndexChange(workouts: WorkoutEntry[]) {
  if (workouts.length < 2) return 0;

  const latest = calculateStrengthIndex([workouts[0]]);
  const previous = calculateStrengthIndex([workouts[1]]);

  return latest - previous;
}
