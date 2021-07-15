<template>
  <div class="flex flex-wrap w-full">
    <div class="flex flex-col w-full md:w-1/2 h-bg-secondary">
      <div
        class="max-w-sm mx-auto flex flex-col justify-center px-8 my-auto md:justify-start md:px-2"
      >
        <div class="flex justify-center items-center mb-2">
          <router-link to="/" class="brand">
            <img :src="logo" alt="logo helena" />
          </router-link>
        </div>
        <p class="text-2xl text-center text-white">Bem vindo a sua loja online.</p>
        <form @submit.stop.prevent="login" class="flex flex-col pt-4">
          <div class="flex flex-col mb-2">
            <div class="flex relative">
              <span
                class="rounded-l-md inline-flex items-center px-3 border-t border-l border-b border-gray-300 h-bg-dark text-white shadow-sm text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
              <input
                v-model="email"
                type="text"
                id="email"
                ref="emailField"
                required
                class="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <div class="flex relative">
              <span
                class="rounded-l-md inline-flex items-center px-3 border-t border-l border-b border-gray-300 h-bg-dark text-white shadow-sm text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <input
                v-model="password"
                type="password"
                id="password"
                required
                class="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Password"
              />
            </div>
            <!-- <div 
        v-if="loginAlert"
        class="mt-4">
        <div class="text-red-600 bg-white shadow-sm rounded-lg py-4 px-4">
          {{ loginMessage }}
        </div>
            </div>-->
          </div>
          <button
            type="submit"
            class="w-full rounded-lg px-4 py-2 font-bold text-center text-lg text-white transition duration-200 ease-in h-bg-primary shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
          >
            <span class="w-full">Entrar</span>
          </button>
        </form>
        <div class="pt-12 pb-12 text-center text-gray-50">
          <p>
            Não tens uma conta?
            <router-link to="/register" class="font-semibold underline">Registra-se aqui.</router-link>
          </p>
        </div>
      </div>
    </div>
    <div class="w-1/2 shadow-2xl h-bg-primary">
      <img class="hidden object-cover w-full h-screen md:block" :src="coverImage" />
    </div>
  </div>
</template>

<script>
import logo from "@/assets/img/logo1.png";
import coverImage from "@/assets/img/image-8.png";

import AuthenticationService from "@/services/AuthenticationService.js";

import Vue from "vue";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      logo,
      coverImage,
      email: null,
      password: null,
      loginMessage: null
    };
  },
  computed: {},
  mounted() {},
  methods: {
    async login() {
      //this.$store.dispatch("CurrentUser/setToken", 'token')
      try {
        const response = (
          await AuthenticationService.login({
            email: this.email,
            password: this.password
          })
        ).data;

        this.$store.dispatch("CurrentUser/setToken", response.token);
        this.$store.dispatch("CurrentUser/setUser", response.data);
        this.$router.push({ path: "/" });
      } catch (error) {
        this.loginMessage = error.response.data.message;
        Vue.$toast.error(this.loginMessage);
      }
    }
  }
};
</script>

<style></style>
