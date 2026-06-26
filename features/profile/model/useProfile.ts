// features/profile/model/useProfile.ts
"use client";

import { useEffect, useState } from "react";

import type { Profile } from "./profile.types";

import { profileRepository } from "../data/profileRepository";
import { applyProfileUpdate } from "../engine/profile.reducer";

export function useProfile() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProfile(profileRepository.get());
  }, []);

  function updateProfile(partial: Partial<Profile>) {
    if (!profile) return;

    const updated = applyProfileUpdate(profile, partial);

    setProfile(updated);
    profileRepository.save(updated);
  }

  return {
    profile,
    updateProfile,
  };
}