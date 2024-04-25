<template>
  <v-menu offset="10" :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <v-btn variant="text" icon color="BandW" v-bind="props">
        <v-icon size="25">mdi-account-circle-outline</v-icon>
      </v-btn>
    </template>
    <v-card min-width="150" class="bg-backgroundSecondary">
      <div v-for="option in options" :key="option.name" class="rounded-0">
        <p
          v-if="option.name"
          class="ml-5 mt-2 text-faintedText text-capitalize"
        >
          {{ option.name }}
        </p>
        <v-list class="bg-backgroundSecondary">
          <div v-for="item of option.list" :key="item.name" class="w-100">
            <router-link :to="resolveLinkAttribute(item)">
              <div
                class="links d-flex align-center text-BandW w-100 h-100 py-2 px-5"
                :class="item.selfStatus ? 'bg-backgroundLinkPrimary' : ''"
                v-ripple
              >
                <v-icon
                  :class="item.selfStatus ? 'text-primary' : 'text-faintedText'"
                  >mdi-{{ item.icon }}</v-icon
                >
                <p
                  class="text-capitalize ml-2"
                  :class="item.selfStatus ? 'text-primary' : ''"
                >
                  {{ item.name }}
                </p>
              </div>
            </router-link>
          </div>
        </v-list>
        <v-divider v-if="option.separator"></v-divider>
      </div>
    </v-card>
  </v-menu>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

type ProfileListItem = {
  name: string;
  to?: string;
  href?: string;
  icon: string;
  selfStatus: boolean;
};

type ProfileOptions = {
  name: string;
  separator: boolean;
  list: ProfileListItem[];
};

const options = reactive<ProfileOptions[]>([
  {
    name: "account",
    separator: true,
    list: [
      {
        name: "dashboard",
        to: "dashboard",
        icon: "monitor-dashboard",
        selfStatus: false,
      },
      {
        name: "profile",
        to: "profile",
        icon: "account-circle-outline",
        selfStatus: false,
      },
    ],
  },
  {
    name: "explore",
    separator: true,
    list: [
      {
        name: "todos",
        to: "todos",
        icon: "checkbox-marked-circle-auto-outline",
        selfStatus: false,
      },
      {
        name: "weather",
        to: "weather",
        icon: "weather-cloudy",
        selfStatus: false,
      },
    ],
  },
  {
    name: "",
    separator: false,
    list: [
      {
        name: "logout",
        to: "login",
        icon: "logout",
        selfStatus: false,
      },
    ],
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
    option.list.map((link) => {
      if (link.name == route.name) {
        link.selfStatus = true;
      } else {
        link.selfStatus = false;
      }
    });
  });
}

const resolveLinkAttribute = (item: ProfileListItem) => {
  return item.to
    ? { name: item.to }
    : item.href
    ? { href: item.href, target: "_blank" }
    : {};
};
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
