<script setup lang="ts">
defineProps({
  timeRange: String,
  company: String,
  title: String,
  description: String,
  highlightColor: String
});
</script>

<template>
  <div
    class="mb-7 block lg:flex lg:justify-between lg:space-x-5">
    <div class="flex flex-col lg:w-2/5 lg:space-y-2">
      <h1 class="header font-bold">{{ timeRange }}</h1>
      <h2 class="subheader">{{ company }}</h2>
    </div>
    <div class="flex flex-col lg:w-3/5 lg:space-y-2">
      <h1
        class="subheader text-2xl font-extrabold">
        <span :class="`highlight-${highlightColor}`">{{ title }}</span>
      </h1>
      <p class="header">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
