<template>
  <div class>
    <div>
      <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto pb-8">
        <div v-if="product.success" class="flex items-start flex-wrap">
          <div class="w-1/4">
            <div class="px-4 py-4">
              <h1 class="pt-4 font-extrabold text-4xl">{{ product.data.name }}</h1>
              <div class="mt-2">
                <div class="py-2 text-lg font-semibold">Descrição:</div>
                <div
                  class="text-gray-500 font-light text-lg text-left leading-normal tracking-tight"
                >
                  <div v-html="product.data.description"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-2/4 px-6">
            <div class="relative w-full mb-3">
              <div class="absolute flex flex-col top-0 right-0 p-3">
                <button
                  @click="addWishlist()"
                  class="transition ease-in duration-300 h-primary rounded-full w-8 h-8 text-center p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
              <img
                :src="`http://localhost:4000/${product.data.image}`"
                :alt="product.data.name + ' photo'"
                class="w-full object-fill rounded-2xl"
              />
            </div>
          </div>
          <div class="w-1/4 shadow-lg">
            <div class="px-4 py-4">
              <div class="grid gap-10">
                <div>
                  <ul class="flex flex-row justify-center items-center">
                    <li class="mr-4 last:mr-0">
                      <span
                        class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300"
                      >
                        <a href="#blue" class="block w-6 h-6 bg-black rounded-full"></a>
                      </span>
                    </li>
                    <li class="mr-4 last:mr-0">
                      <span
                        class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300"
                      >
                        <a href="#yellow" class="block w-6 h-6 bg-white shadow-md rounded-full"></a>
                      </span>
                    </li>
                    <li class="mr-4 last:mr-0">
                      <span
                        class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300"
                      >
                        <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full"></a>
                      </span>
                    </li>
                    <li class="mr-4 last:mr-0">
                      <span
                        class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300"
                      >
                        <a href="#green" class="block w-6 h-6 bg-green-500 rounded-full"></a>
                      </span>
                    </li>
                  </ul>
                </div>

                <div class="flex flex-wrap">
                  <div class="flex items-center w-full justify-between min-w-0">
                    <select
                      class="block flex-1 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      name="animals"
                    >
                      <option value="#">Quantidade</option>
                      <option v-for="i in product.data.stock" :key="i" :value="1">{{ i }}</option>
                    </select>
                    <div v-html="inStock(product.data.stock)"></div>
                  </div>
                </div>

                <div
                  class="flex flex-col md:flex-row justify-between items-center text-gray-900 mb-4"
                >
                  <p class="font-bold text-2xl flex-1">
                    {{ product.data.price }}
                    <span class="font-light text-sm">kz</span>
                  </p>
                  <div v-if="isDisabled(product.data.stock)">
                    <button
                      @click="addProductToCart(product)"
                      class="flex-wrap px-4 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
                    >Add to cart</button>
                  </div>
                  <div v-else>
                    <div class="px-5 py-4 h-text-red text-lg">Indisponível</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Recomendation :categoryId="product.data.categoryId" />
  </div>
</template>

<script>
import ProductsService from "@/services/ProductsService.js";

import { mapActions } from "vuex";

import Recomendation from "@/components/Product/Recomendation.vue";

import Vue from "vue";

export default {
  name: "ProductDetails",
  components: {
    Recomendation
  },
  data() {
    return {
      user: {},
      product: {},
      categoryId: Number,
      userLoggedIn: false
    };
  },
  async mounted() {
    try {
      const productId = parseInt(this.$route.params.productId);
      this.product = (await ProductsService.getProduct(productId)).data;

      this.userLoggedIn = this.$store.state.CurrentUser.userLoggedIn;
    } catch (error) {
      console.log(error.esponse.data.error);
    }
  },
  computed: {},
  methods: {
    ...mapActions(["addProductToCart"]),
    inStock: function(stock) {
      if (!stock) {
        return `<div class="items-center bg-red-500 text-white text-xs px-2 py-1 ml-3 rounded-lg">
          ESGOTADO
        </div>`;
      }
      return `<div class="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
          EM STOCK
        </div>`;
    },
    isDisabled(stock) {
      if (!stock) {
        return false;
      }
      return true;
    },
    addWishlist: function() {
      if (this.userLoggedIn) {
        return Vue.$toast.warning("Funcionalidade indisponível");
      }
      Vue.$toast.error("Deves fazer o login primeiro");
    }
  }
};
</script>

<style>
.h-text-red {
  color: brown;
}
</style>

