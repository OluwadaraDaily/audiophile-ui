import { LOCAL_STORAGE_KEYS } from "@/common/constants";
import { ShippingInfo } from "@/types/shippingInfo";
import { defineStore } from "pinia";

export const useShippingInfoStore = defineStore('shipping', {
  state: () => {
    const storedShippingInfo = localStorage.getItem(LOCAL_STORAGE_KEYS.SHIPPING_INFO)
    return {
      shippingInfo: storedShippingInfo ? JSON.parse(storedShippingInfo) as ShippingInfo : {} as ShippingInfo
    }
  },
  getters: {
    getShippingInfo(state) {
      return state.shippingInfo;
    },
    getCity(state) {
      return state.shippingInfo.city;
    },
    getCountry(state) {
      return state.shippingInfo.country;
    }
  },
  actions: {
    saveShippingInfo() {
      localStorage.setItem(LOCAL_STORAGE_KEYS.SHIPPING_INFO, JSON.stringify(this.shippingInfo))
    },
    updateShippingInfo(shippingInfoData: ShippingInfo) {
      this.shippingInfo = shippingInfoData
      this.saveShippingInfo()
    }
  }
})