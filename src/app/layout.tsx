import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Ticker from "@/components/Ticker";
import SideNav from "@/components/SideNav";

export const metadata: Metadata = {
  title: "Josh | Developer, Creator & Curious Human",
  description:
    "The personal website of Josh — developer, home cook, gardener, gamer, writer, and general enthusiast of many things.",
  keywords: ["Josh", "personal website", "developer", "blog", "portfolio", "cookbook", "garden"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Ticker />

        <div className="flex min-h-screen">
          <SideNav />

          {/* Main content — offset by sidebar width on large screens */}
          <main className="flex-1 lg:ml-56 min-h-screen">
            {children}
          </main>
        </div>

        {/* Bottom bar */}
        <div
          className="h-[5px] w-full fixed bottom-0 z-50"
          style={{
            background:
              "linear-gradient(90deg, #3d2a0a, #c8a84b, #f5c842, #c8a84b, #3d2a0a)",
          }}
        />
      </body>
    </html>
  );
}
