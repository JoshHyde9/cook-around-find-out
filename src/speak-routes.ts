import type { RewriteRouteOption } from "qwik-speak";

/** Translation paths */
export const rewriteRoutes: RewriteRouteOption[] = [
  {
    prefix: "es-AR",
    paths: {
      "chili-oil": "aceite-de-chile",
      "mustard-dressing": "aderezo-de-mostaza",
      "shallot-vinaigrette": "vinagreta-de-chalota",
    },
  },
];
