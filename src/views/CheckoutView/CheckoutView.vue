<template>
  <main>
    <section class="w-[90%] lg:w-[85%] mx-auto my-10">
      <div class="mb-6">
        <router-link to="/" class="border-none outline-none text-black opacity-50 hover:text-primary">Go Back</router-link>
      </div>
      <div class="flex flex-col lg:flex-row gap-6">
        <div class="lg:basis-[75%] lg:h-[100vh] py-6 w-[90%] mx-auto rounded-md">
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
        <div class="lg:basis-[25%] lg:h-[100vh] border border-blue-400 py-6 w-[90%] mx-auto rounded-md">

        </div>
      </div>
    </section>
  </main>  
</template>


<script setup lang="ts">
// Imports
import BillingDetails from "./BillingDetails.vue"
import ShippingInfo from "./ShippingInfo.vue"
import PaymentDetails from "./PaymentDetails.vue";

</script>

<style>
</style>