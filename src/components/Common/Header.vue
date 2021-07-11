<template>
<div class="fixed w-full px-6 shadow-lg bg-white dark:bg-gray-700 h-16 items-center z-50 marginb">
<div class="w-full xl:max-w-screen-xl mx-auto h-16 flex items-center justify-between">
  <div class="flex items-center">
    <div class="w-16">
      <router-link to="/" class="brand">
        <img :src="logo" class="w-8" alt="logo helena" />
      </router-link>
    </div>
    <div class="space-x-2">
      <router-link class="text-gray-500 tracking-normal" to="/caregorias">
        Categorias
      </router-link>
      <router-link class="text-gray-500 tracking-normal" to="/novidades">
        Novidades
      </router-link>
    </div>
  </div>
  <div class="">
    <div class="relative left-0 z-50 flex h-16">
        <div class="relative flex items-center w-full h-full group">
            <div class="absolute z-50 flex items-center justify-center w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                <svg fill="none" class="relative w-5 h-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                    </path>
                </svg>
            </div>
            <svg class="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                </path>
            </svg>
            <input type="text" class="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400" placeholder="Pesquisar..."/>
            </div>
        </div>
    </div>
  <div class="flex space-x-4 items-center">
    <router-link to="/cart" class="no-underline block h-8">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    </router-link>
    <router-link to="/wishlist" class="block h-8 mr-8">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 h-primary" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
      </svg>
    </router-link>
     <router-link to="/login" class="text-white shadow-md h-bg-secondary rounded-2xl ml-4 px-4 py-1 font-semibold text-lg">
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
    width: 8px;
    padding: 16px;
  }


</style>
