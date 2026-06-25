// features/home/ui/goal-journey/GoalJourneyCard.tsx
type Props = {
  currentWeight: number;
  startWeight: number;
  goalWeight: number;
};

export function GoalJourneyCard({
  currentWeight,
  startWeight,
  goalWeight,
}: Props) {
  const isLosing = goalWeight < startWeight;

  const total = Math.abs(startWeight - goalWeight);

  const completed = isLosing
    ? startWeight - currentWeight
    : currentWeight - startWeight;

  const progress =
    total === 0
      ? 100
      : Math.min(
          100,
          Math.max(
            0,
            Math.round((completed / total) * 100)
          )
        );

  const remaining = Math.abs(
    currentWeight - goalWeight
  );

  const goalReached = progress >= 100;

  return (
    <div
      className={`
        relative overflow-hidden
        rounded-3xl
        backdrop-blur-xl
        p-5
        transition-all duration-500

        ${
          goalReached
            ? "border border-primary/30 bg-primary/10"
            : "border border-border bg-card/30"
        }
      `}
    >
      {goalReached && (
        <div
          className="
            absolute inset-0
            animate-aurora
            opacity-20
            pointer-events-none
          "
        />
      )}

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Goal Journey
            </p>

            <h3 className="mt-1 text-lg font-semibold">
              {progress}% Complete
            </h3>

            {goalReached && (
              <p className="mt-1 text-xs font-medium text-primary">
                Goal achieved 🎉
              </p>
            )}
          </div>

          <div className="text-3xl">
            {goalReached ? "🏆" : "🎯"}
          </div>
        </div>

        <div className="mt-5">
          <div className="flex justify-between text-sm">
            <div>
              <p className="text-muted-foreground">
                Current
              </p>

              <p className="font-semibold">
                {currentWeight} kg
              </p>
            </div>

            <div className="text-right">
              <p className="text-muted-foreground">
                Target
              </p>

              <p className="font-semibold">
                {goalWeight} kg
              </p>
            </div>
          </div>

          <div className="mt-4 h-3 overflow-hidden rounded-full bg-secondary">
            <div
              className={`
                h-full rounded-full
                transition-all duration-700

                ${
                  goalReached
                    ? "bg-gradient-to-r from-primary to-primary/70"
                    : "bg-gradient-to-r from-primary/70 to-primary"
                }
              `}
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <div className="mt-3 flex justify-between text-xs text-muted-foreground">
            <span>
              Started: {startWeight} kg
            </span>

            <span>
              {goalReached
                ? "Completed"
                : `${remaining.toFixed(1)} kg left`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}