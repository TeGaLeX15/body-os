// features/progress/ui/ProgressSummaryHero/LastWorkoutCard.tsx
import { formatWorkoutDate } from "@/features/home/lib/formatWorkoutDate";

type Props = {
  date?: string;
};

export default function LastWorkoutCard({
  date,
}: Props) {
  return (
    <div className="rounded-xl border border-border bg-background p-3">
      <p className="text-[11px] text-muted-foreground">
        Last workout
      </p>

      <p className="text-sm font-medium">
        {date
          ? formatWorkoutDate(date).date
          : "No workouts yet"}
      </p>
    </div>
  );
}