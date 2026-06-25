// features/profile-onboarding/ui/steps/ActivityStep.tsx
"use client";

import { useState } from "react";
import type { ActivityLevel } from "@/features/profile/model/profile.types";

type Props = {
  value: ActivityLevel | null;
  onSelect: (v: ActivityLevel) => void;
  onBack: () => void;
};

const activities = [
  {
    id: "low",
    title: "Low activity",
    desc: "Sedentary lifestyle, little movement",
    icon: "🪑",
  },
  {
    id: "medium",
    title: "Moderate activity",
    desc: "Training 2–4 times per week",
    icon: "🏃",
  },
  {
    id: "high",
    title: "High activity",
    desc: "Daily training or physical work",
    icon: "🔥",
  },
] as const;

export function ActivityStep({ value, onSelect, onBack }: Props) {
  const [selected, setSelected] = useState<ActivityLevel | null>(value);

  return (
    <div className="w-full space-y-8 text-center">
      {/* HEADER */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          How active are you?
        </h1>

        <p className="text-sm text-white/40">
          This helps us adjust your calories & recovery
        </p>
      </div>

      {/* OPTIONS */}
      <div className="space-y-3 pt-2">
        {activities.map((a) => {
          const isActive = selected === a.id;

          return (
            <button
              key={a.id}
              onClick={() => setSelected(a.id)}
              className={`
                w-full rounded-2xl px-4 py-4 text-left
                border transition
                active:scale-[0.98]
                ${
                  isActive
                    ? "bg-white text-black border-white"
                    : "bg-white/5 text-white border-white/10 hover:bg-white/10"
                }
              `}
            >
              <div className="flex items-center gap-3">
                <div className="text-xl w-10 h-10 flex items-center justify-center rounded-xl">
                  {a.icon}
                </div>

                <div className="flex-1">
                  <div className="text-base font-medium">
                    {a.title}
                  </div>

                  <div
                    className={`text-xs mt-1 ${
                      isActive ? "text-black/60" : "text-white/40"
                    }`}
                  >
                    {a.desc}
                  </div>
                </div>

                <div className={isActive ? "text-black/40" : "text-white/20"}>
                  →
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* ACTIONS */}
      <div className="flex gap-3 pt-2">
        <button
          onClick={onBack}
          className="flex-1 rounded-2xl border border-white/10 bg-white/5 py-4 text-sm text-white/70"
        >
          Back
        </button>

        <button
          disabled={!selected}
          onClick={() => selected && onSelect(selected)}
          className={`
            flex-1 rounded-2xl py-4 text-sm font-semibold
            ${
              selected
                ? "bg-white text-black"
                : "bg-white/10 text-white/30"
            }
          `}
        >
          Continue
        </button>
      </div>
    </div>
  );
}