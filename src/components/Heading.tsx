import { component$ } from "@builder.io/qwik";

type HeadingProps = {
  title: string;
};

export const Heading = component$<HeadingProps>(({ title }) => {
  return (
    <h1 class="mb-4 text-center text-3xl font-extrabold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-4xl">
      {title}
    </h1>
  );
});
