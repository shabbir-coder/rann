import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  // Gzip/Brotli compression for responses
  compress: true,

  images: {
    // Serve modern formats when the browser supports them
    formats: ["image/avif", "image/webp"],
    // Long-lived cache for optimized images
    minimumCacheTTL: 31536000,
  },

  async headers() {
    return [
      {
        // Apply security headers to every route
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            // Adjust the allowed sources to match every third-party script
            // you actually load (Google Tag Manager, Secure Privacy, Google
            // Fonts, Font Awesome/Bootstrap Icons CDN, jsDelivr, etc). A CSP
            // that's too strict will silently break those scripts, so test
            // thoroughly in staging before shipping to production.
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://app.secureprivacy.ai",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com https://cdn.jsdelivr.net",
              "font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com",
              "img-src 'self' data: https:",
              "connect-src 'self' https://www.google-analytics.com",
              "frame-ancestors 'self'",
            ].join("; "),
          },
        ],
      },
      {
        // Long-lived cache for static assets
        source: "/img/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;