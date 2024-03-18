import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export type BackProps = {
  href?: string;
  title: string;
};

export const Back = component$<BackProps>(({ href, title }) => {
  return (
    <Link
      href={href ? href : "/"}
      class="flex w-fit gap-x-2 border-b-2 border-b-transparent hover:border-b-fuchsia-500 dark:text-fuchsia-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="stroke-fuchsia-500"
      >
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </svg>
      {title}
    </Link>
  );
});
