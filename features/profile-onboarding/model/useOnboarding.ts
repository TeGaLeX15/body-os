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

    const now = Date.now();

    const profile: Profile = {
      goal: data.goal,
      activity: data.activity,

      height: Number(data.body.height),
      age: Number(data.body.age),

      startWeight: Number(data.body.weight),
      currentWeight: Number(data.body.weight),

      goalWeight: Number(data.target.goalWeight),
      waterGoalMl: Number(data.target.waterGoalMl),

      weightHistory: [
        {
          weight: Number(data.body.weight),
          date: now,
        },
      ],

      createdAt: now,
      updatedAt: now,
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