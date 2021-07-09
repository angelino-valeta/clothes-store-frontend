<template >
  <div class="-margin-t">
    <div class="w-full flex">
      <div class="w-1/2 h-bg-secondary flex flex-col space-y-3">
        <div class="">
          <router-link to="/product/1" class="w-full block h-full">
            <div class="flex flex-col">
              <div class="">
                <div class="relative h-62 w-full mb-3">
                  <div class="absolute flex flex-col position-ProductFeactured-price p-3">
                    <div class="flex-auto justify-evenly px-4">
                    <div class="bg-white rounded-lg px-4">
                      <div class="text-xl text-gray-900 font-semibold mt-1">
                        20.000 <span class="font-light text-sm">
                           kz
                        </span>
                      </div>
                    </div>
                    </div>
                  </div>
                  <img :src="jacket" alt="Just a flower" class=" w-full object-fill rounded-2xl">
                </div>
              </div>
            </div>
          </router-link>
        </div>
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
                          5.000 <span class="font-light text-sm">
                             kz
                          </span>
                        </div>
                      </div>
                      </div>
                    </div>
                    <img :src="tshirt" alt="Just a flower" class=" w-full object-fill rounded-2xl">
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
                          1.000 <span class="font-light text-sm">
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
      <div class="w-1/2 h-bg-primary">
        <div>
          <router-link to="/" class="w-full block h-full">
            <div class="flex flex-col">
              <div class="">
                <div class="relative h-62 w-full mb-3">
                  <div class="absolute flex flex-col position-ProductFeactured-price p-3">
                    <div class="flex-auto justify-evenly px-4">
                    <div class="bg-white rounded-lg px-4">
                      <div class="text-xl text-gray-900 font-semibold mt-1">
                        25.000 <span class="font-light text-sm">
                           kz
                        </span>
                      </div>
                    </div>
                    </div>
                  </div>
                  <img :src="mockup" alt="Just a flower" class=" w-full object-fill rounded-2xl">
                </div>
              </div>
            </div>
          </router-link>
        </div>
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
                    <img :src="tshirt3" alt="Just a flower" class=" w-full object-fill rounded-2xl">
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
                          8000 <span class="font-light text-sm">
                             kz
                          </span>
                        </div>
                      </div>
                      </div>
                    </div>
                    <img :src="gorro" alt="Just a flower" class=" w-full object-fill rounded-2xl">
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import jacket from "@/assets/img/lightweight-jacket-0.png";
import tshirt from "@/assets/img/t-shirt-0.png";
import tshirt3 from "@/assets/img/t-shirt-3.png";
import mockup from "@/assets/img/mockup.png";
import mask from "@/assets/img/mask-1.png";
import gorro from "@/assets/img/gorro.png";

export default {
  name: "ProductFeactured",
  components: {

  },
  data() {
    return {
      jacket,
      tshirt,
      mockup,
      mask,
      gorro,
      tshirt3
    }
  },
  mounted() {}
};
</script>

<style>

</style>
