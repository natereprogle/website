<script setup lang="ts">
defineProps<{
  timeRange: string;
  company: string;
  title: string;
  description: string;
  highlightColor: 'blue' | 'orange' | 'green' | 'raisin';
}>();

const stripeMap: Record<'blue' | 'orange' | 'green' | 'raisin', string> = {
  blue: 'bg-aliceblue-400',
  orange: 'bg-atomictangerine-500',
  green: 'bg-ivory-500',
  raisin: 'bg-raisinblack-400',
};

defineOptions({ name: 'ExperienceBlock' });
</script>

<template>
  <div class="neo-card mb-7 overflow-hidden dark:text-white">
    <div class="h-3 w-full border-b-4 border-black" :class="stripeMap[highlightColor]"></div>
    <div class="p-5 md:p-6 block lg:flex lg:justify-between lg:space-x-5">
      <div class="flex flex-col lg:w-2/5 lg:space-y-2 mb-3 lg:mb-0">
        <h1 class="header font-bold text-sm md:text-base">{{ timeRange }}</h1>
        <h2 class="subheader text-base md:text-lg">{{ company }}</h2>
      </div>
      <div class="flex flex-col lg:w-3/5 lg:space-y-2">
        <h1 class="subheader text-2xl font-extrabold leading-tight">
          <span :class="`highlight-${highlightColor}`">{{ title }}</span>
        </h1>
        <p class="header text-sm md:text-base leading-6 mt-2">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
