<template>
  <div class="w-full bg-white p-12">
    <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto flex items-center justify-center container">
      <div
        v-if="products.success" 
        class="p-5 mx-auto max-w-screen-xl">
        <div class="grid grid-flow-row-dense grid-cols-1 justify-between sm:grid-cols-2 md:grid-cols-4 gap-12">
            <div
               v-for="product in products.data"
               :key="product.id"
              class="overflow-hidden shadow-xl hover:shadow-md rounded-lg cursor-pointer m-auto w-full">
            <div class="w-full block h-full">
              <div class="flex flex-col">
                <div class="">
                  <div class="relative h-62 w-full mb-3">
                    <div class="absolute flex flex-col top-0 right-0 p-3">
                      <button class="transition ease-in duration-300 h-primary rounded-full w-8 h-8 text-center p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                    <img 
                       @click="$router.push({ path: `/product/${product.id}` })"
                      :src="jacket" 
                      :alt="product.name + ' photo'" 
                      class=" w-full object-fill rounded-2xl">
                  </div>
                  <div class="flex-auto justify-evenly px-4">
                    <div class="flex flex-wrap ">
                      <div class="flex items-center w-full justify-between">
                        <h2 
                         @click="$router.push({ path: `/product/${product.id}` })"
                        class="text-lg flex-1 mr-auto cursor-pointer text-gray-800 font-semibold truncate overflow-hidden">{{product.name}}</h2>
                        <div v-html="inStock(product.stock)"></div>
                      </div>
                    </div>
                    <div 
                    class="text-xl text-gray-500 font-semibold mt-1 mb-4">
                      {{ product.price }} <span class="font-light text-sm">
                          kz
                      </span>
                    </div>
                    <!-- <div class="flex space-x-2 text-sm font-medium justify-start mb-6 py-2">
                      <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 h-bg-primary px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-lg ">
                        <span>Add Cart</span>
                      </button>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
      <div v-else>
        <div class="px-5 py-4 shadow-2xl bg-red-500 text-white rounded-lg">
          Ohh, não! algo de errado aconteceu
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ProductsService from "@/services/ProductsService.js";

import jacket from "@/assets/img/image-8.png";


export default {
  name: "ProductList",
  components: {

  },
  data() {
    return {
      products: [],
      jacket,
    }
  },
  async mounted() {
    this.products = (
      await ProductsService.getProducts()
    ).data
  },
  methods: {
    inStock: function(stock){
      if(!stock){
        return `<div class="items-center bg-red-500 text-white text-xs px-2 py-1 ml-3 rounded-lg">
          ESGOTADO
        </div>`
      }
      return `<div class="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
          EM STOCK
        </div>`
    },
  }
};
</script>

<style>

</style>
