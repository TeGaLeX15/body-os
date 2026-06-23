"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import type { WorkoutEntry } from "@/features/workout/model/workout.types";
import { Icon } from "@/shared/ui/Icon";

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
          <p className="text-xs text-foreground/70 truncate">{label}</p>
        </div>

        <p className="text-base font-bold tabular-nums text-foreground">
          {value}
        </p>
      </div>
    </Card>
  );
}

export function LatestQuestCard({
  lastWorkout,
}: {
  lastWorkout: WorkoutEntry | undefined;
}) {
  const hasWorkout = Boolean(lastWorkout);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <Card
        variant="soft"
        className="px-4 py-4 space-y-4 relative overflow-hidden"
      >
        {/* glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 -top-12 h-40 w-40 rounded-full bg-violet-500/20 blur-2xl" />
          <div className="absolute -right-12 top-24 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl" />
        </div>

        <div className="relative gap-4">
          {/* HEADER */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-foreground/80">Latest activity</p>
          </div>

          {hasWorkout && lastWorkout && (
            <p className="text-[12px] text-muted-foreground leading-4 truncate mt-0.5 mb-4">
              {new Date(lastWorkout.date).toLocaleDateString(undefined, {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}{" "}
              •{" "}
              {new Date(lastWorkout.date).toLocaleTimeString(undefined, {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          )}

          {/* EMPTY STATE */}
          {!hasWorkout ? (
            <div className="relative overflow-hidden rounded-xl px-5 py-6 text-center">
              {/* glow */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-12 -top-10 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl" />
                <div className="absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl" />
              </div>

              <div className="relative space-y-3">
                <p className="text-lg font-semibold text-foreground">
                  Start your first workout
                </p>

                <p className="text-sm text-muted-foreground leading-6">
                  Log your training to track progress and build consistency.
                </p>

                <p className="text-xs text-muted-foreground/60">
                  Your activity will appear here automatically
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <InlineStat
                label="Pullups"
                value={lastWorkout!.pullups}
                icon={<Icon name="pullUp" size={18} />}
              />

              <InlineStat
                label="Dips"
                value={lastWorkout!.dips}
                icon={<Icon name="dips" size={18} />}
              />

              <InlineStat
                label="Pushups"
                value={lastWorkout!.pushups}
                icon={<Icon name="pushUp" size={18} />}
              />

              <InlineStat
                label="Squats"
                value={lastWorkout!.squats}
                icon={<Icon name="squat" size={18} />}
              />
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
