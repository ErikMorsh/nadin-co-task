<template>
  <div class="container">
    <LoginForm />
  </div>
</template>

<script setup>
import LoginForm from "./LoginForm.vue";
import { useGlobalStore } from "@/stores/global-store";

const { clearAllStores } = useGlobalStore();
// clear the localStorage
clearAllStores();
window.localStorage.clear();
</script>

<style scoped>
.container {
  height: 100dvh;

  background-image: url("bg-img.jpg");
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
