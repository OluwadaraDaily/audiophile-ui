<template>
    <p class="sub-title uppercase text-primary mb-2">billing details</p>
    <form @submit.prevent="saveBillingDetails">
      <div class="mb-6">
        <label for="billingName" class="p">Name</label> <br/>
        <input 
          type="text" 
          name="name" 
          class="mt-2 p-4 w-full border border-[#cfcfcf] rounded-lg p 
            placeholder-black placeholder-opacity-40 
            placeholder:font-bold font-bold
          " 
          id="billingName"
          v-model="billingDetails.name"
          placeholder="Alexei Ward"
          required
        />
      </div>
      <div class="mb-6">
        <label for="billingEmail" class="p">Email Address</label> <br/>
        <input 
          type="email" 
          name="name" 
          class="mt-2 p-4 w-full border border-[#cfcfcf] rounded-lg p 
            placeholder-black placeholder-opacity-40 
            placeholder:font-bold font-bold
          " 
          id="billingEmail"
          v-model="billingDetails.emailAddress"
          placeholder="alexei@mail.com"
          required
        />
      </div>
      <div class="mb-6">
        <label for="billingEmail" class="p">Phone Number</label> <br/>
        <IntlTelInput
          ref="intlInputRef"
          :class="{ 'input-error': !isPhoneNumberValidPrecise && touched.phoneNumber }"
          id="intl-tel-input"
          :value="billingDetails.phoneNumber"
          :options='telInputOptions'
          @change="handleTelInputChange"
          @input="handleTelInputChange"
          @changeErrorCode="phoneNumberErrorCode = $event"
        />
        <small v-if="!isPhoneNumberValidPrecise && !isNaN(phoneNumberErrorCode) && touched.phoneNumber" class="text-danger text-xs">
          {{ intlTelErrorMap[phoneNumberErrorCode || 0] }}
        </small>
      </div>
      <div class="flex justify-end">
        <button 
          type="submit" 
          class="primary-btn uppercase"
          :disabled="!isBillingDetailsComplete || loading"
        >
          {{ loading ? 'loading...' : 'save' }}
        </button>
      </div>
    </form> 
</template>


<script setup lang="ts">
// Imports
import { reactive, ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from "vue-router";
import IntlTelInput from "intl-tel-input/vueWithUtils";
import "intl-tel-input/styles";
import { intlTelErrorMap } from "@/common/constants.ts";
import { useBillingDetailsStore } from "@/store/billingDetails.ts";
import { BillingDetails } from "@/types/billingDetails.ts";

// Telephone Input
const intlInputRef = ref(null)
const isPhoneNumberValidPrecise = ref(null)
const phoneNumberErrorCode = ref(null)
const telInputOptions: Record<string, unknown> = {
  initialCountry: "auto",
  geoIpLookup: (callback) => {
  fetch("https://ipapi.co/json")
    .then(res => res.json())
    .then(data => callback(data.country_code))
    .catch(() => callback("us"))
  }
}

const handleTelInputChange: () => void = (event) => {
  if (!touched.value.phoneNumber) {
    touched.value.phoneNumber = true
  }
  billingDetails.value.phoneNumber = intlInputRef.value.instance.getNumber();
  isPhoneNumberValidPrecise.value = intlInputRef.value.instance.isValidNumberPrecise()
}

// Billing details form
const billingDetailsStore = useBillingDetailsStore();
const loading = ref(false);
let billingDetails = ref<BillingDetails>({
  name: '',
  emailAddress: '',
  phoneNumber: '',
})

const touched = ref({
  phoneNumber: false
})

onMounted(() => {
  updateForm()
})

const isBillingDetailsComplete = computed(() => {
  return !!billingDetails.value.name && !!billingDetails.value.emailAddress && !!isPhoneNumberValidPrecise.value;
})

const saveBillingDetails = (event) => {
  loading.value = true;
  billingDetailsStore.updateBillingDetails(billingDetails.value)
  updateForm();
  loading.value = false;
  alert("Billing details saved!")
}

const updateForm = () => {
  const storedBillingDetails = billingDetailsStore.getBillingDetails;
  if (Object.keys(storedBillingDetails).length) {
    billingDetails.value.name = storedBillingDetails.name
    billingDetails.value.emailAddress = storedBillingDetails.emailAddress
    billingDetails.value.phoneNumber = storedBillingDetails.phoneNumber
    intlInputRef.value.instance.setNumber(storedBillingDetails.phoneNumber)
  } 
}

</script>

<style>
</style>