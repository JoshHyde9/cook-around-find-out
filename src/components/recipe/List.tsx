import { component$ } from "@builder.io/qwik";

export type ListProps = {
  list: string[];
};

export const List = component$<ListProps>(({ list }) => {
  return (
    <div>
      <ul class="max-w-md list-inside list-disc space-y-1 text-gray-500 dark:text-gray-400">
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
});
