<template>
  <div>
    <div class="px-5 d-blcok">
      <v-card
        class="bg-backgroundSecondary pa-3 d-flex flex-column align-center"
        elevation="5"
      >
        <TodoList />
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import TodoList from "./TodoList.vue";
</script>

<style scoped></style>
