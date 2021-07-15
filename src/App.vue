<template>
  <div id="app">
    <Header v-if="isVisible" class="mb-8" />
    <div v-if="isVisible" class="margin-top"></div>
    <router-view :key="$route.fullPath" />
    <Footer v-if="isVisible" class="mb-8" />
  </div>
</template>

<script>
import Header from "@/components/Common/Header.vue";
import Footer from "@/components/Common/Footer.vue";

export default {
  components: {
    Header,
    Footer
  },
  computed: {
    isVisible() {
      if (
        this.$route.name === "login" ||
        this.$route.name === "register" ||
        this.$route.name === "admin-dashboard" ||
        this.$route.name === "admin-order" ||
        this.$route.name === "admin-orders" ||
        this.$route.name === "admin-add-product" ||
        this.$route.name === "admin-product" ||
        this.$route.name === "admin-products" ||
        this.$route.name === "admin-add-product" ||
        this.$route.name === "admin-categories" ||
        this.$route.name === "admin-update-categoryr" ||
        this.$route.name === "admin-add-user" ||
        this.$route.name === "admin-update-user" ||
        this.$route.name === "admin-users"
      ) {
        return false;
      }
      return true;
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
.margin-top {
  padding-top: 100px;
}
</style>
