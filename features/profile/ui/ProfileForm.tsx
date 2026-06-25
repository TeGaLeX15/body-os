// features/profile/ui/ProfileForm.tsx
"use client";

import { useEffect, useState } from "react";

import type { Profile } from "../model/profile.types";

type Props = {
  profile: Profile;
  onSave: (p: Partial<Profile>) => void;
};

type FormState = {
  height: number;
  currentWeight: number;
  goalWeight: number;
};

export function ProfileForm({ profile, onSave }: Props) {
  const [form, setForm] = useState<FormState>({
    height: profile.height,
    currentWeight: profile.currentWeight,
    goalWeight: profile.goalWeight,
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setForm({
      height: profile.height,
      currentWeight: profile.currentWeight,
      goalWeight: profile.goalWeight,
    });
  }, [profile]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function save() {
    onSave(form);
  }

  return (
    <section className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-5">
      <div>
        <h3 className="text-lg font-semibold">Edit Body Metrics</h3>

        <p className="mt-1 text-sm text-white/50">
          Update your body measurements. Weight changes are automatically added
          to your progress history.
        </p>
      </div>

      <NumberField
        label="Height"
        unit="cm"
        value={form.height}
        step={1}
        onChange={(value) => update("height", value)}
      />

      <NumberField
        label="Current Weight"
        unit="kg"
        value={form.currentWeight}
        step={0.1}
        onChange={(value) => update("currentWeight", value)}
      />

      <NumberField
        label="Goal Weight"
        unit="kg"
        value={form.goalWeight}
        step={0.1}
        onChange={(value) => update("goalWeight", value)}
      />

      <button
        onClick={save}
        className="w-full rounded-xl bg-violet-500 py-3 font-semibold transition hover:opacity-90 active:scale-[0.98]"
      >
        Save Changes
      </button>
    </section>
  );
}

type NumberFieldProps = {
  label: string;
  unit: string;
  value: number;
  step: number;
  onChange: (value: number) => void;
};

function NumberField({ label, unit, value, step, onChange }: NumberFieldProps) {
  const [text, setText] = useState(value.toString());

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setText(value.toString());
  }, [value]);

  const allowDecimal = step < 1;

  function handleChange(next: string) {
    let filtered = next;

    if (allowDecimal) {
      // только цифры и одна точка
      filtered = filtered.replace(/[^\d.]/g, "").replace(/(\..*)\./g, "$1");
    } else {
      // только цифры
      filtered = filtered.replace(/\D/g, "");
    }

    setText(filtered);

    if (filtered === "") {
      return;
    }

    if (filtered === ".") {
      return;
    }

    const parsed = Number(filtered);

    if (!Number.isNaN(parsed)) {
      onChange(parsed);
    }
  }

  function handleBlur() {
    if (text === "" || text === ".") {
      setText(value.toString());
      return;
    }

    const parsed = Number(text);

    if (!Number.isNaN(parsed)) {
      setText(parsed.toString());
      onChange(parsed);
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-white/60">{label}</span>

        <span className="text-white/40">{unit}</span>
      </div>

      <input
        type="text"
        inputMode={allowDecimal ? "decimal" : "numeric"}
        autoComplete="off"
        spellCheck={false}
        value={text}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={handleBlur}
        className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-white/5
          px-4
          py-3
          text-lg
          outline-none
          transition
          focus:border-violet-500
        "
      />
    </div>
  );
}
