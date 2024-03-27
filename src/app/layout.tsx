import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cesium in Next.js 14 with TypeScript",
  description: "An example Next.js 14 TypeScript project displaying Cesium hosted in Vercel",
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