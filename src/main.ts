import { createApp } from "vue";

import App from "./App.vue";
import pluginManager from "./plugins/pluginManager";

const app = createApp(App);

pluginManager(app);

app.mount("#app");
