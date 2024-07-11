import { component$, Slot } from "@builder.io/qwik";

export const Tag = component$(() => (
  <span class="rounded-sm bg-slate-200 px-3 py-1">
    <Slot />
  </span>
));
