<template>
  <div class="fixed w-full px-6 shadow-lg bg-white dark:bg-gray-700 h-16 items-center z-50 marginb">
    <div class="w-full xl:max-w-screen-xl mx-auto h-16 flex items-center justify-between">
      <div class="flex items-center">
        <div class="w-16">
          <router-link to="/">
            <img :src="logo" class="w-8" alt="Logo Helena" />
          </router-link>
        </div>
        <div class="space-x-2">
          <router-link class="text-gray-500 tracking-normal" to="/categories">Categorias</router-link>
          <router-link class="text-gray-500 tracking-normal" to="/news">Novidades</router-link>
        </div>
      </div>
      <div class>
        <div class="relative left-0 z-50 flex h-16">
          <div class="relative flex items-center w-full h-full group">
            <div
              class="absolute z-50 flex items-center justify-center w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden"
            >
              <svg
                fill="none"
                class="relative w-5 h-5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <svg
              class="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
              />
            </svg>
            <input
              type="text"
              class="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400"
              placeholder="Pesquisar..."
            />
          </div>
        </div>
      </div>
      <div class="flex space-x-4 items-center">
        <router-link to="/cart" class="no-underline block h-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 hover:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </router-link>
        <router-link to="/wishlist" class="block h-8 mr-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 h-primary"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            />
          </svg>
        </router-link>
        <div>
          <div v-if="userLoggedIn">
            <div class="flex items-center justify-center">
              <div class="relative inline-block text-left dropdown">
                <span class>
                  <button
                    class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="true"
                    aria-controls="headlessui-menu-items-117"
                  >
                    <span>{{ user.name }}</span>
                    <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
                <div
                  class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95"
                >
                  <div
                    class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                    aria-labelledby="headlessui-menu-button-1"
                    id="headlessui-menu-items-117"
                    role="menu"
                  >
                    <div class="px-4 py-3">
                      <p class="text-sm leading-5">Logado com</p>
                      <p
                        class="text-sm font-medium leading-5 text-gray-900 truncate"
                      >{{ user.email }}</p>
                    </div>
                    <div class="py-1">
                      <a
                        href="/profile"
                        tabindex="0"
                        class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        role="menuitem"
                      >Perfil</a>
                      <a
                        href="/orders"
                        tabindex="0"
                        class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        role="menuitem"
                      >Encomendas</a>
                      <router-link
                        v-if="admin"
                        to="/admin/dashboard"
                        tabindex="0"
                        class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        role="menuitem"
                      >Dashboard</router-link>
                    </div>
                    <div class="py-1">
                      <button
                        @click="logout()"
                        tabindex="3"
                        class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        role="menuitem"
                      >Sair</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <router-link
              to="/login"
              class="text-white shadow-md h-bg-secondary rounded-2xl ml-4 px-4 py-2 font-semibold text-lg"
            >Login</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/img/logo.png";

export default {
  name: "Header",
  data() {
    return {
      logo,
      user: {},
      admin: false,
      userLoggedIn: false,
      searchTxt: ""
    };
  },
  async mounted() {
    this.user = this.$store.state.CurrentUser.user;
    this.admin = this.$store.state.CurrentUser.admin;
    this.userLoggedIn = this.$store.state.CurrentUser.userLoggedIn;
    console.log(this.userLoggedIn);
  },
  computed: {},
  methods: {
    async logout() {
      this.$store.dispatch("CurrentUser/setToken", "");
      this.$store.dispatch("CurrentUser/setUser", {});
      window.location.reload();
    }
  }
};
</script>

<style>
.brand img {
  width: 8px;
  padding: 16px;
}
.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  transform: translate(0) scale(1);
  visibility: visible;
}
</style>
