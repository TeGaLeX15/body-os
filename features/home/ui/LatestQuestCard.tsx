// features/home/ui/LatestQuestCard.tsx
"use client";

import { motion } from "framer-motion";
import type { WorkoutEntry } from "@/features/workout/model/workout.types";

import { Card } from "@/components/ui/card";
import { formatWorkoutDate } from "@/features/home/lib/formatWorkoutDate";

import { LatestQuestEmptyState } from "./LatestQuestEmptyState";
import { LatestQuestGrid } from "./LatestQuestGrid";

type Props = {
  lastWorkout: WorkoutEntry | null;
};

export function LatestQuestCard({ lastWorkout }: Props) {
  const hasWorkout = !!lastWorkout;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.28 }}
    >
      {hasWorkout && lastWorkout ? (
        <Card className="p-4 space-y-4">
          <div className="text-xs text-muted-foreground">
            {(() => {
              const { date, time } = formatWorkoutDate(lastWorkout.date);
              return (
                <>
                  {date} • {time}
                </>
              );
            })()}
          </div>

          <LatestQuestGrid workout={lastWorkout} />
        </Card>
      ) : (
        <LatestQuestEmptyState />
      )}
    </motion.div>
  );
}
