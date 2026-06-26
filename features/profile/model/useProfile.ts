// features/profile/model/useProfile.ts
"use client";

import { useEffect, useState } from "react";

import type { Profile } from "./profile.types";

import { profileRepository } from "../data/profileRepository";
import { applyProfileUpdate } from "../engine/profile.reducer";

export function useProfile() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      const data = await profileRepository.get();

      if (mounted) {
        setProfile(data);
      }
    }

    void load();

    return () => {
      mounted = false;
    };
  }, []);

  async function updateProfile(partial: Partial<Profile>) {
    if (!profile) return;

    const updated = applyProfileUpdate(profile, partial);

    setProfile(updated);

    await profileRepository.save(updated);
  }

  return {
    profile,
    updateProfile,
  };
}
