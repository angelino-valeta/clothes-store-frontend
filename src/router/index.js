import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Register from "@/views/User/Register.vue";
import Login from "@/views/User/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { title: "Helena Shop" }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: { title: "Register" }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { title: "Login" }
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
