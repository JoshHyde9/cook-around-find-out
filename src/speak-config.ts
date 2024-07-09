import type { SpeakConfig } from "qwik-speak";

import { rewriteRoutes } from "./speak-routes";

export const config: SpeakConfig = {
  rewriteRoutes,
  defaultLocale: {
    lang: "en-AU",
    currency: "AUD",
    timeZone: "Australia/Melbourne",
  },
  supportedLocales: [
    {
      lang: "es-AR",
      currency: "ARS",
      timeZone: "America/Argentina/Buenos_Aires",
    },
    {
      lang: "en-AU",
      currency: "AUD",
      timeZone: "Australia/Melbourne",
    },
  ],
  // Translations available in the whole app
  assets: ["app", "home", "projects", "site", "about"],
  // Translations with dynamic keys available in the whole app
  runtimeAssets: ["runtime"],
};
