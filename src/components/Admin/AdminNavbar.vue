<template>
  <header class="w-full shadow-lg h-bg-primary dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
    <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
      <div class="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
        <div class="container relative left-0 z-50 flex w-3/4 h-auto">
          <div class="relative flex items-center w-full lg:w-64 h-full group">
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
              class="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
              placeholder="Pesquisar..."
            />
          </div>
        </div>
        <div
          class="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto"
        >
          <div>
            <div v-if="userLoggedIn">
              <div class="flex items-center justify-center">
                <div class="relative inline-block text-left dropdown">
                  <span class>
                    <button
                      class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out rounded-md hover:text-gray-00 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
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
  </header>
</template>
<script>
export default {
  data() {
    return {
      user: {},
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
      this.$router.push({ path: "/" });
      window.location.reload();
    }
  }
};
</script>
<style scoped>
</style>