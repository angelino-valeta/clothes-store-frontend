<template>
  <div class="w-full bg-white p-12">
    <div
      class="max-w-screen-lg xl:max-w-screen-xl mx-auto flex items-center justify-center container"
    >
      <div>
        <h1 class="font-bold text-2xl mb-6">Produtos recomendados</h1>
        <div v-if="recomentation.success" class="p-5 mx-auto max-w-screen-xl">
          <div
            class="grid grid-flow-row-dense grid-cols-1 justify-between sm:grid-cols-2 md:grid-cols-4 gap-12"
          >
            <div
              v-for="product in recomentation.data"
              :key="product.id"
              class="overflow-hidden shadow-xl hover:shadow-md rounded-lg cursor-pointer m-auto w-full"
            >
              <div class="w-full block h-full">
                <div class="flex flex-col">
                  <div class>
                    <div class="relative h-62 w-full mb-3">
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
                        @click="$router.push({ path: `/product/${product.id}` })"
                        :src="`http://localhost:4000/${product.image}`"
                        :alt="product.name + ' photo'"
                        class="w-full object-fill rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsService from "@/services/ProductsService.js";
import Vue from "vue";

export default {
  name: "ProductList",
  props: {
    categoryId: {
      type: Number,
      default: 1
    }
  },
  components: {},
  data() {
    return {
      recomentation: [],
      limit: 4,
      userLoggedIn: false
    };
  },
  async mounted() {
    try {
      this.recomentation = (
        await ProductsService.getRecommendation({
          categoryId: this.categoryId,
          limit: this.limit
        })
      ).data;
    } catch (error) {
      console.log(error.esponse.data.error);
    }
    this.userLoggedIn = this.$store.state.CurrentUser.userLoggedIn;
  },
  methods: {
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
</style>

