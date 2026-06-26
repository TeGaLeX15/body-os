// app/providers/AppGate.tsx
"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { profileRepository } from "@/features/profile/data/profileRepository";

export function AppGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const profile = profileRepository.get();

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
