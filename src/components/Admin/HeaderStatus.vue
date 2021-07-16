<template>
  <div class="flex flex-col flex-wrap sm:flex-row">
    <div class="w-full sm:w-1/2 xl:w-1/3">
      <div class="mb-4 sm:ml-4 xl:mr-4">
        <div class="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
          <div class="py-2 px-4 text-gray-600 flex items-center justify-around">
            <div class="relative">
              <p class="text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                <router-link class="hover:underline" to="/admin/orders">Encomendas</router-link>
              </p>
              <div class="flex items-end space-x-2 my-6">
                <p class="text-5xl text-black dark:text-white font-bold">{{ totalOrders }}</p>
              </div>
            </div>
            <div class>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-16 w-16"
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full sm:w-1/2 xl:w-1/3">
      <div class="mb-4 sm:ml-4 xl:mr-4">
        <div class="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
          <div class="py-2 px-4 text-gray-600 flex items-center justify-around">
            <div class="relative">
              <p class="text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                <router-link class="hover:underline" to="/admin/products">Produtos</router-link>
              </p>
              <div class="flex items-end space-x-2 my-6">
                <p class="text-5xl text-black dark:text-white font-bold">{{ totalProduct }}</p>
              </div>
            </div>
            <div class>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-16 w-16"
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full sm:w-1/2 xl:w-1/3">
      <div class="mb-4 sm:ml-4 xl:mr-4">
        <div class="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
          <div class="py-2 px-4 text-gray-600 flex items-center justify-around">
            <div class>
              <p class="text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                <router-link class="hover:underline" to="/admin/users">Clientes</router-link>
              </p>
              <div class="flex items-end space-x-2 my-6">
                <p class="text-5xl text-black dark:text-white font-bold">{{ totalUser }}</p>
              </div>
            </div>
            <div class>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-16 w-16"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    totalProduct: {
      type: Number,
      default: 0
    },
    totalUser: {
      type: Number,
      default: 0
    },
    totalOrders: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped>
</style>