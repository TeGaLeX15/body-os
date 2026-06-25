// features/workout-log/ui/WorkoutSkeleton.tsx
export function WorkoutSkeleton() {
  return (
    <div className="space-y-2 p-3">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="h-20 w-full animate-pulse rounded-xl bg-white/5"
        />
      ))}
    </div>
  );
}
