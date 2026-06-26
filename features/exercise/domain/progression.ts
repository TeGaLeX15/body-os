// features/exercise/domain/progression.ts
export function increaseMax(current: number): number {
  return Math.max(1, Math.round(current * 1.05 + 1));
}