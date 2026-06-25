// features/home/ui/HeroCard.tsx
"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

type HeroCardProps = {
  level: number;
  xp: number;
  xpMax: number;
};

export function HeroCard({ level, xp, xpMax }: HeroCardProps) {
  const safeXp = Number(xp) || 0;
  const safeMax = Math.max(1, Number(xpMax) || 50);
  const percent = Math.min(100, Math.max(0, (safeXp / safeMax) * 100));

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <Card className="relative overflow-hidden p-6 text-center space-y-3 bg-gradient-to-b from-zinc-900 to-black border-white/10">
        <div className="pointer-events-none absolute inset-0 opacity-20 blur-2xl bg-violet-500/20" />

        <p className="text-sm uppercase tracking-widest text-foreground/50">
          Your Level
        </p>

        <motion.p className="text-6xl font-bold">{level}</motion.p>

        <div className="h-3 w-full rounded-full bg-foreground/10 overflow-hidden">
          <motion.div
            className="h-full"
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ duration: 0.8 }}
            style={{
              backgroundImage: "linear-gradient(to right, #8b5cf6, #4ade80)",
            }}
          />
        </div>

        <p className="text-sm text-foreground/40">
          {safeXp} / {safeMax} XP
        </p>
      </Card>
    </motion.div>
  );
}
