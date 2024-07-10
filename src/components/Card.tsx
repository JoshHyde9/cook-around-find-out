import type { RecipeCollectionEntry } from "~/content";
import { component$ } from "@builder.io/qwik";
import { useFormatDate } from "qwik-speak";

export const Card = component$<RecipeCollectionEntry>(({ data, slug }) => {
  const fd = useFormatDate();

  return (
    <a href={slug}>
      <div class="flex h-full flex-col overflow-hidden rounded shadow-lg">
        <div class="relative">
          <img
            class="h-full w-full object-cover"
            src={data.thumbnail.src}
            alt={data.thumbnail.alt}
            width={0}
            height={0}
          />
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-gray-900 opacity-25 transition duration-300 hover:bg-transparent"></div>
        </div>
        <div class="mb-auto px-6 py-4">
          <div>
            <h2>{data.title}</h2>
          </div>
          <p class="text-sm text-gray-500">{data.description}</p>
        </div>
        <div class="flex flex-row items-center justify-between bg-gray-100 px-6 py-3">
          <span class="font-regular mr-1 flex flex-row items-center py-1 text-xs text-gray-900">
            {fd(data.date, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>

          <div class="font-regular mr-1 flex flex-row items-center py-1 text-xs text-gray-900">
            {data.tags?.map((tag) => (
              <span key={tag} class="rounded-sm bg-slate-200 px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
});
