import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "NexisGEO | Monitor How AI Recommends Your Cafe",
  description:
    "Pre-launch concept validation site for NexisGEO, the intelligence platform for Generative Engine Optimization."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-90">
            <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-electric/14 blur-3xl" />
            <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-cyan/8 blur-3xl" />
            <div className="absolute left-0 top-72 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />
          </div>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
