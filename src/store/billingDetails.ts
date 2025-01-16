import { LOCAL_STORAGE_KEYS } from '@/common/constants'
import { BillingDetails } from '@/types/billingDetails'
import { defineStore } from 'pinia'

export const useBillingDetailsStore = defineStore('billing', {
  state: () => {
    const storedBillingDetails = localStorage.getItem(LOCAL_STORAGE_KEYS.BILLING_DETAILS);
    return {
      billingDetails: storedBillingDetails ? JSON.parse(storedBillingDetails) : {} as BillingDetails
    }
  },
  getters: {
    getBillingDetails: (state) => { 
      return state.billingDetails;
    }
  },
  actions: {
    saveBillingDetails() {
      localStorage.setItem(LOCAL_STORAGE_KEYS.BILLING_DETAILS, JSON.stringify(this.billingDetails))
    },
    updateBillingDetails(billingDetailsData: BillingDetails) {
      this.billingDetails = billingDetailsData
      this.saveBillingDetails()
    }
  }
})