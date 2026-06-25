// features/profile/ui/CharacterCard/CharacterJourney.tsx
"use client";

type Props = {
  start: number;
  current: number;
  target: number;
  progress: number;
};

export function CharacterJourney({ start, current, target, progress }: Props) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm uppercase tracking-widest text-white/50">
          Goal Journey
        </h3>

        <span className="font-semibold">{progress}%</span>
      </div>

      <div className="flex items-center justify-between">
        <JourneyItem title="Start" value={start} />

        <Arrow />

        <JourneyItem title="Current" value={current} />

        <Arrow />

        <JourneyItem title="Target" value={target} />
      </div>

      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <div
          className="
                        h-full
                        bg-gradient-to-r
                        from-emerald-500
                        to-cyan-400
                        transition-all
                        duration-700
                    "
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </section>
  );
}

function JourneyItem({ title, value }: { title: string; value: number }) {
  return (
    <div className="text-center">
      <div className="text-[11px] text-white/50">{title}</div>

      <div className="mt-1 font-semibold">{value} kg</div>
    </div>
  );
}

function Arrow() {
  return <div className="text-white/30">→</div>;
}
