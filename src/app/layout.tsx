import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cesium in a Next.js 14 project with TypeScript",
  description: "Made by Hyun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}