<template>
  <div class="px-5">
    <v-card class="bg-backgroundSecondary pa-10" elevation="5">
      <v-row class="pa-0 ma-0 w-100 d-flex justify-center">
        <v-col cols="10" md="7" lg="4">
          <v-form @submit.prevent class="w-100">
            <v-autocomplete
              label="Choose Theme"
              v-model="userTheme"
              :items="themes"
              variant="outlined"
            ></v-autocomplete>
            <v-text-field
              class="mt-5"
              v-model="name"
              :rules="rules"
              label="Name"
              variant="outlined"
            ></v-text-field>
            <v-autocomplete
              class="mt-5"
              :rules="cityRules"
              label="Enter City"
              v-model="city"
              :items="cities"
              variant="outlined"
            ></v-autocomplete>
            <v-btn
              @click="handleSaveBtn"
              class="mt-2 mb-5"
              type="submit"
              variant="tonal"
              color="primary"
              block
              >save</v-btn
            >
          </v-form>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import type { ThemeTypes } from "@/types/theme-types";
import { useIranCitiesStore } from "@/stores/iranCities-store";
import { useProfileStore } from "@/stores/profile-store";

const { userData } = useProfileStore();
const { cities } = useIranCitiesStore();

const name = ref<string>(userData.name);
const userTheme = ref<ThemeTypes>(userData.theme);
const city = ref<string>(userData.city);

const themes: ThemeTypes[] = ["dark", "light"];

function handleSaveBtn() {
  if (rules[0](name.value) === true && rules[0](city.value) === true) {
    // Do Action
    userData.theme = userTheme.value;
    userData.city = city.value;
    userData.name = name.value;
    userData.lastUpdate = Date.now();
  }
}
const rules = reactive([
  (value: any) => {
    if (value) return true;
    return "You must enter a name.";
  },
]);
const cityRules = reactive([
  (value: any) => {
    if (value) return true;
    return "You must chose a city.";
  },
]);
</script>

<style scoped></style>
