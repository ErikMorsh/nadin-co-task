import type { ThemeTypes } from "@/types/theme-types";
import { defineStore } from "pinia";
import { reactive, ref, watch, type Ref } from "vue";
import { useGlobalStore } from "./global-store";
import type { UserData } from "@/types/profile-types";

export const useProfileStore = defineStore("profile-store", () => {
  const { getTheme, setTheme } = useGlobalStore();

  const userData = reactive<UserData>({
    lastUpdate: 0,
    name: "",
    theme: getTheme().value,
    city: "",
  });

  watch(userData, () => {
    setTheme(userData.theme);
  });

  return { userData };
});
