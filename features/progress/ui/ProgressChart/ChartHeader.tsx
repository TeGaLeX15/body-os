// features/progress/ui/ProgressChart/ChartHeader.tsx
type Props = {
  delta: number;
};

export default function ChartHeader({ delta }: Props) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <div>
        <p className="text-xs font-semibold text-white">
          Strength Progress
        </p>

        <p className="text-[10px] text-white/40">
          centered view • full timeline
        </p>
      </div>

      <div
        className={`text-sm font-semibold ${
          delta > 0
            ? "text-emerald-400"
            : delta < 0
              ? "text-rose-400"
              : "text-white/50"
        }`}
      >
        {delta > 0 ? `+${delta}` : delta}
      </div>
    </div>
  );
}