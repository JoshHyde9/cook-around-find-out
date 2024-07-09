import { component$ } from "@builder.io/qwik";
import type {
  DocumentHead,
  StaticGenerateHandler,
} from "@builder.io/qwik-city";
import { inlineTranslate } from "qwik-speak";

import { config } from "~/speak-config";

export default component$(() => {
  const t = inlineTranslate();
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        {t("site.messages.why?")}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

export const onStaticGenerate: StaticGenerateHandler = () => {
  return {
    params: config.supportedLocales.map((locale) => {
      return {
        lang: locale.lang === config.defaultLocale.lang ? "." : locale.lang,
      };
    }),
  };
};
