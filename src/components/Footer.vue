<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <div class="space-y-14 my-8 mx-7 lg:mx-20">
    <div class="mb-8 md:flex">
      <div class="mb-5 mr-10 md:w-2/3">
        <h3 class="subheader text-2xl font-bold md:text-3xl xl:text-4xl">
          Living in Arkansas, reaching the world
        </h3>
      </div>
      <div class="header md:w-1/3">
        <h3 class="subheader mb-3 font-heading text-xl md:mb-6">
          Socials
        </h3>
        <ul class="space-y-2 text-sm">
          <li>
            <a href="https://www.twitter.com/natereprogle">
              X (Formerly known as Twitter)
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/natereprogle/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/natereprogle">Instagram</a>
          </li>
          <li>
            <a href="https://www.github.com/natereprogle">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="header flex flex-col items-center justify-center text-xs">
      <h2>Copyright © 2022-{{ year }} | Nate Reprogle</h2>
      <p>
        Site source:
        <a
          href="https://www.github.com/natereprogle/website"
          class="hover:underline">
          click here
        </a>
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>
