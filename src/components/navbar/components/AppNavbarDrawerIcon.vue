<template>
  <div class="ml-2 d-flex align-center">
    <v-btn
      @click="handleDrawerClick"
      icon
      variant="text"
      :color="sidebarStore.drawerState ? 'primary' : ''"
    >
      <transition name="d" mode="out-in">
        <v-icon v-if="sidebarStore.drawerState"> mdi-close </v-icon>
        <v-icon v-else> mdi-menu </v-icon>
      </transition>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useSidebarStore } from "@/stores/sidebar/sidebar-store";
const sidebarStore = useSidebarStore();

function handleDrawerClick() {
  sidebarStore.toggleDrawer();
}
</script>

<style scoped>
.d-enter-from,
.d-leave-to {
  opacity: 0;
}

.d-enter-active,
.d-leave-active {
  transition: opacity 0.2s ease;
}

.d-enter-to,
.d-leave-from {
  opacity: 1;
}
</style>
