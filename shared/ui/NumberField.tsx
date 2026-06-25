// shared/ui/NumberField.tsx
"use client";

type Props = {
  label: string;
  value: number | "";
  unit?: string;
  onChange: (value: number | "") => void;
};

export function NumberField({ label, value, unit, onChange }: Props) {
  return (
    <div className="w-full text-left space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-xs text-white/50">{label}</span>

        {unit && <span className="text-[10px] text-white/30">{unit}</span>}
      </div>

      <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-3">
        <input
          value={value}
          inputMode="decimal"
          onChange={(e) => {
            const raw = e.target.value;

            if (raw === "") {
              onChange("");
              return;
            }

            if (!/^[0-9]*\.?[0-9]*$/.test(raw)) return;

            onChange(raw as unknown as number | "");
          }}
          className="
            w-full bg-transparent
            text-white text-base
            outline-none
            tabular-nums
          "
        />
      </div>
    </div>
  );
}
