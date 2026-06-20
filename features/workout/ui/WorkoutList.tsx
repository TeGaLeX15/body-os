"use client";

import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import type { WorkoutEntry } from "../model/workout.types";
import { calculateWorkoutXP } from "@/features/home/lib/xp";

type Props = {
  workouts: WorkoutEntry[];
};

function formatXP(xp: number) {
  return xp > 0 ? `+${xp}` : "0";
}

function InlineStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="min-w-0 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[12px] leading-none text-white/60 truncate">
          {label}
        </p>

        <p className="text-[16px] leading-none font-bold tabular-nums text-white shrink-0">
          {value}
        </p>
      </div>
    </div>
  );
}

export default function WorkoutList({ workouts }: Props) {
  if (workouts.length === 0) {
    return (
      <Card className="p-5 text-center">
        <p className="text-sm text-white/60">No workouts yet</p>
        <p className="text-xs text-white/40 mt-1">
          Start your first session 💪
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      {workouts.map((workout, index) => {
        const xp = calculateWorkoutXP(workout);

        return (
          <motion.div
            key={workout.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
          >
            <Card className="relative overflow-hidden px-4 py-4 hover:scale-[1.01] transition-transform">
              {/* glow */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-16 -top-12 h-40 w-40 rounded-full bg-violet-500/20 blur-2xl" />
                <div className="absolute -right-12 top-24 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl" />
              </div>

              <div className="relative flex flex-col gap-4">
                {/* HEADER */}
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[12px] font-medium text-white/80 leading-4 truncate">
                      Workout session
                    </p>

                    <p className="text-[12px] text-white/50 leading-4 truncate mt-0.5">
                      {new Date(workout.date).toLocaleDateString(undefined, {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  {/* XP badge (clean, no label) */}
                  <div className="flex items-center shrink-0">
                    <p className="text-[18px] font-bold tabular-nums text-violet-400 leading-none">
                      {formatXP(calculateWorkoutXP(workout))}
                    </p>
                  </div>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <InlineStat label="Pullups" value={workout.pullups} />
                  <InlineStat label="Dips" value={workout.dips} />
                  <InlineStat label="Pushups" value={workout.pushups} />
                  <InlineStat label="Squats" value={workout.squats} />
                </div>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
