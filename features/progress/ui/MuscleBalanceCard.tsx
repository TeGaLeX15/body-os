"use client";

import { getWorkouts } from "@/shared/lib/storage";
import { buildMuscleBalance } from "../lib/buildMuscleBalance";
import { motion } from "framer-motion";

function Bar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-[10px] text-white/50">
        <span>{label}</span>
        <span>{Math.round(value * 100)}%</span>
      </div>

      <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full transition-all"
          style={{
            width: `${value * 100}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}

export default function MuscleBalanceCard() {
  const workouts = getWorkouts();
  const data = buildMuscleBalance(workouts);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-3"
    >
      <p className="text-[10px] uppercase tracking-wider text-white/40">
        Muscle balance
      </p>

      <Bar label="Push" value={data.pushRatio} color="#a855f7" />
      <Bar label="Pull" value={data.pullRatio} color="#22c55e" />
      <Bar label="Legs" value={data.legsRatio} color="#f59e0b" />

      <div className="pt-1 text-[10px] text-white/40">
        Dominant:{" "}
        <span className="text-white/70">{data.dominant}</span>
      </div>
    </motion.div>
  );
}