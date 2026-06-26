// features/hydration/api/hydrationApi.ts
import { getWaterToday, saveWater, resetWater } from "../data/hydrationStorage";

export const hydrationApi = {
  async get(): Promise<number> {
    return getWaterToday();
  },

  async save(amount: number): Promise<void> {
    saveWater(amount);
  },

  async reset(): Promise<void> {
    resetWater();
  },
};
