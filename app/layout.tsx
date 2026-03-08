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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      </head>
      <body className="h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="h-[10vh] sm:h-[10%]">
          <TopNav/>
        </div>
        <div className="h-[90vh] sm:h-[90%]">
          {children}
        </div>
      </body>
    </html>
  );
}
