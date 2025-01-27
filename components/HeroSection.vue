<template>
  <div class="min-h-screen banner bg-cover bg-center">
    <div class="absolute inset-0 bg-black bg-opacity-20" />
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      />
      <div class="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">
          <h1
            class="text-5xl font-semibold font-Tavern uppercase text-white drop-shadow-lg tracking-wide text-balance sm:text-7xl"
          >
            Step into <br />the Degen Tavern
          </h1>
          <p
            class="mt-8 text-lg font-semibold text-pretty text-white drop-shadow-lg sm:text-xl/8"
          >
            Step into Degen Tavern, where the Solana meme token magic happens!
            Join our thriving community for exclusive calls, proven success, and
            endless banter with like-minded degens.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              class="rounded-full bg-bondi-blue-500 px-8 py-3 drop-shadow-md text-sm font-semibold text-white shadow-xs hover:bg-bondi-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >Join Degen Tavern on Discord</a
            >
            <a href="#" class="text-sm/6 font-semibold text-white"
              >Not convinced yet? <span aria-hidden="true">→</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.banner {
  background-image: url(../assets/banner.jpg);
}
</style>
