import { defineStore } from "pinia";
import { ref } from "vue";

export const useSidebarStore = defineStore("sidebar-store", () => {
  const drawerState = ref<boolean>(false);

  // Logical Setter
  function toggleDrawer(): void {
    drawerState.value = !drawerState.value;
  }

  return { toggleDrawer, drawerState };
});
