<template>
  <div>
    <div>
      <ProductFeactured/>
      <ProductList/>
      <Marquee/>
    </div>
  </div>
</template>

<script>

import Marquee from "@/components/Home/Marquee.vue";
import ProductFeactured from "@/components/Home/ProductFeactured.vue";
import ProductList from "@/components/Home/ProductList.vue";

export default {
  name: "Home",
  components: {
    Marquee,
    ProductFeactured,
    ProductList
  },
  mounted() {}
};
</script>

<style>

</style>
