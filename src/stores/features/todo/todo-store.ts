import { defineStore } from "pinia";
import { reactive, ref, watch } from "vue";

import type { TodoType } from "@/types/todo-types";
import type { forEach } from "node_modules/cypress/types/lodash";

export const useTodoStore = defineStore("todo-store", () => {
  const userLocalTodoData = <TodoType[]>(
    JSON.parse(window.localStorage.getItem("user-todos")!)
  );

  const todos = reactive<TodoType[]>(
    userLocalTodoData ? userLocalTodoData : []
  );

  watch(todos, () => {
    window.localStorage.setItem("user-todos", JSON.stringify(todos));
  });

  function clearTodoStore() {
    for (let i = todos.length; i > 0; i--) {
      todos.pop();
    }
  }

  return { todos, clearTodoStore };
});
