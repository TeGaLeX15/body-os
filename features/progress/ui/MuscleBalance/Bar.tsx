// features/progress/ui/MuscleBalance/Bar.tsx
type BarProps = {
  label: string;
  value: number;
  total: number;
  color: string;
};

export default function Bar({ label, value, total, color }: BarProps) {
  const percent = total === 0 ? 0 : (value / total) * 100;

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-[11px] text-white/60">
        <span>{label}</span>
        <span>{Math.round(percent)}%</span>
      </div>

      <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full"
          style={{ width: `${percent}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}