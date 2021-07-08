<template>
  <div>
    <main class="bg-white relative overflow-hidden h-screen relative">
        <header class="absolute top-0 left-0 right-0 z-20">
            <nav class="container mx-auto px-6 md:px-12 py-4">
                <div class="md:flex justify-between items-center">
                    <div class="flex justify-between items-center">
                        <div class="md:hidden">
                            <button class="text-gray-800 focus:outline-none">
                                <svg class="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32">
            <div class="container mx-auto px-6 flex flex-col justify-between items-center relative">
                <div class="flex w-full items-center justify-center space-x-12 flex-col md:flex-row mb-16 md:mb-8">
                    <h1 class="font-thin text-center text-2xl text-gray-800">
                        Acesso negado.
                    </h1>
                    <router-link to="/" class="transition ease-in duration-300 inline-flex items-center text-lg font-bold h-bg-primary px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-lg">
                      Voltar
                    </router-link>
                </div>
                <div class="block w-full mx-auto mt-6 md:mt-0 relative">
                  <div class="max-w-sm m-auto">
                      <img :src="acessDenied" alt="Acesso negado"/>
                  </div>
                </div>
            </div>
        </div>
    </main>
  </div>
</template>

<script>

import acessDenied from "@/assets/img/undraw_access_denied_re_awnf.svg";


export default {
  name: "Unauthorized",
  components: {

  },
  data() {
    return {
      acessDenied

    };
  }
};
</script>

<style>

</style>
