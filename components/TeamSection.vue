<template>
  <section id="team">
    <div class="bg-bondi-blue-600 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
        <div class="mx-auto max-w-4xl lg:text-center">
          <h2 class="text-base/7 font-semibold text-white">Our Team</h2>
          <p
            class="mt-2 text-5xl font-semibold font-Tavern uppercase drop-shadow-lg tracking-wide text-balance text-white sm:text-6xl"
          >
            Tavern Keepers
          </p>
          <p
            class="mt-6 max-w-4xl text-lg font-medium text-pretty text-white sm:text-xl/8"
          >
            At Degen Tavern, success isn’t luck—it’s strategy. Our team of
            expert traders, market analysts, and Solana specialists is dedicated
            to delivering high-accuracy calls, premium insights, and winning
            strategies to help you dominate the market.
          </p>
        </div>
      </div>
      <div class="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-2">
        <ul
          role="list"
          class="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-3"
        >
          <li v-for="person in people" :key="person.name">
            <div
              class="flex flex-col items-center gap-x-6 bg-bondi-blue-700 rounded-xl py-12 text-center"
            >
              <img
                class="size-48 rounded-full mb-2"
                :src="'/degen-tavern/_nuxt/assets/team/' + person.imageUrl"
                alt=""
              />
              <div>
                <h3 class="text-base/7 font-semibold text-white">
                  {{ person.name }}
                </h3>
                <p class="text-sm/6 font-semibold text-gray-400">
                  {{ person.role }}
                </p>
                <button
                  v-if="person.xLink"
                  type="button"
                  class="relative rounded-full p-2 text-white hover:text-white focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-white"
                  @click="navigateTo(person.xLink)"
                >
                  <span class="absolute -inset-1.5" />
                  <svg
                    class="w-[20px] h-[20px]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const people = [
  {
    name: "Divine",
    role: "Founder",
    imageUrl: "divine.jpg",
    xLink: "https://x.com",
  },
  {
    name: "Holly",
    role: "Degen Caller",
    imageUrl: "holly.jpg",
    xLink: "https://x.com",
  },
  {
    name: "Giwaw",
    role: "Degen Caller",
    imageUrl: "giwaw.jpg",
    xLink: "https://x.com",
  },
  {
    name: "Beliath",
    role: "Degen Caller",
    imageUrl: "beliath.jpg",
    xLink: "https://x.com",
  },
  {
    name: "Sniper",
    role: "Degen Caller",
    imageUrl: "sniper.jpg",
    xLink: "https://x.com",
  },
  {
    name: "Klein",
    role: "Degen Caller",
    imageUrl: "divine.jpg",
    xLink: "https://x.com",
  },
];

function navigateTo(link) {
  window.open(link);
}
</script>
