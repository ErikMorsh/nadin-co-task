import { defineStore } from "pinia";
import { reactive, watch } from "vue";

import type { WeatherData } from "@/types/weather-types";
import { useIranCitiesStore } from "@/stores/iranCities-store";
import { useProfileStore } from "@/stores/profile-store";
import type { UserData } from "@/types/profile-types";

export const useWeatherStore = defineStore("weather-store", () => {
  const { IranCitiesData, cities } = useIranCitiesStore();
  const { userData } = useProfileStore();

  const userLocalData = <UserData>(
    JSON.parse(window.localStorage.getItem("user-data")!)
  );

  const weatherData = reactive<WeatherData>({
    choosenCity: userLocalData ? userLocalData.city : "",
    requestState: userData.city == "" ? "not-set" : "ok",
    weather: undefined,
  });
  watch(userData, () => {
    weatherData.choosenCity = userData.city;
  });

  function clearWeatherStore() {
    weatherData.choosenCity = "";
    weatherData.requestState = "not-set";
    weatherData.weather = undefined;
  }

  return {
    IranCitiesData,
    cities,
    weatherData,
    clearWeatherStore,
  };
});
