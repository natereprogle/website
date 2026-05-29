<script setup lang="ts">
type Color = "blue" | "orange" | "green" | "raisin";

defineProps<{
  title: string;
  description: string;
  image?: string;
  link?: string;
  highlightColor: Color;
}>();

const stripeMap: Record<Color, string> = {
  blue: "bg-aliceblue-400",
  orange: "bg-atomictangerine-500",
  green: "bg-ivory-500",
  raisin: "bg-raisinblack-400",
};

const placeholderBgMap: Record<Color, string> = {
  blue: "!bg-aliceblue-200 dark:!bg-aliceblue-900",
  orange: "!bg-atomictangerine-100 dark:!bg-atomictangerine-900",
  green: "!bg-ivory-200 dark:!bg-ivory-800",
  raisin: "!bg-raisinblack-200 dark:!bg-raisinblack-800",
};

defineOptions({ name: "ProjectCard" });
</script>

<template>
  <article class="neo-card overflow-hidden dark:text-white flex flex-col h-full">
    <div
      class="h-3 w-full border-b-4 border-black"
      :class="stripeMap[highlightColor]"
    ></div>
    <div
      v-if="image"
      class="aspect-video w-full overflow-hidden border-b-4 border-black bg-white"
    >
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <div
      v-else
      class="aspect-video w-full overflow-hidden border-b-4 border-black flex items-center justify-center"
      :class="placeholderBgMap[highlightColor]"
      role="img"
      :aria-label="`No preview available for ${title}`"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 25"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-18 h-18"
      >
        <polyline points="17 18 23 12 17 6" />
        <polyline points="7 6 1 12 7 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    </div>
    <div class="p-5 md:p-6 flex flex-col gap-3 flex-1">
      <h3 class="subheader text-xl md:text-2xl font-extrabold leading-tight">
        <span :class="`highlight-${highlightColor}`">{{ title }}</span>
      </h3>
      <p class="header text-sm md:text-base leading-6 flex-1">
        {{ description }}
      </p>
      <a
        v-if="link"
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
        class="neo-button text-sm self-start dark:text-white"
      >
        View project
      </a>
    </div>
  </article>
</template>

<style scoped></style>
