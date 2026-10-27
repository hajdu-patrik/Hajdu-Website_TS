import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

function contentSecurityPolicy(isDev: boolean): string {
  // Vercel injects its feedback toolbar on preview deployments only.
  const isPreview = process.env.VERCEL_ENV === "preview";
  const toolbar = (sources: string) => (isPreview ? ` ${sources}` : "");

  const directives: Record<string, string> = {
    "default-src": "'self'",
    // Next.js inlines its bootstrap and RSC payload scripts; a nonce would make every page dynamic.
    // In development the Vercel analytics scripts load from their CDN and React needs eval.
    "script-src": `'self' 'unsafe-inline'${isDev ? " 'unsafe-eval' https://va.vercel-scripts.com" : ""}${toolbar("https://vercel.live")}`,
    "style-src": `'self' 'unsafe-inline'${toolbar("https://vercel.live")}`,
    "img-src": `'self' data: blob:${toolbar("https://vercel.live https://vercel.com")}`,
    "font-src": `'self'${toolbar("https://vercel.live https://assets.vercel.com")}`,
    "connect-src": `'self'${isDev ? " ws: wss:" : ""}${toolbar("https://vercel.live wss://ws-us3.pusher.com")}`,
    "frame-src": `https://www.google.com${toolbar("https://vercel.live")}`,
    "object-src": "'none'",
    "base-uri": "'self'",
    "form-action": "'self'",
    "frame-ancestors": "'none'",
  };

  return Object.entries(directives)
    .map(([directive, value]) => `${directive} ${value}`)
    .join("; ");
}

export default function config(phase: string): NextConfig {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    allowedDevOrigins: ["192.168.56.1", "localhost:3000"],
    poweredByHeader: false,
    images: {
      formats: ["image/avif", "image/webp"],
      minimumCacheTTL: 2_678_400,
    },
    async headers() {
      return [
        {
          source: "/:path*",
          headers: [
            { key: "Content-Security-Policy", value: contentSecurityPolicy(isDev) },
            { key: "Strict-Transport-Security", value: "max-age=63072000" },
            { key: "X-Content-Type-Options", value: "nosniff" },
            { key: "X-Frame-Options", value: "DENY" },
            { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
            { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
            {
              key: "Permissions-Policy",
              value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
            },
          ],
        },
        {
          // Files in public/ have no content hash, so a replaced image needs a new file name.
          source: "/:all*(webp|avif|png|jpg|jpeg|ico|svg)",
          headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
        },
      ];
    },
    async redirects() {
      return [{ source: "/Og-image.webp", destination: "/og/hajdu-kozmu.jpg", permanent: true }];
    },
  };
}
