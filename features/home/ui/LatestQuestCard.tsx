"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import type { WorkoutEntry } from "@/features/workout/model/workout.types";

function InlineStat({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <Card variant="soft" className="p-3">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-white/70 truncate min-w-0">
          {label}
        </p>

        <p className="text-base font-bold tabular-nums text-white">
          {value}
        </p>
      </div>
    </Card>
  );
}

function formatXP(xp: number) {
  if (!Number.isFinite(xp) || xp <= 0) return 0;
  return Math.round(xp);
}

export function LatestQuestCard({
  lastWorkout,
}: {
  lastWorkout: WorkoutEntry | undefined;
}) {
  const hasWorkout = Boolean(lastWorkout);

  const xpEarned =
    hasWorkout && lastWorkout
      ? (lastWorkout.pullups + lastWorkout.dips) * 5
      : 0;

  const xp = formatXP(xpEarned);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <Card variant="soft" className="p-5 space-y-5 relative overflow-hidden">

        {/* glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 -top-12 h-40 w-40 rounded-full bg-violet-500/20 blur-2xl" />
          <div className="absolute -right-12 top-24 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl" />
        </div>

        <div className="relative space-y-5">

          {/* HEADER */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-white/80">
              Latest quest
            </p>

            <p className="text-xl font-bold tabular-nums text-violet-400">
              +{xp}
            </p>
          </div>

          {/* EMPTY STATE */}
          {!hasWorkout && (
            <div className="space-y-3">
              <p className="text-sm leading-6 text-white/70">
                Complete a workout to generate your first quest.
              </p>

              <Card variant="soft" className="p-4">
                <p className="text-xs text-white/60">
                  Try this
                </p>

                <p className="mt-1 text-sm text-white">
                  Log pullups and dips — you’ll start earning XP quests.
                </p>
              </Card>
            </div>
          )}

          {/* STATS */}
          {hasWorkout && lastWorkout && (
            <div className="grid grid-cols-2 gap-2">
              <InlineStat label="Pullups" value={lastWorkout.pullups} />
              <InlineStat label="Dips" value={lastWorkout.dips} />
              <InlineStat label="Pushups" value={lastWorkout.pushups} />
              <InlineStat label="Squats" value={lastWorkout.squats} />
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
