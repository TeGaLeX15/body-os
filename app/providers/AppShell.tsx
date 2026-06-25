// app/providers/AppShell.tsx
"use client";

import { ReactNode, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

import { initSwipeNavigation } from "@/shared/lib/navigation/initSwipeNavigation";
import { BottomNavigation } from "@/shared/ui/BottomNavigation";

export function AppShell({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    return initSwipeNavigation(router, pathname);
  }, [router, pathname]);

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col">
      <div className="fixed inset-0 -z-10 pointer-events-none bg-app" />

      <main className="flex-1 px-4 pt-6">
        {children}
      </main>

      <BottomNavigation />
    </div>
  );
}