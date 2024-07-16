import type {
  DocumentHead,
  StaticGenerateHandler,
} from "@builder.io/qwik-city";

import { component$, $, useTask$, useSignal } from "@builder.io/qwik";
import { inlineTranslate } from "qwik-speak";

import { config } from "~/speak-config";
import { useRecipes } from "~/recipes";

import { Card } from "~/components/Card";
import { useDebouncer } from "~/hooks/useDeboucner";

type Recipe = {
  data: {
    date: Date;
    tags?: string[];
    title: string;
    description: string;
    thumbnail: {
      alt: string;
      src: string;
    };
    permalink: string;
    lang: string;
  };
  slug: string;
};

export default component$(() => {
  const t = inlineTranslate();

  const recipes = useRecipes();

  const searchInput = useSignal("");
  const filteredRecipes = useSignal<Recipe[]>([]);

  const debouce = useDebouncer(
    $((value: string) => {
      searchInput.value = value.toLowerCase();
    }),
    1000,
  );

  useTask$(async ({ track }) => {
    const trackedSearchValue = track(() => searchInput.value);

    filteredRecipes.value = recipes.value.filter((recipe) => {
      if (
        recipe.data.title.toLowerCase().includes(trackedSearchValue) ||
        recipe.data.tags?.find((str) =>
          str.toLowerCase().includes(trackedSearchValue),
        )
      ) {
        return recipe;
      }
    });
  });

  return (
    <div class="container mx-auto px-2 md:px-0">
      <div class="my-10 text-center">
        <h1 class="text-4xl">{t("site.home.title")}</h1>
        <p class="text-neutral-500">{t("site.home.description")}</p>
      </div>
      <div class="mb-4">
        <input
          class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          type="text"
          placeholder="Search..."
          onInput$={(_, target) => {
            debouce(target.value);
          }}
        />
      </div>
      <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {filteredRecipes.value.map((recipe) => (
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

export { useRecipes } from "~/recipes";
