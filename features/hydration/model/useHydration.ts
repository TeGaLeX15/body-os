// features/hydration/model/useHydration.ts
"use client";

import { useEffect, useState } from "react";

import { hydrationRepository } from "../data/hydrationRepository";

export function useHydration() {
  const [water, setWater] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWater(hydrationRepository.get());
  }, []);

  function add(amount: number) {
    const next = hydrationRepository.add(amount);

    setWater(next);
  }

  function reset() {
    hydrationRepository.reset();

    setWater(0);
  }

  return {
    water,
    add,
    reset,
  };
}