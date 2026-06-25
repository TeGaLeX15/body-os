// features/profile/ui/CharacterCard/MiniAttribute.tsx
"use client";

type Props = {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
};

export function MiniAttribute({ icon, label, value }: Props) {
  return (
    <div
      className="
      flex
      items-center
      justify-between
      rounded-2xl
      border
      border-white/10
      bg-white/5
      px-4
      py-3
      transition
      hover:bg-white/10
      "
    >
      <div
        className="
        flex
        items-center
        gap-3
        text-sm
        text-white/70
        "
      >
        <span className="text-violet-300">{icon}</span>

        {label}
      </div>

      <div
        className="
        font-semibold
        text-white
        "
      >
        {value}
      </div>
    </div>
  );
}
