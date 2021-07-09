import Vue from "vue";
import App from "./App.vue";
import router from "./router"
import store from "./store"

import { sync } from 'vuex-router-sync'
const unsync = sync(store, router)

import "@/assets/styles/tailwind.css";

Vue.config.productionTip = false;
unsync();

import "./assets/styles/tailwind.css";
import "./assets/styles/fonts.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
