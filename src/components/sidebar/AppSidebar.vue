<template>
  <div>
    <div class="w-100" v-for="option in options" :key="option.id">
      <!-- Just For Toggling Children -->
      <div
        v-if="option.children.length"
        class="links w-100 px-5 py-3 d-flex text-BandW cursor-pointer"
        v-ripple
        @click="toggleLinkChildStatus(option.id)"
        :class="{
          'bg-backgroundLinkPrimary': hasActiveChild(option.children),
        }"
      >
        <v-icon
          :class="
            hasActiveChild(option.children)
              ? 'text-primary'
              : 'text-faintedText'
          "
          >mdi-{{ option.icon }}</v-icon
        >
        <p
          class="text-capitalize ml-2"
          :class="{
            'text-primary': hasActiveChild(option.children),
          }"
        >
          {{ option.name }}
        </p>
        <v-spacer></v-spacer>
        <v-icon
          :class="{
            'text-primary': hasActiveChild(option.children),
          }"
        >
          {{ option.childStatus ? "mdi-chevron-up" : "mdi-chevron-down" }}
        </v-icon>
      </div>

      <!-- Link Itself -->
      <router-link v-else :to="{ name: option.to }">
        <div
          class="links w-100 px-5 py-3 d-flex text-BandW"
          v-ripple
          :class="{
            'bg-backgroundLinkPrimary': option.selfStatus,
          }"
        >
          <v-icon :color="option.selfStatus ? 'primary' : 'faintedText'"
            >mdi-{{ option.icon }}</v-icon
          >
          <p
            class="text-capitalize ml-2"
            :class="{
              'text-primary': option.selfStatus,
            }"
          >
            {{ option.name }}
          </p>
        </div>
      </router-link>

      <!-- Children -->
      <div v-if="option.childStatus">
        <div
          v-for="child in option.children"
          class="w-100"
          :class="{
            'bg-backgroundLinkPrimary': child.selfStatus,
          }"
        >
          <router-link :to="{ name: child.to }">
            <div class="links w-100 pl-15 py-3 d-flex text-BandW" v-ripple>
              <p
                class="text-capitalize ml-2"
                :class="{
                  'text-primary': child.selfStatus,
                }"
              >
                {{ child.name }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// Next I will extract routes and map them into options obj below

interface IChildLink {
  name: string;
  to: string;
  selfStatus: boolean;
}

interface IOption {
  id: number;
  name: string;
  to: string;
  icon: string;
  children: IChildLink[];
  childStatus: boolean;
  selfStatus: boolean;
}

const options: IOption[] = reactive([
  {
    id: 1,
    name: "dashboard",
    to: "dashboard",
    icon: "monitor-dashboard",
    children: [
      //   {
      //     name: "dash",
      //     to: "dash",
      //     selfStatus: false,
      //   },
      //   {
      //     name: "bash",
      //     to: "bash",
      //     selfStatus: false,
      //   },
      //   {
      //     name: "cash",
      //     to: "cash",
      //     selfStatus: true,
      //   },
    ],
    childStatus: false,
    selfStatus: false,
  },
  {
    id: 2,
    name: "todos",
    to: "todos",
    icon: "checkbox-marked-circle-auto-outline",
    children: [],
    childStatus: false,
    selfStatus: false,
  },
  {
    id: 3,
    name: "weather",
    to: "weather",
    icon: "weather-cloudy",
    children: [
      // {
      //   name: "Login",
      //   to: "login",
      //   selfStatus: false,
      // },
      //   {
      //     name: "sign up",
      //     to: "signup",
      //     selfStatus: false,
      //   },
    ],
    childStatus: false,
    selfStatus: false,
  },
  {
    id: 4,
    name: "profile",
    to: "profile",
    icon: "account-outline",
    children: [],
    childStatus: false,
    selfStatus: false,
  },
]);

// _________________________________Update Active Link
// Initialization
updateOptionSelfStatus();
// On Each Change
watch(route, (val) => {
  updateOptionSelfStatus();
});

function updateOptionSelfStatus() {
  options.map((option) => {
    if (option.name == route.name) {
      option.selfStatus = true;
    } else {
      option.selfStatus = false;
    }
  });
}

const hasActiveChild = (children: IChildLink[]): boolean => {
  for (const child of children) {
    if (child.selfStatus) return true;
  }
  return false;
};

function toggleLinkChildStatus(optionId: number): void {
  const option: IOption | undefined = options.find(
    (option) => option.id === optionId
  );
  if (option && option.children.length)
    option.childStatus = !option.childStatus;
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.links {
  transition: all 0.3s ease;
}

.links:hover {
  background-color: rgba(var(--v-theme-primary), 0.1) !important;
}
</style>
