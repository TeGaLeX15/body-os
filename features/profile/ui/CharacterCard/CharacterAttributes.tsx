// features/profile/ui/CharacterCard/CharacterAttributes.tsx
"use client";

import { Flame, Droplets, Target, Weight, Ruler } from "lucide-react";

import type { CharacterCardProps } from "./types";

import { MiniAttribute } from "./MiniAttribute";

type Props = Pick<CharacterCardProps, "profile" | "metrics">;

export function CharacterAttributes({ profile, metrics }: Props) {
  return (
    <div className="space-y-3">
      <h3
        className="
        text-sm
        font-semibold
        uppercase
        tracking-widest
        text-white/50
        "
      >
        Attributes
      </h3>

      <MiniAttribute
        icon={<Flame size={16} />}
        label="Basal Metabolism"
        value={`${metrics.bmr} kcal`}
      />

      <MiniAttribute
        icon={<Droplets size={16} />}
        label="Water Target"
        value={`${metrics.waterGoalLiters} L`}
      />

      <MiniAttribute
        icon={<Weight size={16} />}
        label="Current Weight"
        value={`${profile.currentWeight} kg`}
      />

      <MiniAttribute
        icon={<Target size={16} />}
        label="Goal Progress"
        value={`${metrics.goalProgress}%`}
      />

      <MiniAttribute
        icon={<Ruler size={16} />}
        label="Height"
        value={`${profile.height} cm`}
      />
    </div>
  );
}
