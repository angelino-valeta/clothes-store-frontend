<template>
  <div class="w-full bg-white p-12">
    <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto flex items-center justify-center container">
      <div class="p-5 mx-auto max-w-screen-xl">
        <div class="grid grid-flow-row-dense grid-cols-1 justify-between sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div class="overflow-hidden shadow-xl hover:shadow-md rounded-lg cursor-pointer m-auto">
            <router-link to="/" class="w-full block h-full">
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
                    <img :src="tshirt6" alt="Just a flower" class=" w-full object-fill rounded-2xl">
                  </div>
                  <div class="flex-auto justify-evenly px-4">
                    <div class="flex flex-wrap ">
                      <div class="flex items-center w-full justify-between min-w-0 ">
                        <h2 class="text-lg mr-auto cursor-pointer text-gray-800 font-semibold truncate ">T-Shirt</h2>
                        <div class="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                          EM STOCK</div>
                      </div>
                    </div>
                    <div class="text-xl text-gray-500 font-semibold mt-1">
                      4.000 <span class="font-light text-sm">
                         kz
                      </span>
                    </div>
                    <div class="flex space-x-2 text-sm font-medium justify-start mb-6 py-2">
                      <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 h-bg-primary px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-lg ">
                        <span>Add Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="overflow-hidden shadow-xl hover:shadow-md rounded-lg cursor-pointer m-auto">
            <router-link to="/" class="w-full block h-full">
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
                    <img :src="tshirt" alt="Just a flower" class=" w-full object-fill rounded-2xl">
                  </div>
                  <div class="flex-auto justify-evenly px-4">
                    <div class="flex flex-wrap ">
                      <div class="flex items-center w-full justify-between min-w-0 ">
                        <h2 class="text-lg mr-auto cursor-pointer text-gray-800 font-semibold truncate ">T-Shirt</h2>
                        <div class="flex items-center esgotado-bg text-white text-xs px-2 py-1 ml-3 rounded-lg">
                          ESGOTADO</div>
                      </div>
                    </div>
                    <div class="text-xl text-gray-500 font-semibold mt-1">
                      4.000 <span class="font-light text-sm">
                         kz
                      </span>
                    </div>
                    <div class="flex space-x-2 text-sm font-medium justify-start mb-6 py-2">
                      <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 h-bg-primary px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-lg ">
                        <span>Add Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="overflow-hidden shadow-xl hover:shadow-md rounded-lg cursor-pointer m-auto">
            <router-link to="/" class="w-full block h-full">
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
                    <img :src="tshirt2" alt="Just a flower" class=" w-full object-fill rounded-2xl">
                  </div>
                  <div class="flex-auto justify-evenly px-4">
                    <div class="flex flex-wrap ">
                      <div class="flex items-center w-full justify-between min-w-0 ">
                        <h2 class="text-lg mr-auto cursor-pointer text-gray-800 font-semibold truncate ">T-Shirt</h2>
                        <div class="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                          EM STOCK</div>
                      </div>
                    </div>
                    <div class="text-xl text-gray-500 font-semibold mt-1">
                      4.000 <span class="font-light text-sm">
                         kz
                      </span>
                    </div>
                    <div class="flex space-x-2 text-sm font-medium justify-start mb-6 py-2">
                      <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 h-bg-primary px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-lg ">
                        <span>Add Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="overflow-hidden shadow-xl hover:shadow-md rounded-lg cursor-pointer m-auto">
            <router-link to="/" class="w-full block h-full">
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
                    <img :src="jacket" alt="Just a flower" class=" w-full object-fill rounded-2xl">
                  </div>
                  <div class="flex-auto justify-evenly px-4">
                    <div class="flex flex-wrap ">
                      <div class="flex items-center w-full justify-between min-w-0 ">
                        <h2 class="text-lg mr-auto cursor-pointer text-gray-800 font-semibold truncate ">T-Shirt</h2>
                        <div class="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                          EM STOCK</div>
                      </div>
                    </div>
                    <div class="text-xl text-gray-500 font-semibold mt-1">
                      4.000 <span class="font-light text-sm">
                         kz
                      </span>
                    </div>
                    <div class="flex space-x-2 text-sm font-medium justify-start mb-6 py-2">
                      <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 h-bg-primary px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-lg ">
                        <span>Add Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="overflow-hidden shadow-xl hover:shadow-md rounded-lg cursor-pointer m-auto">
            <router-link to="/" class="w-full block h-full">
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
                    <img :src="jacket2" alt="Just a flower" class=" w-full object-fill rounded-2xl">
                  </div>
                  <div class="flex-auto justify-evenly px-4">
                    <div class="flex flex-wrap ">
                      <div class="flex items-center w-full justify-between min-w-0 ">
                        <h2 class="text-lg mr-auto cursor-pointer text-gray-800 font-semibold truncate ">T-Shirt</h2>
                        <div class="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                          EM STOCK</div>
                      </div>
                    </div>
                    <div class="text-xl text-gray-500 font-semibold mt-1">
                      4.000 <span class="font-light text-sm">
                         kz
                      </span>
                    </div>
                    <div class="flex space-x-2 text-sm font-medium justify-start mb-6 py-2">
                      <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 h-bg-primary px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-lg ">
                        <span>Add Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="overflow-hidden shadow-xl hover:shadow-md rounded-lg cursor-pointer m-auto">
            <router-link to="/" class="w-full block h-full">
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
                    <img :src="mockup" alt="Just a flower" class=" w-full object-fill rounded-2xl">
                  </div>
                  <div class="flex-auto justify-evenly px-4">
                    <div class="flex flex-wrap ">
                      <div class="flex items-center w-full justify-between min-w-0 ">
                        <h2 class="text-lg mr-auto cursor-pointer text-gray-800 font-semibold truncate ">T-Shirt</h2>
                        <div class="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                          EM STOCK</div>
                      </div>
                    </div>
                    <div class="text-xl text-gray-500 font-semibold mt-1">
                      4.000 <span class="font-light text-sm">
                         kz
                      </span>
                    </div>
                    <div class="flex space-x-2 text-sm font-medium justify-start mb-6 py-2">
                      <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 h-bg-primary px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-lg ">
                        <span>Add Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="overflow-hidden shadow-xl hover:shadow-md rounded-lg cursor-pointer m-auto">
            <router-link to="/" class="w-full block h-full">
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
                    <img :src="mask" alt="Just a flower" class=" w-full object-fill rounded-2xl">
                  </div>
                  <div class="flex-auto justify-evenly px-4">
                    <div class="flex flex-wrap ">
                      <div class="flex items-center w-full justify-between min-w-0 ">
                        <h2 class="text-lg mr-auto cursor-pointer text-gray-800 font-semibold truncate ">T-Shirt</h2>
                        <div class="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                          EM STOCK</div>
                      </div>
                    </div>
                    <div class="text-xl text-gray-500 font-semibold mt-1">
                      4.000 <span class="font-light text-sm">
                         kz
                      </span>
                    </div>
                    <div class="flex space-x-2 text-sm font-medium justify-start mb-6 py-2">
                      <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 h-bg-primary px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-lg ">
                        <span>Add Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="overflow-hidden shadow-xl hover:shadow-md rounded-lg cursor-pointer m-auto">
          <router-link to="/" class="w-full block h-full">
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
                  <img :src="tshirt" alt="Just a flower" class=" w-full object-fill rounded-2xl">
                </div>
                <div class="flex-auto justify-evenly px-4">
                  <div class="flex flex-wrap ">
                    <div class="flex items-center w-full justify-between min-w-0 ">
                      <h2 class="text-lg mr-auto cursor-pointer text-gray-800 font-semibold truncate ">T-Shirt</h2>
                      <div class="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                        EM STOCK</div>
                    </div>
                  </div>
                  <div class="text-xl text-gray-500 font-semibold mt-1">
                    4.000 <span class="font-light text-sm">
                       kz
                    </span>
                  </div>
                  <div class="flex space-x-2 text-sm font-medium justify-start mb-6 py-2">
                    <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 h-bg-primary px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-lg ">
                      <span>Add Cart</span>
                    </button>
                  </div>
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

import jacket from "@/assets/img/image-8.png";
import jacket2 from "@/assets/img/image-9.png";
import tshirt from "@/assets/img/mockup-2b1dac14__24899.1603748166.png";
import tshirt2 from "@/assets/img/mockup-31b14bb5__19161.1603748166.png";
import tshirt3 from "@/assets/img/mockup-5dd35f7a__97377.1601231765.png";
import tshirt4 from "@/assets/img/mockup-a0dc2330__62146.1601012861.png";
import tshirt5 from "@/assets/img/mockup-a69ed7d5__19588.1601231767.png";
import tshirt6 from "@/assets/img/mockup-c83ee0d3__79960.1601012457.png";
import tshirt7 from "@/assets/img/mockup-cf2e0793__12098.1601231766.png";
import dropShirt from "@/assets/img/drop-shirt.png";
import mockup from "@/assets/img/mockup.png";
import mask from "@/assets/img/mask-1.png";
import imag2 from "@/assets/img/image-10.png";

export default {
  name: "ProductList",
  components: {

  },
  data() {
    return {
      jacket,
      jacket2,
      tshirt,
      tshirt2,
      tshirt3,
      tshirt4,
      tshirt5,
      tshirt6,
      tshirt7,
      mockup,
      mask,
      imag2,
      dropShirt
    }
  },
  mounted() {}
};
</script>

<style>

</style>
