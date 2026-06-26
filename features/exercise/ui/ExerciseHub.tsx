// features/exercise/ui/ExerciseHub.tsx
"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Icon } from "@/shared/ui/Icon";

import { EXERCISES } from "../model/exercise.config";
import { useExerciseStore } from "../model/useExerciseStore";

export function ExerciseHub() {
  const { state } = useExerciseStore();

  return (
    <div className="p-4 space-y-6">
      {/* HEADER */}
      <div className="space-y-1 text-center">
        <h1 className="text-2xl font-bold tracking-tight">
          Training Hub
        </h1>
        <p className="text-sm text-white/50">
          Choose a discipline and evolve your body
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-3">
        {EXERCISES.map((ex) => {
          const data = state[ex.type];

          const hasStarted = !!data?.max;
          const level = data?.level ?? 1;
          const xp = data?.xp ?? 0;

          return (
            <Link key={ex.type} href={`/workout/exercises/${ex.type}`}>
              <Card
                className={`
                  relative overflow-hidden p-5
                  border border-white/10
                  bg-white/5 backdrop-blur-md
                  transition-all duration-300
                  hover:bg-white/10 hover:border-white/20
                  active:scale-[0.99]
                `}
              >
                {/* glow background */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-violet-500/10 blur-2xl" />
                  <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl" />
                </div>

                <div className="relative flex items-center justify-between">
                  {/* LEFT */}
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        flex h-12 w-12 items-center justify-center
                        rounded-xl bg-white/10
                        border border-white/10
                      "
                    >
                      <Icon name={ex.icon} />
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold tracking-wide">
                        {ex.title}
                      </p>

                      <p className="text-xs text-white/50">
                        {ex.description}
                      </p>

                      {/* STATUS */}
                      <div className="flex items-center gap-2 text-xs">
                        {hasStarted ? (
                          <>
                            <span className="text-violet-400">
                              Level {level}
                            </span>
                            <span className="text-white/20">•</span>
                            <span className="text-white/40">
                              {xp} XP
                            </span>
                          </>
                        ) : (
                          <span className="text-white/40">
                            Not started
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="text-right">
                    <div
                      className={`
                        text-sm font-bold
                        ${hasStarted ? "text-violet-400" : "text-white/40"}
                      `}
                    >
                      {hasStarted ? "Continue" : "Start"}
                    </div>

                    <div className="mt-1 text-xs text-white/30">
                      {hasStarted ? "training active" : "init session"}
                    </div>
                  </div>
                </div>

                {/* bottom progress line */}
                <div className="mt-4 h-[2px] w-full bg-white/5 overflow-hidden rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all"
                    style={{
                      width: hasStarted ? "70%" : "0%",
                    }}
                  />
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}