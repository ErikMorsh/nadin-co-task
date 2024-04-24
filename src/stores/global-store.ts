import { defineStore } from "pinia";
import { ref } from "vue";
import { useDisplay, useTheme } from "vuetify";

import type { ThemeTypes } from "../types/theme-types";

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

  // Getters
  function getTheme(): ThemeTypes {
    return theme.value;
  }
  function getIsMobile(): boolean {
    return mobile.value;
  }

  return { getTheme, toggleTheme, getIsMobile, setPageSize, getBreakPoint };
});
