// features/profile/ui/ProfileForm.tsx
"use client";

import { useState } from "react";
import type { Profile } from "../model/profile.types";

type Props = {
  profile: Profile;
  onSave: (p: Partial<Profile>) => void;
};

export function ProfileForm({ profile, onSave }: Props) {
  const [form, setForm] = useState(profile);

  function update<K extends keyof Profile>(key: K, value: Profile[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="space-y-3">
      <input
        className="w-full rounded-lg bg-white/5 p-2"
        value={form.height}
        onChange={(e) => update("height", +e.target.value)}
        placeholder="Height"
      />

      <input
        className="w-full rounded-lg bg-white/5 p-2"
        value={form.weight}
        onChange={(e) => update("weight", +e.target.value)}
        placeholder="Weight"
      />

      <input
        className="w-full rounded-lg bg-white/5 p-2"
        value={form.goalWeight}
        onChange={(e) => update("goalWeight", +e.target.value)}
        placeholder="Goal weight"
      />

      <button
        onClick={() => onSave(form)}
        className="w-full rounded-lg bg-violet-500 py-2 font-semibold"
      >
        Save
      </button>
    </div>
  );
}