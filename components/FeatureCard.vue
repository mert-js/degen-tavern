<template>
  <div
    ref="el"
    :style="{
      '--x': `${elementX}px`,
      '--y': `${elementY}px`,
    }"
    class="relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow"
  >
    <div
      class="flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]"
    >
      <div
        class="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6"
      >
        <div>
          <div class="mb-2 pointer-events-none">
            <component
              :is="icon"
              class="size-8 text-bondi-blue-500"
              aria-hidden="true"
            />
          </div>
          <p class="text-base/7 font-semibold text-gray-900">{{ title }}</p>
          <div class="mt-2 text-base/7 text-gray-600">
            {{ description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const el = ref();
const { elementX, elementY } = useSharedMouseInElement(el);

const props = defineProps({
  title: {
    type: String,
    default: undefined,
  },
  description: {
    type: String,
    default: undefined,
  },
  icon: {
    type: Function,
    default: undefined,
  },
});
</script>

<style>
.background-gradient::before {
  background: radial-gradient(
    250px circle at var(--x) var(--y),
    rgb(44, 149, 181) 0%,
    transparent 100%
  );
  will-change: background;
}

.to:hover {
  --tw-ring-color: rgba(24, 24, 24);
}
</style>
