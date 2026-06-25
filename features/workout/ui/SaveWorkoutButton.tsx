// features/workout/ui/SaveWorkoutButton.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Loader2, Dumbbell } from "lucide-react";

type Props = {
  onClick: () => void;
  loading?: boolean;
  saved?: boolean;
  disabled?: boolean;
};

export function SaveWorkoutButton({
  onClick,
  loading,
  saved,
  disabled,
}: Props) {
  return (
    <motion.div
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 500, damping: 35 }}
      className="w-full"
    >
      <Button
        variant={saved ? "success" : "gradient"}
        onClick={onClick}
        disabled={disabled || loading}
        className="relative overflow-hidden h-14 w-full rounded-2xl text-base font-semibold"
      >
        {/* 🌈 aurora layer (REAL MOVEMENT) */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className="absolute -inset-32 animate-aurora">
            <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_60%)]" />
          </div>
        </div>

        {/* subtle hover light */}
        <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />

        {/* content */}
        <div className="relative flex items-center justify-center gap-2">
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="flex items-center gap-2"
              >
                <Loader2 className="h-5 w-5 animate-spin" />
                Saving...
              </motion.div>
            ) : saved ? (
              <motion.div
                key="saved"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-emerald-300"
              >
                <Check className="h-5 w-5" />
                Saved
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <Dumbbell className="h-5 w-5" />
                Save Workout
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Button>
    </motion.div>
  );
}
