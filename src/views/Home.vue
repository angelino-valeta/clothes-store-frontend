<template>
  <div>
    <Header/>
    <div>
      <ProductFeactured/>
      <ProductList/>
      <Marquee/>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Header from "@/components/Common/Header.vue";
import Footer from "@/components/Common/Footer.vue";
import Marquee from "@/components/Home/Marquee.vue";
import ProductFeactured from "@/components/Home/ProductFeactured.vue";
import ProductList from "@/components/Home/ProductList.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Marquee,
    ProductFeactured,
    ProductList
  },
  mounted() {}
};
</script>

<style>

</style>
