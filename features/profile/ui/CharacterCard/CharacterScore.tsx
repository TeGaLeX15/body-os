// features/profile/ui/CharacterCard/CharacterScore.tsx
"use client";

type Props = {
  score: number;
};

export function CharacterScore({ score }: Props) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm uppercase tracking-widest text-white/50">
          Body Score
        </h3>

        <span className="text-lg font-bold text-violet-300">{score}/100</span>
      </div>

      <div className="overflow-hidden rounded-full bg-white/10 h-4">
        <div
          className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-violet-500
                        via-fuchsia-500
                        to-pink-500
                        transition-all
                        duration-700
                    "
          style={{
            width: `${score}%`,
          }}
        />
      </div>

      <div className="text-xs text-white/45">
        Overall physical condition based on workouts, weight progress and
        profile metrics.
      </div>
    </section>
  );
}
