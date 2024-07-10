import { validateLocale } from "qwik-speak";

import { config } from "~/speak-config";

export const getLang = (lang?: string) => {
  if (lang && validateLocale(lang)) {
    const userLang = config.supportedLocales.find(
      (value) => value.lang === lang,
    )?.lang;
    if (!userLang) throw new Error(`No locale found for lang: ${lang}`);
    return userLang;
  }

  return config.defaultLocale.lang;
};
