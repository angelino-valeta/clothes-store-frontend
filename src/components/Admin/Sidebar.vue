<template>
  <div class="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
    <div class="bg-white h-full rounded-2xl dark:bg-gray-700">
      <div class="flex items-center justify-center pt-6">
        <router-link to="/">
          <img :src="logo" class="w-12" alt="Logo Helena" />
        </router-link>
      </div>
      <nav class="mt-6">
        <div>
          <router-link
            to="/admin/dashboard"
            class="w-full font-thin uppercase h-primary flex items-center p-4 my-2 transition-colors duration-200 justify-start dark:from-gray-700 dark:to-gray-800 border-r-8 border-color"
            href="#"
          >
            <span class="text-left">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 2048 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
                />
              </svg>
            </span>
            <span class="mx-4 text-sm font-normal">Dashboard</span>
          </router-link>
          <router-link
            to="/admin/categories"
            class="w-full font-thin uppercase h-secondary dark:text-gray-200 flex items-center p-4 my-2 hover:text-gray-800 transition-colors duration-200 justify-start hover:to-black"
            href="#"
          >
            <span class="text-left">
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
                  d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                />
              </svg>
            </span>
            <span class="mx-4 text-sm font-normal">Categorias</span>
          </router-link>
          <router-link
            to="/admin/products"
            class="w-full font-thin uppercase h-secondary dark:text-gray-200 flex items-center p-4 my-2 hover:text-gray-800 transition-colors duration-200 justify-start hover:to-black"
            href="#"
          >
            <span class="text-left">
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
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </span>
            <span class="mx-4 text-sm font-normal">Produtos</span>
          </router-link>
          <router-link
            to="/admin/orders"
            class="w-full font-thin uppercase h-secondary dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-gray-800"
            href="#"
          >
            <span class="text-left">
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
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </span>
            <span class="mx-4 text-sm font-normal">Encomendas</span>
          </router-link>
          <router-link
            to="/admin/users"
            class="w-full font-thin uppercase h-secondary dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-gray-800"
            href="#"
          >
            <span class="text-left">
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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </span>
            <span class="mx-4 text-sm font-normal">Clientes</span>
          </router-link>
          <router-link
            to="/reviews"
            class="w-full font-thin uppercase h-secondary dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-gray-800"
            href="#"
          >
            <span class="text-left">
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
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </span>
            <span class="mx-4 text-sm font-normal">Reviews</span>
          </router-link>
          <router-link
            to="reporters"
            class="w-full font-thin uppercase h-secondary dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-gray-800"
            href="#"
          >
            <span class="text-left">
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
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </span>
            <span class="mx-4 text-sm font-normal">Relatórios</span>
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import logo from "@/assets/img/logo.png";
export default {
  data() {
    return {
      logo
    };
  }
};
</script>
<style>
.brand img {
  width: 8px;
  padding: 16px;
}
.border-color {
  border-color: #9e005d;
}
</style>