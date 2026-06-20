"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Icon } from "@/shared/icons/Icon";
import type { WorkoutEntry } from "../model/workout.types";
import { calculateWorkoutXP } from "@/features/home/lib/xp";

type Props = {
  workouts: WorkoutEntry[];
  totalCount?: number;
};

function formatXP(xp: number) {
  return xp > 0 ? `+${xp}` : "0";
}

function InlineStat({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon?: React.ReactNode;
}) {
  return (
    <Card variant="soft" className="p-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          {icon}
          <p className="text-xs text-white/70 truncate min-w-0">
            {label}
          </p>
        </div>

        <p className="text-base font-bold tabular-nums text-white">
          {value}
        </p>
      </div>
    </Card>
  );
}

export default function WorkoutList({ workouts, totalCount }: Props) {
  if (workouts.length === 0) {
    return (
      <Card className="p-5 text-center">
        <p className="text-sm text-muted-foreground">No workouts yet</p>
        <p className="text-xs text-muted-foreground/70 mt-1">
          Start your first session 💪
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      {workouts.map((workout, index) => {
        const xp = calculateWorkoutXP(workout);

        // номер тренировки (если есть totalCount — считаем от общего количества)
        const workoutNumber = totalCount
          ? totalCount - index
          : workouts.length - index;

        return (
          <motion.div
            key={workout.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
          >
            <Card variant="soft" className="relative overflow-hidden px-4 py-4">
              {/* glow */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-16 -top-12 h-40 w-40 rounded-full bg-violet-500/10 blur-2xl" />
                <div className="absolute -right-12 top-24 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl" />
              </div>

              <div className="relative flex flex-col gap-4">
                {/* HEADER */}
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm text-foreground/80">
                      Workout #{workoutNumber}
                    </p>

                    <p className="text-[12px] text-muted-foreground leading-4 truncate mt-0.5">
                      {new Date(workout.date).toLocaleDateString(undefined, {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}{" "}
                      •{" "}
                      {new Date(workout.date).toLocaleTimeString(undefined, {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>

                  <div className="flex items-center shrink-0">
                    <p className="text-xl font-bold tabular-nums text-violet-400">
                      {formatXP(xp)}
                    </p>
                  </div>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-2 gap-2">
                  <InlineStat
                    label="Pullups"
                    value={workout.pullups}
                    icon={<Icon name="pullUp" size={16} />}
                  />

                  <InlineStat
                    label="Dips"
                    value={workout.dips}
                    icon={<Icon name="dips" size={16} />}
                  />

                  <InlineStat
                    label="Pushups"
                    value={workout.pushups}
                    icon={<Icon name="pushUp" size={16} />}
                  />

                  <InlineStat
                    label="Squats"
                    value={workout.squats}
                    icon={<Icon name="squat" size={16} />}
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}