// features/profile/ui/GoalCard.tsx
"use client";

type Props = {
  startWeight: number;
  currentWeight: number;
  goalWeight: number;
};

export function GoalCard({ startWeight, currentWeight, goalWeight }: Props) {
  const isLosing = goalWeight < startWeight;

  const totalDistance = Math.abs(startWeight - goalWeight);

  const completedDistance = isLosing
    ? startWeight - currentWeight
    : currentWeight - startWeight;

  const progress =
    totalDistance === 0
      ? 100
      : Math.min(
          100,
          Math.max(0, Math.round((completedDistance / totalDistance) * 100)),
        );

  const remaining = Math.abs(currentWeight - goalWeight);

  const reached = remaining <= 0.1;

  return (
    <section
      className={`
        overflow-hidden
        rounded-3xl
        border
        p-5
        transition

        ${
          reached
            ? "border-emerald-500/30 bg-emerald-500/10"
            : "border-white/10 bg-white/5"
        }
      `}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs uppercase tracking-widest text-white/40">
            Weight Journey
          </div>

          <h2 className="mt-1 text-xl font-semibold">{progress}% Complete</h2>

          <p className="mt-1 text-sm text-white/50">
            {reached
              ? "Congratulations! Goal achieved."
              : `${remaining.toFixed(1)} kg remaining`}
          </p>
        </div>

        <div className="text-4xl">{reached ? "🏆" : "🎯"}</div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between text-sm">
          <div>
            <div className="text-white/40">Started</div>

            <div className="font-semibold">{startWeight.toFixed(1)} kg</div>
          </div>

          <div className="text-center">
            <div className="text-white/40">Current</div>

            <div className="font-semibold text-violet-400">
              {currentWeight.toFixed(1)} kg
            </div>
          </div>

          <div className="text-right">
            <div className="text-white/40">Goal</div>

            <div className="font-semibold">{goalWeight.toFixed(1)} kg</div>
          </div>
        </div>

        <div className="relative mt-5">
          <div className="h-3 overflow-hidden rounded-full bg-white/10">
            <div
              className={`
                h-full rounded-full transition-all duration-700

                ${
                  reached
                    ? "bg-gradient-to-r from-emerald-400 to-emerald-500"
                    : "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500"
                }
              `}
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          {!reached && (
            <div
              className="
                absolute
                top-1/2
                h-5
                w-5
                -translate-y-1/2
                -translate-x-1/2
                rounded-full
                border-2
                border-white
                bg-violet-500
                shadow-lg
                shadow-violet-500/40
              "
              style={{
                left: `${progress}%`,
              }}
            />
          )}
        </div>

        <div className="mt-3 flex justify-between text-xs text-white/40">
          <span>Start</span>
          <span>Today</span>
          <span>Goal</span>
        </div>
      </div>
    </section>
  );
}
