// features/home/ui/LatestQuestGrid.tsx
import type { WorkoutEntry } from "@/features/workout/model/workout.types";
import { InlineStat } from "./InlineStat";
import { Icon } from "@/shared/ui/Icon";

type Props = {
  workout: WorkoutEntry;
};

export function LatestQuestGrid({ workout }: Props) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <InlineStat
        label="Pullups"
        value={workout.pullups}
        icon={<Icon name="pullUp" size={18} />}
      />

      <InlineStat
        label="Dips"
        value={workout.dips}
        icon={<Icon name="dips" size={18} />}
      />

      <InlineStat
        label="Pushups"
        value={workout.pushups}
        icon={<Icon name="pushUp" size={18} />}
      />

      <InlineStat
        label="Squats"
        value={workout.squats}
        icon={<Icon name="squat" size={18} />}
      />
    </div>
  );
}
