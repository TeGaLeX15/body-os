// features/profile/data/profileRepository.ts
import type { Profile } from "../model/profile.types";

import { profileApi } from "../api/profileApi";

export const profileRepository = {
  get(): Promise<Profile | null> {
    return profileApi.get();
  },

  save(profile: Profile): Promise<void> {
    return profileApi.save(profile);
  },

  clear(): Promise<void> {
    return profileApi.clear();
  },
};
