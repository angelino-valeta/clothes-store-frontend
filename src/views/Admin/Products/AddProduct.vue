<template>
  <div class="flex flex-col flex-wrap sm:flex-row">
    <div class="w-full mb-4 sm:ml-4 xl:mr-4 py-4">
      <div class="flex justify-between">
        <h2 class="text-lg font-bold">Adicionar Produto</h2>
        <router-link
          to="/admin/products"
          class="px-4 py-2 text-base font-semibold text-white h-bg-secondary rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
          type="submit"
        >Ver todos produtos</router-link>
      </div>
    </div>
    <div class="w-full m-auto md:w-1/2">
      <div class="mb-4 sm:ml-4 xl:mr-4">
        <div class="shadow-lg rounded-2xl p-12 bg-white dark:bg-gray-700 w-full">
          <div>
            <div>
              <form @submit="createProduct()">
                <input
                  type="text"
                  id="name"
                  v-model="name"
                  required
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Nome do produto"
                />
                <div class="relative mt-4">
                  <input
                    type="number"
                    id="price"
                    v-model="price"
                    required
                    class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Preço do produto"
                  />
                </div>
                <div class="relative mt-4">
                  <div class="flex space-x-4">
                    <input
                      type="number"
                      id="stock"
                      v-model="stock"
                      required
                      class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Stock"
                    />
                    <div class="flex items-center space-x-4">
                      <label>Categorias</label>
                      <select
                        class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        v-model="categoryId"
                        v-if="categories.success"
                      >
                        <option
                          v-for="category in categories.data"
                          :key="category.id"
                          :value="category.id"
                        >{{ category.name }}</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="relative mt-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center justify-center mt-6">
                      <div>
                        <label class="flex items-center space-x-3 mb-3">
                          <input
                            v-model="isFeatured"
                            type="checkbox"
                            class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
                          />
                          <span class="text-gray-700 dark:text-white font-normal">Destaque Top</span>
                        </label>
                        <label class="flex items-center space-x-3 mb-3">
                          <input
                            v-model="featuredIn"
                            type="checkbox"
                            class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-pink-500 checked:border-transparent focus:outline-none"
                          />
                          <span class="text-gray-700 dark:text-white font-normal">Destaque</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <div>
                        <label
                          class="flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide cursor-pointer hover:bg-blue hover:text-purple-500"
                        >
                          <svg
                            class="w-8 h-8"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
                            />
                          </svg>
                          <span class="mt-2 text-base leading-normal">Seleciona uma imagem</span>
                          <input type="file" @change="onFileSelected" class="hidden" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="py-4">
                  <label
                    class="text-base leading-7 text-blueGray-500"
                    for="description"
                  >Descrição do produto</label>
                  <vue-editor required id="input-description" v-model="description"></vue-editor>
                </div>
                <button
                  class="px-4 py-2 text-base font-semibold text-white h-bg-secondary rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                  type="submit"
                >Adicionar</button>
              </form>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsService from "@/services/ProductsService.js";
import CategoryService from "@/services/CategoryService.js";
import Vue from "vue";
import { VueEditor } from "vue2-editor";

export default {
  name: "Product",
  components: {
    VueEditor
  },
  data() {
    return {
      categories: [],
      categoryId: null,
      name: "",
      description: "",
      price: null,
      stock: null,
      isFeatured: false,
      featuredIn: false,
      fileName: "",
      selectedFile: null,
      messageError: null
    };
  },
  async mounted() {
    try {
      this.categories = (await CategoryService.getCategories()).data;
      console.log(this.categories);
    } catch (error) {
      this.messageError = error;
      Vue.$toast.error(this.messageError);
    }
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.fileName = event.target.files[0].name;
    },
    async createProduct() {
      this.description = this.description.replace(/<p><br><\/p>/g, "");

      let data = new FormData();
      //let file = this.$refs.file;
      data.append("name", this.name);
      data.append("description", this.description);
      data.append("categoryId", this.categoryId);
      data.append("price", this.price);
      data.append("stock", this.stock);
      data.append("isFeatured", this.isFeatured);
      data.append("featuredIn", this.featuredIn);
      data.append("ratings", this.ratings);
      data.append("numOfReviews", this.numOfReviews);
      data.append("image", this.selectedFile, this.selectedFile.name);

      try {
        await ProductsService.newProduct(data);
        // Vue.$toast.error(response.data.data.name + " Adicionado.");
        this.$router.push({ path: "/admin/products" });
      } catch (error) {
        this.messageError = error;
        Vue.$toast.error(this.messageError);
      }
    }
  }
};
</script>

<style>
</style>
