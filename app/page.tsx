 "use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { HeroCard } from "@/features/home/ui/HeroCard";
import { LatestQuestCard } from "@/features/home/ui/LatestQuestCard";
import { Dumbbell, Move3D, Flame, BarChart3 } from "lucide-react";


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
  icon,
}: {
  title: string;
  value: string | number;
  hint: string;
  icon?: React.ReactNode;
}) {
  const glowClass = "bg-white/10";
  const accentClass = "text-white";
  const t = {
    glow: "bg-white/10",
    accent: "text-white",
  };

  return (
    <Card className="relative overflow-hidden p-4">
      <div
        className={`absolute -left-10 -top-10 h-24 w-24 rounded-full blur-2xl ${t.glow}`}
      />

      <div className="relative flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5 ${t.accent} `}
          >
            {icon}
          </div>
          <p className="text-xs font-semibold text-muted-foreground">{title}</p>
        </div>

        <p className="text-4xl font-extrabold tracking-tight">
          <span className={t.accent}>{value}</span>
        </p>

        <p className="text-[12px] text-white/50">{hint}</p>
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
        className="grid grid-cols-2 gap-3 text-center [&>*]:transition-transform [&>*]:duration-200 [&>*]:hover:scale-[1.01]"
      >
        <StatTile
          title="Streak"
          value={streak}
          hint="🔥 keep going"
          icon={<Flame size={16} className="opacity-90" />}
        />

        <StatTile
          title="Strength"
          value={strength}
          hint="index score"
          icon={<Move3D size={16} className="opacity-90" />}
        />

        <StatTile
          title="Weekly"
          value={weekly.pullups}
          hint="pull-ups total"
          icon={<Dumbbell size={16} className="opacity-90" />}
        />

        <StatTile
          title="PR"
          value={pr.pullups}
          hint="personal best"
          icon={<BarChart3 size={16} className="opacity-90" />}
        />
      </motion.div>

      {/* QUEST */}
      <LatestQuestCard lastWorkout={lastWorkout} />

    </div>
  );
}
