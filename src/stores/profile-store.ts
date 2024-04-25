import type { ThemeTypes } from "@/types/theme-types";
import { defineStore } from "pinia";
import { reactive, ref, watch, type Ref } from "vue";
import { useGlobalStore } from "./global-store";
import type { UserData } from "@/types/profile-types";

export const useProfileStore = defineStore("profile-store", () => {
  const { getTheme, setTheme } = useGlobalStore();

  const userLocalData = <UserData>(
    JSON.parse(window.localStorage.getItem("user-data")!)
  );

  const userData = reactive<UserData>({
    lastUpdate: userLocalData ? userLocalData.lastUpdate : 0,
    name: userLocalData ? userLocalData.name : "",
    theme: userLocalData ? userLocalData.theme : getTheme().value,
    city: userLocalData ? userLocalData.city : "",
  });

  watch(userData, () => {
    // set user's theme input to app's theme system
    setTheme(userData.theme);

    // set user's data to local storage
    window.localStorage.setItem("user-data", JSON.stringify(userData));
  });

  function clearUserStore() {
    userData.city = "";
    userData.lastUpdate = 0;
    userData.name = "";
    userData.theme = getTheme().value;
  }

  return { userData, clearUserStore };
});
