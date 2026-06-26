// features/hydration/data/hydrationStorage.ts
import { load, save } from "@/shared/storage/localStorage";

const KEY = "body_os_water_today";

export function getWaterToday() {
  return load<number>(KEY, 0);
}

export function addWater(amount: number) {
  const current = getWaterToday();

  save(KEY, current + amount);
}

export function saveWater(amount: number): void {
  save(KEY, amount);
}

export function resetWater() {
  save(KEY, 0);
}