import type { Metadata } from "next";
import "./globals.css";
import TopNav from "./components/topnav";

export const metadata: Metadata = {
  title: "Shajahan Shaik - Portfolio",
  description: "Full Stack Developer specializing in Angular, Next.js, Nest.js, and GraphQL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="h-[10%]">
          <TopNav/>
        </div>
        <div className="h-[90%]">
          {children}
        </div>
      </body>
    </html>
  );
}
