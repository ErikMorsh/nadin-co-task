<template>
  <div class="d-flex align-center">
    <GithubButton />
    <a class="text-BandW" href="https://erikmorsh.github.io/" target="_blank">
      <v-btn
        variant="text"
        class="links d-none d-sm-inline text-capitalize font-weight-bold"
      >
        See My Portfolio
      </v-btn>
    </a>
    <NotificationDropdown />
    <ProfileDropdown />
  </div>
</template>

<script lang="ts" setup>
import GithubButton from "./actions/GithubButton.vue";
import NotificationDropdown from "./actions/dropdowns/NotificationDropdown.vue";
import ProfileDropdown from "./actions/dropdowns/ProfileDropdown.vue";
</script>

<style scoped>
.links {
  letter-spacing: 0.03em;
}
a {
  text-decoration: none;
  color: none;
}
</style>
