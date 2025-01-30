<template>
  <section id="features">
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-4xl lg:text-center">
          <h2 class="text-base/7 font-semibold text-bondi-blue-700">
            Tavern Membership
          </h2>
          <p
            class="mt-2 text-5xl font-semibold font-Tavern uppercase drop-shadow-lg tracking-wide text-balance text-bondi-blue-500 sm:text-6xl"
          >
            Unlock Your Gains
          </p>
          <p
            class="mt-6 max-w-4xl text-lg font-medium text-pretty text-gray-600 sm:text-xl/8"
          >
            Take your trading to the next level with Degen Tavern’s exclusive
            membership tiers, designed to give you the edge in the Solana meme
            token market. Whether you’re looking for premium calls, expert
            insights, or advanced trading strategies, we have the perfect plan
            for you.
          </p>
        </div>
        <div
          class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2"
        >
          <div
            v-for="(tier, tierIdx) in tiers"
            :key="tier.id"
            :class="[
              tier.featured
                ? 'relative bg-bondi-blue-900 shadow-2xl'
                : 'bg-white/60 sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
            ]"
          >
            <h3
              :id="tier.id"
              :class="[
                tier.featured ? 'text-bondi-blue-400' : 'text-bondi-blue-600',
                'text-base/7 font-semibold',
              ]"
            >
              {{ tier.name }}
            </h3>
            <p class="mt-4 flex items-baseline gap-x-2">
              <span
                :class="[
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-5xl font-semibold tracking-tight',
                ]"
                >{{ tier.priceMonthly }}</span
              >
              <span
                :class="[
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-3xl font-semibold tracking-tight',
                ]"
                >{{ tier.currency }}</span
              >
              <span
                :class="[
                  tier.featured ? 'text-gray-400' : 'text-gray-500',
                  'text-base',
                ]"
                >/month</span
              >
            </p>
            <p
              :class="[
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-6 text-base/7',
              ]"
            >
              {{ tier.description }}
            </p>
            <ul
              role="list"
              :class="[
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-8 space-y-3 text-sm/6 sm:mt-10',
              ]"
            >
              <li
                v-for="feature in tier.features"
                :key="feature"
                class="flex gap-x-3"
              >
                <CheckIcon
                  :class="[
                    tier.featured
                      ? 'text-bondi-blue-400'
                      : 'text-bondi-blue-600',
                    'h-6 w-5 flex-none',
                  ]"
                  aria-hidden="true"
                />
                {{ feature }}
              </li>
            </ul>
            <a
              :href="tier.href"
              :aria-describedby="tier.id"
              :class="[
                tier.featured
                  ? 'bg-bondi-blue-500 text-white shadow-xs hover:bg-bondi-blue-400 focus-visible:outline-bondi-blue-500'
                  : 'text-bondi-blue-600 ring-1 ring-bondi-blue-200 ring-inset hover:ring-bondi-blue-300 focus-visible:outline-bondi-blue-600',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              ]"
              >Get started today</a
            >
          </div>
        </div>
        <div class="mx-auto max-w-4xl lg:text-center">
          <p
            class="mt-12 max-w-4xl text-lg italic text-pretty text-gray-600 sm:text-sm"
          >
            *Free members are always welcome to be part of the community, and
            for those looking to level up, our weekly membership (0.39 SOL)
            offers the perfect low-risk tryout
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/20/solid";

const tiers = [
  {
    name: "Monthly",
    id: "tier-monthly",
    href: "#",
    priceMonthly: "1",
    currency: "SOL",
    description:
      "Unlock premium calls, live trading, expert insights, and exclusive education to level up your game.",
    features: [
      "Access to premium calls & all KOL channels",
      "Exclusive paid chats to network with top traders",
      "Premium bots for real-time market tracking",
      "Weekly live trading sessions to learn from the best",
      "Educational hub with tutorials",
    ],
    featured: false,
  },
  {
    name: "Whale",
    id: "tier-whale",
    href: "#",
    priceMonthly: "2.5",
    currency: "SOL",
    description:
      "Join the elite with whale-only calls, advanced strategies, high-cap insights, and priority support.",
    features: [
      "Everything in Monthly",
      "Whale-only calls for high-impact plays",
      "Private chat with top traders of the Tavern",
      "Priority 1-on-1 support via a private Q&A forum",
      "Daily high-cap token watchlist to stay ahead",
      "Advanced trading strategies shared among Whales",
      "Early access to upcoming features & tools",
    ],
    featured: true,
  },
];
</script>
