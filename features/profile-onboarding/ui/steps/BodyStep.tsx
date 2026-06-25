// features/profile-onboarding/ui/steps/BodyStep.tsx
"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/shared/ui/NumberField";

type BodyData = {
  height: number;
  weight: number;
  age: number;
};

type Props = {
  data: {
    height: number | null;
    weight: number | null;
    age: number | null;
  };
  onNext: (v: BodyData) => void;
  onBack: () => void;
};

function parseIntSafe(v: number | ""): number | "" {
  return v === "" ? "" : Math.trunc(v);
}

export function BodyStep({ data, onNext, onBack }: Props) {
  const [height, setHeight] = useState<number | "">(data.height ?? 170);
  const [weight, setWeight] = useState<number | "">(data.weight ?? 70.5);
  const [age, setAge] = useState<number | "">(data.age ?? 23);

  const isValid = useMemo(() => {
    if (height === "" || weight === "" || age === "") return false;

    return (
      height > 100 &&
      height < 250 &&
      weight > 30 &&
      weight < 250 &&
      age > 10 &&
      age < 100
    );
  }, [height, weight, age]);

  return (
    <div className="w-full space-y-6 text-center">
      {/* TITLE */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Tell us about you
        </h1>

        <p className="text-sm text-white/40">
          We use this to calculate your plan
        </p>
      </div>

      {/* FIELDS */}
      <div className="space-y-3 pt-2">
        <NumberField
          label="Height"
          unit="cm"
          value={height}
          onChange={(v) => setHeight(parseIntSafe(v))}
        />

        <NumberField
          label="Weight"
          unit="kg"
          value={weight}
          onChange={(v) => setWeight(v)}
        />

        <NumberField
          label="Age"
          unit="years"
          value={age}
          onChange={(v) => setAge(parseIntSafe(v))}
        />
      </div>

      {/* ACTIONS */}
      <div className="flex gap-3 pt-4">
        <button
          onClick={onBack}
          className="flex-1 rounded-xl border border-white/10 bg-white/5 py-3 text-sm text-white/70 active:scale-[0.98]"
        >
          Back
        </button>

        <button
          disabled={!isValid}
          onClick={() => {
            if (!isValid) return;

            onNext({
              height: height as number,
              weight: weight as number,
              age: age as number,
            });
          }}
          className={`
            flex-1 rounded-xl py-3 text-sm font-medium transition
            active:scale-[0.98]
            ${
              isValid
                ? "bg-white text-black"
                : "bg-white/10 text-white/30"
            }
          `}
        >
          Continue
        </button>
      </div>
    </div>
  );
}