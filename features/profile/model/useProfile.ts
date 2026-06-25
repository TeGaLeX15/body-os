// features/profile/model/useProfile.ts
"use client";

import { useEffect, useState } from "react";

import type { Profile } from "./profile.types";

import { getProfile, saveProfile } from "../data/profileStorage";
import { applyProfileUpdate } from "../engine/profile.reducer";

export function useProfile() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProfile(getProfile());
  }, []);

  function updateProfile(partial: Partial<Profile>) {
    if (!profile) return;

    const updated = applyProfileUpdate(profile, partial);

    setProfile(updated);
    saveProfile(updated);
  }

  return {
    profile,
    updateProfile,
  };
}
