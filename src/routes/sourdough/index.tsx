import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <section>
      <h1 class="text-center text-4xl">Sourdough</h1>
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
