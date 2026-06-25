// app/providers/AppGate.tsx
"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { getProfile } from "@/features/profile/data/profileStorage";

export function AppGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const profile = getProfile();

    const isOnboarding = pathname === "/onboarding";

    // 1. нет профиля → только onboarding
    if (!profile && !isOnboarding) {
      router.replace("/onboarding");
      return;
    }

    // 2. есть профиль → нельзя обратно в onboarding
    if (profile && isOnboarding) {
      router.replace("/");
      return;
    }
  }, [pathname, router]);

  return children;
}
