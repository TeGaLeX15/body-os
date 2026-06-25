// features/profile/engine/profile.reducer.ts
import type { Profile } from "../model/profile.types";

export function applyProfileUpdate(
  profile: Profile,
  partial: Partial<Profile>,
): Profile {
  const nextWeight = partial.currentWeight ?? profile.currentWeight;

  const weightChanged = nextWeight !== profile.currentWeight;

  return {
    ...profile,
    ...partial,

    weightHistory: weightChanged
      ? [
          ...profile.weightHistory,
          {
            weight: nextWeight,
            date: Date.now(),
          },
        ]
      : profile.weightHistory,

    updatedAt: Date.now(),
  };
}
