// features/profile/domain/calculateBMR.ts
import type { Profile } from "../model/profile.types";

/**
 * Mifflin-St Jeor (упрощённо)
 */
export function calculateBMR(profile: Profile) {
  const { weight, height, age } = profile;

  return Math.round(
    10 * weight +
      6.25 * height -
      5 * age +
      5 // assume male baseline (потом можно пол добавить)
  );
}