import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import { imagetools } from "vite-imagetools";
import { resolve } from "path";
import sitemap from "vite-plugin-sitemap";
import compression from 'vite-plugin-compression';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        impressum: resolve(__dirname, "privacy.html"),
        karriere: resolve(__dirname, "careers.html"),
        terms: resolve(__dirname, "terms.html"),
      },
    },
  },
  plugins: [
    imagetools(),
    injectHTML(),
    sitemap({
      hostname: "https://example-page.de",
      exclude: ["/404"],
      routes: ["/", "/privacy", "/careers", "/terms", "/#service"],
      lastmod: new Date().toISOString(),
      changefreq: {
        "/": "weekly",
        "/privacy": "yearly",
        "/terms": "yearly",
        "/careers": "monthly",
        "/#service": "monthly",
      },
      priority: {
        "/": 1.0,
        "/privacy": 0.3,
        "/terms": 0.3,
        "/careers": 0.7,
        "/#service": 0.7,
      },
    }),
    compression({
      algorithm: "gzip", // You can also use 'brotliCompress' here
      ext: ".gz",
      deleteOriginFile: false, // Set to true if you want to delete the original uncompressed file
      threshold: 10240, // Only compress files larger than this size (in bytes)
      verbose: true, // Log compression results
      disable: false, // You can disable the plugin in certain environments if needed
    }),
  ],
});
