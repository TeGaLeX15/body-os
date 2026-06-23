// shared/icons/icon-mapper.ts
export const iconMap = {
  pullUp: "/icons/pull-up.svg",
  dips: "/icons/dips.svg",
  pushUp: "/icons/push-up.svg",
  squat: "/icons/squat.svg",
} as const;

export type IconName = keyof typeof iconMap;