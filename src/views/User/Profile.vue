<template>
  <section class="h-screen">
    <form class="container max-w-2xl mx-auto shadow-lg md:w-3/4">
      <div class="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
        <div class="max-w-sm mx-auto md:w-full md:mx-0">
          <div class="inline-flex items-center space-x-4">
            <h1 v-if="userLoggedIn" class="text-lg font-semibold h-secondary">{{ user.name }}</h1>
          </div>
        </div>
      </div>
      <div class="space-y-6 bg-white">
        <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
          <h2 class="max-w-sm mx-auto md:w-1/3">Sua conta</h2>
          <div class="max-w-sm mx-auto md:w-2/3">
            <div class="relative">
              <input
                type="text"
                id="user-info-email"
                class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                :placeholder="user.email"
              />
            </div>
          </div>
        </div>
        <hr />
        <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
          <h2 class="max-w-sm mx-auto md:w-1/3">Informações Pessoais</h2>
          <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
            <div>
              <div class="relative">
                <input
                  type="text"
                  id="user-info-name"
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  :placeholder="user.name"
                />
              </div>
            </div>
            <div>
              <div class="relative">
                <input
                  type="text"
                  id="user-info-phone"
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  :placeholder="user.phone"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
          <h2 class="max-w-sm mx-auto md:w-4/12">Alterar password</h2>
          <div class="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12 md:pl-9 md:inline-flex">
            <div class="relative">
              <input
                type="text"
                id="user-info-password"
                class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Password"
              />
            </div>
          </div>
          <div class="text-center md:w-3/12 md:pl-6">
            <button
              type="button"
              class="py-2 px-4 bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >Alterar</button>
          </div>
        </div>
        <hr />
        <div class="flex justify-around">
          <div class="px-4 pb-4 text-gray-500">
            <router-link
              to="orders"
              type="submit"
              class="py-2 px-4 border-2 focus:ring-blue-500 h-secondary focus:ring-offset-blue-200 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >Minhas encomendas</router-link>
          </div>
          <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
            <button
              type="submit"
              class="py-2 px-4 h-bg-secondary hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >Salvar</button>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "Profile",
  components: {},
  data() {
    return {
      user: {},
      userLoggedIn: false
    };
  },
  async mounted() {
    this.user = this.$store.state.CurrentUser.user;
    this.userLoggedIn = this.$store.state.CurrentUser.userLoggedIn;
  }
};
</script>

<style>
</style>
