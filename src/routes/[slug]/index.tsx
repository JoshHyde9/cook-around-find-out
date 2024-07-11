/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  DocumentHead,
  RequestHandler,
  StaticGenerateHandler,
} from "@builder.io/qwik-city";

import { $, component$, useSignal, useTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { isDev } from "@builder.io/qwik/build";
import { translatePath, useSpeakLocale } from "qwik-speak";
import { collections } from "virtual:mdx-collection";

import { getCollectionEntry } from "~/content";
import { config } from "~/speak-config";

const modules: Record<string, any> = import.meta.glob("/src/content/**/*.mdx", {
  eager: !isDev,
  import: "default",
});

export const onRequest: RequestHandler = ({
  locale,
  error,
  redirect,
  params,
  pathname,
}) => {
  const { slug } = params;
  const getPath = translatePath();
  if (!locale()) throw error(404, "Page not found for requested locale");

  const path = `/src/content/${locale()}/${slug}.mdx`;
  const mod = modules[path];

  if (!mod) {
    // Try to find the recipe in other available locales
    for (const supportedLocale of config.supportedLocales) {
      if (supportedLocale.lang === locale()) continue;

      const newPath = `/src/content/${supportedLocale.lang}/${slug}.mdx`;

      if (modules[newPath]) {
        throw redirect(302, getPath(pathname, supportedLocale.lang));
      }
    }
  }
};

export default component$(() => {
  const RecipeContent = useSignal<any>();
  const { lang } = useSpeakLocale();
  const slug = useLocation().params.slug;
  const path = `/src/content/${lang}/${slug}.mdx`;

  useTask$(() => {
    const qrl = $(async () => {
      const mod = isDev ? await modules[path]() : modules[path];
      const recipeContent = mod();
      return recipeContent;
    });

    RecipeContent.value = qrl;
  });

  return <>{RecipeContent.value && <RecipeContent.value />}</>;
});

export const head: DocumentHead = ({ params }) => {
  const entry = getCollectionEntry(params.slug);
  if (!entry) throw new Error(`Recipe ${params.slug} not found`);

  const { data: recipe } = entry;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RecipePosting",
    headline: recipe.title,
    datePublished: recipe.date,
    dateModified: recipe.date,
    author: {
      "@type": "Person",
      name: "Josh Hyde",
    },
    description: recipe.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://cook-around-find-out.vercel.app/${recipe.permalink}`,
    },
  };

  return {
    title: `${recipe.title}`,
    meta: [
      {
        name: "json-ld",
        content: JSON.stringify(jsonLd),
      },
      {
        name: "og:title",
        content: `${recipe.title}`,
      },
      {
        name: "og:description",
        content: `${recipe.description}`,
      },
      {
        name: "og:url",
        content: `https://cook-around-find-out.vercel.app/${recipe.permalink}`,
      },
      {
        name: "og:image",
        content: `${recipe.thumbnail.src}`,
      },

      // Twitter
      {
        name: "twitter:title",
        content: `${recipe.title}`,
      },
      {
        name: "twitter:description",
        content: `${recipe.description}`,
      },
      {
        name: "twitter:site",
        content: "@joshhyde9",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  };
};

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const params = collections.content.map((entry) => {
    const { slug } = entry;
    const { lang } = entry.data;

    // Check if lang is supported
    if (!config.supportedLocales.some((locale) => locale.lang === lang)) {
      throw new Error(`Unsupported language: ${lang}`);
    }

    return { slug, lang: lang === config.defaultLocale.lang ? "." : lang };
  });

  return {
    params,
  };
};
