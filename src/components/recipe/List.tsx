import { component$ } from "@builder.io/qwik";

export type ListProps = {
  list: string[];
  type: "ordered" | "unordered";
};

export const List = component$<ListProps>(({ list, type }) => {
  return (
    <ul
      class={`max-w-md list-inside space-y-1 py-4 text-gray-500 dark:text-gray-400 
        ${type === "ordered" ? "list-decimal" : "list-disc"}
      `}
    >
      {list.map((item, i) => (
        <li class="my-2" key={i}>
          {item}
        </li>
      ))}
    </ul>
  );
});
