<template>
  <div class="px-5 py-2 d-flex align-center">
    <v-btn @click="handleDrawerBtn" variant="text" v-if="!smAndDown">
      <v-icon size="30">
        mdi-{{ !drawerState ? "menu-close" : "menu-open" }}
      </v-icon>
    </v-btn>

    <!-- TODO: will be dynamic after setting routes -->
    <p class="text-capitalize">Home / {{ route.name }}</p>

    <!-- TODO: print last path in url in big title -->
  </div>
</template>

<script setup lang="ts">
// get props
const { drawerState } = defineProps({
  drawerState: Boolean,
});

// use emit to toggle drawer
const emits = defineEmits(["toggle-sidebar"]);

function handleDrawerBtn() {
  emits("toggle-sidebar");
}

import { watch } from "vue";
// Break Point
import { useDisplay } from "vuetify";
const { smAndDown } = useDisplay();

// _________________________________Update Active Link Above the Content Part
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style scoped></style>
