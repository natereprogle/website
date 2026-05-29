<script setup lang="ts">
import DisclaimerLink from '@/components/DisclaimerLink.vue';
import ThemeToggle from '@/components/ThemeToggle.vue';
</script>
<template>
  <nav
    class="navbar neo-shadow border-black border-2 sm:rounded-2xl p-3 w-full sm:w-2/3 xl:w-[50%] sm:my-7 mx-auto flex justify-between items-center gap-3 text-sm sm:text-base"
  >
    <ul class="flex justify-center gap-3 md:gap-6">
      <li>
        <RouterLink to="/" class="nav-link nav-link--blue">
          <span class="font-bold">ABOUT</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/projects" class="nav-link nav-link--raisin">
          <span class="font-bold">PROJECTS</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/keys" class="nav-link nav-link--green">
          <span class="font-bold">KEYS</span>
        </RouterLink>
      </li>
      <li>
        <DisclaimerLink
          href="https://medium.com/@natereprogle"
          class="nav-link nav-link--orange"
          friendlyName="Medium"
        >
          <span class="font-bold">BLOG</span>
        </DisclaimerLink>
      </li>
    </ul>
    <ThemeToggle />
  </nav>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap");
@import "tailwindcss";

.navbar {
  font-family: "Roboto Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  background: white;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  align-self: center;
  z-index: 100;
}

.neo-shadow {
  box-shadow: none;
}

@media (width >= 40rem) {
  .neo-shadow {
    box-shadow: 6px 6px 0 black;
  }
}

.dark .navbar {
  color: white;
  background-color: #4e4e4e;
}
</style>
