// shared/ui/SectionHeader.tsx
type Props = {
  icon: string;
  title: string;
  description?: string;
};

export function SectionHeader({ icon, title, description }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-sm font-semibold">{title}</h2>

        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>

      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
        {icon}
      </div>
    </div>
  );
}
