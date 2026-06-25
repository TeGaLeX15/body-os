"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

type Props = {
  analytics: {
    level: number;
  };
};

export function AppHeader({ analytics }: Props) {
  const pathname = usePathname();
  const { level } = analytics;

  const mode = useMemo(() => {
    if (pathname.startsWith("/workout")) return "TRAINING";
    if (pathname.startsWith("/progress")) return "PROGRESS";
    if (pathname.startsWith("/profile")) return "PROFILE";
    return "BODY OS";
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-xl border-b border-white/10"
    >
      {/* CONTENT */}
      <div className="mx-auto flex h-14 w-full max-w-md items-center justify-between px-4">

        {/* LEFT */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-full bg-white/5 px-2 py-1">
            <span className="text-[10px] text-white/50">LVL</span>
            <span className="text-sm font-semibold">{level}</span>
          </div>
        </div>

        {/* CENTER (🔥 MAIN IDEA) */}
        <div className="relative flex items-center justify-center">
          <div className="text-xs font-semibold tracking-[0.35em] text-white/70">
            {mode}
          </div>

          {/* subtle glow */}
          <div className="absolute -bottom-1 h-[1px] w-10 bg-white/20 blur-sm" />
        </div>

        {/* RIGHT */}
        <Link href="/profile">
          <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
            <User size={16} />
          </div>
        </Link>

      </div>
    </motion.header>
  );
}