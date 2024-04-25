<template>
  <div>
    <div class="px-5 d-blcok">
      <v-card
        class="bg-backgroundSecondary pa-3 d-flex flex-column align-center"
        elevation="5"
      >
        <h1 class="my-10 text-h2">{{ getTime() }}</h1>
        <h2 class="mb-10 text-h6 text-sm-h4">
          {{ greeting }}, {{ userData.name ? userData.name : "Guest!" }}
        </h2>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from "@/stores/global-store";
import { useProfileStore } from "@/stores/profile-store";
import { computed } from "vue";

const { getTime } = useGlobalStore();

const greeting = computed<string>(() => {
  const time = parseInt(getTime()!);
  if (time < 12) return "Good Morning";
  else if (time > 12 && time < 18) return "Good Afternoon";
  else return "Good Evening";
});

const { userData } = useProfileStore();
</script>

<style scoped></style>
