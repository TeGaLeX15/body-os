// features/profile/ui/CharacterCard/CharacterBMI.tsx
"use client";

import type { Profile } from "@/features/profile/model/profile.types";

import { BMIBar } from "../BMIBar";

import { calculateBMI } from "@/features/profile/domain/calculateBMR";

type Props = {
  profile: Profile;
};

export function CharacterBMI({ profile }: Props) {
  const bmi = calculateBMI(profile);

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm uppercase tracking-widest text-white/50">
          Body Analysis
        </h3>

        <span className="text-lg font-bold">{bmi.toFixed(1)}</span>
      </div>

      <BMIBar profile={profile} />
    </section>
  );
}
