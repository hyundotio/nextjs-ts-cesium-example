import React from "react";
import Head from 'next/head';
import { metadata } from "./layout";
import styles from "./page.module.css";
import MainApp from "./mainapp";

export default function Home() {
  const websiteTitle = metadata.title as string || 'Cesium in Next.js 14 with TypeScript';
  const websiteDescription = metadata.description as string || 'An example Next.js 14 TypeScript project displaying Cesium hosted in Vercel';
  return (
    <main>
       <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
          <meta property="og:type" content="website" key="ogtype" />
          <title key="title">{websiteTitle}</title>
          <link rel="canonical" href={`https://nextjs-cesium.vercel.app`} key="canonical" />
          <meta name="twitter:title" content={websiteTitle} key="twname" />
          <meta property="og:title" content={websiteTitle} key="ogtitle" />
          <meta name="description" content={websiteDescription} key="desc" />
          <meta name="og:description" content={websiteDescription} key="ogdesc" />
          <meta name="twitter:description" content={websiteDescription} key="twdesc" />
          <meta property="og:url" content={`https://nextjs-cesium.vercel.app`} key="ogurl" />
          <meta property="og:image" content={`https://nextjs-cesium.vercel.app/og.png`} key="ogimg" />
          <meta name="twitter:image" content={`https://nextjs-cesium.vercel.app/og.png`} key="twimg" />
          <meta name="twitter:card" content="summary_large_image" key="twlrgimg" />
          <link rel="icon" href="/favicon.ico" key="favicon" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>
      <a
        className={styles['source-link']}
        href='https://github.com/hyundotio/nextjs-ts-cesium-example'
        target='_blank'
        rel='noreferrer noopener'
      >
        GitHub Source link
      </a>
      <MainApp />
    </main>
  );
}
