<template>
    <h6 class="h6 uppercase mb-6">summary</h6>
    <div class="mb-6">
      <div
        v-for="item in cartStore.cart"
        :key="item.product.name"
        class="mb-4"
      >
        <cart-item
          v-bind="item"
        >
          <template #cart-item-right-section>
            <p class="p opacity-50 font-bold">x{{ item.quantity }}</p>
          </template>
        </cart-item>
      </div>
    </div>
    <div class="flex justify-between items-center mb-2">
      <p class="p uppercase opacity-50 font-medium">total</p>
      <p class="h6">{{ formatCurrency(cartStore.getCartTotalAmount) }}</p>
    </div>
    <div class="flex justify-between items-center mb-2">
      <p class="p uppercase opacity-50 font-medium">shipping</p>
      <p class="h6">{{ formatCurrency(shippingFee) }}</p>
    </div>
    <div class="flex justify-between items-center mb-2">
      <p class="p uppercase opacity-50 font-medium">vat</p>
      <p class="h6">{{ formatCurrency(vat) }}</p>
    </div>
    <div class="flex justify-between items-center mb-2">
      <p class="p uppercase opacity-50 font-medium">grand total</p>
      <p class="h6 text-primary">{{ formatCurrency(grandTotal) }}</p>
    </div>
    <button 
      type="button"
      class="primary-btn w-full mt-4"
      @click="continueAndPay"
    >
      continue & pay
    </button>
</template>

<script setup lang="ts">
// Imports
import { ref, computed } from "vue";
import { useCartStore } from "@/store/cart.ts"
import CartItem from "@/components/atoms/CartItem/CartItem.vue"
import { formatCurrency } from "@/common/utils.ts"

// Define custom event to emit 
const emit = defineEmits<{
  (e: 'show-modal'): void
}>()

// Store
const cartStore = useCartStore();

// Fees
const shippingFee = ref<number>(100);
const vat = computed(() => {
  return 0.075 * cartStore.getCartTotalAmount;
})

const grandTotal = computed(() => {
  return Number(cartStore.getCartTotalAmount) + Number(shippingFee.value) + Number(vat.value)
})

// Continue and Pay
const continueAndPay = () => {
  // Set grand Total in the cart store
  cartStore.updateGrandTotal(grandTotal);
  // Emit event to open modal on the checkout page
  emit('show-modal');
}

</script>