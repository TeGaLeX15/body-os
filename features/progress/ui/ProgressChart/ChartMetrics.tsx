// features/progress/ui/ProgressChart/ChartMetrics.tsx
type Props = {
  min: number;
  avg: number;
  max: number;
};

export default function ChartMetrics({ min, avg, max }: Props) {
  return (
    <div className="mt-3 grid grid-cols-3 text-[10px] text-white/40">
      <div>min {Math.round(min)}</div>

      <div className="text-center">avg {Math.round(avg)}</div>

      <div className="text-right">max {Math.round(max)}</div>
    </div>
  );
}
