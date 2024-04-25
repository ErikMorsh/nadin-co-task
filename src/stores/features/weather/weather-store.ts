import { defineStore } from "pinia";
import { reactive, ref, watch, type Ref } from "vue";

import type { WeatherData } from "@/types/weather-types";
import { useIranCitiesStore } from "@/stores/iranCities-store";
import { useProfileStore } from "@/stores/profile-store";

export const useWeatherStore = defineStore("weather-store", () => {
  const { IranCitiesData, cities } = useIranCitiesStore();
  const { userData } = useProfileStore();

  const weatherData = reactive<WeatherData>({
    choosenCity: "",
    requestState: userData.city == "" ? "not-set" : "ok",
    weather: undefined,
  });
  watch(userData, () => {
    weatherData.choosenCity = userData.city;
  });

  return {
    IranCitiesData,
    cities,
    weatherData,
  };
});
