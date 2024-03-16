import { component$, useSignal } from "@builder.io/qwik";
import { List } from "./recipe/List";

type SignalProps = "Ingredients" | "Method";

type SwitchProps = {
  items: [{ title: SignalProps; list: string[] }];
};

export const getList = (
  title: SignalProps,
  items: [{ title: SignalProps; list: string[] }],
) => {
  return items.find((obj) => obj.title === title)!.list;
};

export const Switch = component$<SwitchProps>(({ items }) => {
  const state = useSignal<SignalProps>("Ingredients");

  return (
    <div>
      <div class="flex border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {items.map(({ title }, i) => {
          return (
            <button
              key={i}
              class={`mx-4 ${state.value === title ? "inline-block rounded-t-lg bg-gray-100 p-4 text-blue-600 dark:bg-gray-800 dark:text-blue-500" : "inline-block rounded-t-lg p-4 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"}`}
              onClick$={() => (state.value = title)}
            >
              {title}
            </button>
          );
        })}
      </div>
      {state.value === "Ingredients" ? (
        <List list={getList("Ingredients", items)} />
      ) : (
        <List list={getList("Method", items)} />
      )}
    </div>
  );
});
