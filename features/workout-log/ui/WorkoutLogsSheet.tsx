// features/workout-log/ui/WorkoutLogSheet.tsx
"use client";

import { useRef } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { useVirtualizer } from "@tanstack/react-virtual";

import { X } from "lucide-react";

import type { WorkoutEntry } from "@/features/workout/model/workout.types";

import { sortWorkouts, getWorkoutNumber } from "@/features/workout-log";

import { WorkoutCard } from "./WorkoutCard";

type Props = {
  workouts: WorkoutEntry[];
  open: boolean;
  onClose: () => void;
};

const ITEM_HEIGHT = 96;

export default function WorkoutLogsSheet({ workouts, open, onClose }: Props) {
  const parentRef = useRef<HTMLDivElement>(null);

  const sorted = sortWorkouts(workouts);

  // eslint-disable-next-line react-hooks/incompatible-library
  const rowVirtualizer = useVirtualizer({
    count: sorted.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ITEM_HEIGHT,
    overscan: 10,
  });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md"
        >
          <div className="mx-auto flex h-full max-w-md flex-col">
            {/* Header */}

            <div className="sticky top-0 z-10 border-b border-white/10 bg-background/80 backdrop-blur">
              <div className="flex h-16 items-center justify-between px-4">
                <div>
                  <p className="text-base font-semibold text-foreground">
                    Workout Log
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {sorted.length} sessions
                  </p>
                </div>

                <button
                  onClick={onClose}
                  aria-label="Close workout log"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-muted-foreground transition hover:bg-white/10"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* List */}

            <div
              ref={parentRef}
              className="
                flex-1
                overflow-auto
                px-3
                pt-3
                pb-[calc(var(--bottom-nav-height)+env(safe-area-inset-bottom)+32px)]
              "
            >
              <div
                style={{
                  position: "relative",
                  height: rowVirtualizer.getTotalSize(),
                }}
              >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                  const workout = sorted[virtualRow.index];

                  if (!workout) {
                    return null;
                  }

                  const previousWorkout = sorted[virtualRow.index + 1];

                  return (
                    <div
                      key={workout.id}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        transform: `translateY(${virtualRow.start}px)`,
                      }}
                    >
                      <WorkoutCard
                        workout={workout}
                        previousWorkout={previousWorkout}
                        workoutNumber={getWorkoutNumber(
                          sorted.length,
                          virtualRow.index,
                        )}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
