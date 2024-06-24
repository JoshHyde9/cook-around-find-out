import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <section>
      <h1 class="text-center text-4xl">Recipes</h1>

      <Link href="/sourdough">Click for sourdough</Link>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Cook Around and Find Out",
  meta: [
    {
      name: "description",
      content: "Recipes and all that gear",
    },
  ],
};
