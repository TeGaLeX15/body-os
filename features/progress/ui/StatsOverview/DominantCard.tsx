// features/progress/ui/StatsOverview/DominantCard.tsx
export default function DominantCard({
  value,
}: {
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="text-[11px] text-white/50 mb-2">
        Dominant movement
      </div>

      <div className="text-sm font-semibold text-white">
        {value.toUpperCase()}
      </div>
    </div>
  );
}