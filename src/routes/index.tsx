import type { DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

import { Card } from "~/components/Card";
import { Heading } from "~/components/Heading";
import { recipes } from "~/db/recipes";

export default component$(() => {
  return (
    <div class="h-full">
      <div class="mx-4 mb-4 border-b border-slate-600">
        <Heading title="Cook Around and Find Out" />
      </div>
      <div class="container mx-auto flex max-w-screen-xl flex-wrap justify-center gap-4">
        {recipes.map((recipe) => (
          <Card
            key={recipe.slug}
            title={recipe.title}
            description={recipe.description}
            macros={recipe.macros}
            slug={recipe.slug}
          />
        ))}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Cook Around and Find Out",
  meta: [
    {
      name: "description",
      content:
        "Published recipes that I have piss-farted around with or found online and changed to my liking.",
    },
  ],
};
