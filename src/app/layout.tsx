import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cesium in Next.js 16 with TypeScript",
  description:
    "An example Next.js 16 TypeScript project displaying Cesium hosted in Vercel",
  openGraph: {
    type: "website",
    siteName: "Cesium in Next.js 16 with TypeScript",
    title: "Cesium in Next.js 16 with TypeScript",
    url: `https://nextjs-cesium.vercel.app`,
    description:
      "An example Next.js 16 TypeScript project displaying Cesium hosted in Vercel",
    images: [
      {
        url: `https://nextjs-cesium.vercel.app/og.png`,
      },
    ],
  },
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
