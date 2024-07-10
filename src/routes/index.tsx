import { component$ } from "@builder.io/qwik";
import {
  type DocumentHead,
  type StaticGenerateHandler,
} from "@builder.io/qwik-city";
import { inlineTranslate } from "qwik-speak";
import { Card } from "~/components/Card";
import { useRecipes } from "~/content";

import { config } from "~/speak-config";

export default component$(() => {
  const t = inlineTranslate();

  const recipes = useRecipes();

  return (
    <div class="container mx-auto px-2 md:px-0">
      <div class="my-10 text-center">
        <h1 class="text-4xl">{t("site.home.title")}</h1>
        <p class="text-neutral-500">{t("site.home.description")}</p>
      </div>
      <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {recipes.value.map((recipe) => (
          <Card key={recipe.slug} slug={recipe.slug} data={recipe.data} />
        ))}
      </div>
    </div>
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

export { useRecipes } from "~/content";
