// features/profile/ui/CharacterCard/CharacterCard.tsx
"use client";

import type { CharacterCardProps } from "./types";

import { CharacterHeader } from "./CharacterHeader";
import { CharacterAttributes } from "./CharacterAttributes";
import { CharacterScore } from "./CharacterScore";
import { CharacterJourney } from "./CharacterJourney";
import { CharacterBMI } from "./CharacterBMI";

export function CharacterCard({
  profile,
  metrics,
  analytics,
}: CharacterCardProps) {
  return (
    <section
      className="
            rounded-[30px]
            border
            border-white/10
            bg-gradient-to-br
            from-violet-500/10
            via-white/5
            to-transparent
            backdrop-blur-xl
            p-5
            space-y-6
        "
    >
      <CharacterHeader analytics={analytics} />

      <div className="h-px bg-white/10" />

      <CharacterAttributes profile={profile} metrics={metrics} />

      <div className="h-px bg-white/10" />

      <CharacterScore score={metrics.bodyScore ?? 0} />

      <div className="h-px bg-white/10" />

      <CharacterJourney
        start={profile.startWeight}
        current={profile.currentWeight}
        target={profile.goalWeight}
        progress={metrics.goalProgress}
      />

      <div className="h-px bg-white/10" />

      <CharacterBMI profile={profile} />
    </section>
  );
}
