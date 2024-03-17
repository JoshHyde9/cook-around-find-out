import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <main class="overflow-y-hidden pt-8 antialiased dark:text-slate-300 lg:pt-16">
      <div class="mx-auto flex max-w-screen-xl justify-between px-4">
        <article class="mx-auto w-full max-w-2xl">
          <Slot />
        </article>
      </div>
    </main>
  );
});
