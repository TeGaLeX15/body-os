"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, Dumbbell } from "lucide-react";
import { Icon } from "@/shared/icons/Icon";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import type { WorkoutEntry } from "../model/workout.types";
import { SaveWorkoutButton } from "./SaveWorkoutButton";
import { saveWorkout } from "../model/workoutService";


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
  icon,
}: {
  label: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  icon?: React.ReactNode;
}) {
  const clamp = (v: number) => Math.max(0, v);
  const canDecrement = value > 0;

  const inc = useHold(() => setValue((v) => clamp(v + 1)));
  const dec = useHold(() => setValue((v) => clamp(v - 1)));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = Number(e.target.value);
    setValue(clamp(isNaN(num) ? 0 : num));
  };

  return (
    <div className="space-y-2">
      {/* label */}
      <div className="flex items-center gap-2 text-sm text-white/80">
        {icon}
        <p>{label}</p>
      </div>

      {/* row */}
      <Card variant="soft" className="p-1.5">
        <div className="flex items-stretch gap-2 w-full">
          {/* minus */}
          <Button
            type="button"
            variant="control"
            size="icon"
            disabled={!canDecrement}
            onMouseDown={canDecrement ? dec.start : undefined}
            onMouseUp={dec.stop}
            onMouseLeave={dec.stop}
            onTouchStart={canDecrement ? dec.start : undefined}
            onTouchEnd={dec.stop}
            className="h-10 w-10 shrink-0 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
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
              flex-1
              min-w-0
              text-center
              text-base
              font-semibold
              tabular-nums
              bg-transparent
              border-0
              text-white
              focus-visible:ring-0
            "
          />

          {/* plus */}
          <Button
            type="button"
            variant="success"
            size="icon"
            onMouseDown={inc.start}
            onMouseUp={inc.stop}
            onMouseLeave={inc.stop}
            onTouchStart={inc.start}
            onTouchEnd={inc.stop}
            className="h-10 w-10 shrink-0 rounded-lg"
          >
            <Plus size={18} />
          </Button>
        </div>
      </Card>
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
    const updated = saveWorkout({
      pullups,
      dips,
      pushups,
      squats,
    });

    onSaved(updated);

    setPullups(0);
    setDips(0);
    setPushups(0);
    setSquats(0);

    setSaved(true);
    setTimeout(() => setSaved(false), 1200);
  }

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
      <Card variant="soft" className="space-y-4 p-4">

        {/* header */}
        <div className="flex items-center gap-2 text-sm text-white/80">
          <Dumbbell size={16} />
          <span>Workout</span>
        </div>

        {/* inputs */}
        <div className="space-y-4">
          <Stepper
            label="Pullups"
            value={pullups}
            setValue={setPullups}
            icon={<Icon name="pullUp" size={16} />}
          />

          <Stepper
            label="Dips"
            value={dips}
            setValue={setDips}
            icon={<Icon name="dips" size={16} />}
          />

          <Stepper
            label="Pushups"
            value={pushups}
            setValue={setPushups}
            icon={<Icon name="pushUp" size={16} />}
          />

          <Stepper
            label="Squats"
            value={squats}
            setValue={setSquats}
            icon={<Icon name="squat" size={16} />}
          />
        </div>

        {/* save */}
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