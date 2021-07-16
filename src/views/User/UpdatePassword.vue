<template>
  <div
    class="flex flex-col max-w-sm mx-auto shadow-lg px-4 py-8 bg-white border-t-2 border-indigo-400 rounded-lg dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 mb-8"
  >
    <div
      class="self-center text-xl font-light text-gray-600 sm:text-2xl dark:text-white"
    >Alterar Password</div>
    <div class="mt-8">
      <form @submit.stop.prevent="updatePassword" autocomplete="off">
        <div class="flex flex-col mb-2">
          <input
            type="password"
            v-model="password"
            required
            class="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Password atual"
          />
        </div>
        <div class="flex flex-col mb-2">
          <input
            type="password"
            v-model="newPassword"
            required
            class="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Nova password"
          />
        </div>
        <div class="flex items-center mb-6 -mt-4"></div>
        <div class="flex w-full">
          <button
            type="submit"
            class="py-2 px-4 h-bg-secondary focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >Alterar</button>
        </div>
      </form>
    </div>
    <div class="flex items-center justify-center mt-6">
      <router-link
        to="/profile"
        class="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
      >
        <span class="ml-2">Voltar para o seu perfil</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import AuthenticationService from "@/services/AuthenticationService.js";
export default {
  name: "Profile",
  components: {},
  data() {
    return {
      password: "",
      newPassword: "",
      message: null
    };
  },

  methods: {
    async updatePassword() {
      try {
        const response = await AuthenticationService.updatePassword({
          password: this.password,
          newPassword: this.newPassword
        });
        this.$store.dispatch("CurrentUser/setToken", "");
        this.$store.dispatch("CurrentUser/setUser", {});

        this.$router.push({ path: "/login" });
        console.log(response);
      } catch (error) {
        this.message = error.response.data.message;
        Vue.$toast.error(this.message);
      }
    }
  }
};
</script>

<style>
</style>
