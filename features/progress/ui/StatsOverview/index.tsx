/* eslint-disable @next/next/no-img-element */
// features/progress/ui/StatsOverview/index.tsx
"use client";

import type { WorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";

import {
  getDominantMovement,
  getTrend,
  getStreak,
  getMaxReps,
  getTotalRepsByType,
} from "@/features/progress/domain/progressDerived";

import { iconMap } from "@/shared/icons/icon-mapper";

import StreakCard from "./StreakCard";
import TrendCard from "./TrendCard";
import DominantCard from "./DominantCard";
import { WorkCard } from "./WorkCard";
import { RepsCard } from "./RepsCard";

type Props = {
  analytics: WorkoutAnalytics;
};

export default function StatsOverview({ analytics }: Props) {
  const streak = getStreak(analytics);
  const trend = getTrend(analytics);
  const dominant = getDominantMovement(analytics);

  const maxReps = getMaxReps(analytics);
  const totalByType = getTotalRepsByType(analytics);

  return (
    <div className="space-y-5">
      {/* TOP METRICS (HERO ROW) */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="grid grid-cols-4 gap-2">
          <div className="flex flex-col items-center justify-center">
            <StreakCard value={streak} />
          </div>

          <div className="flex flex-col items-center justify-center">
            <TrendCard value={trend} />
          </div>

          <div className="flex flex-col items-center justify-center">
            <WorkCard value={streak} />
          </div>

          <div className="flex flex-col items-center justify-center">
            <RepsCard value={trend} />
          </div>
        </div>
      </div>

      {/* 🔥 MAX SETS (HERO / RECORDS) */}
      <div className="space-y-2">
        <p className="text-[10px] uppercase tracking-widest text-white/50">
          Best set
        </p>

        <div className="grid grid-cols-4 gap-2">
          {[
            { icon: "pullUp", value: maxReps.pullups },
            { icon: "dips", value: maxReps.dips },
            { icon: "pushUp", value: maxReps.pushups },
            { icon: "squat", value: maxReps.squats },
          ].map((item, i) => (
            <div
              key={i}
              className="
                relative flex flex-col items-center justify-center gap-1
                rounded-2xl
                bg-gradient-to-b from-white/15 to-white/5
                border border-white/15
                py-3
                shadow-[0_0_25px_rgba(255,255,255,0.06)]
              "
            >
              {/* glow dot */}
              <div className="absolute -top-1 h-10 w-10 rounded-full bg-white/10 blur-2xl" />

              <img
                src={iconMap[item.icon as keyof typeof iconMap]}
                className="h-5 w-5 invert opacity-100"
                alt=""
              />

              <span className="text-lg font-bold text-white leading-none">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 📊 TOTAL VOLUME (SECONDARY) */}
      <div className="space-y-2">
        <p className="text-[10px] uppercase tracking-widest text-white/20">
          Lifetime volume
        </p>

        <div className="grid grid-cols-4 gap-2">
          {[
            { icon: "pullUp", value: totalByType.pullups },
            { icon: "dips", value: totalByType.dips },
            { icon: "pushUp", value: totalByType.pushups },
            { icon: "squat", value: totalByType.squats },
          ].map((item, i) => (
            <div
              key={i}
              className="
                flex flex-col items-center justify-center gap-1
                rounded-xl
                border border-white/5
                bg-white/5
                py-2
                opacity-80
              "
            >
              <img
                src={iconMap[item.icon as keyof typeof iconMap]}
                className="h-4 w-4 invert opacity-40"
                alt=""
              />

              <span className="text-xs font-medium text-white/60">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* DOMINANT */}
      <DominantCard value={dominant} />
    </div>
  );
}
