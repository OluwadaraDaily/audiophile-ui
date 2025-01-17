<template>
  <div>
    <h6 class="sub-title uppercase text-primary mb-2">payment details</h6>
    <p class="p mb-5">Select a payment method <br/> <span class="text-danger text-xs">(Stripe and Paystack are currently unavailable)</span></p>
    <form>
      <button 
        type="button"selectPaymentMethod
        class="flex items-center gap-2 border border-input-grey py-4 rounded-md mb-4 w-full btn"
        @click="selectPaymentMethod"
        :disabled="true"
      >
        <input 
          type="radio" 
          name="payment_method" 
          class="ml-[10%]"
          id="stripe" 
          value="stripe"
          v-model="paymentMethod"
          @change="handlePaymentMethodChange"
          :disabled="true"
        >
        <label for="stripe">Stripe</label>
      </button>
      <button 
        type="button"
        class="flex items-center gap-2 border border-input-grey py-4 rounded-md w-full btn mb-4"
        @click="selectPaymentMethod"
        :disabled="true"
      >
        <input 
          type="radio" 
          name="payment_method" 
          class="ml-[10%]"
          id="paystack" 
          value="paystack"
          v-model="paymentMethod"
          @change="handlePaymentMethodChange"
          :disabled="true"
        >
        <label for="paystack">Paystack</label>
      </button>
      <button 
        type="button"
        class="flex items-center gap-2 border border-primary py-4 rounded-md w-full btn"
        @click="selectPaymentMethod"
      >
        <input 
          type="radio" 
          name="payment_method" 
          class="ml-[10%]"
          id="payment_on_delivery" 
          value="payment_on_delivery"
          v-model="paymentMethod"
          :aria-selected="true"
          :selected="true"
        >
        <label for="payment_on_delivery" class="font-bold">Payment on Delivery</label>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
// Imports
import { ref } from "vue";

// Payment method
const paymentMethod = ref<string>("")

const handlePaymentMethodChange = (event) => {
  return;
}

const selectPaymentMethod = (event) => {
  const radioInput = event.target.childNodes[0];
  radioInput.click();
  radioInput.checked = true;
}
</script>

<style scoped>
div:has(> input[type="radio"]:checked) {
  border-color: #D87D4A;
}
</style>