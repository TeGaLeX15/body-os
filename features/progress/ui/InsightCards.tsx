"use client";

import { motion } from "framer-motion";
import type { WorkoutEntry } from "@/features/workout/model/workout.types";

import { buildInsights, getCoachMode } from "../lib/insightEngine";
import { Icon } from "@/shared/icons/Icon";
import type { Insight } from "../lib/insightEngine";

/* ---------------- ICON ---------------- */

function getIcon(id: string) {
  if (id.includes("push")) return <Icon name="pushUp" size={14} />;
  if (id.includes("pull")) return <Icon name="pullUp" size={14} />;
  if (id.includes("squat")) return <Icon name="squat" size={14} />;
  return <Icon name="dips" size={14} />;
}

/* ---------------- STYLE ---------------- */

function getStyle(i: Insight) {
  return [
    "rounded-xl border px-3 py-2 flex items-center justify-between gap-3",
    i.type === "good"
      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-200"
      : i.type === "warning"
        ? "bg-amber-500/10 border-amber-500/20 text-amber-200"
        : "bg-white/5 border-white/10 text-white/70",
  ].join(" ");
}

/* ---------------- CARD ---------------- */

function Card({ insight }: { insight: Insight }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className={getStyle(insight)}
    >
      {/* LEFT SIDE */}
      <div className="flex items-start gap-2 min-w-0">
        <div className="mt-0.5 opacity-80">
          {getIcon(insight.id)}
        </div>

        <div className="min-w-0">
          <p className="text-xs font-semibold truncate">
            {insight.title}
          </p>
          <p className="text-[10px] text-white/60 leading-4">
            {insight.description}
          </p>
        </div>
      </div>

      {/* RIGHT VALUE — FIXED UX */}
      {insight.value !== undefined && (
        <div className="
          flex items-center justify-center
          min-w-[40px]
          h-full
          text-base font-bold tabular-nums
          text-white
        ">
          {insight.value}
        </div>
      )}
    </motion.div>
  );
}

/* ---------------- MAIN ---------------- */

type InsightCardsProps = {
  workouts: WorkoutEntry[];
};

export default function InsightCards({ workouts }: InsightCardsProps) {
  const insights = buildInsights(workouts);

  const coach = getCoachMode(insights);

  if (!insights.length) return null;

  return (
    <div className="space-y-4">

      {/* 🧠 COACH MODE (UPGRADED PRIORITY VISUAL) */}
      <div className="
        rounded-xl border border-white/10
        bg-gradient-to-br from-white/10 to-white/5
        p-4 space-y-2
      ">
        <p className="text-[10px] uppercase tracking-wider text-white/40">
          Coach mode
        </p>

        <p className="text-sm font-semibold text-white">
          {coach.title}
        </p>

        <p className="text-xs text-white/70 leading-5">
          {coach.message}
        </p>

        <p className="text-[11px] text-emerald-300 font-medium">
          {coach.actionHint}
        </p>
      </div>

      {/* INSIGHTS */}
      <div className="space-y-1.5">
        {insights.map((i) => (
          <Card key={i.id} insight={i} />
        ))}
      </div>
    </div>
  );
}