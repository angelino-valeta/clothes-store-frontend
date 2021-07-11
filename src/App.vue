<template>
  <div id="app">
    <Header
      v-if="headerIsVisible"
      class="mb-8" />
    <div
      v-if="headerIsVisible"
      class="margin-top"></div>
    <router-view :key="$route.fullPath" />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Common/Header.vue";
import Footer from "@/components/Common/Footer.vue";

import {mapActions} from 'vuex'

export default {
  components: {
    Header,
    Footer,
  },
computed: {

  ...mapActions('CurrentUser', [
      'setUser',
      'setToken'
    ]),
  headerIsVisible () {
    if (this.$route.name === 'login') {
      return false
    }
      return true
    }
  }
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
