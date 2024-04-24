<template>
  <div v-resize="onResize">
    <RouterView />

    <Teleport to="body">
      <v-btn
        @click="handleThemeToggler"
        class="theme-toggler"
        icon
        variant="tonal"
      >
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";

import { useGlobalStore } from "./stores/global-store";
const { setPageSize, toggleTheme } = useGlobalStore();

function handleThemeToggler() {
  toggleTheme();
}

function onResize(): void {
  setPageSize(window.innerWidth, window.innerHeight);
}
</script>

<style scoped>
.theme-toggler {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
