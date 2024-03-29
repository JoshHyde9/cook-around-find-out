import { component$, useSignal } from "@builder.io/qwik";
import { List } from "./recipe/List";

type SignalProps = "Ingredients" | "Method";

type SwitchProps = {
  items: { title: SignalProps; list: string[] }[];
};

export const getList = (
  title: SignalProps,
  items: { title: SignalProps; list: string[] }[],
) => {
  return items.find((obj) => obj.title === title)!.list;
};

export const Switch = component$<SwitchProps>(({ items }) => {
  const state = useSignal<SignalProps>("Ingredients");

  return (
    <div>
      <div class="flex justify-around">
        {items.map(({ title }, i) => {
          return (
            <button
              key={i}
              class={`inline-block w-full rounded-t-lg border-b-2 p-4 hover:text-fuchsia-600
              ${
                state.value === title
                  ? "border-fuchsia-600 text-fuchsia-600 dark:text-fuchsia-400"
                  : "hover:border-fuchsia-600 hover:text-fuchsia-600 dark:hover:text-fuchsia-400"
              }
                `}
              onClick$={() => (state.value = title)}
            >
              {title}
            </button>
          );
        })}
      </div>
      {state.value === "Ingredients" ? (
        <List type="unordered" list={getList("Ingredients", items)} />
      ) : (
        <List type="ordered" list={getList("Method", items)} />
      )}
    </div>
  );
});
