<template>
  <main>
    <section class="relative">
      <div class="w-[90%] lg:w-[85%] mx-auto pb-10">
        <div class="mb-6 pt-10">
          <router-link to="/" class="border-none outline-none text-black opacity-50 hover:text-primary">Go Back</router-link>
        </div>
        <div class="flex flex-col lg:flex-row gap-6 lg:gap-12">
          <div class="lg:basis-[65%] py-6 w-[90%] mx-auto rounded-md">
            <h2 class="h2 uppercase mb-4">checkout</h2>
            <div class="mb-8">
              <billing-details/>
            </div>
            <div class="mb-6">
              <shipping-info/>
            </div>
            <div>
              <payment-details/>
            </div>
          </div>
          <div class="lg:basis-[35%] py-6 w-[90%] mx-auto rounded-md">
            <checkout-summary
              @show-modal="showModal"
            />
          </div>
        </div>
      </div>
      <div v-if="shouldShowModal" class="absolute top-0 w-full h-full">
        <checkout-modal/>
      </div>
    </section>
  </main>  
</template>


<script setup lang="ts">
// Imports
import { ref } from "vue";
import BillingDetails from "./BillingDetails.vue"
import ShippingInfo from "./ShippingInfo.vue"
import PaymentDetails from "./PaymentDetails.vue";
import CheckoutSummary from "./CheckoutSummary.vue";
import CheckoutModal from "@/components/molecules/CheckoutModal/CheckoutModal.vue";

// Show modal
let shouldShowModal = ref<boolean>(false);
const showModal = () => {
  shouldShowModal.value = true;
}
</script>

<style>
</style>