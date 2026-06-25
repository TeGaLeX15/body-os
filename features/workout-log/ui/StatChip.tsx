// features/workout-log/ui/StatChip.tsx
import { formatDelta } from "../lib/formatters";

type Props = {
  value: number;
  prevValue?: number;
  icon?: React.ReactNode;
};

export function StatChip({
  value,
  prevValue,
  icon,
}: Props) {
  const delta =
    prevValue === undefined
      ? undefined
      : value - prevValue;

  let textClass = "text-white/70";
  let bgClass = "bg-white/5";

  if (delta !== undefined) {
    if (delta > 0) {
      textClass = "text-emerald-300";
      bgClass = "bg-emerald-500/10";
    } else if (delta < 0) {
      textClass = "text-rose-300";
      bgClass = "bg-rose-500/10";
    }
  }

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-1 ${bgClass}`}
    >
      {icon}

      <span
        className={`text-[11px] font-semibold tabular-nums ${textClass}`}
      >
        {value}
      </span>

      {delta !== undefined && (
        <span
          className={`text-[10px] tabular-nums ${textClass}`}
        >
          {formatDelta(delta)}
        </span>
      )}
    </div>
  );
}