// features/profile/data/profileRepository.ts
import type { Profile } from "../model/profile.types";

import {
  getProfile,
  saveProfile,
  clearProfile,
} from "./profileStorage";

export const profileRepository = {
  get(): Profile | null {
    return getProfile();
  },

  save(profile: Profile): void {
    saveProfile(profile);
  },

  clear(): void {
    clearProfile();
  },
};