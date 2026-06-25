// features/profile-onboarding/model/onboarding.types.ts
import type {
  GoalType,
  ActivityLevel,
} from "@/features/profile/model/profile.types";

export interface BodyData {
  height: number;
  weight: number;
  age: number;
}

export interface TargetData {
  goalWeight: number;
  waterGoalMl: number;
}

export interface OnboardingState {
  goal: GoalType | null;
  body: BodyData;
  activity: ActivityLevel | null;
  target: TargetData;
}

export const initialOnboardingState: OnboardingState = {
  goal: null,
  body: {
    height: 0,
    weight: 0,
    age: 0,
  },
  activity: null,
  target: {
    goalWeight: 0,
    waterGoalMl: 0,
  },
};
