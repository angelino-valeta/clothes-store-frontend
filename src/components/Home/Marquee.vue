<template>
  <div class="w-full flex">
    <div class="w-1/2 h-bg-primary flex flex-col space-y-3 ">
      <div class="flex w-full">
        <div class="w-1/2">
          <router-link to="/" class="w-full block h-full">
            <div class="flex flex-col">
              <div class="">
                <div class="relative h-62 w-full mb-3">
                  <div class="absolute flex flex-col position-ProductFeactured-price p-3">
                    <div class="flex-auto justify-evenly px-4">
                    <div class="bg-white rounded-lg px-4">
                      <div class="text-xl text-gray-900 font-semibold mt-1">
                        4.000 <span class="font-light text-sm">
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
        <div class="w-1/2">
          <router-link to="/" class="w-full block h-full">
            <div class="flex flex-col">
              <div class="">
                <div class="relative h-62 w-full mb-3">
                  <div class="absolute flex flex-col position-ProductFeactured-price p-3">
                    <div class="flex-auto justify-evenly px-4">
                    <div class="bg-white rounded-lg px-4">
                      <div class="text-xl text-gray-900 font-semibold mt-1">
                        600 <span class="font-light text-sm">
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
        <div class="w-1/2">
          <router-link to="/" class="w-full block h-full">
            <div class="flex flex-col">
              <div class="">
                <div class="relative h-62 w-full mb-3">
                  <div class="absolute flex flex-col position-ProductFeactured-price p-3">
                    <div class="flex-auto justify-evenly px-4">
                    <div class="bg-white rounded-lg px-4">
                      <div class="text-xl text-gray-900 font-semibold mt-1">
                        4.000 <span class="font-light text-sm">
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
        <div class="w-1/2">
          <router-link to="/" class="w-full block h-full">
            <div class="flex flex-col">
              <div class="">
                <div class="relative h-62 w-full mb-3">
                  <div class="absolute flex flex-col position-ProductFeactured-price p-3">
                    <div class="flex-auto justify-evenly px-4">
                    <div class="bg-white rounded-lg px-4">
                      <div class="text-xl text-gray-900 font-semibold mt-1">
                        4.000 <span class="font-light text-sm">
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
      </div>
    </div>
  </div>
</template>

<script>

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
      dropShirt,
      mask,
      tshirt5,
      tshirt7
    }
  },
  mounted() {}
};
</script>

<style>

</style>
