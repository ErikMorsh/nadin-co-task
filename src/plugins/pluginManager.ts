import type { App } from "vue";
import vuetify from "./vuetify";
import router from "../router/index";
import { createPinia } from "./pinia";

export default (app: App) => {
  app.use(vuetify);
  app.use(router);
  app.use(createPinia());
};
