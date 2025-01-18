import { defineStore } from 'pinia'
import { CartItem } from '@/types/cart'
import { ProductProps } from '@/components/atoms/ProductItem/types'
import { LOCAL_STORAGE_KEYS } from '@/common/constants'


export const useCartStore = defineStore('cart', {
  state: () => {
    const storedCart = localStorage.getItem(LOCAL_STORAGE_KEYS.CART)
    return {
      cart: storedCart ? JSON.parse(storedCart) : [] as CartItem[],
      grandTotal: 0 as number,
    }
  },
  getters: {
    getCartTotalAmount: (state) => {
      const total = state.cart.reduce((acc: number, item: CartItem) => (acc + (item.quantity * item.product.price)), 0)
      return total;
    },
    getCartCount: (state) => {
      return state.cart.length;
    },
    getCart: (state) => {
      return state.cart;
    },
    getGrandTotal: (state) => {
      return state.grandTotal;
    }
  },
  actions: {
    saveCart() {
      localStorage.setItem(LOCAL_STORAGE_KEYS.CART, JSON.stringify(this.cart))
    },
    addToCart(product: ProductProps, quantity: number) {
      const existingProduct = this.cart.find((item: CartItem) => product.tag === item.product.tag)
      if (existingProduct) {
        existingProduct.quantity = quantity;
      } else {
        this.cart.push({ product, quantity })
      }
      this.saveCart();
    },
    removeFromCart(product: ProductProps) {
      const productIndexInCart = this.cart.findIndex((item: CartItem) => item.product.tag === product.tag)
      this.cart.splice(productIndexInCart, 1)
      this.saveCart();
    },
    updateGrandTotal(amount: number) {
      this.grandTotal = amount;
    },
    clearCart() {
      this.cart = [];
      this.saveCart();
    }
  }
})