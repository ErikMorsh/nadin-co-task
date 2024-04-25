<template>
  <div v-resize="onResize">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";

import { useGlobalStore } from "./stores/global-store";
const { setPageSize } = useGlobalStore();

function onResize(): void {
  setPageSize(window.innerWidth, window.innerHeight);
}
</script>

<style scoped></style>
