import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { useDisplay, useTheme } from "vuetify";
import { Temporal } from "temporal-polyfill";

import type { ThemeTypes } from "../types/theme-types";

import { useProfileStore } from "./profile-store";
import { useWeatherStore } from "./features/weather/weather-store";
import { useTodoStore } from "./features/todo/todo-store";

export const useGlobalStore = defineStore("global-store", () => {
  // Themeing
  const real_theme = useTheme();
  const theme = ref<ThemeTypes>("light");

  // Mobile break point
  const { mobile } = useDisplay();

  // Other break points TODO
  const windowWidth = ref<number>();
  const windowHeight = ref<number>();
  const setPageSize = (width: number, height: number) => {
    windowHeight.value = height;
    windowWidth.value = width;
  };

  // Logical Setter
  function toggleTheme(): void {
    if (theme.value === "dark") theme.value = "light";
    else theme.value = "dark";

    // change theme itself
    real_theme.global.name.value = theme.value;
  }
  function setTheme(newTheme: ThemeTypes): void {
    theme.value = newTheme;

    // change theme itself
    real_theme.global.name.value = theme.value;
  }

  // Time and Date
  const time = ref<string>();
  time.value = Temporal.Now.plainTimeISO().toString().slice(0, 5);

  setInterval(() => {
    time.value = Temporal.Now.plainTimeISO().toString().slice(0, 5);
  }, 30000);

  // CLEAR STORES
  function clearAllStores() {
    const { clearUserStore } = useProfileStore();
    const { clearWeatherStore } = useWeatherStore();
    const { clearTodoStore } = useTodoStore();

    clearUserStore();
    clearWeatherStore();
    clearTodoStore();
  }

  // Getters
  function getTheme(): Ref<ThemeTypes> {
    return theme;
  }
  function getTime() {
    return time.value;
  }
  function getIsMobile(): boolean {
    return mobile.value;
  }

  return {
    getTime,
    getTheme,
    toggleTheme,
    setTheme,
    getIsMobile,
    setPageSize,
    clearAllStores,
  };
});
