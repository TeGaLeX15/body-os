// features/hydration/data/hydrationRepository.ts
import { hydrationApi } from "../api/hydrationApi";

export const hydrationRepository = {
  get(): Promise<number> {
    return hydrationApi.get();
  },

  save(amount: number): Promise<void> {
    return hydrationApi.save(amount);
  },

  async add(amount: number): Promise<number> {
    const current = await hydrationApi.get();

    const next = current + amount;

    await hydrationApi.save(next);

    return next;
  },

  reset(): Promise<void> {
    return hydrationApi.reset();
  },
};
