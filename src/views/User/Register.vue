<template>
  <div class="flex flex-wrap w-full">
    <div class="w-1/2 shadow-2xl h-bg-primary">
      <img
        class="hidden object-cover w-full h-screen md:block"
        :src="coverImage"
      />
    </div>
    <div class="flex flex-col w-full md:w-1/2 h-bg-secondary">
      <div
        class="max-w-sm mx-auto flex flex-col justify-center px-8 my-auto md:justify-start md:px-2"
      >
        <div class="flex justify-center items-center mb-2">
          <router-link to="/" class="brand">
            <img :src="logo" alt="logo helena" />
          </router-link>
        </div>
        <p class="text-2xl text-center text-white">
          Bem vindo a nossa loja online.
        </p>
        <form @submit.stop.prevent="createAccount" class="flex flex-col pt-4">
          <div class="">
            <div class="flex flex-col mb-2">
              <div class="flex relative">
                <span
                  class="rounded-l-md inline-flex  items-center px-3 border-t border-l border-b  border-gray-300 shadow-sm h-bg-dark text-white text-sm"
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <input
                  v-model="fullName"
                  ref="fullNameField"
                  type="text"
                  id="fullName"
                  required
                  class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Seu nome"
                />
              </div>
            </div>
            <div class="flex flex-col mb-2">
              <div class="flex relative">
                <span
                  class="rounded-l-md inline-flex  items-center px-3 border-t border-l border-b  border-gray-300 h-bg-dark text-white shadow-sm text-sm"
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
                  type="email"
                  id="email"
                  required
                  class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Seu email"
                />
              </div>
            </div>
            <div class="flex flex-col mb-2">
              <div class="flex relative">
                <span
                  class="rounded-l-md inline-flex  items-center px-3 border-t border-l border-b  border-gray-300 h-bg-dark text-white shadow-sm text-sm"
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                <input
                  v-model="phone"
                  type="text"
                  id="phone"
                  required
                  class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Nº de telefone"
                />
              </div>
            </div>
            <div class="flex flex-col">
              <div class="flex relative mb-2">
                <span
                  class="rounded-l-md inline-flex  items-center px-3 border-t border-l border-b  border-gray-300 h-bg-dark text-white shadow-sm text-sm"
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>
                <input
                  v-model="password"
                  type="password"
                  id="password"
                  required
                  class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="flex flex-col mb-6">
              <div class="flex relative ">
                <span
                  class="rounded-l-md inline-flex  items-center px-3 border-t border-l border-b  border-gray-300 h-bg-dark text-white shadow-sm text-sm"
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>
                <input
                  v-model="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  required
                  class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Confirmar Password"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            class="w-full rounded-lg px-4 py-2 font-bold text-center text-lg text-white transition duration-200 ease-in h-bg-primary shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
          >
            <span class="w-full">
              Criar Conta
            </span>
          </button>
        </form>
        <div class="pt-12 pb-12 text-center text-gray-50">
          <p>
            Já tens uma conta?
            <router-link to="/login" class="font-semibold underline">
              Faça login aqui.
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService.js";

import Vue from "vue";

import logo from "@/assets/img/logo1.png";
import coverImage from "@/assets/img/mockup-408c7cb0__30956.1603747525.png";

export default {
  name: "Register",
  components: {},
  data() {
    return {
      logo,
      coverImage,
      fullName: null,
      email: null,
      password: null,
      phone: null,
      validEmail: true,
      confirmPassword: null,
      emailMessage: null,
      message: null,
    };
  },
  mounted() {},
  computed: {},
  methods: {
    async createAccount() {
      if (this.confirmPassword != this.password) {
        return Vue.$toast.error("As passwords tem de ser as mesmas");
      }

      try {
        const response = await AuthenticationService.register({
          name: this.fullName,
          email: this.email,
          phone: this.phone,
          password: this.password,
        });
        this.$store.dispatch("CurrentUser/setToken", response.data.token);
        this.$store.dispatch("CurrentUser/setUser", response.data.data);
        this.$router.push({ path: "/welcome" });
        console.log(response);
      } catch (error) {
        this.message = error.response.data.message;
        Vue.$toast.error(this.message);
      }
    },
  },
};
</script>

<style></style>
