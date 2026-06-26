import {
  getWaterToday,
  saveWater,
} from "./hydrationStorage";

export const hydrationRepository = {
  get(): number {
    return getWaterToday();
  },

  save(amount: number): void {
    saveWater(amount);
  },

  add(amount: number): number {
    const next = this.get() + amount;

    this.save(next);

    return next;
  },

  reset(): void {
    this.save(0);
  },
};