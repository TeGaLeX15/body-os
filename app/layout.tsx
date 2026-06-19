import "./globals.css";
import { BottomNavigation } from "@/shared/ui/BottomNavigation";

export const metadata = {
  title: "Body OS",
  description: "Personal fitness tracking system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
        {/* MAIN CONTENT */}
        <main className="flex-1 p-4">{children}</main>

        {/* BOTTOM NAV */}
        <BottomNavigation />
      </body>
    </html>
  );
}
