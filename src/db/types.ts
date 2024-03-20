export type Macro = { title: string; value: number };

export type Recipe = {
  title: string;
  description: string;
  macros: Macro[];
  slug: string;
  servings: number;
  method: string[];
  ingredients: string[];
};
