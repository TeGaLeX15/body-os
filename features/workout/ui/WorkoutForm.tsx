"use client";

import { useState } from "react";
import { getWorkouts, saveWorkouts } from "@/shared/lib/storage";
import { WorkoutEntry } from "../model/workout.types";

export default function WorkoutForm() {
  const [pullups, setPullups] = useState(0);
  const [dips, setDips] = useState(0);
  const [pushups, setPushups] = useState(0);
  const [squats, setSquats] = useState(0);

  function handleSave() {
    const newWorkout: WorkoutEntry = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      pullups,
      dips,
      pushups,
      squats,
    };

    const workouts = getWorkouts();
    const updated = [newWorkout, ...workouts];

    saveWorkouts(updated);

    alert("Workout saved!");

    setPullups(0);
    setDips(0);
    setPushups(0);
    setSquats(0);
  }

  return (
    <div className="space-y-3">
      <Input label="Pullups" value={pullups} setValue={setPullups} />
      <Input label="Dips" value={dips} setValue={setDips} />
      <Input label="Pushups" value={pushups} setValue={setPushups} />
      <Input label="Squats" value={squats} setValue={setSquats} />

      <button
        onClick={handleSave}
        className="w-full bg-white text-black py-2 rounded-lg font-bold"
      >
        Save workout
      </button>
    </div>
  );
}

function Input({
  label,
  value,
  setValue,
}: {
  label: string;
  value: number;
  setValue: (v: number) => void;
}) {
  return (
    <div>
      <p className="text-white/60 text-sm">{label}</p>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full p-2 bg-white/5 border border-white/10 rounded-lg"
      />
    </div>
  );
}
