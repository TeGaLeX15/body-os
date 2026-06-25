// features/profile/domain/calculateBMR.ts
import type { Profile } from "../model/profile.types";

export function calculateBMI(profile: Profile) {
  const heightM = profile.height / 100;

  if (!heightM) return 0;

  return +(profile.currentWeight / (heightM * heightM)).toFixed(1);
}

export function getBMICategory(bmi: number) {
  if (bmi < 18.5) return "underweight";
  if (bmi < 25) return "normal";
  if (bmi < 30) return "overweight";
  return "obese";
}
