"use client";

import { useState } from "react";
import { getWorkouts, saveWorkouts } from "@/shared/lib/storage";
import { WorkoutEntry } from "../model/workout.types";

import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { Card } from "@/shared/ui/Card";

export default function WorkoutForm() {
  const [pullups, setPullups] = useState(0);
  const [dips, setDips] = useState(0);
  const [pushups, setPushups] = useState(0);
  const [squats, setSquats] = useState(0);

  const [saved, setSaved] = useState(false);

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

    setPullups(0);
    setDips(0);
    setPushups(0);
    setSquats(0);

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 1200);
  }

  return (
    <Card className="space-y-4">
      <Input label="Pullups" value={pullups} onChange={setPullups} />
      <Input label="Dips" value={dips} onChange={setDips} />
      <Input label="Pushups" value={pushups} onChange={setPushups} />
      <Input label="Squats" value={squats} onChange={setSquats} />

      <Button onClick={handleSave}>
        {saved ? "Saved ✓" : "Save workout"}
      </Button>
    </Card>
  );
}