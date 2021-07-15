<template >
  <div class="-margin-t">
    <div
      v-if="productsFeactured.success" 
      class="w-full flex">
      <div class="w-1/2 h-bg-secondary flex flex-col space-y-3">
         <div v-if="productsFeactured.data[0]">
          <router-link :to="`/product/${productsFeactured.data[0].id}`" class="w-full block h-full">
            <div class="flex flex-col">
              <div class="">
                <div class="relative h-62 w-full mb-3">
                  <div class="absolute flex flex-col position-ProductFeactured-price p-3">
                    <div class="flex-auto justify-evenly px-4">
                    <div class="bg-white rounded-lg px-4">
                      <div class="text-xl text-gray-900 font-semibold mt-1">
                        {{productsFeactured.data[0].price}} <span class="font-light text-sm">
                           kz
                        </span>
                      </div>
                    </div>
                    </div>
                  </div>
                  <img :src="`http://localhost:4000/${productsFeactured.data[0].image}`" 
                  :alt="productsFeactured.data[0].name + ' photo'"
                   class=" w-full object-fill rounded-2xl">
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="flex w-full">
          <div class="w-1/2">
            <div v-if="productsFeactured.data[2]">
            <router-link :to="`/product/${productsFeactured.data[2].id}`" class="w-full block h-full">
            <div class="flex flex-col">
              <div class="">
                <div class="relative h-62 w-full mb-3">
                  <div class="absolute flex flex-col position-ProductFeactured-price p-3">
                    <div class="flex-auto justify-evenly px-4">
                    <div class="bg-white rounded-lg px-4">
                      <div class="text-xl text-gray-900 font-semibold mt-1">
                        {{productsFeactured.data[2].price}} <span class="font-light text-sm">
                           kz
                        </span>
                      </div>
                    </div>
                    </div>
                  </div>
                   <img :src="`http://localhost:4000/${productsFeactured.data[2].image}`" 
                  :alt="productsFeactured.data[2].name + ' photo'"
                   class=" w-full object-fill rounded-2xl">
                </div>
              </div>
            </div>
          </router-link>
        </div>
          </div>
          <div class="w-1/2">
             <div v-if="productsFeactured.data[3]">
            <router-link :to="`/product/${productsFeactured.data[3].id}`" class="w-full block h-full">
              <div class="flex flex-col">
                <div class="">
                  <div class="relative h-62 w-full mb-3">
                    <div class="absolute flex flex-col position-ProductFeactured-price p-3">
                      <div class="flex-auto justify-evenly px-4">
                      <div class="bg-white rounded-lg px-4">
                        <div class="text-xl text-gray-900 font-semibold mt-1">
                          {{productsFeactured.data[3].price}} <span class="font-light text-sm">
                            kz
                          </span>
                        </div>
                      </div>
                      </div>
                    </div>
                     <img :src="`http://localhost:4000/${productsFeactured.data[3].image}`" 
                  :alt="productsFeactured.data[3].name + ' photo'"
                     class=" w-full object-fill rounded-2xl">
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          </div>
        </div>
      </div>
      <div class="w-1/2 h-bg-primary">
        <div v-if="productsFeactured.data[1]">
          <router-link :to="`/product/${productsFeactured.data[1].id}`" class="w-full block h-full">
            <div class="flex flex-col">
              <div class="">
                <div class="relative h-62 w-full mb-3">
                  <div class="absolute flex flex-col position-ProductFeactured-price p-3">
                    <div class="flex-auto justify-evenly px-4">
                    <div class="bg-white rounded-lg px-4">
                      <div class="text-xl text-gray-900 font-semibold mt-1">
                        {{productsFeactured.data[1].price}} <span class="font-light text-sm">
                           kz
                        </span>
                      </div>
                    </div>
                    </div>
                  </div>
                   <img :src="`http://localhost:4000/${productsFeactured.data[1].image}`" 
                  :alt="productsFeactured.data[1].name + ' photo'"
                    class=" w-full object-fill rounded-2xl">
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="flex w-full">
          <div class="w-1/2">
          <div v-if="productsFeactured.data[4]">
          <router-link :to="`/product/${productsFeactured.data[4].id}`" class="w-full block h-full">
            <div class="flex flex-col">
              <div class="">
                <div class="relative h-62 w-full mb-3">
                  <div class="absolute flex flex-col position-ProductFeactured-price p-3">
                    <div class="flex-auto justify-evenly px-4">
                    <div class="bg-white rounded-lg px-4">
                      <div class="text-xl text-gray-900 font-semibold mt-1">
                        {{productsFeactured.data[4].price}} <span class="font-light text-sm">
                           kz
                        </span>
                      </div>
                    </div>
                    </div>
                  </div>
                  <img :src="`http://localhost:4000/${productsFeactured.data[4].image}`" 
                  :alt="productsFeactured.data[4].name + ' photo'"
                    class=" w-full object-fill rounded-2xl">
                </div>
              </div>
            </div>
          </router-link>
        </div>
        </div>
          <div class="w-1/2">
             <div v-if="productsFeactured.data[5]">
              <router-link :to="`/product/${productsFeactured.data[5].id}`" class="w-full block h-full">
                <div class="flex flex-col">
                  <div class="">
                    <div class="relative h-62 w-full mb-3">
                      <div class="absolute flex flex-col position-ProductFeactured-price p-3">
                        <div class="flex-auto justify-evenly px-4">
                        <div class="bg-white rounded-lg px-4">
                          <div class="text-xl text-gray-900 font-semibold mt-1">
                            {{productsFeactured.data[5].price}} <span class="font-light text-sm">
                              kz
                            </span>
                          </div>
                        </div>
                        </div>
                      </div>
                     <img :src="`http://localhost:4000/${productsFeactured.data[5].image}`" 
                    :alt="productsFeactured.data[5].name + ' photo'"
                    class=" w-full object-fill rounded-2xl">
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ProductsService from "@/services/ProductsService.js";



export default {
  name: "ProductFeactured",
  components: {

  },
  data() {
    return {
      productsFeactured: [],
      limit: 6,
      
    }
  },
  async mounted() {
    this.productsFeactured = (
      await ProductsService.getProductsIsFeatured(this.limit)
    ).data
  },
};
</script>

<style>

</style>
