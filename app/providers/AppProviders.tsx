// app/providers/AppProviders.tsx
"use client";

import { usePathname } from "next/navigation";
import { useScrollRestoration } from "@/shared/hooks/useScrollRestoration";

export function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useScrollRestoration(pathname);

  return children;
}