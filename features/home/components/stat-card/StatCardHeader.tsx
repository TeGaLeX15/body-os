// features/home/components/stat-card/StatCardHeader.tsx
type Props = {
  title: string;
  icon?: React.ReactNode;
};

export function StatCardHeader({ title, icon }: Props) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-[12px] text-foreground">{title}</p>
      {icon && <div className="text-foreground">{icon}</div>}
    </div>
  );
}