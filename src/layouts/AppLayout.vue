<template>
  <v-layout class="rounded rounded-md">
    <v-system-bar class="pa-0" color="backgroundSecondary" height="70">
      <AppNavbar />
    </v-system-bar>

    <!-- temporary -->
    <v-navigation-drawer
      color="backgroundSecondary"
      v-model="drawerState"
      :temporary="smAndDown"
      :width="350"
    >
      <AppSidebar />
    </v-navigation-drawer>

    <v-main>
      <!-- <AppLayoutNavigation
        @toggle-sidebar="toggleSidebar"
        :drawerState="drawerState"
      /> -->
      <div>
        <RouterView />
      </div>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import AppNavbar from "../components/navbar/AppNavbar.vue";
import AppSidebar from "../components/sidebar/AppSidebar.vue";

import { computed } from "vue";

import { useSidebarStore } from "@/stores/sidebar/sidebar-store";
const sidebarStore = useSidebarStore();

const drawerState = computed<boolean>(() => {
  return sidebarStore.getDrawerState();
});

import { useDisplay } from "vuetify";
const { smAndDown } = useDisplay();
</script>

<style scoped></style>
