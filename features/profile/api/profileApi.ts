// features/profile/api/profileApi.ts
import type { Profile } from "../model/profile.types";

import { getProfile, saveProfile, clearProfile } from "../data/profileStorage";

export const profileApi = {
  async get(): Promise<Profile | null> {
    return getProfile();
  },

  async save(profile: Profile): Promise<void> {
    saveProfile(profile);
  },

  async clear(): Promise<void> {
    clearProfile();
  },
};
