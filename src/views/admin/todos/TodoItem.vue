<template>
  <v-sheet
    class="d-flex justify-space-between align-center"
    elevation="4"
    rounded
  >
    <div class="d-flex align-center">
      <h5 class="ml-4 font-weight-bold text-orange">{{ index }}.</h5>
      <h5 class="ml-2 font-weight-bold text-orange">{{ title }}</h5>
      <p class="d-none d-sm-inline text-body-2 ml-5">
        {{ desc?.slice(0, 30) }} ...
      </p>
    </div>

    <div class="pa-2">
      <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            class="mr-2"
            icon
            variant="tonal"
            color="orange"
            v-bind="activatorProps"
            :size="btnSize"
          >
            <v-icon>mdi-eye-outline</v-icon>
          </v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card class="text-center">
            <v-card-title>
              <h1 class="text-h6 text-sm-h4 ma-5 font-weight-bold text-orange">
                {{ title }}
              </h1>
            </v-card-title>
            <v-card-text>
              <p class="ma-5 mt-0">
                {{ desc }}
              </p>
            </v-card-text>
          </v-card>
        </template>
      </v-dialog>
      <v-btn
        class="mr-2"
        icon
        variant="tonal"
        color="success"
        :size="btnSize"
        @click="handleEditForm"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <Teleport to="body">
        <TodoForm :id="id" v-model="formVisibility" />
      </Teleport>

      <!-- DETETE BTN -->
      <v-btn
        icon
        variant="tonal"
        color="danger"
        :size="btnSize"
        @click="handleDeleteBtn"
      >
        <v-icon>mdi-delete-outline</v-icon>
      </v-btn>
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import TodoForm from "./TodoForm.vue";
import vuetify from "@/plugins/vuetify";

const { display } = vuetify;

const { index, id, title, desc } = defineProps({
  index: Number,
  id: Number,
  title: String,
  desc: String,
});

const btnSize = computed(() => {
  return display.smAndDown.value
    ? "x-small"
    : display.lgAndUp.value
    ? "x-small"
    : "small";
});

const emit = defineEmits(["delete-todo"]);

function handleDeleteBtn() {
  emit("delete-todo", id);
}

const formVisibility = ref<boolean>(false);
function handleEditForm() {
  formVisibility.value = !formVisibility.value;
}
</script>

<style scoped></style>
