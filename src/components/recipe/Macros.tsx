import { component$ } from "@builder.io/qwik";

type MacrosProps = {
  macros: [{ title: string; value: number }];
};

export const Macros = component$<MacrosProps>(({ macros }) => {
  return (
    <div class="my-2 flex justify-between py-4">
      {macros.map(({ title, value }, i) => {
        return (
          <div key={i} class="flex flex-col items-center">
            <h2 class="text-3xl font-bold">{title}</h2>
            <p class="text-xl">
              {value} {title !== "Cals" ? "g" : ""}
            </p>
          </div>
        );
      })}
    </div>
  );
});
