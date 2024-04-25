<template>
  <Teleport to="body">
    <v-dialog max-width="500" v-model="promptState" persistent>
      <template v-slot:default="{ isActive }">
        <v-card class="text-center" title="Please Enter Your Name">
          <v-sheet class="mx-auto w-75 mt-5" width="300">
            <v-form @submit.prevent>
              <v-text-field
                v-model="name"
                :rules="rules"
                label="Name"
              ></v-text-field>
              <v-btn
                @click="handleSubmit"
                class="mt-2 mb-5"
                type="submit"
                variant="tonal"
                color="primary"
                block
                >Enter</v-btn
              >
            </v-form>
          </v-sheet>
        </v-card>
      </template>
    </v-dialog>
  </Teleport>
</template>

<script setup lang="ts">
import { useProfileStore } from "@/stores/profile-store";
import { reactive, ref } from "vue";

const { userData } = useProfileStore();

const promptState = ref<boolean>(true);
const name = ref<string>("");

const rules = reactive([
  (value: any) => {
    if (value) return true;
    return "You must enter a Name.";
  },
]);

function handleSubmit() {
  if (rules[0](name.value) === true) {
    // Do Action
    userData.name = name.value;

    // Close Dialog
    promptState.value = false;
  }
}
</script>

<style scoped></style>
