<template>
  <div class="flex flex-col flex-wrap sm:flex-row">
    <div class="w-full mb-4 sm:ml-4 xl:mr-4 py-4">
      <div>
        <h2 class="text-lg font-bold">Categorias de Produtos</h2>
      </div>
    </div>
    <div class="w-full sm:w-1/2 xl:w-1/2">
      <div class="mb-4 sm:ml-4 xl:mr-4">
        <div class="shadow-lg rounded-2xl p-2 bg-white dark:bg-gray-700 w-full">
          <div class>
            <div>
              <table class="w-full">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                    >Id</th>
                    <th
                      scope="col"
                      class="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                    >Nome da Categoria</th>
                    <th
                      scope="col"
                      class="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                    >Criado em</th>
                  </tr>
                </thead>
                <tbody v-if="categories.success">
                  <tr v-for="category in categories.data" :key="category.id">
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">{{ category.id }}</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">{{ category.name }}</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">{{ category.createdAt }}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full sm:w-1/2 xl:w-1/3">
      <div class="mb-4 sm:ml-4 xl:mr-4">
        <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
          <h1 class="mb-4">Criar categoria</h1>
          <div>
            <form
              @submit="createCategory"
              class="flex flex-col md:flex-row space-x-4 space-y-3 md:space-y-0 justify-center items-center"
            >
              <div class>
                <input
                  type="text"
                  id="add-category"
                  v-model="categoryName"
                  required
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Nome da categoria"
                />
              </div>
              <button
                class="px-4 py-2 text-base font-semibold text-white h-bg-secondary rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >Adicionar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryService from "@/services/CategoryService.js";
import Vue from "vue";

export default {
  name: "Categories",
  components: {},
  data() {
    return {
      categories: [],
      categoryName: "",
      messageError: null
    };
  },
  async mounted() {
    try {
      this.categories = (await CategoryService.getCategories()).data;
    } catch (error) {
      this.messageError = error;
      Vue.$toast.error(this.messageError);
    }
  },
  methods: {
    async createCategory() {
      try {
        const newCategory = (
          await CategoryService.newCategory({ name: this.categoryName })
        ).data;
        this.categoryName = "";
        await this.$store.dispatch("Category/setCategories", newCategory.data);
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
