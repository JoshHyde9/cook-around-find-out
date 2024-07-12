import { component$, Slot } from "@builder.io/qwik";
import { inlineTranslate, useFormatDate } from "qwik-speak";
import { Tag } from "~/components/Tag";
import { useRecipe } from "~/recipes";

export default component$(() => {
  const recipeSig = useRecipe();
  const { data: recipe } = recipeSig.value;

  const t = inlineTranslate();
  const fd = useFormatDate();

  return (
    <article class="container mx-auto mb-24 px-2 pb-12 pt-16 md:px-10 md:pt-36">
      <header class="my-12">
        <a
          href=".."
          class="mb-12 flex gap-2 text-zinc-700 transition-all duration-300 hover:gap-4"
        >
          <span>←</span>
          <span>{t("site.messages.return-previous-page")}</span>
        </a>

        <ul class="flex list-none flex-wrap gap-2 md:gap-3">
          {recipe.tags?.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>

        <h1 class="text-4xl leading-[53px] tracking-tighter md:my-6 md:text-6xl md:leading-[73px]">
          {recipe.title}
        </h1>

        <time class="text-balance block text-base leading-6 text-zinc-700">
          {t("site.messages.updated")}{" "}
          {fd(recipe.date, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        <p class="leading-1 mb-24 text-xl font-medium md:text-3xl">
          {recipe.description}
        </p>
      </header>

      <div class="prose-img:breakout prose-base prose-zinc max-w-none lg:prose-xl prose-img:mb-24 prose-img:rounded-md prose-img:shadow-lg">
        <Slot />
      </div>
    </article>
  );
});

export { useRecipe } from "~/recipes";
