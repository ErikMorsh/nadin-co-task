<template>
  <Teleport to="body">
    <v-dialog max-width="500" v-model="model">
      <template v-slot:default="{ isActive }">
        <v-card class="text-center" title="Add Todo">
          <v-sheet class="mx-auto w-75 mt-5" width="300">
            <v-form @submit.prevent>
              <v-text-field
                v-model="title"
                :rules="rules"
                label="Title"
              ></v-text-field>
              <v-textarea
                label="Description"
                v-model="description"
                no-resize
                rows="9"
                counter
                :maxlength="400"
                :rules="rules"
                hide-details="auto"
              ></v-textarea>
              <v-btn
                @click="handleSubmit(isActive)"
                class="mt-2 mb-5"
                type="submit"
                variant="tonal"
                color="primary"
                block
                >{{ todoIndex === -1 ? "Add" : "Edit" }}</v-btn
              >
            </v-form>
          </v-sheet>
        </v-card>
      </template>
    </v-dialog>
  </Teleport>
</template>

<script setup lang="ts">
import { onBeforeUpdate, reactive, ref, type Ref } from "vue";
import { useTodoStore } from "@/stores/features/todo/todo-store";

const model = defineModel<boolean>();
const { id } = defineProps(["id"]);
const { todos } = useTodoStore();

const title = ref<string>("");
const description = ref<string>("");

// Setup for Edit button
let todoIndex = -1;
onBeforeUpdate(() => {
  todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex !== -1) {
    title.value = todos[todoIndex].title;
    description.value = todos[todoIndex].description;
  }
});

const rules = reactive([
  (value: any) => {
    if (value) return true;
    return "You must enter a Title and Description.";
  },
]);

function handleSubmit(modalState: Ref<boolean>) {
  if (rules[0](title.value) === true && rules[0](description.value) === true) {
    // Do Action
    if (todoIndex === -1) {
      const newTodo = {
        id: Date.now(),
        title: title.value,
        description: description.value,
      };

      todos.unshift(newTodo);
    } else {
      todos[todoIndex].title = title.value;
      todos[todoIndex].description = description.value;
    }

    // Clear Form
    title.value = "";
    description.value = "";

    // Close Dialog
    modalState.value = false;
  }
}
</script>

<style scoped></style>
