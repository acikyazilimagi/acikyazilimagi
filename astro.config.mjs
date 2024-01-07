import path from "path";
import url from "url";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import markdoc from "@astrojs/markdoc";
import remarkCodeTitles from "remark-code-titles";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// https://astro.build/config
export default defineConfig(/** @type {import('astro').AstroUserConfig} */ {
  // output: 'server',
  output: "static",
  site: "https://acikyazilimagi.com", // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  server: {
    // port: 4321, // The port to run the dev server on.
  },
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "css-variables",
    },
    remarkPlugins: [
      remarkCodeTitles,
    ],
  },
  integrations: [
    mdx(),
    markdoc(),
    icon(),
    svelte(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  vite: {
    plugins: [],
    resolve: {
      alias: {
        $: path.resolve(__dirname, "./src"),
      },
    },
    optimizeDeps: {
      allowNodeBuiltins: true,
    },
  },
});
