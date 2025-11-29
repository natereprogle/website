<script setup lang="ts">
</script>
<template>
  <nav
    class='navbar neo-shadow border-black border-2 sm:rounded-2xl p-3 w-full sm:w-2/3 xl:w-[50%] sm:my-7 mx-auto flex justify-center items-center space-x-2 text-sm sm:text-base'>
    <ul class="flex justify-center gap-7 md:gap-14">
      <li>
        <RouterLink to="/">
          <span class="font-bold">ABOUT</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/keys">
          <span class="font-bold">KEYS</span>
        </RouterLink>
      </li>
      <li>
        <a href="https://medium.com/@natereprogle">
          <span class="font-bold">BLOG</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
@import "tailwindcss";
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');

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

@media (prefers-color-scheme: dark) {
  .navbar {
    color: white;
    background-color: #4e4e4e;
  }
}

</style>
