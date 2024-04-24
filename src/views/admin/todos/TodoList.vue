<template>
  <v-row class="w-100 pa-0 ma-0" v-if="todos.length">
    <v-col
      cols="12"
      lg="6"
      v-for="(todo, index) in todos"
      :key="todo.id"
      class="pt-0"
    >
      <TodoItem
        :index="index + 1"
        :id="todo.id"
        :title="todo.title"
        :desc="todo.description"
        @delete-todo="handleDeleteTodo"
      />
    </v-col>
  </v-row>
  <v-row v-else>
    <p class="py-10">There is no Todo to be shown.</p>
  </v-row>

  <v-btn
    @click="handleFormBtn"
    class="todo-add"
    icon
    variant="flat"
    color="success"
  >
    <v-icon>mdi-plus</v-icon>
  </v-btn>
  <Teleport to="body">
    <TodoForm v-model="formVisibility" />
  </Teleport>
</template>

<script setup lang="ts">
import TodoItem from "./TodoItem.vue";
import TodoForm from "./TodoForm.vue";

import { useTodoStore } from "@/stores/features/todo/todo-store";
import { ref } from "vue";
const { todos } = useTodoStore();

// Hanlde Delete Todo Emited From TodoItem That Is Child
function handleDeleteTodo(id: number) {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  todos.splice(todoIndex, 1);
}

const formVisibility = ref<boolean>(false);
function handleFormBtn() {
  formVisibility.value = !formVisibility.value;
}
</script>

<style scoped>
.todo-add {
  position: fixed;
  bottom: 80px;
  right: 20px;
}
</style>
