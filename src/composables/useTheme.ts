import { ref, computed, watch } from "vue";

export type ThemeMode = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

const STORAGE_KEY = "theme";
const ORDER: ThemeMode[] = ["system", "light", "dark"];

function readStored(): ThemeMode {
  if (typeof window === "undefined") return "system";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark" || stored === "system") return stored;
  return "system";
}

function systemPrefersDark(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

const mode = ref<ThemeMode>(readStored());
const systemDark = ref<boolean>(systemPrefersDark());

const resolvedTheme = computed<ResolvedTheme>(() => {
  if (mode.value === "system") return systemDark.value ? "dark" : "light";
  return mode.value;
});

function apply(next: ResolvedTheme) {
  document.documentElement.classList.toggle("dark", next === "dark");
}

if (typeof window !== "undefined") {
  apply(resolvedTheme.value);

  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  mql.addEventListener("change", (e) => {
    systemDark.value = e.matches;
  });

  watch(resolvedTheme, apply);
  watch(mode, (next) => {
    if (next === "system") localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, next);
  });
}

export function useTheme() {
  return {
    mode,
    resolvedTheme,
    setMode: (next: ThemeMode) => {
      mode.value = next;
    },
    cycle: () => {
      const i = ORDER.indexOf(mode.value);
      mode.value = ORDER[(i + 1) % ORDER.length];
    },
  };
}
