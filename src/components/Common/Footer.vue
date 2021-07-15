<template>
  <footer class="bg-footer pb-28 pt-24 xl:pb-36">
    <div
      class="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-10 md:px-20 text-gray-50 dark:text-white"
    >
      <ul
        class="text-lg font-light pb-8 flex flex-wrap justify-center tracking-wide"
      >
        <li class="w-full sm:w-1/2 md:w-1/4 pr-2 sm:pr-6">
          <div class="text-left">
            <router-link class="brand" to="/">
              <img :src="logo" alt="Logo Helena" />
            </router-link>
          </div>
        </li>
        <li class="mt-3 w-full sm:w-1/2 md:w-1/4 pr-2 sm:pr-3 md:pr-4">
          <div class="text-left">
            <h2
              class="mb-6 text-white dark:text-gray-200 text-xl uppercase font-bold tracking-wider"
            >
              Empresa
            </h2>
            <ul>
              <li class="mb-4">
                <router-link to="/">
                  <a
                    class="text-lg
                                   hover:underline hover:text-white transition-colors duration-200"
                    >Sobre</a
                  >
                </router-link>
              </li>
              <li class="mb-4">
                <router-link to="/">
                  <a
                    class="text-lg
                                   hover:underline hover:text-white transition-colors duration-200"
                  >
                    Entrar em contacto
                  </a>
                </router-link>
              </li>
              <li class="mb-4">
                <router-link to="/">
                  <a
                    class="text-lg
                                   hover:underline hover:text-white transition-colors duration-200"
                  >
                    Blog
                  </a>
                </router-link>
              </li>
              <li class="mb-4">
                <router-link to="/">
                  <a
                    class="text-lg
                                 hover:underline hover:text-white transition-colors duration-200"
                  >
                    Termos de uso
                  </a>
                </router-link>
              </li>
              <li class="mb-4">
                <router-link to="/">
                  <a
                    class="text-lg hover:underline hover:text-white transition-colors duration-200"
                  >
                    Política de privacidade
                  </a>
                </router-link>
              </li>
            </ul>
          </div>
        </li>
        <li class="mt-3 w-full sm:w-1/2 md:w-1/4 pr-2 sm:pr-3 md:pr-4">
          <div class="text-left">
            <h2
              class="mb-6 text-white dark:text-gray-200 text-xl uppercase font-bold tracking-wider"
            >
              Links
            </h2>
            <ul>
              <li class="mb-4">
                <router-link to="/">
                  <a
                    class="
                                  hover:underline hover:text-white transition-colors duration-200"
                    >Novidades</a
                  >
                </router-link>
              </li>
              <li class="mb-4">
                <router-link to="/">
                  <a
                    class="
                                  hover:underline hover:text-white transition-colors duration-200"
                  >
                    Categorias
                  </a>
                </router-link>
              </li>
            </ul>
          </div>
        </li>
        <li class="mt-3 w-full sm:w-1/2 md:w-1/4 pr-2 sm:pr-3 md:pr-4">
          <div class="text-left">
            <h2
              class="mb-6 text-white dark:text-gray-200 text-xl uppercase font-bold tracking-wider"
            >
              Siga nos
            </h2>
            <ul>
              <li class="mb-4">
                <router-link to="/">
                  <a
                    class="
                              hover:underline hover:text-white transition-colors duration-200"
                    >Facebook</a
                  >
                </router-link>
              </li>
              <li class="mb-4">
                <router-link to="/">
                  <a
                    class="
                              hover:underline hover:text-white transition-colors duration-200"
                  >
                    Instagram
                  </a>
                </router-link>
              </li>
              <li class="mb-4">
                <router-link to="/">
                  <a
                    class="
                               hover:underline hover:text-white transition-colors duration-200"
                  >
                    Twitter
                  </a>
                </router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div
        class="text-center pt-10 border-t border-gray-200 max-w-xs mx-auto font-light items-center justify-center"
      >
        <p>copyright © 2021 Helena</p>
      </div>
    </div>
  </footer>
</template>

<script>
import logo from "@/assets/img/logo.png";

export default {
  name: "Footer",
  data() {
    return {
      logo,
    };
  },
};
</script>

<style>
.bg-footer {
  background-color: #212831;
}
.brand img {
  width: 80px;
  display: block;
  padding-left: 10px;
}
</style>
