import { defineStore } from "pinia";
import { ref } from "vue";

import type { TodoType } from "@/types/todo-types";

export const useTodoStore = defineStore("todo-store", () => {
  const todos = ref<TodoType[]>([]);

  return { todos };
});
