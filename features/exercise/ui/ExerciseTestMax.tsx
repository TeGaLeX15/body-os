// features/exercise/ui/ExerciseTestMax.tsx
"use client";

import { useRef, useState } from "react";
import { EXERCISES } from "../model/exercise.config";
import type { ExerciseType } from "../model/exercise.types";

type Props = {
  type: ExerciseType;
  onConfirm: (max: number) => void;
};

export function ExerciseTestMax({ type, onConfirm }: Props) {
  const exercise = EXERCISES.find((ex) => ex.type === type);

  const [value, setValue] = useState<number>(10);
  const [editMode, setEditMode] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const speedRef = useRef(150);

  const clearHold = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    speedRef.current = 150;
  };

  const startHold = (direction: 1 | -1) => {
    clearHold();

    const tick = () => {
      setValue((v) => Math.max(0, v + direction));

      if (speedRef.current > 40) {
        speedRef.current -= 8;
      }

      clearInterval(intervalRef.current!);
      intervalRef.current = setInterval(tick, speedRef.current);
    };

    intervalRef.current = setInterval(tick, speedRef.current);
  };

  const inc = () => setValue((v) => v + 1);
  const dec = () => setValue((v) => Math.max(0, v - 1));

  if (!exercise) return null;

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-8">
        {/* ================= HEADER ================= */}
        <div className="text-center space-y-2">
          <div className="text-xl font-semibold">{exercise.title}</div>

          <div className="text-xs uppercase tracking-wider text-white/30">
            {exercise.description}
          </div>
        </div>

        {/* ================= MAIN ================= */}
        <div className="flex flex-col items-center space-y-6">
          <div className="relative w-48 h-48 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-violet-500/10 blur-xl" />

            <div className="relative w-40 h-40 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
              {!editMode ? (
                <button
                  onClick={() => setEditMode(true)}
                  className="text-center"
                >
                  <div className="text-4xl font-bold">{value}</div>
                  <div className="text-[10px] text-white/40 mt-1">
                    tap to edit
                  </div>
                </button>
              ) : (
                <input
                  autoFocus
                  inputMode="numeric"
                  value={value === 0 ? "" : String(value)}
                  onChange={(e) => {
                    const raw = e.target.value;
                    const cleaned = raw.replace(/\D/g, "");
                    const normalized = cleaned.replace(/^0+(?=\d)/, "");
                    setValue(normalized === "" ? 0 : Number(normalized));
                  }}
                  onBlur={() => setEditMode(false)}
                  className="w-24 text-center bg-transparent text-3xl font-bold outline-none"
                />
              )}
            </div>
          </div>

          {/* ================= CONTROLS ================= */}
          <div className="flex items-center gap-6">
            <button
              onMouseDown={() => startHold(-1)}
              onMouseUp={clearHold}
              onMouseLeave={clearHold}
              onTouchStart={() => startHold(-1)}
              onTouchEnd={clearHold}
              onClick={dec}
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 text-xl"
            >
              −
            </button>

            <button
              onClick={() => onConfirm(value)}
              className="px-6 py-3 rounded-full bg-violet-500 text-sm font-medium"
            >
              Confirm
            </button>

            <button
              onMouseDown={() => startHold(1)}
              onMouseUp={clearHold}
              onMouseLeave={clearHold}
              onTouchStart={() => startHold(1)}
              onTouchEnd={clearHold}
              onClick={inc}
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 text-xl"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
