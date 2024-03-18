import type { DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

import { Card } from "~/components/Card";
import { Heading } from "~/components/Heading";

export default component$(() => {
  return (
    <div class="h-full">
      <div class="mx-4 mb-4 border-b border-slate-600">
        <Heading title="Cook Around and Find Out" />
      </div>
      <div class="container mx-auto flex max-w-screen-xl flex-wrap justify-center gap-4">
        <Card
          title="Cajun Chicken Risotto"
          description="Spicy chicken risotto with sautéed capsicum, celery and onion."
          slug="cajun-chicken-risotto"
          macros={[
            { title: "Cals", value: 513 },
            { title: "Protein", value: 51 },
            { title: "Carbs", value: 60 },
            { title: "Fats", value: 9 },
          ]}
        />
        <Card
          title="Cum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reiciendis, debitis sequi eos aliquam error? Vitae distinctio eius excepturi atque!"
          slug="cum"
          macros={[
            { title: "Cals", value: 513 },
            { title: "Protein", value: 51 },
            { title: "Carbs", value: 60 },
            { title: "Fats", value: 9 },
          ]}
        />
        <Card
          title="Cum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reiciendis, debitis sequi eos aliquam error? Vitae distinctio eius excepturi atque!"
          slug="cum"
          macros={[
            { title: "Cals", value: 513 },
            { title: "Protein", value: 51 },
            { title: "Carbs", value: 60 },
            { title: "Fats", value: 9 },
          ]}
        />
        <Card
          title="Cum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reiciendis, debitis sequi eos aliquam error? Vitae distinctio eius excepturi atque!"
          slug="cum"
          macros={[
            { title: "Cals", value: 513 },
            { title: "Protein", value: 51 },
            { title: "Carbs", value: 60 },
            { title: "Fats", value: 9 },
          ]}
        />
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
        "Published recipes that I have piss-farted around with or found online and changed to my liking ",
    },
  ],
};
