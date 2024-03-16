import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export type CardProps = {
  title: string;
  description: string;
  slug: string;
};

export const Card = component$<CardProps>(({ title, description, slug }) => {
  return (
    <Link href={`/recipe/${slug}`}>
      <div class="max-w-sm overflow-hidden rounded shadow-md shadow-fuchsia-400">
        <div class="px-6 py-4">
          <div class="mb-2 text-xl font-bold text-white">{title}</div>
          <p class="text-base dark:text-gray-500">{description}</p>
        </div>
      </div>
    </Link>
  );
});
