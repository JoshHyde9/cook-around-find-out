import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Macros } from "./recipe/Macros";

export type CardProps = {
  title: string;
  description: string;
  slug: string;
  macros: { title: string; value: number }[];
};

export const Card = component$<CardProps>(
  ({ title, description, slug, macros }) => {
    return (
      <Link href={`/recipe/${slug}`}>
        <div class="h-44 max-w-sm overflow-hidden rounded shadow-md shadow-fuchsia-400">
          <div class="flex h-full flex-col justify-between px-6 py-4">
            <div class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              {title}
            </div>
            <p class="text-gray-500">{description}</p>
            <Macros size="small" macros={macros} />
          </div>
        </div>
      </Link>
    );
  },
);
