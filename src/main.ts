import { VueQueryPlugin } from "@tanstack/vue-query";

import "./style.css";
import { createHead } from "@unhead/vue/client";
import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import { router } from "./router";

const pinia = createPinia();
const head = createHead();

createApp(App).use(router).use(pinia).use(VueQueryPlugin).use(head).mount("#app");
