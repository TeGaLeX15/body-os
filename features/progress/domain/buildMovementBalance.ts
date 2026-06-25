// features/progress/domain/buildMovementBalance.ts
import type { WorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";

export function buildMovementBalance(
  analytics: WorkoutAnalytics,
) {
  const push =
    analytics.weekly.pushups +
    analytics.weekly.dips;

  const pull =
    analytics.weekly.pullups;

  const legs =
    analytics.weekly.squats;

  const total =
    push + pull + legs || 1;

  const pushPercent = Math.round(
    (push / total) * 100,
  );

  const pullPercent = Math.round(
    (pull / total) * 100,
  );

  const legsPercent = Math.round(
    (legs / total) * 100,
  );

  const values = [pushPercent, pullPercent, legsPercent];

  const max = Math.max(...values);
  const min = Math.min(...values);

  const imbalance = max - min;

  const balanceScore = Math.max(
    0,
    100 - imbalance,
  );

  const dominant =
    push >= pull && push >= legs
      ? "Push"
      : pull >= legs
      ? "Pull"
      : "Legs";

  const weakest =
    push <= pull && push <= legs
      ? "Push"
      : pull <= legs
      ? "Pull"
      : "Legs";

  return {
    push,
    pull,
    legs,

    pushPercent,
    pullPercent,
    legsPercent,

    dominant,
    weakest,

    balanceScore,
  };
}