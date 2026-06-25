// features/profile/model/useProfile.ts
"use client";

import { useEffect, useState } from "react";

import type { Profile } from "./profile.types";

import {
  getProfile,
  saveProfile,
} from "../data/profileStorage";

export function useProfile() {
  const [profile, setProfile] =
    useState<Profile | null>(null);

  useEffect(() => {
    const data = getProfile();

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProfile(data);
  }, []);

  function updateProfile(
    partial: Partial<Profile>
  ) {
    if (!profile) return;

    const nextWeight =
      partial.currentWeight ??
      profile.currentWeight;

    const weightChanged =
      nextWeight !== profile.currentWeight;

    const updated: Profile = {
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

    setProfile(updated);
    saveProfile(updated);
  }

  return {
    profile,
    updateProfile,
  };
}