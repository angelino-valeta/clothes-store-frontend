<template>
  <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto pb-8">
    <div class="flex justify-between">
      <div class="max-w-md m-auto py-12">
        <div class="px-5 py-4 shadow-2xl bg-red-500 text-white rounded-lg flex justify-center">
          <span class="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
              />
            </svg>
          </span>
          <p class="text-center">Desculpe! essa funcionalidade ainda não está terminada.</p>
        </div>
      </div>
      <div class="w-1/4 shadow-md">
        <div class="px-6 py-4">
          <div class="border-b-2 py-4">
            <h2 class="text-gray-500 text-lg font-bold">Resumo da encomenda</h2>
          </div>
          <div>
            <span class="text-xs">1 item</span>
            <div class="flex py-2 items-center border-b-2 space-x-12">
              <div class="flex w-full">
                <div>
                  <img :src="jacket" alt="photo not found" class="w-10" />
                </div>
              </div>
              <div>
                <h3>Lightweight Jacket</h3>
              </div>
              <div class>
                <p>
                  15000
                  <span class="font-light text-sm">kz</span>
                </p>
              </div>
            </div>
          </div>
          <div class="border-b-2">
            <div class="flex py-2 justify-between">
              <h4>Subtotal</h4>
              <p>
                15000
                <span class="font-light text-sm">kz</span>
              </p>
            </div>
            <div class="flex py-2 justify-between">
              <h4>Entrega</h4>
              <p>Grátis</p>
            </div>
            <div class="flex py-2 justify-between">
              <h4>Taxi</h4>
              <p>
                0.00
                <span class="font-light text-sm">kz</span>
              </p>
            </div>
          </div>
          <div class="border-b-2 py-4 flex justify-between items-center">
            <h4>Total</h4>
            <p class="text-4xl font-bold">
              15000
              <span class="font-light text-sm">kz</span>
            </p>
          </div>
          <div>
            <button
              class="h-bg-primary py-2 px-4 text-white font-semibold rounded-lg shadow-lg mt-4 w-full"
            >Fazer o pagamento</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jacket from "@/assets/img/lightweight-jacket-0.png";

export default {
  name: "Checkout",
  components: {},
  data() {
    return {
      jacket
    };
  }
};
</script>

<style>
</style>
