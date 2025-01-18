<template>
  <div 
    class="bg-black bg-opacity-60 w-full z-10 h-full flex justify-center"
  >
    <div class="bg-white py-10 rounded-md w-[90%] md:w-[70%] lg:w-[540px] mx-auto z-40 h-max mt-10 md:mt-[100px]">
      <div class="w-[90%] mx-auto">
        <div class="h-[64px] w-[64px] bg-primary flex items-center justify-center rounded-[50%] mb-6">
          <checkmark-svg/>
        </div>
        <h5 class="h5 uppercase text-wrap-balance mb-4">thank you for your order</h5>
        <p class="p opacity-50 mb-4">You will receive an email confirmation shortly.</p>
        <div class="md:flex md:w-full">
          <div class="bg-grey py-4 rounded-tl-xl rounded-tr-xl md:rounded-none md:rounded-tl-xl md:rounded-bl-xl md:w-full">
            <div class="w-[90%] mx-auto">
              <cart-item
                v-bind="cartItem"
              >
                <template #cart-item-right-section>
                  <p class="p opacity-50 font-bold">x{{ cartItem.quantity }}</p>
                </template>
              </cart-item>
              <div class="mt-4" v-if="cartStore.cart.length > 1">
                <div class="border border-active-grey w-full opacity-[8%]"></div>
                <p class="p text-center font-bold opacity-50 mt-4">
                  and {{ cartStore.cart.length - 1 }} other item(s)
                </p>
              </div>
            </div>
          </div>
          <div class="bg-black py-4 rounded-bl-xl rounded-br-xl md:rounded-none md:rounded-tr-xl md:rounded-br-xl md:w-full md:flex md:items-center">
            <div class="w-[90%] mx-auto text-white">
              <p class="p text-white opacity-50 uppercase mb-2">grand total</p>
              <p class="h6 text-white">{{ formatCurrency(cartStore.getGrandTotal) }}</p>
            </div>
          </div>
        </div>
        <button type="button" class="primary-btn uppercase w-full mt-4" @click="backToHome">back to home</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart.ts";
import CheckmarkSvg from "@/components/icons/Checkmark.vue"
import CartItem from "@/components/atoms/CartItem/CartItem.vue"
import { formatCurrency } from "@/common/utils.ts"
import { useRouter } from "vue-router";

const router = useRouter();

const cartStore = useCartStore();
const cartItem = cartStore.cart[0];

const backToHome = () => {
  cartStore.clearCart();
  router.push("/");
}

</script>

<style scoped>
.text-wrap-balance {
  text-wrap: balance;
}
</style>