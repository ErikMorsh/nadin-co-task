import { defineStore } from "pinia";
import { reactive, type Ref } from "vue";

import type { IranData } from "@/types/weather-types";

export const useIranCitiesStore = defineStore("iranCities-store", () => {
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

  return { IranCitiesData, cities };
});
