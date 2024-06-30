import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Matthew Bevan",
  description: "Matthew Bevan's personal portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "md:h-screen w-screen md:overflow-hidden bg-accent",
          GeistSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <TooltipProvider delayDuration={100}>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
