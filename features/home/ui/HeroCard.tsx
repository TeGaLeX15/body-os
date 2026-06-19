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

  // Визуальная защита от рассинхрона: гарантируем точное соответствие
  // заполнения и значения XP.
  const fillWidth = `${percent}%`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <Card className="relative overflow-hidden p-6 text-center space-y-4 bg-gradient-to-b from-zinc-900 to-black border-white/10">

        {/* glow */}
        <div className="absolute inset-0 opacity-20 blur-2xl bg-violet-500/20 pointer-events-none" />

        {/* LEVEL */}
        <p className="text-xs text-white/50 uppercase tracking-widest">
          Your Level
        </p>

        <motion.p
          className="text-6xl font-bold"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
        >
          {level}
        </motion.p>

        {/* 💥 XP BAR FIX (ВАЖНО) */}
        <div className="relative h-3 w-full rounded-full bg-white/10 overflow-hidden">
        
        {/* background glow layer */}
        <div className="absolute inset-0 bg-white/5" />

        {/* fill */}
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: fillWidth }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ width: fillWidth, backgroundImage: 'linear-gradient(to right, #8b5cf6, #4ade80)' }}
        />

        </div>

        {/* TEXT */}
        <p className="text-xs text-white/40">
          {safeXp} / {safeMax} XP
        </p>

        <p className="text-[11px] text-white/30">
          Train. Upgrade. Evolve.
        </p>
      </Card>
    </motion.div>
  );
}