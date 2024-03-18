import { component$ } from "@builder.io/qwik";

type MacrosProps = {
  macros: { title: string; value: number }[];
  size: "normal" | "small";
};

export const Macros = component$<MacrosProps>(({ macros, size }) => {
  return (
    <>
      {size === "normal" ? (
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
      ) : (
        <ul class="flex justify-center gap-x-1">
          {macros.map(({ title, value }, i) => {
            return (
              <li key={i}>
                {value} {title === "Cals" ? "Cals" : title[0]}{" "}
                {/* Render separator if not last element in array */}
                {macros.length !== i + 1 && "|"}{" "}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
});
