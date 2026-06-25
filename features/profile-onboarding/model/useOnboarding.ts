// features/profile-onboarding/model/useOnboarding.ts
"use client";

import { useState } from "react";

import {
  initialOnboardingState,
  type OnboardingState,
  type BodyData,
  type TargetData,
} from "./onboarding.types";

import { saveProfile } from "@/features/profile/data/profileStorage";
import type { Profile } from "@/features/profile/model/profile.types";

export function useOnboarding() {
  const [step, setStep] = useState<number>(0);
  const [data, setData] = useState<OnboardingState>(initialOnboardingState);

  function updateGoal(goal: OnboardingState["goal"]) {
    setData((p) => ({ ...p, goal }));
  }

  function updateBody(body: BodyData) {
    setData((p) => ({ ...p, body }));
  }

  function updateActivity(activity: OnboardingState["activity"]) {
    setData((p) => ({ ...p, activity }));
  }

  function updateTarget(target: TargetData) {
    setData((p) => ({ ...p, target }));
  }

  function next() {
    setStep((s) => s + 1);
  }

  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  function finish() {
    if (!data.goal || !data.activity) return;

    const profile: Profile = {
      goal: data.goal,
      activity: data.activity,
      height: data.body.height,
      weight: data.body.weight,
      age: data.body.age,
      goalWeight: data.target.goalWeight,
      waterGoalMl: data.target.waterGoalMl,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    saveProfile(profile);
  }

  return {
    step,
    data,
    updateGoal,
    updateBody,
    updateActivity,
    updateTarget,
    next,
    back,
    finish,
  };
}