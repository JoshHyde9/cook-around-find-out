import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <section>
      <h1 class="text-center text-4xl">Sourdough</h1>
      {/* Making a starter */}
      <section class="mt-4 bg-stone-200 p-4">
        <section class="my-2 pb-4 text-center">
          <section class="mb-2">
            <h2 class="text-center text-2xl">Making a starter</h2>
            <p>
              To start a stiff starter, I'd recommend using a liquid starter
              then start making it stiff.
            </p>
          </section>
          <section>
            <h3>You will need: </h3>
            <ul class="flex justify-center gap-x-10">
              <li>Flour</li>
              <li>2x 1-litre jars with lids</li>
              <li>Water </li>
              <li>Digital scale</li>
            </ul>
          </section>
        </section>
        <div class="relative flex flex-col md:flex-row md:justify-around">
          <div>
            <h4 class="text-xl">Liquid Starter</h4>
            <ul class="py-2">
              <li>Flour: 38.5%</li>
              <li>Water: 61.5%</li>
            </ul>
          </div>
          <div class="absolute left-1/2 -ml-1 hidden h-full border border-l-stone-500 md:block"></div>
          <div>
            <h4 class="text-xl">Stiff Starter</h4>
            <ul class="py-2">
              <li>Flour: 100%</li>
              <li>Starter: 50%</li>
              <li>Water: 50%</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Liquid Starter */}
      <section class="bg-stone-800 p-4 text-stone-200">
        <h4 class="text-center text-xl">Liquid starter</h4>
        <p class="my-2 text-center">
          To start, mix 50 g flour with 80 g water in one of your jars. Place a
          loosely fitted lid and let rest for 24 hours.
        </p>
        <div class="flex flex-col justify-around gap-x-12 md:flex-row">
          <div class="flex-1">
            <h5 class="text-center">Day 2, Morning</h5>
            <p>Mix 50 g flour and 80 g water into the same jar as yesterday.</p>
          </div>
          <div class="flex-1">
            <h5 class="text-center">Day 3, Morning</h5>
            <p>Mix 50 g flour and 80 g water into the same jar as yesterday.</p>
          </div>
          <div class="flex-1">
            <h5 class="text-center">Day 4, Morning</h5>
            <p>
              Mix 50 g of your starter into your second jar with 50 g flour and
              80 g water.
            </p>
          </div>
          <div class="flex-1">
            <h5 class="text-center">Day 5, Morning</h5>
            <p>
              Mix 30 g of your starter into a new, clean jar, 100 g flour and
              130 g water. Repeat this day 2 more times.
            </p>
          </div>
        </div>

        <div>
          <h4 class="text-center text-xl">Feeding</h4>
          <p class="text-center">
            Mix 50 g starter into a new jar with 100 g flour and 130 g water.
          </p>
        </div>

        <hr class="m-auto my-2 h-[1px] w-1/2 border-none bg-stone-600" />

        <div class="text-center">
          <h4 class="text-xl">Stiff Starter</h4>
          <p>
            Mix 100 g flour, 50 g liquid starter and 50 g water into a new jar.
          </p>

          <p>
            NOTE: This is also how you feed your starter. Your discard is what
            you use for baking.
          </p>
        </div>
      </section>

      {/* Sourdough Bread Recipe */}
      <section class="bg-stone-200 p-4 text-center">
        <h2 class="text-2xl">Sourdough Bread Recipe</h2>

        <p>
          This is the recipe I was taught but, find a recipe you like the most
          and don't be scared to try new things. This recipe also uses a stiff
          starter.
        </p>

        <p class="mt-2">
          I like sourdough "Vienna" shaped and bake on a pizza stone but, if you
          don't have a stone you can just bake it on baking paper that is
          sitting on a wire-rack that is on a baking tray.
        </p>

        <ul class="my-4">
          <li>Flour: 100%</li>
          <li>Water: 68%</li>
          <li>Stiff Starter: 50%</li>
          <li>Salt: 3%</li>
          <li>Malt Extract or Powder: 1.5%</li>
          <li>E.Y.F: 2.225 (add all % together and / 100)</li>
        </ul>

        <p>
          I like to have 800 g loaves (0.8 / 2.225) = 360 g (this is your flour
          weight) and the recipe now looks like this:
        </p>

        <ul class="my-4">
          <li>Flour: 360 g</li>
          <li>Water: 245 g (360 * 68%)</li>
          <li>Stiff Starter: 180 g (360 * 50%)</li>
          <li>Salt: 10.8 g (360 * 3%)</li>
          <li>Malt Extract or Powder: 5.4 g (360 * 1.5%)</li>
          <li>E.Y.F: 2.225</li>
        </ul>

        <p class="mt-2">
          You may find yourself increasing the hydration to ~ 70%. You'll also
          probably end up ditching this recipe entirely because low hydration
          recipes are difficult to get right. Also the sourdough cult will be at
          your throat for not using 75 - 90% hydration.
        </p>

        <p class="mt-2">
          Preheat oven to 240&deg;C. Bake at 220&deg;C with steam (put boiling
          water in a pan and place at the bottom of the oven) for 20 minutes
          then drop the temp to 200&deg;C until golden brown.
        </p>
      </section>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Sourdough",
  meta: [
    {
      name: "description",
      content: "My best attempt at explaining the cult that is sourdough",
    },
  ],
};
