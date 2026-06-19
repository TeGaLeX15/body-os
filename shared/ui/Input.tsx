import { theme } from "@/shared/config/theme";

type Props = {
  label: string;
  value: number;
  onChange: (value: number) => void;
};

export function Input({ label, value, onChange }: Props) {
  return (
    <label className="block space-y-2">
      <span
        className="text-sm"
        style={{ color: theme.colors.foreground + "99" }}
      >
        {label}
      </span>

      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          background: theme.colors.card,
          borderColor: theme.colors.border,
          color: theme.colors.foreground,
        }}
        className="
          h-12 w-full rounded-xl
          border px-4
          outline-none
          focus:border-[var(--primary)]
        "
      />
    </label>
  );
}
