<template>
<div class="w-full px-6 shadow-lg bg-white dark:bg-gray-700 h-auto items-center z-50">
<div class="w-full flex items-center justify-between">
  <div class="flex items-center space-x-4">
    <div class="w-16">
      <router-link to="/" class="brand">
        <img :src="logo" class="brand" alt="logo helena" />
      </router-link>
    </div>
    <div class="space-x-4">
      <router-link class="text-lg" to="/caregorias">
        Categorias
      </router-link>
      <router-link class="text-lg" to="/novidades">
        Novidades
      </router-link>
    </div>
  </div>
  <div class="w-full mx-auto mt-2 mb-4 sm:mx-0 sm:mb-0 sm:mt-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:w-1/2 sm:h-full justify-center items-center block sm:flex">
    <form class="relative w-full">
      <input type="search" class="w-full max-w-full border border-gray-900 rounded-lg pr-4 pl-10 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400" placeholder="Pesquisar..." />
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 svg-inline--fa fa-search fa-w-16 absolute left-0 ml-4 mr-2 top-1/2 transform -translate-y-1/2 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </form>
  </div>
  <div class="flex space-x-4 items-center">
    <router-link to="/" class="no-underline block h-8 mr-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    </router-link>
    <button class="block h-8 mr-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 h-primary" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
      </svg>
    </button>
     <router-link to="/login" class="border ml-4 border-gray-900 px-4 py-2 rounded-lg font-normal text-lg">
       Login
     </router-link>
  </div>
</div>
</div>

</template>

<script>

import logo from "@/assets/logo.png";

export default {
  name: "Header",
  data() {
    return {
      logo,
      user: {},
      admin: false,
      userLoggedIn: false,
      searchTxt: "",
    };
  },
  async mounted() {

  },
  computed: {},
  methods: {

  }
};
</script>

<style>
  .brand img {
  width: 16px;
  display: block;
  padding-left: 10px;
  }
  .border-c-secondary{
    border: 2px solid #662d91;
  }
</style>
