<template>
  <section class="mb-8">
    <form
      @submit.stop.prevent="updateDetailsUser()"
      class="container max-w-2xl mx-auto shadow-lg md:w-3/4"
    >
      <div class="p-4 border-t-2 border-indigo-400 rounded-lg">
        <div class="w-full md:mx-0"></div>
      </div>
      <div class="space-y-6 bg-white">
        <div
          class="items-center w-full p-4 space-y-4 text-gray-500 text-lg md:inline-flex md:space-y-0"
        >
          <h2 class="max-w-sm mx-auto md:w-1/3">Sua conta</h2>
          <div class="max-w-sm mx-auto md:w-2/3">
            <div class="relative">
              <input
                type="email"
                v-model="email"
                class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                :placeholder="user.email"
              />
            </div>
          </div>
        </div>
        <hr />
        <div
          class="items-center w-full p-4 space-y-4 text-gray-500 text-lg md:inline-flex md:space-y-0"
        >
          <h2 class="max-w-sm mx-auto md:w-1/3">Informações Pessoais</h2>
          <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
            <div>
              <div class="relative">
                <input
                  type="text"
                  v-model="name"
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  :placeholder="user.name"
                />
              </div>
            </div>
            <div>
              <div class="relative">
                <input
                  type="text"
                  v-model="phone"
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  :placeholder="user.phone"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="flex justify-end py-4 px-8 w-full mt-8 mb-8">
          <div class="flex w-3/4 space-x-4 mb-4">
            <router-link
              to="/updatePassword"
              type="button"
              class="py-2 px-4 focus:ring-indigo-500 h-bg-secondary focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >Alterar password</router-link>
            <button
              type="submit"
              class="py-2 px-4 h-bg-primary focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >Salvar</button>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import Vue from "vue";

import AuthenticationService from "@/services/AuthenticationService.js";
export default {
  name: "Profile",
  components: {},
  data() {
    return {
      user: {},
      name: "",
      email: "",
      phone: "",
      message: null
    };
  },
  async mounted() {
    this.user = this.$store.state.CurrentUser.user;
  },
  methods: {
    async updateDetailsUser() {
      try {
        const response = await AuthenticationService.updateDetails({
          name: this.name || this.user.name,
          email: this.email || this.user.email,
          phone: this.phone || this.user.phone
        });

        this.$store.dispatch("CurrentUser/setToken", response.data.token);
        this.$store.dispatch("CurrentUser/setUser", response.data.data);
        window.location.reload();
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
