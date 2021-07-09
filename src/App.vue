<template>
  <div id="app">
    <Header class="mb-8" />
    <div class="margin-top"></div>
    <router-view :key="$route.fullPath" />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Common/Header.vue";
import Footer from "@/components/Common/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>


<style >
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .margin-top{
    padding-top: 100px;
  }

</style>
