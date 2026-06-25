// features/hydration/data/hydrationStorage.ts
const KEY = "body_os_water_today";

export function getWaterToday(): number {
  if (typeof window === "undefined") return 0;

  const raw = localStorage.getItem(KEY);
  return raw ? Number(raw) : 0;
}

export function addWater(amount: number) {
  if (typeof window === "undefined") return;

  const current = getWaterToday();
  localStorage.setItem(KEY, String(current + amount));
}

export function resetWater() {
  localStorage.setItem(KEY, "0");
}
