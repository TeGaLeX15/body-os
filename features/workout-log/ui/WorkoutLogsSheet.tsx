"use client";

import { useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useVirtualizer } from "@tanstack/react-virtual";
import { X } from "lucide-react";

import { Card } from "@/components/ui/card";

import type { WorkoutEntry } from "@/features/workout/model/workout.types";
import { calculateWorkoutXP } from "@/features/home/lib/xp";

type Props = {
  workouts: WorkoutEntry[];
  open: boolean;
  onClose: () => void;
};

function formatXP(xp: number) {
  return xp > 0 ? `+${xp}` : "0";
}

function formatDelta(delta: number) {
  if (delta === 0) return "0";
  return delta > 0 ? `+${delta}` : `${delta}`;
}

function StatChip({
  label,
  value,
  prevValue,
}: {
  label: string;
  value: number;
  prevValue?: number;
}) {
  const delta = prevValue === undefined ? undefined : value - prevValue;

  let textClass = "text-white/70";
  let bgClass = "bg-white/5";

  if (delta !== undefined) {
    if (delta > 0) {
      textClass = "text-emerald-300";
      bgClass = "bg-emerald-500/10";
    } else if (delta < 0) {
      textClass = "text-rose-300";
      bgClass = "bg-rose-500/10";
    }
  }

  return (
    <div
      className={`
        inline-flex items-center gap-1
        rounded-md px-1.5 py-1
        ${bgClass}
      `}
    >
      <span className="text-[10px] text-muted-foreground">{label}</span>

      <span className={`text-[11px] font-semibold tabular-nums ${textClass}`}>
        {value}
      </span>

      {delta !== undefined && (
        <span className={`text-[10px] tabular-nums ${textClass}`}>
          {formatDelta(delta)}
        </span>
      )}
    </div>
  );
}

export default function WorkoutLogsSheet({ workouts, open, onClose }: Props) {
  const parentRef = useRef<HTMLDivElement | null>(null);

  const sorted = useMemo(
    () => [...workouts].sort((a, b) => +new Date(b.date) - +new Date(a.date)),
    [workouts],
  );

  const ITEM_GAP = 8;

  // eslint-disable-next-line react-hooks/incompatible-library
  const rowVirtualizer = useVirtualizer({
    count: sorted.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 80 + ITEM_GAP,
    overscan: 12,
  });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md"
        >
          <div className="mx-auto flex h-full max-w-md flex-col">
            {/* HEADER */}
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
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full bg-white/5
                    text-muted-foreground
                    transition hover:bg-white/10
                  "
                  aria-label="Close workout log"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* LIST */}
            <div
              ref={parentRef}
              className="flex-1 overflow-auto px-3 pt-3 pb-28"
            >
              <div
                style={{
                  height: rowVirtualizer.getTotalSize(),
                  position: "relative",
                }}
              >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                  const workout = sorted[virtualRow.index];

                  if (!workout) return null;

                  const prev = sorted[virtualRow.index + 1];
                  const xp = calculateWorkoutXP(workout);

                  const date = new Date(workout.date);

                  const workoutNumber = sorted.length - virtualRow.index;

                  return (
                    <div
                      key={workout.id}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        transform: `translateY(${virtualRow.start + virtualRow.index * ITEM_GAP}px)`,
                      }}
                      className=""
                    >
                      <Card
                        variant="soft"
                        className="rounded-2xl px-3 py-2.5"
                      >
                        {/* TOP */}
                        <div className="flex items-center justify-between gap-3">
                          <div className="min-w-0 flex items-center gap-2">
                            <span className="text-sm font-semibold tabular-nums text-foreground">
                              #{workoutNumber}
                            </span>

                            <span className="truncate text-xs text-muted-foreground">
                              {date.toLocaleDateString(undefined, {
                                day: "2-digit",
                                month: "short",
                              })}

                              {" • "}

                              {date.toLocaleTimeString(undefined, {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>
                          </div>

                          <span className="shrink-0 text-sm font-bold tabular-nums text-violet-400">
                            {formatXP(xp)}
                          </span>
                        </div>

                        {/* STATS */}
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          <StatChip
                            label="P"
                            value={workout.pullups}
                            prevValue={prev?.pullups}
                          />

                          <StatChip
                            label="D"
                            value={workout.dips}
                            prevValue={prev?.dips}
                          />

                          <StatChip
                            label="Pu"
                            value={workout.pushups}
                            prevValue={prev?.pushups}
                          />

                          <StatChip
                            label="S"
                            value={workout.squats}
                            prevValue={prev?.squats}
                          />
                        </div>
                      </Card>
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
