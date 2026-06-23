"use client";

import "./globals.css";
import { BottomNavigation } from "@/shared/ui/BottomNavigation";
import { useScrollRestoration } from "@/shared/hooks/useScrollRestoration";
import { usePathname } from "next/navigation";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useScrollRestoration(pathname);

  return (
    <html lang="ru" className={geist.variable}>
      <body className="min-h-dvh bg-background text-foreground font-sans overflow-x-hidden">
        <div
          aria-hidden
          className="fixed inset-0 -z-10 pointer-events-none bg-app"
        />

        <div className="mx-auto w-full max-w-md min-h-dvh flex flex-col">
          <main
            className="flex-1 px-4 pt-6 page-enter"
            style={{ paddingBottom: "var(--nav-height)" }}
          >
            {children}
          </main>

          <BottomNavigation />
        </div>
      </body>
    </html>
  );
}
