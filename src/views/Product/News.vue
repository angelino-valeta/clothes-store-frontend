<template>
  <div>
    <div class="w-full xl:max-w-screen-xl mx-auto flex items-center justify-between">
      <h2 class="text-xl font-semibold text-gray-500">Novidades</h2>
    </div>
    <NewsProducts />
  </div>
</template>

<script>
import NewsProducts from "@/components/Products/NewsProducts.vue";
export default {
  name: "News",
  components: {
    NewsProducts
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
