"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { HeroCard } from "@/features/home/ui/HeroCard";

import { getWorkouts } from "@/shared/lib/storage";
import { WorkoutEntry } from "@/features/workout/model/workout.types";

import { calculateStreak } from "@/features/workout/lib/streak";
import {
  calculateWeeklyVolume,
  calculatePR,
} from "@/features/workout/lib/stats";
import { calculateStrengthIndex } from "@/features/workout/lib/strengthIndex";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

function StatTile({
  title,
  value,
  hint,
  tone,
}: {
  title: string;
  value: string | number;
  hint: string;
  tone: "violet" | "indigo" | "emerald" | "amber";
}) {
  const toneStyles: Record<typeof tone, { glow: string; accent: string }> = {
    violet: { glow: "bg-violet-500/20", accent: "text-violet-300" },
    indigo: { glow: "bg-indigo-500/20", accent: "text-indigo-300" },
    emerald: { glow: "bg-emerald-500/20", accent: "text-emerald-300" },
    amber: { glow: "bg-amber-500/20", accent: "text-amber-300" },
  };

  const t = toneStyles[tone];

  return (
    <Card className="relative overflow-hidden p-4">
      <div className={`absolute -left-10 -top-10 h-24 w-24 rounded-full blur-2xl ${t.glow}`} />
      <div className="relative flex items-start justify-between gap-3">
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold tracking-tight">
            <span className={t.accent}>{value}</span>
          </p>
          <p className="text-[11px] text-white/40">{hint}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          {tone.toUpperCase()}
        </div>
      </div>
    </Card>
  );
}

export default function Home() {
  const [workouts, setWorkouts] = useState<WorkoutEntry[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWorkouts(getWorkouts());
  }, []);

  const strength = useMemo(
    () => calculateStrengthIndex(workouts),
    [workouts]
  );

  const streak = useMemo(() => calculateStreak(workouts), [workouts]);
  const weekly = useMemo(() => calculateWeeklyVolume(workouts), [workouts]);
  const pr = useMemo(() => calculatePR(workouts), [workouts]);

  const lastWorkout = workouts[0];

  const level = Math.max(1, Math.floor(strength / 50));
  const xp = strength % 50;

  console.log("strength:", strength);
  console.log("xp:", xp);

  return (
    <div className="mx-auto max-w-md space-y-6 p-4">

      {/* HEADER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.25 }}
        className="text-center space-y-1"
      >
        <h1 className="text-2xl font-bold tracking-tight">BODY OS</h1>
        <p className="text-sm text-muted-foreground">
          Train. Progress. Evolve.
        </p>
      </motion.div>

      {/* HERO */}
      <HeroCard
        level={level}
        xp={xp}
        xpMax={50}
      />

      {/* STATS */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 gap-3"
      >
        <StatTile
          title="Streak"
          value={streak}
          hint="🔥 keep going"
          tone="violet"
        />

        <StatTile
          title="Strength"
          value={strength}
          hint="index score"
          tone="indigo"
        />

        <StatTile
          title="Weekly"
          value={weekly.pullups}
          hint="pull-ups total"
          tone="emerald"
        />

        <StatTile
          title="PR"
          value={pr.pullups}
          hint="personal best"
          tone="amber"
        />
      </motion.div>

      {/* QUEST */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.15 }}
      >
        <Card className="p-4 space-y-2">

          <p className="text-sm text-muted-foreground">
            Latest Quest
          </p>

          {lastWorkout ? (
            <>
              <p className="text-sm font-medium">
                🏋️ {lastWorkout.pullups} / {lastWorkout.dips} /{" "}
                {lastWorkout.pushups} / {lastWorkout.squats}
              </p>

              <p className="text-xs text-violet-400">
                +{(lastWorkout.pullups + lastWorkout.dips) * 5} XP earned
              </p>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">
              No quests yet
            </p>
          )}

        </Card>
      </motion.div>

    </div>
  );
}