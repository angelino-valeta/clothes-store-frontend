<template>
  <div class="max-w-md m-auto py-12">
    <div
      class="max-w-sm bg-white rounded-lg py-8 px-4 shadow-lg flex flex-col items-center justify-center"
    >
      <div class="w-16 h-16 bg-blue-400 rounded-full flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="text-white h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <p class="text-blue-400 font-bold mt-5">Thank you,</p>
      <p class="text-lg text-center text-gray-600 mt-1">
        Olá!
        <span class="font-semibold" v-if="userLoggedIn">{{ user.name }}</span>, Bem vindo a nossa loja.
      </p>
      <router-link
        to="/addaddress"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg mt-6"
        style="background-image: linear-gradient(to right, #662d91 100%,#afa2aa 100%)"
      >continuar</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcom",
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
