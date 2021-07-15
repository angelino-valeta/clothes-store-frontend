<template>
  <div class="flex flex-col flex-wrap sm:flex-row">
    <div class="w-full mb-4 sm:ml-4 xl:mr-4 py-4">
      <div class="flex justify-between">
        <h2 class="text-lg font-bold">Produtos</h2>
        <router-link
          to="/admin/add-product"
          class="px-4 py-2 text-base font-semibold text-white h-bg-secondary rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
          type="submit"
        >Adicionar</router-link>
      </div>
    </div>
    <div class="w-full">
      <div class="mb-4 sm:ml-4 xl:mr-4">
        <div class="shadow-lg rounded-2xl p-2 bg-white dark:bg-gray-700 w-full">
          <div class="w-full bg-white p-4">
            <div
              class="max-w-screen-lg xl:max-w-screen-xl mx-auto flex items-center justify-center container"
            >
              <div v-if="products.success" class="p-5 mx-auto max-w-screen-xl">
                <div
                  class="grid grid-flow-row-dense grid-cols-1 justify-between sm:grid-cols-2 md:grid-cols-4 gap-12"
                >
                  <div
                    v-for="product in products.data"
                    :key="product.id"
                    class="overflow-hidden shadow-xl hover:shadow-md rounded-lg cursor-pointer m-auto w-full"
                  >
                    <div class="w-full block h-full">
                      <div class="flex flex-col">
                        <div class>
                          <div class="relative h-62 w-full mb-3">
                            <img
                              @click="$router.push({ path: `/product/${product.id}` })"
                              :src="`http://localhost:4000/${product.image}`"
                              :alt="product.name + ' photo'"
                              class="w-full object-fill rounded-2xl"
                            />
                          </div>
                          <div class="flex-auto justify-evenly px-4">
                            <div class="flex flex-wrap">
                              <div class="flex items-center w-full justify-between">
                                <h2
                                  @click="$router.push({ path: `/product/${product.id}` })"
                                  class="text-lg flex-1 mr-auto cursor-pointer text-gray-800 font-semibold truncate overflow-hidden"
                                >{{product.name}}</h2>
                                <button
                                  @click="deleteProduct(product)"
                                  class="items-center bg-red-500 text-white text-xs px-2 py-1 ml-3 rounded-lg"
                                >Delete</button>
                              </div>
                            </div>
                            <div class="text-xl text-gray-500 font-semibold mt-1 mb-4">
                              {{ product.price }}
                              <span class="font-light text-sm">kz</span>
                            </div>
                            <!-- <div class="flex space-x-2 text-sm font-medium justify-start mb-6 py-2">
                      <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 h-bg-primary px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-lg ">
                        <span>Add Cart</span>
                      </button>
                            </div>-->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>
                <div
                  class="px-5 py-4 shadow-2xl bg-red-500 text-white rounded-lg"
                >Falha ao conectar com o servidor</div>
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
export default {
  name: "Products",
  components: {},
  data() {
    return {
      products: []
    };
  },
  async mounted() {
    this.products = (await ProductsService.getProducts()).data;
    this.userLoggedIn = this.$store.state.CurrentUser.userLoggedIn;
  },
  methods: {
    async deleteProduct(product) {
      await ProductsService.deleteProduct(product.id);
      window.location.reload();
    }
  }
};
</script>

<style>
</style>
