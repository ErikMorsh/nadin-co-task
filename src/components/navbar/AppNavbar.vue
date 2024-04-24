<template>
  <div id="AppNavbar" class="w-100 h-100 d-flex">
    <AppDrawerIcon />
    <AppNavbarLogo />
    <v-spacer></v-spacer>
    <AppNavbarActions />
  </div>
</template>

<script lang="ts" setup>
import AppDrawerIcon from "./components/AppNavbarDrawerIcon.vue";
import AppNavbarLogo from "./components/AppNavbarLogo.vue";
import AppNavbarActions from "./components/AppNavbarActions.vue";
</script>

<style scoped></style>
