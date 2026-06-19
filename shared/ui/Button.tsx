import { theme } from "@/shared/config/theme";

export function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        background: theme.colors.primary,
      }}
      className="
        h-12 w-full rounded-xl
        text-white font-medium
        active:scale-[0.98]
        transition
      "
    >
      {children}
    </button>
  );
}
