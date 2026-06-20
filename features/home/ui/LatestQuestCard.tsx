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
    <div className="min-w-0 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <p className="min-w-0 truncate text-[12px] leading-4 text-white/60">
          {label}
        </p>
        <p className="shrink-0 text-[16px] leading-4 font-bold tabular-nums text-white">
          {value}
        </p>
      </div>
    </div>
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

  const xpEarned = hasWorkout && lastWorkout
    ? (lastWorkout.pullups + lastWorkout.dips) * 5
    : 0;

  const xp = formatXP(xpEarned);

  if (!lastWorkout) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        <Card className="relative overflow-hidden pt-4 pb-5 px-5">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 -top-12 h-40 w-40 rounded-full bg-violet-500/20 blur-2xl" />
            <div className="absolute -right-12 top-24 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl" />
          </div>

          <div className="relative">
            <div className="flex items-center justify-between gap-3">
              <div className="space-y-4">
                <p className="text-sm leading-5 text-muted-foreground">Latest quest</p>
                <p className="text-[13px] leading-5 text-white/60">No workouts yet</p>
              </div>
              <div className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5">
                <p className="text-[11px] leading-3 text-white/50">XP earned</p>
                <p className="text-base font-bold leading-5 tabular-nums text-violet-200">0 XP</p>
              </div>
            </div>

            <div className="mt-3">
              <div className="relative h-3 w-full overflow-hidden rounded-full bg-white/10">
                <div className="absolute inset-0 bg-white/5" />
                <motion.div
                  className="h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(139,92,246,1), rgba(74,222,128,1))",
                  }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-[12px] leading-4 text-white/50">Start your first quest</p>
                <p className="text-[12px] leading-4 text-white/40">0/100 XP</p>
              </div>
            </div>

            <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-[12px] leading-4 text-white/60">Try this</p>
              <p className="mt-1 text-sm leading-5 text-white/80">
                Log a workout with pullups and dips — you’ll start earning XP quests.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <Card className="relative overflow-hidden pt-0 px-4">
        {/* glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 -top-12 h-40 w-40 rounded-full bg-violet-500/20 blur-2xl" />
          <div className="absolute -right-12 top-24 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl" />
        </div>

        <div className="relative">
          {/* header row */}
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm leading-5 text-muted-foreground">Latest quest</p>
            </div>

            {hasWorkout ? (
              <div className="shrink-0">
                <div className="text-right leading-none">
                  <p className="text-[20px] leading-4 font-bold tabular-nums text-violet-400">
                    +{xp}
                  </p>
                </div>
              </div>
            ) : (
              <div className="shrink-0">
                <div className="text-right leading-none">
                  <p className="text-[20px] leading-4 font-bold tabular-nums text-violet-400">+0</p>
                </div>
              </div>
            )}
          </div>

          {/* stats */}
          {hasWorkout ? (
            <div className="mt-6 grid grid-cols-2 gap-2">
              {(() => {
                if (!lastWorkout) return null;
                return (
                  <>
                    <InlineStat label="Pullups" value={lastWorkout.pullups} />
                    <InlineStat label="Dips" value={lastWorkout.dips} />
                    <InlineStat
                      label="Pushups"
                      value={lastWorkout.pushups}
                    />
                    <InlineStat
                      label="Squats"
                      value={lastWorkout.squats}
                    />
                  </>
                );
              })()}
            </div>
          ) : (
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Complete a workout to generate your first quest.
            </p>
          )}
        </div>
      </Card>
    </motion.div>
  );
}

