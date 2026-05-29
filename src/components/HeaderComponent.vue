<script setup lang="ts">
import { Motion } from "motion-v";
import { useWindowScroll } from "@vueuse/core";
import { computed } from "vue";

const { y } = useWindowScroll();

const atTop = computed(() => y.value <= 1);

defineProps({
  title: String,
  subtitle: String,
  imageUrl: String,
  imageText: String,
});
</script>
<template>
  <div class="h-screen flex flex-col justify-between">
    <header
      class="h-screen mt-24 sm:mt-0 items-center mx-7 lg:mx-20 space-x-0 sm:space-x-12 space-y-10 sm:space-y-0 justify-around sm:[justify-content:normal] sm:grid sm:grid-cols-[1fr_0.5fr] md:grid-cols-[1.8fr_0.7fr] lg:grid-cols-[1.8fr_0.7fr]"
    >
      <div
        class="hero-card title-card flex flex-col bg-white p-4 lg:mr-20 xl:mr-24 rounded-2xl border-black border-4 neo-shadow overflow-hidden dark:bg-[#4e4e4e]"
      >
        <h3 class="header text-[1rem] md:text-[2rem]">
          {{ title }}
        </h3>
        <h3
          class="subheader text-[3rem] -mt-5 -mb-4 sm:-mt-5 sm:-mb-4 md:-mt-3 md:-mb-3 md:-my-12 sm:text-[5rem] xl:text-[7rem]"
        >
          {{ subtitle }}
        </h3>
      </div>
      <div
        class="hero-card photo-card flex flex-col aspect-[2/2.7] mx-auto bg-yellow-200 dark:bg-[#776e2d] rounded-2xl border-black border-4 neo-shadow px-4 max-w-[18rem] md:max-w-[20rem]"
      >
        <img
          :src="imageUrl"
          alt="A picture of Nate"
          class="h-auto w-auto rounded-xl border-black border-4 mt-4"
        />
        <h1 class="subheader text-[1.5rem] lg:text-[2rem]">{{ imageText }}</h1>
      </div>
    </header>
    <Motion
      as="svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.3"
      stroke="currentColor"
      class="w-10 h-10 md:w-14 md:h-14 mx-auto animate-bounce"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: atTop ? 1 : 0 }"
      :transition="{ duration: 0.2, delay: atTop ? 1.5 : 0.2, ease: [0, 0.71, 0.2, 1.01] }"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
      />
    </Motion>
  </div>
</template>

<style scoped>
.neo-shadow {
  box-shadow: 6px 6px 0 black;
}

.hero-card {
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.title-card:hover {
  transform: translate(-2px, -2px) rotate(-0.5deg);
  box-shadow: 10px 10px 0 black;
}

@media (width >= 40rem) {
  .photo-card {
    transform: rotate(2deg);
  }

  .photo-card:hover {
    transform: rotate(0deg) translate(-2px, -2px);
    box-shadow: 10px 10px 0 black;
  }
}
</style>
