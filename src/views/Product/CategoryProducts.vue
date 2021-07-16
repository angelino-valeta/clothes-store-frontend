<template>
  <div>
    <div class="w-full xl:max-w-screen-xl mx-auto flex items-center justify-between">
      <h2 class="text-xl font-semibold text-gray-500">Todos Produtos</h2>
    </div>
    <ProductList />
  </div>
</template>

<script>
import ProductList from "@/components/Home/ProductList.vue";

export default {
  name: "Products category",
  components: {
    ProductList
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style>
</style>
