
# Cesium in Next.js 14 (App router) with TypeScript

## Blah blah
You know what to do... `npm install` and `npm run dev` or `npm run build` then `npm run start` - Yarn probably works too...

## Important bits
https://nextjs-cesium.vercel.app <- Live demo

https://github.com/hyundotio/next-ts-pagerouter-cesium-example <- Click here for Page router example

#### Demo
Literally just pointed Vercel to this repo to build and run automatically. 

#### Environment Variable
In your `.env` file, add a field called `NEXT_PUBLIC_CESIUM_TOKEN` and assign your Cesium Access Token. This is optional if you plan on using other services.

#### next.config.js
Cesium requires some files to be copied in a publicly accessible folder. This is achieved with CopyWebPackPlugin... *BUT* each copy statements requires `info: { minimized: true }`

#### Next.js troubles
It is just cleaner to have Cesium related components as client only components. So in this case, both the Cesium component and the dynamic ssr off wrappers are tagged with `'use client'`

I won't go into every method that I've tried but every method I've tried has resulted in browser errors, Next.js errors, and/or Vercel (500 status filesystem) errors. Using the CopyWebPackPlugin, wrapping it in a dynamic component, and then finally importing the Cesium files via `import` inside a `useEffect` yielded 100% success.

#### Next.js + React quirks
On NextJS 13.4+ React Strict-Mode is enabled by default. In `CesiumComponent.tsx` there is some extra code in `initializeCesiumJs` function and the `cleanUpPrimitives` function itself to clean up any possible things (in this specific case, primitives) that may be added as a duplicate when the function is called twice. Optionally, you can disable React strcit mode and remove this code.

#### TypeScript shenanigans with Cesium.js
With all the work above, it is very important to utilize the dynamically called Cesium and not import individual functions like you would normally. Also it is very important to type Cesium specific  things with `import type { xyz } from 'cesium'` not `import { xyz } from 'cesium'`

### I hope this helps you save some time... Cesium is a PITA to get started.

### Credits
Thank you https://github.com/willwill96 for helping me get started
and please give this repo a star if it was helpful!