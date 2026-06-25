// features/profile/ui/ProfileVitals.tsx
"use client";

import {
  Ruler,
  Weight,
  Calendar,
  Target,
  Activity,
  Droplets,
} from "lucide-react";

import type { Profile } from "../model/profile.types";

type Props = {
  profile: Profile;

  bmr: number;
  bmi: number;

  water: number;

  goalProgress: number;
};

export function ProfileVitals({
  profile,
  bmr,
  bmi,
  water,
  goalProgress,
}: Props) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="mb-5">
        <h2 className="text-lg font-semibold">Athlete Profile</h2>

        <p className="mt-1 text-sm text-white/50">
          Personal body metrics and training data.
        </p>
      </div>

      <div className="divide-y divide-white/5">
        <Row
          icon={<Weight size={17} />}
          label="Current Weight"
          value={`${profile.currentWeight.toFixed(1)} kg`}
        />

        <Row
          icon={<Target size={17} />}
          label="Goal Weight"
          value={`${profile.goalWeight.toFixed(1)} kg`}
        />

        <Row
          icon={<Ruler size={17} />}
          label="Height"
          value={`${profile.height} cm`}
        />

        <Row
          icon={<Calendar size={17} />}
          label="Age"
          value={`${profile.age} years`}
        />

        <Row
          icon={<Activity size={17} />}
          label="BMI"
          value={bmi.toFixed(1)}
          highlight={bmi >= 18.5 && bmi < 25}
        />

        <Row icon={<Activity size={17} />} label="BMR" value={`${bmr} kcal`} />

        <Row
          icon={<Droplets size={17} />}
          label="Water Goal"
          value={`${water} L`}
        />

        <Row
          icon={"🎯"}
          label="Goal Progress"
          value={`${goalProgress}%`}
          highlight
        />
      </div>
    </section>
  );
}

type RowProps = {
  icon: React.ReactNode;
  label: string;
  value: string;

  highlight?: boolean;
};

function Row({ icon, label, value, highlight }: RowProps) {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <div className="text-white/50">{icon}</div>

        <span className="text-white/60">{label}</span>
      </div>

      <div
        className={
          highlight ? "font-semibold text-violet-400" : "font-semibold"
        }
      >
        {value}
      </div>
    </div>
  );
}
