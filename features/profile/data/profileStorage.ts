// features/profile/data/profileStorage.ts
import { load, save, remove } from "@/shared/storage/localStorage";
import type { Profile } from "../model/profile.types";

const KEY = "body-os-profile";

export function getProfile(): Profile | null {
  return load(KEY, null);
}

export function saveProfile(profile: Profile): void {
  save(KEY, profile);
}

export function clearProfile(): void {
  remove(KEY);
}
