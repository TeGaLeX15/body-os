// shared/ui/PageContainer.tsx
export function PageContainer({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-md px-4 py-6">{children}</div>;
}
