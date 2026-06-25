// features/hydration/model/useHydration.ts
"use client";

import { useEffect, useState } from "react";
import { getWaterToday, addWater, resetWater } from "../data/hydrationStorage";

export function useHydration() {
  const [water, setWater] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWater(getWaterToday());
  }, []);

  function add(amount: number) {
    addWater(amount);
    setWater(getWaterToday());
  }

  function reset() {
    resetWater();
    setWater(0);
  }

  return {
    water,
    add,
    reset,
  };
}
