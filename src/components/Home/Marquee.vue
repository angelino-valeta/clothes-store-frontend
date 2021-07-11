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
                  <img :src="dropShirt" alt="Just a flower" class=" w-full object-fill rounded-2xl">
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
                  <img :src="mask" alt="Just a flower" class=" w-full object-fill rounded-2xl">
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
                  <img :src="tshirt5" alt="Just a flower" class=" w-full object-fill rounded-2xl">
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
                  <img :src="tshirt7" alt="Just a flower" class=" w-full object-fill rounded-2xl">
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

import tshirt7 from "@/assets/img/mockup-cf2e0793__12098.1601231766.png";
import tshirt5 from "@/assets/img/mockup-a69ed7d5__19588.1601231767.png"
import mask from "@/assets/img/mask-1.png";
import dropShirt from "@/assets/img/drop-shirt.png";

export default {
  name: "Marquee",
  components: {

  },
  data() {
    return {
      productsFeacturedIn: [],
      limit: 4,
      dropShirt,
      mask,
      tshirt5,
      tshirt7
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
