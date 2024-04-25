<template>
  <div class="px-5 d-blcok">
    <v-card
      class="bg-backgroundSecondary pa-3 d-flex flex-column"
      elevation="5"
    >
      <v-row class="pa-0 ma-0">
        <v-col cols="12" sm="4">
          <div class="d-flex">
            <v-autocomplete
              label="Enter City"
              v-model="city"
              :items="cities"
              variant="outlined"
            ></v-autocomplete>
          </div>
        </v-col>
      </v-row>
      <div
        class="d-flex flex-column align-center"
        v-if="weatherData.requestState === 'ok'"
      >
        <h1 class="my-10 text-h2">
          {{ weatherData.choosenCity }}
        </h1>
        <h2 class="mb-10 text-h4">
          {{ temperature + " &#8451;" }}
        </h2>
        <h2 class="mb-10 text-h6 text-md-h4">
          {{ "Wind Speed: " + windSpeed + " kph" }}
        </h2>
      </div>
      <div
        v-if="weatherData.requestState === 'not-set'"
        class="text-center mt-10 mb-15"
      >
        <p>Please Select City</p>
      </div>
      <div
        v-if="weatherData.requestState === 'loading'"
        class="text-center mt-10 mb-15"
      >
        <h1>Loading Data</h1>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, watch } from "vue";
import { useWeatherStore } from "@/stores/features/weather/weather-store";

const { cities, IranCitiesData, weatherData } = useWeatherStore();

const weatherFetchData = ref();
const city = ref<string>(weatherData.choosenCity);

const windSpeed = ref<number>(0);
const temperature = ref<number>(0);
watch(weatherFetchData, (data) => {
  const currentHour = new Date().getHours();
  temperature.value = data.temperature_2m[currentHour - 1];
  windSpeed.value = data.wind_speed_10m[currentHour - 1];
});

// fetch on create
if (city.value && !weatherData.weather) {
  fetchWeather();
}
watch(city, () => {
  fetchWeather();
});

async function fetchWeather() {
  weatherData.requestState = "loading";
  weatherData.choosenCity = city.value;

  let cityIsValid: boolean = false;

  let lat = "";
  let lng = "";

  IranCitiesData.map((item) => {
    if (item.city == city.value) {
      cityIsValid = true;
      lat = item.lat;
      lng = item.lng;
    }
  });
  if (cityIsValid) {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    try {
      const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast?current=temperature_2m&hourly=temperature_2m,wind_speed_10m&forecast_days=1`,
        {
          params: {
            latitude: lat,
            longitude: lng,
            timezone,
          },
        }
      );
      weatherData.requestState = "ok";
      weatherFetchData.value = await response.data.hourly;
      weatherData.weather = weatherFetchData;
    } catch (err) {
      console.log(err);
    }
  } else {
    // make sure you chose currect city
  }
}
</script>

<style scoped></style>
