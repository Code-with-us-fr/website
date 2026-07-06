import {defineConfig} from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  // Remplacer par vos informations GitHub
  site: 'https://votre-username.github.io',
  base: '/website',
  image: {
    domains: ['img.youtube.com'],
  },
});