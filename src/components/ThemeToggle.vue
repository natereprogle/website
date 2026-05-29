<script setup lang="ts">
import { computed } from "vue";
import { useTheme } from "@/composables/useTheme";

const { mode, cycle } = useTheme();

const label = computed(() => {
  switch (mode.value) {
    case "light":
      return "Light mode (click for dark)";
    case "dark":
      return "Dark mode (click to follow system)";
    default:
      return "Following system (click for light)";
  }
});
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    :title="label"
    :aria-label="label"
    @click="cycle"
  >
    <span class="theme-toggle__icon">
      <svg
        v-if="mode === 'light'"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-4 h-4 md:w-5 md:h-5"
      >
        <circle cx="12" cy="12" r="4" />
        <path
          d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        />
      </svg>
      <svg
        v-else-if="mode === 'dark'"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-4 h-4 md:w-5 md:h-5"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-4 h-4 md:w-5 md:h-5"
      >
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    </span>
    <span class="theme-toggle__label">{{ mode }}</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  height: 2.1rem;
  padding: 0 0.4rem;
  border: 2px solid black;
  border-radius: 9999px;
  background: white;
  cursor: pointer;
  overflow: hidden;
  transition:
    transform 0.15s ease,
    background-color 0.15s ease,
    box-shadow 0.15s ease;
}

.theme-toggle:hover,
.theme-toggle:focus-visible {
  transform: translate(-1px, -1px);
  box-shadow: 3px 3px 0 black;
  background-color: var(--color-ivory-500);
}

.theme-toggle:active {
  transform: translate(1px, 1px);
  box-shadow: 0 0 0 black;
}

.theme-toggle__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 1.3rem;
}

.theme-toggle__label {
  display: inline-block;
  max-width: 0;
  min-width: 0;
  margin-left: 0;
  overflow: hidden;
  white-space: nowrap;
  opacity: 0;
  font-family: "Roboto Mono", monospace;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: lowercase;
  transition:
    max-width 0.25s ease,
    margin-left 0.25s ease;
}

.theme-toggle:hover .theme-toggle__label,
.theme-toggle:focus-visible .theme-toggle__label {
  max-width: 5rem;
  margin-left: 0.45rem;
  opacity: 1;
}

.dark .theme-toggle {
  background: #3b3a3c;
  color: white;
}

.dark .theme-toggle:hover,
.dark .theme-toggle:focus-visible {
  background-color: var(--color-ivory-800);
}
</style>
