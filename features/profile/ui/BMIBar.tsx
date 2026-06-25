// features/profile/ui/BMIBar.tsx
"use client";

import { useMemo } from "react";
import type { Profile } from "../model/profile.types";

type Props = {
  profile: Profile;
};

export function BMIBar({ profile }: Props) {
  const bmi = useMemo(() => {
    const h = profile.height / 100;
    return +(profile.currentWeight / (h * h)).toFixed(1);
  }, [profile]);

  const category = useMemo(() => {
    if (bmi < 18.5) return "underweight";
    if (bmi < 25) return "normal";
    if (bmi < 30) return "overweight";
    return "obese";
  }, [bmi]);

  const clampBMI = Math.min(Math.max(bmi, 16), 40);
  const percent = ((clampBMI - 16) / (40 - 16)) * 100;

  const markerColor =
    category === "normal"
      ? "bg-emerald-400"
      : category === "underweight"
        ? "bg-blue-400"
        : category === "overweight"
          ? "bg-orange-400"
          : "bg-red-500";

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-white/60">BMI</span>
        <div className="text-right">
          <div className="font-semibold">{bmi}</div>
          <div className="text-[10px] text-white/40 capitalize">{category}</div>
        </div>
      </div>

      {/* SCALE */}
      <div className="relative h-3 w-full rounded-full bg-white/10 overflow-hidden flex">
        {/* UNDERWEIGHT */}
        <div className="w-[10.4%] bg-blue-500/40" />

        {/* NORMAL */}
        <div className="w-[27.1%] bg-emerald-500/40" />

        {/* OVERWEIGHT */}
        <div className="w-[20.8%] bg-orange-500/40" />

        {/* OBESITY */}
        <div className="w-[41.7%] bg-red-500/40" />

        {/* MARKER */}
        <div
          className={`absolute top-0 bottom-0 w-1 ${markerColor}`}
          style={{ left: `${percent}%` }}
        />
      </div>

      {/* LABELS */}
      <div className="flex justify-between text-[10px] text-white/40">
        <span>16</span>
        <span>18.5</span>
        <span>25</span>
        <span>30</span>
        <span>40+</span>
      </div>

      {/* STATUS */}
      <div className="text-xs text-white/60">
        Status:{" "}
        <span
          className={
            category === "normal"
              ? "text-emerald-400 font-semibold"
              : category === "underweight"
                ? "text-blue-400 font-semibold"
                : category === "overweight"
                  ? "text-orange-400 font-semibold"
                  : "text-red-400 font-semibold"
          }
        >
          {category}
        </span>
      </div>
    </div>
  );
}
