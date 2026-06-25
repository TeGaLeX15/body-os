// features/hydration/ui/WaterTracker.tsx
"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  GlassWater,
  Plus,
  Trophy,
} from "lucide-react";

import { useHydration } from "../model/useHydration";
import { useDailyState } from "@/features/daily-state/model/useDailyState";

export function WaterTracker() {
  const { water, add } = useHydration();
  const state = useDailyState();

  if (!state) return null;

  const percent = Math.min(
    100,
    (water / state.waterGoal) * 100
  );

  const completed = percent >= 100;

  const remaining = Math.max(
    0,
    state.waterGoal - water
  );

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className={`
        relative overflow-hidden
        rounded-3xl
        border
        p-5
        backdrop-blur-xl
        transition-all
        ${
          completed
            ? "border-cyan-400/40 bg-cyan-500/10"
            : "border-white/10 bg-white/5"
        }
      `}
    >
      {/* Glow */}
      {completed && (
        <div
          className="
            absolute inset-0
            bg-cyan-400/10
            blur-3xl
            pointer-events-none
          "
        />
      )}

      {/* Header */}
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl
              bg-cyan-500/15
            "
          >
            <Droplets
              size={20}
              className="text-cyan-400"
            />
          </div>

          <div>
            <p className="text-xs text-muted-foreground">
              Hydration
            </p>

            <h3
              className={`
                font-semibold transition-colors
                ${
                  completed
                    ? "text-cyan-300"
                    : ""
                }
              `}
            >
              {completed
                ? "Hydration Complete"
                : "Water Intake"}
            </h3>
          </div>
        </div>

        {/* Mini Bottle */}
        <div
          className="
            relative
            h-12
            w-8
            overflow-hidden
            rounded-xl
            border border-white/10
            bg-white/5
            shrink-0
          "
        >
          <motion.div
            animate={{
              height: `${percent}%`,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              absolute
              bottom-0
              left-0
              right-0
              bg-gradient-to-t
              from-cyan-600
              via-sky-500
              to-cyan-300
            "
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <GlassWater
              size={16}
              className="text-white/80"
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-5 flex items-end justify-between">
        <div>
          <div className="text-3xl font-bold">
            {water}
            <span className="ml-1 text-lg text-muted-foreground">
              ml
            </span>
          </div>

          {!completed && (
            <p className="mt-1 text-xs text-muted-foreground">
              {remaining} ml remaining
            </p>
          )}
        </div>

        <div
          className="
            rounded-full
            border border-cyan-500/20
            bg-cyan-500/10
            px-3 py-1.5
            text-sm
            font-medium
            text-cyan-300
          "
        >
          {Math.round(percent)}%
        </div>
      </div>

      {/* Progress */}
      <div className="mt-5">
        <div
          className="
            relative h-4
            overflow-hidden
            rounded-full
            bg-white/10
          "
        >
          <motion.div
            animate={{
              width: `${percent}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
            className="
              relative
              h-full
              overflow-hidden
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              via-sky-400
              to-blue-500
            "
          >
            {percent > 5 && (
              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-0
                  w-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent
                  blur-md
                "
              />
            )}
          </motion.div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-5 grid grid-cols-3 gap-2">
        <WaterButton
          label="250"
          onClick={() => add(250)}
        />

        <WaterButton
          label="500"
          onClick={() => add(500)}
        />

        <WaterButton
          label="1000"
          onClick={() => add(1000)}
        />
      </div>
    </motion.div>
  );
}

type WaterButtonProps = {
  label: string;
  onClick: () => void;
};

function WaterButton({
  label,
  onClick,
}: WaterButtonProps) {
  return (
    <motion.button
      whileTap={{
        scale: 0.95,
      }}
      whileHover={{
        scale: 1.02,
      }}
      onClick={onClick}
      className="
        flex items-center justify-center gap-2
        rounded-full
        border border-cyan-500/15
        bg-cyan-500/5
        py-3
        text-sm
        font-medium
        transition-colors
        hover:bg-white/10
      "
    >
      <Plus size={14} />
      {label}
    </motion.button>
  );
}