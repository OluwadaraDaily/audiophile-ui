<template>
  <p class="sub-title uppercase text-primary mb-2">shipping info</p>
  <form @submit.prevent="saveShippingInfo">
    <div class="mb-6">
      <label for="address" class="p">Your address</label> <br/>
      <input 
        type="text" 
        name="address" 
        class="mt-2 p-4 w-full border border-[#cfcfcf] rounded-lg p 
          placeholder-black placeholder-opacity-40 
          placeholder:font-bold font-bold
        " 
        id="address"
        v-model="shippingInfo.address"
        placeholder="1137 Funsho Williams Avenue"
        required
      />
    </div>
    <div class="md:flex md:gap-3">
      <div class="mb-6 md:basis-[50%] md:w-full">
        <label for="zipCode" class="p">ZIP Code</label> <br/>
        <input 
          type="text" 
          name="zipCode" 
          class="mt-2 p-4 w-full border border-[#cfcfcf] rounded-lg p 
            placeholder-black placeholder-opacity-40 
            placeholder:font-bold font-bold
          " 
          id="zipCode"
          v-model="shippingInfo.zipCode"
          placeholder="10010"
          required
        />
      </div>
      <div class="mb-6 md:basis-[50%] md:w-full">
        <label for="city" class="p">City</label> <br/>
        <input 
          type="text" 
          name="city" 
          class="mt-2 p-4 w-full border border-[#cfcfcf] rounded-lg p 
            placeholder-black placeholder-opacity-40 
            placeholder:font-bold font-bold
          " 
          id="city"
          v-model="shippingInfo.city"
          placeholder="Lagos"
          required
        />
      </div>
    </div>
    <div class="md:flex">
      <div class="mb-6 md:basis-[49%] md:w-full">
        <label for="country" class="p">Country</label> <br/>
        <input 
          type="text" 
          name="country" 
          class="mt-2 p-4 w-full border border-[#cfcfcf] rounded-lg p 
            placeholder-black placeholder-opacity-40 
            placeholder:font-bold font-bold
          " 
          id="country"
          v-model="shippingInfo.country"
          placeholder="Nigeria"
          required
        />
      </div>
    </div>
    <div class="flex justify-end">
      <button 
        type="submit" 
        class="primary-btn uppercase"
        :disabled="!isShippingInfoComplete || loading"
      >
        {{ loading ? 'loading...' : 'save' }}
      </button>
    </div>
  </form> 
</template>

<script setup lang="ts">
// Imports
import { ref, computed, onMounted } from "vue";
import { useShippingInfoStore } from "@/store/shippingInfo.ts"

// Shipping Info Form
const shippingInfoStore = useShippingInfoStore()
const loading = ref<boolean>(false)
const shippingInfo = ref<Record<string, string>>({
  address: "",
  zipCode: "",
  city: "",
  country: "",
})

const isShippingInfoComplete = computed(() => {
  return !!shippingInfo.value.address 
    && !!shippingInfo.value.zipCode
    && !!shippingInfo.value.city
    && !!shippingInfo.value.country
})

onMounted(() => {
  updateForm();
})

const saveShippingInfo = () => {
  shippingInfoStore.updateShippingInfo(shippingInfo.value)
  updateForm();
  alert("Shipping information saved!")
}

const updateForm = () => {
  const storedShippingInfo = shippingInfoStore.getShippingInfo;
  if (Object.keys(storedShippingInfo).length) {
    shippingInfo.value.address = storedShippingInfo.address
    shippingInfo.value.zipCode = storedShippingInfo.zipCode
    shippingInfo.value.city = storedShippingInfo.city
    shippingInfo.value.country = storedShippingInfo.country
  }
}
</script>

<style scope></style>