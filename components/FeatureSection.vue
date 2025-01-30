<template>
  <section id="features">
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-4xl lg:text-center">
          <h2 class="text-base/7 font-semibold text-bondi-blue-700">
            Perks & Features
          </h2>
          <p
            class="mt-2 text-5xl font-semibold font-Tavern uppercase drop-shadow-lg tracking-wide text-balance text-bondi-blue-500 sm:text-6xl"
          >
            Tavern’s Treasures
          </p>
          <p
            class="mt-6 max-w-4xl text-lg font-medium text-pretty text-gray-600 sm:text-xl/8"
          >
            Unlock the ultimate trading experience with Degen Tavern, where
            every feature is designed to give you a competitive edge in the
            Solana meme token market. Here’s what you’ll gain access to when you
            join our Discord community.
          </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            <FeatureCard
              v-for="feature in features"
              :key="feature"
              :title="feature.title"
              :description="feature.description"
              :icon="feature.icon"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  MegaphoneIcon,
  VideoCameraIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
} from "@heroicons/vue/24/outline";

const features = [
  {
    title: "Premium Calls",
    description:
      "Get access to high-accuracy calls from experienced traders who consistently spot winning opportunities.",
    icon: MegaphoneIcon,
  },
  {
    title: "Live Trading Sessions",
    description:
      "Watch, learn, and trade in real time with experts guiding you through the process three times a week.",
    icon: VideoCameraIcon,
  },
  {
    title: "Premium Bots",
    description:
      "Leverage advanced bots to analyze markets, track trends, and make smarter trading decisions.",
    icon: RocketLaunchIcon,
  },
  {
    title: "Educational Resources",
    description:
      "Access our tutorials on technical analysis, indicators, NFT scoping, and more to level up your trading skills.",
    icon: AcademicCapIcon,
  },
  {
    title: "Whale-Only Perks",
    description:
      "For top-tier members, enjoy exclusive calls, private chats, advanced strategies, and early access to upcoming features.",
    icon: CurrencyDollarIcon,
  },
  {
    title: "1-on-1 Support",
    description:
      "Get personalized guidance from profitable traders and Key Opinion Leaders (KOLs).",
    icon: ChatBubbleLeftRightIcon,
  },
];
</script>

<style>
/* #features {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1,-1)" viewBox="0 0 1000 100" fill="%2346acca"><path d="M0 0v90.2C49.7 99.9 105 82 160 65c75.5-23.3 145.5-22.4 222-3 63 16 119 14 173-8 79.5-32.4 156.2-27.6 240-10 82.6 17.4 143-1 205-31.7V0H0Z"></path></svg>');
  background-position: bottom;
  padding-bottom: 10%;
  position: relative;
} */
</style>
