// app/workout/page.tsx
"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { PageHeader } from "@/shared/ui/PageHeader";

export default function WorkoutPage() {
  return (
    <div className="p-4 space-y-6">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-1 text-center"
      >
        <PageHeader
          title="Workout Hub"
          description="Choose how you want to train today"
        />
      </motion.div>

      {/* MAIN GRID */}
      <div className="space-y-4">
        {/* ================= OLD MODE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <Link href="/workout/legacy" className="block">
            <Card
              className="
              p-5 space-y-2
              bg-white/5 border border-white/10
              hover:bg-white/10 transition
              active:scale-[0.98]
            "
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">🧪 Classic Training</p>

                <span className="text-xs text-white/40">legacy</span>
              </div>

              <p className="text-xs text-white/50 leading-relaxed">
                Single-session workout logger. Simple, fast, no structure.
              </p>
            </Card>
          </Link>
        </motion.div>

        {/* ================= NEW MODE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link href="/workout/exercises" className="block">
            <Card
              className="
              p-5 space-y-2
              bg-gradient-to-br from-violet-500/10 to-transparent
              border border-violet-500/20
              hover:bg-violet-500/15 transition
              active:scale-[0.98]
            "
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">⚡ Progression System</p>

                <span className="text-xs text-violet-300">recommended</span>
              </div>

              <p className="text-xs text-white/50 leading-relaxed">
                Structured training: pullups, dips, pushups, squats. Levels, XP,
                progression loops.
              </p>
            </Card>
          </Link>
        </motion.div>
      </div>

      {/* FOOTER HINT */}
      <div className="pt-2 text-center text-xs text-white/30">
        Your training system evolves with consistency
      </div>
    </div>
  );
}
