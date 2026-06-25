// features/workout-log/lib/formatters.ts
export function formatXP(xp: number) {
  return xp > 0 ? `+${xp}` : "0";
}

export function formatDelta(delta: number) {
  if (delta === 0) return "0";

  return delta > 0
    ? `+${delta}`
    : `${delta}`;
}

export function formatWorkoutDate(date: string) {
  return new Date(date).toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
  });
}

export function formatWorkoutTime(date: string) {
  return new Date(date).toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatWorkoutDateTime(date: string) {
  const d = new Date(date);

  return `${d.toLocaleDateString()} • ${d.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
}