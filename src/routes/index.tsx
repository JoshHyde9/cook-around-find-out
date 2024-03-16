import type { DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

import { Card } from "~/components/Card";
import { Heading } from "~/components/Heading";

export default component$(() => {
  return (
    <div>
      <div class="mx-4 mb-4 border-b border-slate-600">
        <Heading title="Cook Around and Find Out" />
      </div>
      <div class="container mx-auto flex max-w-screen-xl flex-wrap justify-center gap-4">
        <Card
          title="Cum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reiciendis, debitis sequi eos aliquam error? Vitae distinctio eius excepturi atque!"
          slug="cum"
        />
        <Card
          title="Cum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reiciendis, debitis sequi eos aliquam error? Vitae distinctio eius excepturi atque!"
          slug="cum"
        />
        <Card
          title="Cum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reiciendis, debitis sequi eos aliquam error? Vitae distinctio eius excepturi atque!"
          slug="cum"
        />
        <Card
          title="Cum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reiciendis, debitis sequi eos aliquam error? Vitae distinctio eius excepturi atque!"
          slug="cum"
        />
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
