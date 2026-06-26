"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Flame, Activity, Dumbbell, TrendingUp } from "lucide-react";

const EXERCISES = [
  {
    title: "Pull Ups",
    href: "/workout/pullups",
    icon: <Dumbbell size={18} />,
    color: "from-violet-500/20 to-indigo-500/10",
    desc: "Back & biceps power",
  },
  {
    title: "Dips",
    href: "/workout/dips",
    icon: <Activity size={18} />,
    color: "from-emerald-500/20 to-teal-500/10",
    desc: "Chest & triceps strength",
  },
  {
    title: "Push Ups",
    href: "/workout/pushups",
    icon: <Flame size={18} />,
    color: "from-orange-500/20 to-red-500/10",
    desc: "Bodyweight foundation",
  },
  {
    title: "Squats",
    href: "/workout/squats",
    icon: <TrendingUp size={18} />,
    color: "from-blue-500/20 to-cyan-500/10",
    desc: "Leg endurance",
  },
];

export function WorkoutHub() {
  return (
    <div className="flex flex-col flex-1 p-4 space-y-5">

      {/* HEADER */}
      <div className="space-y-1">
        <h1 className="text-xl font-bold tracking-wide">
          Exercise Hub
        </h1>

        <p className="text-xs text-white/50">
          Choose your discipline. Build your body stats.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 gap-3">
        {EXERCISES.map((ex, i) => (
          <motion.div
            key={ex.href}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Link href={ex.href}>
              <Card
                className={`
                  relative overflow-hidden p-4
                  border border-white/10
                  bg-gradient-to-br ${ex.color}
                  hover:scale-[1.02] transition-transform
                `}
              >
                {/* glow */}
                <div className="absolute inset-0 opacity-40 blur-2xl bg-white/5" />

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-white/10">
                      {ex.icon}
                    </div>

                    <div>
                      <p className="text-sm font-semibold">
                        {ex.title}
                      </p>
                      <p className="text-[11px] text-white/60">
                        {ex.desc}
                      </p>
                    </div>
                  </div>

                  <div className="text-white/30 text-lg">
                    →
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* FOOTER HINT */}
      <div className="mt-auto text-center text-[11px] text-white/40">
        Select an exercise to view your performance history
      </div>

    </div>
  );
}