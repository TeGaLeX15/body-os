// features/profile-onboarding/ui/steps/TargetStep.tsx
import { useMemo, useState } from "react";
import type { ActivityLevel } from "@/features/profile/model/profile.types";
import { NumberField } from "@/shared/ui/NumberField";

type Props = {
  data: {
    goalWeight: number | null;
    waterGoalMl: number | null;
    activity: ActivityLevel | null;
  };
  onNext: (v: { goalWeight: number; waterGoalMl: number }) => void;
  onBack: () => void;
};

export function TargetStep({ data, onNext, onBack }: Props) {
  const [goalWeight, setGoalWeight] = useState<number | "">(
    data.goalWeight ?? 65,
  );

  const [waterGoalMl, setWaterGoalMl] = useState<number | "">(
    data.waterGoalMl ?? 0,
  );

  const activity = data.activity ?? "low";

  const recommendedWater = useMemo(() => {
    const weight = Number(goalWeight || 65);
    const base = weight * 30;

    const bonus = activity === "high" ? 500 : activity === "medium" ? 250 : 0;

    return Math.round(base + bonus);
  }, [goalWeight, activity]);

  const isValid = useMemo(() => {
    if (goalWeight === "" || waterGoalMl === "") return false;

    return (
      goalWeight > 30 &&
      goalWeight < 250 &&
      waterGoalMl > 500 &&
      waterGoalMl < 8000
    );
  }, [goalWeight, waterGoalMl]);

  return (
    <div className="w-full space-y-6 text-center">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Your targets</h1>

        <p className="text-sm text-white/40">
          Set your goals for weight and hydration
        </p>
      </div>

      <div className="space-y-3 pt-2">
        <NumberField
          label="Goal weight"
          unit="kg"
          value={goalWeight}
          onChange={setGoalWeight}
        />

        <NumberField
          label="Daily water intake"
          unit="ml"
          value={waterGoalMl}
          onChange={setWaterGoalMl}
        />

        <div className="text-xs text-white/40 pt-1">
          Recommended hydration:{" "}
          <span className="text-cyan-300">{recommendedWater} ml</span>
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        <button
          onClick={onBack}
          className="flex-1 rounded-xl border border-white/10 bg-white/5 py-3 text-sm text-white/70"
        >
          Back
        </button>

        <button
          disabled={!isValid}
          onClick={() => {
            if (!isValid) return;

            onNext({
              goalWeight: goalWeight as number,
              waterGoalMl: waterGoalMl as number,
            });
          }}
          className={`
            flex-1 rounded-xl py-3 text-sm font-medium
            ${isValid ? "bg-white text-black" : "bg-white/10 text-white/30"}
          `}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
