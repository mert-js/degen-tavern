<template>
  <div
    class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
  >
    <div
      class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
    >
      <template v-for="success in successes">
        <div
          class="min-w-sm min-h-sm mr-8 relative group isolate rounded-xl before:hidden flex-1 flex flex-col shadow justify-center"
        >
          <div
            class="flex-1 flex flex-col overflow-hidden rounded-xl bg-bondi-blue-600"
          >
            <div
              class="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6 justify-center"
            >
              <div>
                <div class="mt-2 text-base/7 text-white">
                  {{ success.story }}
                </div>
                <div class="flex items-center gap-x-4 mt-4">
                  <img
                    class="size-12 rounded-full"
                    :src="'/public/avatars/' + success.avatar"
                    alt=""
                  />
                  <div>
                    <p class="text-md font-semibold text-white">
                      {{ success.user }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div
      class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      aria-hidden="true"
    >
      <template v-for="success in successes">
        <div
          class="min-w-sm min-h-sm mr-8 relative group isolate rounded-xl before:hidden flex-1 flex flex-col shadow"
        >
          <div
            class="flex-1 flex flex-col overflow-hidden rounded-xl bg-bondi-blue-600"
          >
            <div
              class="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6 justify-center"
            >
              <div>
                <div class="mt-2 text-base/7 text-white">
                  {{ success.story }}
                </div>
                <div class="flex items-center gap-x-4 mt-4">
                  <img
                    class="size-12 rounded-full"
                    :src="
                      '/degen-tavern/_nuxt/public/avatars/' + success.avatar
                    "
                    alt=""
                  />
                  <div>
                    <p class="text-md font-semibold text-white">
                      {{ success.user }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
const successes = [
  {
    story:
      "Made back my subscription fee in one day, not even kidding. Calls are great just dont gamble much when not ping’d is what i learned.",
    user: "Kraken",
    avatar: "default.jpg",
  },
  {
    story:
      "Doesn't matter if you're a newbie, beginner, mildly experienced or veteran trader. Everyone needs a group to be in to level up or get to the next stage.",
    user: "AMSK",
    avatar: "amsk.jpg",
  },
  {
    story:
      "I don’t know where to start but i can only say the people in here actually care about each other and not only their bags.",
    user: "Yehia",
    avatar: "default.jpg",
  },
  {
    story:
      "I luckily managed to find this server early on in my crypto journey.",
    user: "Jawsh",
    avatar: "default.jpg",
  },
  {
    story:
      "I joined several paid alpha groups (multiple sols down the drain) without actually making any solid profit. Since I joined DT I actually managed to x4 my port in 2 weeks.",
    user: "Yello",
    avatar: "default.jpg",
  },
  {
    story:
      "I had 0.25 sol me done me nice now i can fully trade to potential and turn this into 50k in this group!",
    user: "Wesley Snipes",
    avatar: "default.jpg",
  },
];
</script>

<style scoped>
.min-w-sm {
  min-width: 24rem;
}

.min-h-sm {
  min-height: 240px;
}
</style>
