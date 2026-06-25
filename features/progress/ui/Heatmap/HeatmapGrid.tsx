// features/progress/ui/Heatmap/HeatmapGrid.ts
import HeatmapCell from "./HeatmapCell";

import type {
  HeatmapDay,
} from "../../lib/buildHeatmapData";

type Props = {
  days: HeatmapDay[];
  offset: number;
};

const weekDays = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];

export default function HeatmapGrid({
  days,
  offset,
}: Props) {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-7 gap-1 text-[10px] text-muted-foreground">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({
          length: offset,
        }).map((_, i) => (
          <div
            key={`empty-${i}`}
            className="aspect-square"
          />
        ))}

        {days.map((day) => (
          <HeatmapCell
            key={day.key}
            value={day.value}
            date={day.key}
          />
        ))}
      </div>

      <div className="flex items-center justify-between text-[10px] text-muted-foreground">
        <span>Less</span>

        <div className="flex gap-1">
          <div className="h-3 w-3 rounded bg-muted" />
          <div className="h-3 w-3 rounded bg-emerald-500/25" />
          <div className="h-3 w-3 rounded bg-emerald-500/50" />
          <div className="h-3 w-3 rounded bg-emerald-500" />
        </div>

        <span>More</span>
      </div>
    </div>
  );
}