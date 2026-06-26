// features/hydration/model/useHydration.ts
"use client";

import { useEffect, useState } from "react";

import { hydrationRepository } from "../data/hydrationRepository";

export function useHydration() {
  const [water, setWater] = useState(0);

  useEffect(() => {
    async function load() {
      const current = await hydrationRepository.get();
      setWater(current);
    }

    void load();
  }, []);

  async function add(amount: number) {
    const updated = await hydrationRepository.add(amount);
    setWater(updated);
  }

  async function reset() {
    await hydrationRepository.reset();
    setWater(0);
  }

  return {
    water,
    add,
    reset,
  };
}
