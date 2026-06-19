"use client";

import { getWorkouts } from "@/shared/lib/storage";
import { buildStrengthHistory } from "../lib/buildProgress";

export default function ProgressView() {
  const workouts = getWorkouts();
  const data = buildStrengthHistory(workouts);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Progress</h2>

      <div className="p-4 border border-white/10 rounded-xl">
        {data.length === 0 && <p className="text-white/40">No data yet</p>}

        <div className="space-y-2">
          {data.map((d, i) => (
            <div key={i} className="flex justify-between text-sm">
              <span className="text-white/50">
                {new Date(d.date).toLocaleDateString()}
              </span>
              <span className="font-bold">{d.index}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
