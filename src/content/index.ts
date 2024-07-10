/* eslint-disable qwik/loader-location */
import { routeLoader$ } from "@builder.io/qwik-city";
import { collections } from "virtual:mdx-collection";

import { getLang } from "~/utils/getLang";

export type RecipeCollectionEntry = Collections["content"][number];

export const getCollectionEntry = (slug: string) => {
  const collection = collections.content;
  const entry = collection.find((entry_) => entry_.slug === slug);

  if (!entry) return null;

  return entry;
};

export const getCollectionList = (locale: string) => {
  const collection = collections.content;
  const list = collection.filter((entry) => entry.data.lang === locale);

  return list;
};

export const useRecipes = routeLoader$(async ({ locale, error }) => {
  const userLang = locale();
  try {
    const lang = getLang(userLang);
    const recipes = getCollectionList(lang);

    return recipes;
  } catch {
    throw error(404, "Recipes not found");
  }
});

export const useRecipe = routeLoader$(async ({ params, error }) => {
  try {
    const recipe = getCollectionEntry(params.slug);
    if (!recipe) throw error(404, `Recipe ${params.slug} not found`);

    return recipe;
  } catch (error_) {
    if (error_ instanceof Error) {
      throw error(
        500,
        `Error loading recipe ${params.slug}: ${error_.message}`,
      );
    } else {
      throw error(500, "Error loading recipe");
    }
  }
});
