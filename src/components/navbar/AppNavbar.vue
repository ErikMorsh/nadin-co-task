<template>
  <div id="AppNavbar" class="w-100 h-100 d-flex">
    <AppDrawerIcon v-if="smAndDown" />
    <AppNavbarLogo />
    <v-spacer></v-spacer>
    <AppNavbarActions />
  </div>
</template>

<script lang="ts" setup>
import AppDrawerIcon from "./components/AppNavbarDrawerIcon.vue";
import AppNavbarLogo from "./components/AppNavbarLogo.vue";
import AppNavbarActions from "./components/AppNavbarActions.vue";

// Break Point
import { useDisplay } from "vuetify";
const { smAndDown } = useDisplay();
</script>

<style scoped></style>
