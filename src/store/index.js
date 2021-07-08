import Vue from "vue";
import Vuex from "vuex";

import { CurrentUserModule } from "./CurrentUser.js"
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    plugins: [
        createPersistedState()
    ],
    modules: {
        CurrentUser: CurrentUserModule,
    }
});
