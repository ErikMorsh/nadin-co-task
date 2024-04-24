<template>
    <div class="d-flex align-center">
        <GithubButton />
        <v-btn variant="text" class="links d-none d-md-inline text-capitalize font-weight-bold">
            About Vuetify Admin
        </v-btn>
        <v-btn variant="text" class="links d-none d-sm-inline text-capitalize font-weight-bold">
            Help & Support
        </v-btn>
        <NotificationDropdown />
        <ProfileDropdown />
    </div>
</template>

<script lang="ts" setup>
import GithubButton from './actions/GithubButton.vue';
import NotificationDropdown from './actions/dropdowns/NotificationDropdown.vue';
import ProfileDropdown from './actions/dropdowns/ProfileDropdown.vue';
</script>

<style scoped>
.links {
    letter-spacing: 0.03em;
}
</style>
