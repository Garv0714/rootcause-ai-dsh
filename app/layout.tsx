import "./globals.css";
import type { Metadata } from "next";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "RootCause AI",
  description:
    "AI-Powered STEM Investigation Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className="
        min-h-screen
        bg-slate-50
        text-slate-900
        antialiased
        "
      >
        <Navbar />

        <div
          className="
          min-h-[calc(100vh-80px)]
          "
        >
          {children}
        </div>

      </body>

    </html>
  );
}