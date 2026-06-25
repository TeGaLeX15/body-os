// features/home/lib/formatWorkoutDate.ts
export function formatWorkoutDate(date: number) {
  const d = new Date(date);

  return {
    date: d.toLocaleDateString(undefined, {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    time: d.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
}
