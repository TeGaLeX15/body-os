// features/progress/ui/Heatmap/HeatmapCell.ts
type Props = {
  value: number;
  date: string;
};

function intensity(value: number) {
  if (value === 0) {
    return "bg-muted";
  }

  if (value === 1) {
    return "bg-emerald-500/25";
  }

  if (value === 2) {
    return "bg-emerald-500/50";
  }

  return "bg-emerald-500";
}

export default function HeatmapCell({
  value,
  date,
}: Props) {
  const day = new Date(date).getDate();

  return (
    <div
      title={`${date} • ${value} session(s)`}
      className={`
        aspect-square
        rounded-md
        transition-all
        hover:scale-105
        cursor-pointer
        flex items-center justify-center
        text-[10px] font-medium
        ${intensity(value)}
      `}
    >
      {day}
    </div>
  );
}