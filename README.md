
# Cesium in Next.js 14 (App router) with TypeScript

## Blah blah
You know what to do... `npm install` and `npm run dev` or `npm run build` then `npm run start` - Yarn probably works too...

## Important bits
https://nextjs-cesium.vercel.app

#### Demo
Literally just pointed Vercel to this repo to build and run automatically. 

#### next.config.js
Cesium requires some files to be copied in a publicly accessible folder. This is achieved with CopyWebPackPlugin... *BUT* each copy statements requires `info: { minimized: true }`

#### Next.js troubles
It is just cleaner to have Cesium related components as client only components. So in this case, both the Cesium component and the dynamic ssr off wrappers are tagged with `'use client'`

I won't go into every method that I've tried but every method I've tried has resulted in browser errors, Next.js errors, and/or Vercel (500 status filesystem) errors. Using the CopyWebPackPlugin, wrapping it in a dynamic component, and then finally importing the Cesium files via `import` inside a `useEffect` yielded 100% success.

#### TypeScript shenanigans with Cesium.js
With all the work above, it is very important to utilize the dynamically called Cesium and not import individual functions like you would normally. Also it is very important to type Cesium specific  things with `import type { xyz } from 'cesium'` not `import { xyz } from 'cesium'`

### I hope this helps you save some time... Cesium is a PITA to get started.

### Credits
Thank you https://github.com/willwill96 for helping me get started
and please give this repo a star if it was helpful!