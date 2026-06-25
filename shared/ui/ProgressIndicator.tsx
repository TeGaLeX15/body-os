// shared/ui/ProgressIndicator.tsx
"use client";

type Props = {
  value: number; // 0 - 100
  step?: number;
  totalSteps?: number;
  showPercent?: boolean;
  className?: string;
};

export function ProgressIndicator({
  value,
  step,
  totalSteps,
  showPercent = true,
  className = "",
}: Props) {
  const safeValue = Math.min(100, Math.max(0, value));

  return (
    <div className={`w-full pt-6 pb-4 ${className}`}>
      {/* top row */}
      <div className="flex items-center justify-between mb-3">
        {step !== undefined && totalSteps !== undefined ? (
          <span className="text-xs tracking-wide text-white/50">
            Step {step + 1} / {totalSteps}
          </span>
        ) : (
          <span />
        )}

        {showPercent && (
          <span className="text-xs text-white/40 tabular-nums">
            {Math.round(safeValue)}%
          </span>
        )}
      </div>

      {/* bar container */}
      <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full bg-white/80 rounded-full transition-all duration-300 ease-out"
          style={{
            width: `${safeValue}%`,
          }}
        />
      </div>
    </div>
  );
}