<template>
  <div 
    v-if="productsFeacturedIn.success" 
    class="w-full flex">
    <div class="w-1/2 h-bg-primary flex flex-col space-y-3 ">
      <div 
        class="flex w-full">
        <div v-if="productsFeacturedIn.data[0]" class="w-1/2">
          <router-link :to="`/product/${productsFeacturedIn.data[0].id}`" class="w-full block h-full">
            <div class="flex flex-col">
              <div class="">
                <div class="relative h-62 w-full mb-3">
                  <div class="absolute flex flex-col position-ProductFeactured-price p-3">
                    <div class="flex-auto justify-evenly px-4">
                    <div class="bg-white rounded-lg px-4">
                      <div class="text-xl text-gray-900 font-semibold mt-1">
                        {{productsFeacturedIn.data[0].price}} <span class="font-light text-sm">
                           kz
                        </span>
                      </div>
                    </div>
                    </div>
                  </div>
                  <img :src="`http://localhost:4000/${productsFeacturedIn.data[0].image}`" :alt="productsFeacturedIn.data[0].name + ' photo'" class=" w-full object-fill rounded-2xl">
                </div>
              </div>
            </div>
          </router-link>
        </div>
         <div v-if="productsFeacturedIn.data[1]" class="w-1/2">
          <router-link :to="`/product/${productsFeacturedIn.data[1].id}`" class="w-full block h-full">
            <div class="flex flex-col">
              <div class="">
                <div class="relative h-62 w-full mb-3">
                  <div class="absolute flex flex-col position-ProductFeactured-price p-3">
                    <div class="flex-auto justify-evenly px-4">
                    <div class="bg-white rounded-lg px-4">
                      <div class="text-xl text-gray-900 font-semibold mt-1">
                        {{productsFeacturedIn.data[1].price}} <span class="font-light text-sm">
                           kz
                        </span>
                      </div>
                    </div>
                    </div>
                  </div>
                  <img :src="`http://localhost:4000/${productsFeacturedIn.data[1].image}`" 
                  :alt="productsFeacturedIn.data[1].name + ' photo'" class=" w-full object-fill rounded-2xl">
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="w-1/2 h-bg-secondary">
      <div class="flex w-full">
         <div v-if="productsFeacturedIn.data[2]" class="w-1/2">
          <router-link :to="`/product/${productsFeacturedIn.data[2].id}`" class="w-full block h-full">
            <div class="flex flex-col">
              <div class="">
                <div class="relative h-62 w-full mb-3">
                  <div class="absolute flex flex-col position-ProductFeactured-price p-3">
                    <div class="flex-auto justify-evenly px-4">
                    <div class="bg-white rounded-lg px-4">
                      <div class="text-xl text-gray-900 font-semibold mt-1">
                        {{productsFeacturedIn.data[2].price}} <span class="font-light text-sm">
                           kz
                        </span>
                      </div>
                    </div>
                    </div>
                  </div>
                  <img :src="`http://localhost:4000/${productsFeacturedIn.data[2].image}`" 
                  :alt="productsFeacturedIn.data[2].name + ' photo'" class=" w-full object-fill rounded-2xl">
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div v-if="productsFeacturedIn.data[3]" class="w-1/2">
          <router-link :to="`/product/${productsFeacturedIn.data[3].id}`" class="w-full block h-full">
            <div class="flex flex-col">
              <div class="">
                <div class="relative h-62 w-full mb-3">
                  <div class="absolute flex flex-col position-ProductFeactured-price p-3">
                    <div class="flex-auto justify-evenly px-4">
                    <div class="bg-white rounded-lg px-4">
                      <div class="text-xl text-gray-900 font-semibold mt-1">
                        {{productsFeacturedIn.data[3].price}} <span class="font-light text-sm">
                           kz
                        </span>
                      </div>
                    </div>
                    </div>
                  </div>
                  <img :src="`http://localhost:4000/${productsFeacturedIn.data[3].image}`" 
                  :alt="productsFeacturedIn.data[3].name + ' photo'"
                   class=" w-full object-fill rounded-2xl">
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ProductsService from "@/services/ProductsService.js";



export default {
  name: "Marquee",
  components: {

  },
  data() {
    return {
      productsFeacturedIn: [],
      limit: 4,
     
    }
  },
  async mounted() {
    this.productsFeacturedIn = (
      await ProductsService.getProductsFeaturedIn(this.limit)
    ).data
    //console.log(this.productsFeacturedIn.data[0].id)
  },
};
</script>

<style>

</style>
