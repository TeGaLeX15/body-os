// app/layout.tsx
import "./globals.css";
import { Geist } from "next/font/google";
import { AppProviders } from "@/app/providers/AppProviders";
import { AppShell } from "@/app/providers/AppShell";
import { AppGate } from "@/app/providers/AppGate";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={geist.variable}>
      <body className="min-h-dvh bg-background text-foreground font-sans overflow-x-hidden">
        <AppProviders>
          <AppGate>
            <AppShell>{children}</AppShell>
          </AppGate>
        </AppProviders>
      </body>
    </html>
  );
}