<template>
  <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto pb-8">
    <h2 class="text-lg font-semibold">Seu carrinho</h2>
    <div class="mt-8">
      <div v-if="false" class="mt-8 flex max-w-sm text-lg items-center space-x-4 shadow-lg px-6 py-4 mx-auto ">
        <p>Carrinho fazio!! </p>
        <router-link class="hover:underline h-primary" to="/">
          Ver produtos
        </router-link>
      </div>
      <div class="flex items-start space-x-12">
        <div class="flex-1">
          <div class="border">
            <div class="flex items-center space-x-12 px-2">
              <div class="relative " style="max-width:20%" >
                <div class="absolute flex flex-col top-0 right-0 p-3">
                  <button class="transition ease-in duration-300 h-primary rounded-full w-8 h-8 text-center p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <img
                  :src="jacket" alt="photo not found" class=" w-full object-fill rounded-2xl">
              </div>
              <div>
                <router-link to="/" class="text-xl hover:underline">Lightweight Jacket
                </router-link>
              </div>
                <div class=" ">
                  <div class="flex space-x-12 items-center w-full">
                    <select
                      class="block flex-1 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                        <option value="#">Quantidade</option>
                       
                    </select>
                    <p class="font-bold text-2xl">
                      15000 <span class="font-light text-sm">
                         kz
                      </span>
                    </p>
                  </div>
                </div>
                <div class="">
                  <button class="bg-red-500 py-1 px-2 text-white rounded-lg shadow-lg font-extralight">Remover</button>
                </div>
            </div>
          </div>
        </div>
        <div class="shadow-md px-6 py-4">
          <div>
            <h3 class="font-semibold">Subtotal (1 item): 15000 <span class="font-light text-sm">kz</span> </h3>
            <router-link to="/checkout">
            <button class="h-bg-primary py-2 px-4 text-white font-semibold rounded-lg shadow-lg mt-4 w-full">Fazer Checkout</button>
              
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jacket from "@/assets/img/lightweight-jacket-0.png";

export default {
  name: "Cart",
  components: {
   
  },
  data() {
    return {
      jacket
    };
  }
};
</script>

<style>
</style>

