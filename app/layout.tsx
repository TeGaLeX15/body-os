import "./globals.css";
import { BottomNavigation } from "@/shared/ui/BottomNavigation";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body className="min-h-screen bg-zinc-950 text-zinc-100">
        {/* игровая неоновая подложка */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.35),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(74,222,128,0.25),transparent_50%)]"
        />
        <div className="mx-auto flex min-h-screen max-w-md flex-col">
          <main className="flex-1 px-4 py-6">{children}</main>

          <BottomNavigation />
        </div>
      </body>
    </html>
  );
}
