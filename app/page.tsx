// app/page.tsx
"use client";

import { useHomeStats } from "@/features/home/hooks/useHomeStats";
import { HomeView } from "@/features/home/HomeView";

export default function Home() {
  const stats = useHomeStats();

  return <HomeView {...stats} />;
}
