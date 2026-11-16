import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://koreroapp.com",
  // Early access ended; Korero runs on any Bazaar org plan
  redirects: { "/early-access": "/" },
  integrations: [tailwind(), sitemap()],
});
