// features/progress/ui/InsightCards/InsightItem.tsx
"use client";

import { motion } from "framer-motion";
import type { Insight } from "@/features/progress/lib/buildInsights";
import { getInsightIcon } from "./getInsightIcon";

type Props = {
  insight: Insight;
};

export default function InsightItem({ insight }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-white/10 bg-white/5 p-3 flex justify-between"
    >
      <div className="flex gap-2">
        {getInsightIcon(insight.id)}

        <div>
          <p className="text-xs font-semibold">{insight.title}</p>
          <p className="text-[10px] text-white/60">{insight.value}</p>
        </div>
      </div>

      <div className="text-white font-bold">{insight.value}</div>
    </motion.div>
  );
}
