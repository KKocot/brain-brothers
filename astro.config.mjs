// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // PLACEHOLDER: swap for the client production domain once it is known.
  // Changing this also requires updating the Sitemap: line in public/robots.txt.
  site: "https://brain-brothers.vercel.app",
  output: "static",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
