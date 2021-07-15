<template>
  <div>
    <main class="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
      <div class="flex items-start justify-between">
        <Sidebar />

        <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <AdminNavbar />
          <div class="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div class="w-full">
              <HeaderStatus
                :totalProduct="totalProduct"
                :totalUser="totalUser"
                :totalOrders="totalOrders"
              />
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import AdminNavbar from "@/components/Admin/AdminNavbar.vue";
import Sidebar from "@/components/Admin/Sidebar.vue";
import HeaderStatus from "@/components/Admin/HeaderStatus.vue";

import Vue from "vue";

import ProductsService from "@/services/ProductsService.js";
import UserService from "@/services/UserService.js";
import OrderService from "@/services/OrderService.js";

export default {
  name: "admin-layout",
  components: {
    AdminNavbar,
    Sidebar,
    HeaderStatus
  },
  data() {
    return {
      totalUser: 0,
      totalProduct: 0,
      totalOrders: 0,
      messageError: null
    };
  },
  async mounted() {
    try {
      this.totalProduct = (await ProductsService.getProducts()).data.count;

      this.totalUser = (await UserService.getUsers()).data.count;

      this.totalOrders = (await OrderService.getOrders()).data.count;
    } catch (error) {
      this.messageError = error;
      Vue.$toast.error(this.messageError);
    }
  }
};
</script>
