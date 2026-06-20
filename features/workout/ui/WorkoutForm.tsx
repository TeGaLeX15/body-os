"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, Dumbbell } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { getWorkouts, saveWorkouts } from "@/shared/lib/storage";
import type { WorkoutEntry } from "../model/workout.types";
import { SaveWorkoutButton } from "./SaveWorkoutButton";

/* ---------------- HOLD ---------------- */
function useHold(action: () => void, delay = 90) {
  const interval = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    action();
    interval.current = setInterval(action, delay);
  };

  const stop = () => {
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
  };

  return { start, stop };
}

/* ---------------- STEPPER ---------------- */
function Stepper({
  label,
  value,
  setValue,
}: {
  label: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}) {
  const clamp = (v: number) => Math.max(0, v);

  const inc = useHold(() => setValue((v) => clamp(v + 1)));
  const dec = useHold(() => setValue((v) => clamp(v - 1)));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = Number(e.target.value);
    setValue(clamp(isNaN(num) ? 0 : num));
  };

  return (
    <div className="space-y-2">
      <p className="text-sm text-white/60">{label}</p>

      <div className="flex items-stretch gap-2 rounded-xl border border-white/10 bg-white/5 p-1.5">
        {/* minus */}
        <Button
          type="button"
          variant="secondary"
          size="icon"
          onMouseDown={dec.start}
          onMouseUp={dec.stop}
          onMouseLeave={dec.stop}
          onTouchStart={dec.start}
          onTouchEnd={dec.stop}
          className="h-10 w-10 rounded-lg"
        >
          <Minus size={18} />
        </Button>

        {/* input */}
        <Input
          value={value}
          onChange={onChange}
          inputMode="numeric"
          className="
            h-10
            text-center
            text-base
            font-semibold
            tabular-nums
            bg-transparent
            border-0
            focus-visible:ring-0
          "
        />

        {/* plus */}
        <Button
          type="button"
          variant="secondary"
          size="icon"
          onMouseDown={inc.start}
          onMouseUp={inc.stop}
          onMouseLeave={inc.stop}
          onTouchStart={inc.start}
          onTouchEnd={inc.stop}
          className="h-10 w-10 rounded-lg"
        >
          <Plus size={18} />
        </Button>
      </div>
    </div>
  );
}

/* ---------------- FORM ---------------- */
type Props = {
  onSaved: (workouts: WorkoutEntry[]) => void;
};

export default function WorkoutForm({ onSaved }: Props) {
  const [pullups, setPullups] = useState(0);
  const [dips, setDips] = useState(0);
  const [pushups, setPushups] = useState(0);
  const [squats, setSquats] = useState(0);

  const [saved, setSaved] = useState(false);

  const isEmpty =
    pullups === 0 &&
    dips === 0 &&
    pushups === 0 &&
    squats === 0;

  function handleSave() {
    const newWorkout: WorkoutEntry = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      pullups,
      dips,
      pushups,
      squats,
    };

    const updated = [newWorkout, ...getWorkouts()];

    saveWorkouts(updated);
    onSaved(updated);

    setPullups(0);
    setDips(0);
    setPushups(0);
    setSquats(0);

    setSaved(true);
    setTimeout(() => setSaved(false), 1200);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card className="space-y-4 p-4">
        {/* header */}
        <div className="flex items-center gap-2 text-sm text-white/60">
          <Dumbbell size={16} />
          <span>Workout</span>
        </div>

        {/* inputs */}
        <div className="space-y-4">
          <Stepper label="Pullups" value={pullups} setValue={setPullups} />
          <Stepper label="Dips" value={dips} setValue={setDips} />
          <Stepper label="Pushups" value={pushups} setValue={setPushups} />
          <Stepper label="Squats" value={squats} setValue={setSquats} />
        </div>

        {/* SAVE CTA */}
        <div className="pt-2">
          <SaveWorkoutButton
            onClick={handleSave}
            saved={saved}
            disabled={isEmpty}
          />
        </div>
      </Card>
    </motion.div>
  );
}
