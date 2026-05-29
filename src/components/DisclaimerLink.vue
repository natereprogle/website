<script setup lang="ts">
import { ref, watch, onUnmounted, nextTick, useTemplateRef } from "vue";

const props = withDefaults(
  defineProps<{
    href: string;
    countdown?: number;
    message?: string;
    newTab?: boolean;
    title?: string;
    friendlyName?: string;
  }>(),
  {
    countdown: 7,
    newTab: false,
    title: "Heads up!",
  },
);

defineOptions({ inheritAttrs: false });

const open = ref(false);
const secondsLeft = ref(props.countdown);
const barWidth = ref(100);
let tickTimer: number | null = null;
let redirectTimer: number | null = null;
let savedScrollY = 0;

const cancelBtn = useTemplateRef<HTMLButtonElement>("cancelBtn");

const defaultMessage =
  "This link goes to one of my personal accounts. Anything I post there is my own opinion " +
  "and doesn't necessarily reflect the views of my employer.";

function stopCountdown() {
  if (tickTimer !== null) {
    clearInterval(tickTimer);
    tickTimer = null;
  }
  if (redirectTimer !== null) {
    clearTimeout(redirectTimer);
    redirectTimer = null;
  }
}

function startCountdown() {
  stopCountdown();
  secondsLeft.value = props.countdown;
  barWidth.value = 100;

  // Kick off the drain on the next frame so the initial 100% paints first,
  // then transition smoothly to 0% over the full countdown duration.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (open.value) barWidth.value = 0;
    });
  });

  tickTimer = window.setInterval(() => {
    if (secondsLeft.value > 0) secondsLeft.value -= 1;
  }, 1000);

  redirectTimer = window.setTimeout(() => {
    redirect();
  }, props.countdown * 1000);
}

function redirect() {
  stopCountdown();
  open.value = false;
  if (props.newTab) {
    window.open(props.href, "_blank", "noopener,noreferrer");
  } else {
    window.location.href = props.href;
  }
}

function cancel() {
  stopCountdown();
  open.value = false;
}

function onLinkClick(e: MouseEvent) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  e.preventDefault();
  open.value = true;
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") cancel();
}

function lockScroll() {
  savedScrollY = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${savedScrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
}

function unlockScroll() {
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  window.scrollTo(0, savedScrollY);
}

watch(open, async (v) => {
  if (v) {
    startCountdown();
    document.addEventListener("keydown", onKeydown);
    lockScroll();
    await nextTick();
    cancelBtn.value?.focus({ preventScroll: true });
  } else {
    stopCountdown();
    document.removeEventListener("keydown", onKeydown);
    unlockScroll();
  }
});

onUnmounted(() => {
  stopCountdown();
  document.removeEventListener("keydown", onKeydown);
  if (open.value) unlockScroll();
});
</script>

<template>
  <a :href="href" v-bind="$attrs" @click="onLinkClick">
    <slot />
  </a>

  <Teleport to="body">
    <Transition name="disclaimer">
      <div v-if="open" class="disclaimer-overlay">
        <div class="disclaimer-backdrop" @click="cancel"></div>
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="disclaimer-title"
          class="disclaimer-card"
        >
          <h2 id="disclaimer-title" class="disclaimer-title">{{ title }}</h2>
          <p class="disclaimer-message">
            {{ message ?? defaultMessage }}
          </p>
          <p class="disclaimer-destination">
            Destination:
            <span class="disclaimer-destination-url">{{
              props.friendlyName ? `${props.friendlyName} (${href})` : `${href}`
            }}</span>
          </p>

          <div class="countdown-track">
            <div
              class="countdown-bar"
              :style="{
                width: barWidth + '%',
                transitionDuration: barWidth === 100 ? '0s' : props.countdown + 's',
              }"
            ></div>
          </div>

          <div class="disclaimer-actions">
            <button
              ref="cancelBtn"
              type="button"
              class="disclaimer-btn disclaimer-btn--cancel"
              @click="cancel"
            >
              Cancel
            </button>
            <button type="button" class="disclaimer-btn disclaimer-btn--continue" @click="redirect">
              Continue now ({{ secondsLeft }}s)
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.disclaimer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-family: "Roboto Mono", monospace;
}

.disclaimer-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}

.disclaimer-card {
  position: relative;
  width: 100%;
  max-width: 38rem;
  padding: 1.5rem;
  background: white;
  color: black;
  border: 4px solid black;
  border-radius: 1rem;
  box-shadow: 6px 6px 0 black;
}

@media (min-width: 768px) {
  .disclaimer-card {
    padding: 1.75rem;
  }
}

.disclaimer-title {
  font-weight: 700;
  font-size: 1.5rem;
  margin: 0 0 1rem;
}

.disclaimer-message {
  font-size: 0.875rem;
  line-height: 1.5rem;
  margin: 0 0 1rem;
}

.disclaimer-destination {
  font-size: 0.75rem;
  line-height: 1.25rem;
  margin: 0 0 1.25rem;
  opacity: 0.7;
  word-break: break-all;
}

.disclaimer-destination-url {
  font-weight: 700;
}

.countdown-track {
  height: 10px;
  border: 3px solid black;
  border-radius: 9999px;
  background: white;
  overflow: hidden;
  box-shadow: 3px 3px 0 black;
  margin-bottom: 1.25rem;
}

.countdown-bar {
  height: 100%;
  background: var(--color-atomictangerine-500);
  transition-property: width;
  transition-timing-function: linear;
}

.disclaimer-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.disclaimer-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border: 3px solid black;
  border-radius: 0.75rem;
  padding: 0.4rem 0.9rem;
  font-weight: 700;
  font-size: 0.875rem;
  font-family: inherit;
  background: white;
  color: black;
  cursor: pointer;
  box-shadow: 4px 4px 0 black;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    background-color 0.15s ease;
}

.disclaimer-btn:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 black;
}

.disclaimer-btn:active {
  transform: translate(2px, 2px);
  box-shadow: 0 0 0 black;
}

.disclaimer-btn--continue {
  background: var(--color-atomictangerine-500);
}

.disclaimer-btn--continue:hover {
  background: var(--color-atomictangerine-600);
}

.dark .disclaimer-card {
  background: #3b3a3c;
  color: white;
}

.dark .countdown-track {
  background: #2a292b;
}

.dark .countdown-bar {
  background: var(--color-atomictangerine-700);
}

.dark .disclaimer-btn {
  background: #3b3a3c;
  color: white;
}

.dark .disclaimer-btn--continue {
  background: var(--color-atomictangerine-800);
  color: white;
}

.dark .disclaimer-btn--continue:hover {
  background: var(--color-atomictangerine-700);
}

.disclaimer-enter-active,
.disclaimer-leave-active {
  transition: opacity 0.18s ease;
}

.disclaimer-enter-active .disclaimer-card,
.disclaimer-leave-active .disclaimer-card {
  transition:
    transform 0.18s ease,
    opacity 0.18s ease;
}

.disclaimer-enter-from,
.disclaimer-leave-to {
  opacity: 0;
}

.disclaimer-enter-from .disclaimer-card,
.disclaimer-leave-to .disclaimer-card {
  transform: translateY(8px) scale(0.97);
  opacity: 0;
}
</style>
