<template>
  <WelcomePrompt v-if="!userData.name" />
  <v-layout class="rounded rounded-md">
    <v-system-bar class="pa-0" color="backgroundSecondary" height="70">
      <AppNavbar />
    </v-system-bar>

    <!-- temporary -->
    <v-navigation-drawer
      color="backgroundSecondary"
      v-model="sidebarStore.drawerState"
      :temporary="smAndDown"
      :width="350"
    >
      <AppSidebar />
    </v-navigation-drawer>

    <v-main>
      <ContentLayoutNavigation
        @toggle-sidebar="handleContentDrawerBtn"
        :drawerState="sidebarStore.drawerState"
      />
      <div>
        <RouterView />
      </div>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import AppNavbar from "../components/navbar/AppNavbar.vue";
import AppSidebar from "../components/sidebar/AppSidebar.vue";
import ContentLayoutNavigation from "@/components/content-layout-navigation/ContentLayoutNavigation.vue";
import WelcomePrompt from "@/components/welcome-prompt/WelcomePrompt.vue";
import { useProfileStore } from "@/stores/profile-store";

import { useSidebarStore } from "@/stores/sidebar/sidebar-store";
const sidebarStore = useSidebarStore();

function handleContentDrawerBtn() {
  sidebarStore.toggleDrawer();
}

import { useDisplay } from "vuetify";
const { smAndDown } = useDisplay();

const { userData } = useProfileStore();
</script>

<style scoped></style>
