<template>
  <div class="vuetify-icon ml-2 ml-sm-5 d-flex align-center">
    <p class="vuetify-icon-text text-caption text-sm-h6 font-weight-bold">
      Vuetify
    </p>
    <div>
      <p
        class="icon-caption pb-3 pl-1 text-uppercase font-weight-bold"
        :style="{
          'font-size': false ? '0.6em' : '',
        }"
      >
        admin
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.vuetify-icon p {
  color: rgb(var(--v-theme-primary));
}

.vuetify-icon-text {
  letter-spacing: 0.2em !important;
  text-transform: uppercase !important;
}
.icon-caption {
  font-size: 0.7em;
  letter-spacing: 0.2em;
}
</style>
