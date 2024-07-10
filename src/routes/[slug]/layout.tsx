import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <article class="container mx-auto py-10">
      <div class="flex justify-center">
        <Slot />
      </div>
    </article>
  );
});
