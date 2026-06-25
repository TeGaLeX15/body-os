// features/home/ui/body-snapshot/BodySnapshotCard.tsx
type Props = {
  weight: number;
  bmi: number;
  waterGoal: number;
  calories: number;
};

export function BodySnapshotCard({ weight, bmi, waterGoal, calories }: Props) {
  const items = [
    {
      label: "Weight",
      value: `${weight} kg`,
    },
    {
      label: "BMI",
      value: bmi.toFixed(1),
    },
    {
      label: "Water",
      value: `${waterGoal} ml`,
    },
    {
      label: "Calories",
      value: calories,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="
            rounded-2xl
            border border-white/10
            bg-white/[0.03]
            p-4
          "
        >
          <p className="text-xs uppercase tracking-wider text-white/40">
            {item.label}
          </p>

          <p className="mt-2 text-xl font-semibold">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
