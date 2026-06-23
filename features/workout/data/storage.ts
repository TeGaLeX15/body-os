import { WorkoutEntry } from "@/features/workout/model/workout.types";

const KEY = "body_os_workouts";

export function getWorkouts(): WorkoutEntry[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export function saveWorkouts(workouts: WorkoutEntry[]) {
  localStorage.setItem(KEY, JSON.stringify(workouts));
}

export function onStorageChange(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}