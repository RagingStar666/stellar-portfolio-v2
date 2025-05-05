import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"

// https://astro.build/config
export default defineConfig({
  site: "https://prodiptaroy.com",
  integrations: [
    mdx(), 
    sitemap({
      filter: (page) => {
        // Exclude draft pages and any temporary/testing pages
        return !page.includes('/drafts/') && !page.includes('/temp/');
      },
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }), 
    solidJs(), 
    tailwind({ applyBaseStyles: false })
  ],
})