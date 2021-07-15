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
    <div class="w-full md:w-1/2">
      <div class="mb-4 sm:ml-4 xl:mr-4">
        <div class="shadow-lg rounded-2xl p-12 bg-white dark:bg-gray-700 w-full">
          <div>
            <div>
              <form>
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
                    <select>
                      <option
                        v-for="category in categories.data"
                        :key="category.id"
                        :value="category.id"
                      >{{ category.name }}</option>
                    </select>
                  </div>
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
                    <div>
                      <div>
                        <label class="border p-4">
                          <input type="file" />
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
              </form>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full sm:w-1/2 xl:w-1/3">
      <div class="mb-4 sm:ml-4 xl:mr-4">
        <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
          <h1 class="mb-4">Categoria</h1>
          <div>
            <form></form>
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
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.fileName = event.target.files[0].name;
    },
    async save() {
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
        const response = (await ProductsService.newProduct(data)).data;
        Vue.$toast.error(response.data.data.name + " Adicionado.");
        this.$router.push({ path: "/admin-products" });
      } catch (error) {
        this.messageError = error.response.data.message;
        Vue.$toast.error(this.messageError);
      }
    },
    async mounted() {
      try {
        this.categories = (await CategoryService.getCategories()).data;
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
