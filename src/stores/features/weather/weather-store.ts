import { defineStore } from "pinia";
import { reactive, ref, type Ref } from "vue";

import type { IranData, RequestState } from "@/types/weather-types";

export const useWeatherStore = defineStore("weather-store", () => {
  const IranCitiesData = reactive<IranData[]>([]);
  const cities = reactive<string[]>([]);
  fetch("ir.json")
    .then((response) => response.json())
    .then((json: IranData[]) => {
      json.map((item) => {
        IranCitiesData.push(item);
        cities.push(item.city);
      });
    });

  const choosenCity = ref<string>("");
  const requestState = ref<RequestState>(
    choosenCity.value == "" ? "not-set" : "ok"
  );

  function setRequestState(state: RequestState) {
    console.log(state);
    requestState.value = state;
  }
  function getRequestState(): Ref<RequestState> {
    return requestState;
  }

  function setChoosenCity(city: string) {
    choosenCity.value = city;
  }

  function getChoosenCity(): Ref<string> {
    return choosenCity;
  }

  return {
    IranCitiesData,
    cities,
    getRequestState,
    setRequestState,
    choosenCity,
    getChoosenCity,
    setChoosenCity,
  };
});
