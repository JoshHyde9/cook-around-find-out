import type {
  DocumentHead,
  StaticGenerateHandler,
} from "@builder.io/qwik-city";

import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import { recipes } from "~/db/recipes";

import { Back } from "~/components/Back";
import { Heading } from "~/components/Heading";
import { Switch } from "~/components/Switch";

import { Macros } from "~/components/recipe/Macros";
import { List } from "~/components/recipe/List";

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const slugs = recipes.map((recipe) => recipe.slug);

  return {
    params: slugs.map((slug) => {
      return { slug };
    }),
  };
};

export const useGetRecipe = routeLoader$(({ params, status }) => {
  const recipe = recipes.find((recipe) => recipe.slug === params.slug);

  if (!recipe) {
    status(404);
  }

  return recipe;
});

export default component$(() => {
  const { value: recipe } = useGetRecipe();

  if (!recipe) {
    return <p>Sorry, this recipe does not exist.</p>;
  }

  return (
    <>
      <Back title="Back" />

      <Heading title={recipe.title} />

      <Macros size="normal" macros={recipe.macros} />

      <h3 class="mb-5 text-center text-2xl font-bold lg:text-3xl">
        Servings: {recipe.servings}
      </h3>

      <div class="md:hidden">
        <Switch
          items={[
            { title: "Ingredients", list: recipe.ingredients },
            { title: "Method", list: recipe.method },
          ]}
        />
      </div>

      <div class="hidden md:flex md:justify-between md:gap-x-10">
        <div class="flex flex-col gap-y-2">
          <h2 class="text-3xl">Ingredients:</h2>
          <List type="unordered" list={recipe.ingredients} />
        </div>
        <div class="flex flex-col gap-y-2">
          <h2 class="text-3xl">Method:</h2>
          <List type="ordered" list={recipe.method} />
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const recipe = resolveValue(useGetRecipe);
  return {
    title: recipe?.title ? recipe.title : "No Recipe Found",
    meta: [
      {
        name: "description",
        content: recipe?.description ? recipe.description : "What is this?",
      },
    ],
  };
};
