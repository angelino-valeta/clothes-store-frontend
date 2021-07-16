<template>
  <div class="flex flex-col flex-wrap sm:flex-row">
    <div class="w-full mb-4 sm:ml-4 xl:mr-4 py-4">
      <div class="flex justify-between">
        <h2 class="text-lg font-bold">Clientes</h2>
        <router-link
          to="/admin/add-user"
          class="px-4 py-2 text-base font-semibold text-white h-bg-secondary rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
          type="submit"
        >Adicionar</router-link>
      </div>
    </div>
    <div class="w-full">
      <div class="mb-4 sm:ml-4 xl:mr-4">
        <div class="shadow-lg rounded-2xl p-2 bg-white dark:bg-gray-700 w-full">
          <div class="w-full bg-white p-2">
            <div
              class="max-w-screen-lg xl:max-w-screen-xl mx-auto flex items-center justify-center container"
            >
              <div v-if="users.success" class="p-5 mx-auto max-w-screen-xl">
                <div
                  class="grid grid-flow-row-dense grid-cols-1 justify-between sm:grid-cols-2 md:grid-cols-4 gap-12"
                >
                  <div
                    v-for="user in users.data"
                    :key="user.id"
                    class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800"
                  >
                    <div class>
                      <div class="flex flex-col justify-between">
                        <div class>
                          <dl>
                            <div class="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
                              <dt class="text-sm font-medium text-gray-500">Nome</dt>
                              <dd
                                class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                              >{{ user.name }}</dd>
                            </div>
                            <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
                              <dt class="text-sm font-medium text-gray-500">Email</dt>
                              <dd
                                class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                              >{{ user.email }}</dd>
                            </div>
                            <div class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
                              <dt class="text-sm font-medium text-gray-500">Telefone</dt>
                              <dd
                                class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                              >{{ user.phone }}</dd>
                            </div>
                            <div class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
                              <dt class="text-sm font-medium text-gray-500">Role</dt>
                              <dd
                                class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                              >{{ user.role }}</dd>
                            </div>
                          </dl>
                        </div>

                        <div class="flex items-center justify-between gap-4 w-full mt-8">
                          <button
                            type="button"
                            class="py-2 px-4 h-bg-secondary focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                          >Update</button>
                          <button
                            @click="deleteUser(user)"
                            type="button"
                            class="py-2 px-4 focus:ring-indigo-500 focus:ring-offset-indigo-200 bg-red-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                          >Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "@/services/UserService.js";
export default {
  name: "Users",
  components: {},
  data() {
    return {
      users: []
    };
  },
  async mounted() {
    this.users = (await UserService.getUsers()).data;
    console.log(this.users);
  },
  methods: {
    async deleteUser(user) {
      await UserService.deleteUser(user.id);
      window.location.reload();
    }
  }
};
</script>

<style>
</style>

