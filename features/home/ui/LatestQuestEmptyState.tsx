// features/home/ui/LatestQuestEmptyState.tsx
export function LatestQuestEmptyState() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-5 py-6 text-center">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-12 -top-10 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl" />
        <div className="absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl" />
      </div>

      <div className="relative space-y-3">
        <p className="text-lg font-semibold text-foreground">
          Start your first workout
        </p>

        <p className="text-sm text-muted-foreground leading-6">
          Log your training to track progress and build consistency.
        </p>

        <p className="text-xs text-muted-foreground/60">
          Your activity will appear here automatically
        </p>
      </div>
    </div>
  );
}
