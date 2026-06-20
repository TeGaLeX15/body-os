import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function PullUpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5 4h14" />
      <path d="M7 4v3" />
      <path d="M17 4v3" />
      <circle cx={12} cy={9} r={2} />
      <path d="M8 7l2 4" />
      <path d="M16 7l-2 4" />
      <path d="M12 11v5" />
      <path d="M12 16l-3 4" />
      <path d="M12 16l3 4" />
    </svg>
  );
}

export function DipsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5 10h5" />
      <path d="M14 10h5" />
      <path d="M6 10v9" />
      <path d="M18 10v9" />
      <circle cx={12} cy={5} r={2} />
      <path d="M12 7v6" />
      <path d="M12 10l-3 2" />
      <path d="M12 10l3 2" />
      <path d="M12 13l-2 5" />
      <path d="M12 13l2 5" />
    </svg>
  );
}

export function PushUpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M3 20h18" />
      <circle cx={6} cy={10} r={2} />
      <path d="M8 11l7 3" />
      <path d="M9 12l-2 5" />
      <path d="M14 14l-2 5" />
      <path d="M15 14l4 4" />
    </svg>
  );
}

export function SquatIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx={12} cy={4} r={2} />
      <path d="M12 6l-1 6" />
      <path d="M11 8l-5 4" />
      <path d="M11 12l5 2" />
      <path d="M6 12l3 5" />
      <path d="M16 14l2 5" />
      <path d="M4 20h16" />
    </svg>
  );
}

export const workoutIcons = {
  pullUp: PullUpIcon,
  dips: DipsIcon,
  pushUp: PushUpIcon,
  squat: SquatIcon,
};
