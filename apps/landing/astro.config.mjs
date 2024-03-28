import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    sentry({
      dsn: "https://bedf56ca8ec9f6b8965c678b62990ccc@o4506932955512832.ingest.us.sentry.io/4506932955643904",
      sourceMapsUploadOptions: {
        project: "gitsharespace_landing",
        authToken: import.meta.env.SENTRY_AUTH_TOKEN,
        telemetry: false,
      },
    }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true,
    },
  },
});
