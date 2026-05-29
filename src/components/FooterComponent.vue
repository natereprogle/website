<script setup lang="ts">
import DisclaimerLink from '@/components/DisclaimerLink.vue';

const year = new Date().getFullYear();

const socials = [
  { label: 'X / Twitter', href: 'https://www.twitter.com/natereprogle', personal: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/natereprogle/', personal: true, message: "While meant to be a \"professional\" account, this link still navigates to my own LinkedIn profile. The content shared here represents my professional views, but doesn't necessarily reflect the views of my employer." },
  { label: 'Instagram', href: 'https://www.instagram.com/natereprogle', personal: true },
  { label: 'GitHub (Personal)', href: 'https://www.github.com/natereprogle', personal: true, message: "This is my personal GitHub account, not my professional one. The content here represents my personal projects and interests, and does not necessarily reflect the views of my employer." },
  { label: 'GitHub (Professional)', href: 'https://www.github.com/nreprogle-restorehope', personal: false },
];
</script>

<template>
  <div class="space-y-10 my-10 mx-7 lg:mx-20">
    <div class="neo-divider"></div>
    <div class="mb-8 md:flex md:justify-between md:gap-12">
      <div class="mb-6 md:mb-0 md:w-2/3">
        <h3 class="subheader text-2xl font-bold md:text-3xl xl:text-4xl">
          Living in <span class="highlight-orange">Arkansas</span>, reaching the <span class="highlight-blue">world</span>
        </h3>
      </div>
      <div class="header md:w-1/3">
        <h3 class="subheader mb-4 font-heading text-xl">
          Socials
        </h3>
        <ul class="flex flex-wrap gap-2.5">
          <li v-for="s in socials" :key="s.label">
            <DisclaimerLink
              v-if="s.personal"
              :href="s.href"
              class="neo-button text-sm dark:text-white"
              :friendlyName="s.label"
              :message="s.message"
            >
              {{ s.label }}
            </DisclaimerLink>
            <a v-else :href="s.href" class="neo-button text-sm dark:text-white">
              {{ s.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="header flex flex-col items-center justify-center text-xs gap-1 pt-4">
      <h2>Copyright © 2022-{{ year }} | Nate Reprogle</h2>
      <p>
        Site source:
        <a
          href="https://www.github.com/natereprogle/website"
          class="underline font-bold">
          github.com/natereprogle/website
        </a>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
