// shared/lib/navigation/types.ts
export type Router = {
  push: (href: string) => void;
  replace?: (href: string) => void;
};