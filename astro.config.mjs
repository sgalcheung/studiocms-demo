import db from "@astrojs/db";
import devApps from "@studiocms/devapps";
import { defineConfig } from "astro/config";
import studioCMS from "studiocms";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://demo.studiocms.dev/",
  output: "server",
  adapter: netlify(),
  integrations: [db(), studioCMS(), devApps()],
});
