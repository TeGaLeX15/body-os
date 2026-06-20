"use client";

import { motion } from "framer-motion";
import { getWorkouts } from "@/shared/lib/storage";
import { buildInsights } from "../lib/insightEngine";
import { groupInsights } from "../lib/groupInsights";
import { Icon } from "@/shared/icons/Icon";
import type { Insight } from "../lib/insightEngine";

/* ---------------- ICON MAP ---------------- */

function getIcon(id: string) {
  if (id.includes("push")) return <Icon name="pushUp" size={14} />;
  if (id.includes("pull")) return <Icon name="pullUp" size={14} />;
  if (id.includes("squat")) return <Icon name="squat" size={14} />;
  return <Icon name="dips" size={14} />;
}

/* ---------------- COLOR SYSTEM ---------------- */

function getStyle(type: Insight["type"]) {
  switch (type) {
    case "good":
      return "bg-emerald-500/10 border-emerald-500/20 text-emerald-200";
    case "warning":
      return "bg-amber-500/10 border-amber-500/20 text-amber-200";
    default:
      return "bg-white/5 border-white/10 text-white/70";
  }
}

/* ---------------- CARD ---------------- */

function InsightCard({ insight }: { insight: Insight }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`rounded-xl border px-3 py-2 flex items-start justify-between gap-3 ${getStyle(
        insight.type,
      )}`}
    >
      <div className="flex items-start gap-2 min-w-0">
        <div className="shrink-0 opacity-80 mt-0.5">
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

      {insight.value !== undefined && (
        <div className="text-xs font-bold tabular-nums shrink-0">
          {insight.value}
        </div>
      )}
    </motion.div>
  );
}

/* ---------------- GROUP ---------------- */

function Group({
  title,
  items,
}: {
  title: string;
  items: Insight[];
}) {
  return (
    <div className="space-y-2">
      <p className="text-[9px] uppercase tracking-wider text-white/35">
        {title}
      </p>

      <div className="space-y-1.5">
        {items.map((i) => (
          <InsightCard key={i.id} insight={i} />
        ))}
      </div>
    </div>
  );
}

/* ---------------- MAIN ---------------- */

export default function InsightCards() {
  const workouts = getWorkouts();
  const insights = buildInsights(workouts);
  const groups = groupInsights(insights);

  if (insights.length === 0) return null;

  return (
    <div className="space-y-4">
      {groups.map((g) => (
        <Group key={g.id} title={g.title} items={g.items} />
      ))}
    </div>
  );
}