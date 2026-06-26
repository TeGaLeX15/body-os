// features/exercise/ui/ExerciseSessionScreen.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import type { WeekPlan } from "../model/exercise.types";
import { completeDay } from "../domain/exerciseEngine";
import { useExerciseStore } from "../model/useExerciseStore";
import type { ExerciseType } from "../model/exercise.routes";

type Props = {
  type: ExerciseType;
  dayIndex: number;
  plan: WeekPlan;
};

type Phase = "work" | "rest";

export function ExerciseSessionScreen({ type, dayIndex, plan }: Props) {
  const router = useRouter();
  const { state, update } = useExerciseStore();

  const exercise = state[type];

  const day = useMemo(
    () => plan.days.find((d) => d.dayIndex === dayIndex),
    [plan.days, dayIndex],
  );

  const sets = day?.type === "training" ? day.sets : [];
  const timeoutRef = useRef<number | null>(null);
  const [setIndex, setSetIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("work");

  const [restLeft, setRestLeft] = useState(5);

  const lockedRef = useRef(false);

    useEffect(() => {
    return () => {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }
    };
    }, []);

  if (!day || day.type !== "training") return null;

  function startRest() {
    if (lockedRef.current) return;

    lockedRef.current = true;
    setPhase("rest");
    setRestLeft(5);

    let counter = 5;

    const tick = () => {
      counter -= 1;
      setRestLeft(counter);

      if (counter <= 0) {
        lockedRef.current = false;
        goNextSet();
        return;
      }

      timeoutRef.current = window.setTimeout(tick, 1000);
    };

    timeoutRef.current = window.setTimeout(tick, 1000);
  }

  function goNextSet() {
    lockedRef.current = false;
    setSetIndex((prev) => prev + 1);
    setPhase("work");
  }

  function next() {
    if (!exercise) return;
    if (phase === "rest") return; // 🔒 нельзя нажимать во время rest

    const isLast = setIndex + 1 >= sets.length;

    if (isLast) {
      update(type, completeDay(exercise, sets));
      router.push(`/workout/exercises/${type}`);
      return;
    }

    startRest();
  }

  return (
    <div className="min-h-screen flex flex-col justify-between p-6">
      {/* ================= HEADER ================= */}
      <div className="text-center space-y-2">
        <div className="text-xs text-white/40 uppercase tracking-widest">
          Day {dayIndex}
        </div>

        <div className="text-sm text-white/60">
          Set {setIndex + 1} / {sets.length}
        </div>

        <div className="flex justify-center gap-2 mt-2">
          {sets.map((rep, i) => (
            <div
              key={i}
              className={`
                px-2 py-1 rounded-full text-xs border
                ${
                  i === setIndex
                    ? "bg-violet-500/20 border-violet-400/40 text-white"
                    : "bg-white/5 border-white/10 text-white/40"
                }
              `}
            >
              {rep}
            </div>
          ))}
        </div>
      </div>

      {/* ================= MAIN ================= */}
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="mb-3 text-xs tracking-widest text-white/40">
          {phase === "work" ? "WORK SET" : "REST"}
        </div>

        <button
          onClick={next}
          className={`
            w-56 h-56 rounded-full
            flex items-center justify-center
            border transition
            ${
              phase === "work"
                ? "bg-violet-500/15 border-violet-400/30"
                : "bg-white/5 border-white/10"
            }
          `}
        >
          <div className="text-center">
            {phase === "work" ? (
              <>
                <div className="text-5xl font-bold">{sets[setIndex]}</div>
                <div className="text-[11px] text-white/40 mt-2">
                  tap when done
                </div>
              </>
            ) : (
              <>
                <div className="text-5xl font-bold">{restLeft}</div>
                <div className="text-[11px] text-white/40 mt-2">rest</div>
              </>
            )}
          </div>
        </button>
      </div>

      {/* ================= PROGRESS ================= */}
      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-violet-400 transition-all"
          style={{
            width: `${(setIndex / sets.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
