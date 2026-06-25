// features/profile/ui/GoalCard.tsx
"use client";

type Props = {
  label: string;
  value: number;
  max: number;
};

export function GoalCard({ label, value, max }: Props) {
  const percent = Math.round((value / max) * 100);

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="flex justify-between text-sm">
        <span className="text-white/60">{label}</span>
        <span className="text-white">{value}/{max}</span>
      </div>

      <div className="mt-2 h-2 w-full rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-violet-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}