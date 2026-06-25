// features/workout/WorkoutView.tsx
"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import type { WorkoutEntry } from "@/features/workout/model/workout.types";

import { PageContainer } from "@/shared/ui/PageContainer";
import { PageHeader } from "@/shared/ui/PageHeader";
import { Section } from "@/shared/ui/Section";
import { SectionHeader } from "@/shared/ui/SectionHeader";

import { pageTransition } from "@/shared/animations/pageTransition";

import WorkoutForm from "@/features/workout/ui/WorkoutForm";
import WorkoutList from "@/features/workout/ui/WorkoutList";
import { EmptyWorkoutState } from "@/features/workout/ui/EmptyWorkoutState";
import { OpenLogButton } from "@/features/workout/ui/OpenLogButton";

import WorkoutLogsSheet from "@/features/workout-log/ui/WorkoutLogsSheet";

import { getWorkoutPreview } from "@/features/workout/domain/getWorkoutPreview";

type Props = {
  workouts: WorkoutEntry[];
  refresh: () => void;
};

export function WorkoutView({ workouts, refresh }: Props) {
  const [logOpen, setLogOpen] = useState(false);

  const preview = useMemo(
    () => getWorkoutPreview(workouts),
    [workouts],
  );

  const isEmpty = workouts.length === 0;

  return (
    <PageContainer>
      <motion.div
        {...pageTransition}
        className="space-y-8"
      >
        {/* PAGE HEADER */}
        <Section>
          <PageHeader
            title="Workout Log"
            description="Track every rep. Build your strength."
          />
        </Section>

        {/* NEW WORKOUT */}
        <Section>
          <SectionHeader
            icon="➕"
            title="New Workout"
            description="Log today's training session."
          />

          <div className="mt-3">
            <WorkoutForm onSaved={refresh} />
          </div>
        </Section>

        {/* HISTORY */}
        <Section>
          <SectionHeader
            icon="📚"
            title="Workout History"
            description="Review your recent training sessions."
          />

          <div className="mt-3">
            {!isEmpty ? (
              <>
                <WorkoutList
                  workouts={preview}
                  totalCount={workouts.length}
                />

                {workouts.length > 5 && (
                  <div className="mt-3">
                    <OpenLogButton
                      count={workouts.length}
                      onClick={() => setLogOpen(true)}
                    />
                  </div>
                )}
              </>
            ) : (
              <EmptyWorkoutState />
            )}
          </div>
        </Section>

        <WorkoutLogsSheet
          open={logOpen}
          workouts={workouts}
          onClose={() => setLogOpen(false)}
        />
      </motion.div>
    </PageContainer>
  );
}