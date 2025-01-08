import { defineStore } from 'pinia'
import { CartItem } from '@/types/cart'
import { ProductProps } from '@/components/atoms/ProductItem/types'

export const useCartStore = defineStore('cart', {
  state: () => {
    const storedCart = localStorage.getItem('cart')
    console.log('Stored Cart:', storedCart);
    return {
      cart: storedCart ? JSON.parse(storedCart) : [] as CartItem[],
    }
  },
  getters: {
    getCartTotalAmount: (state) => {
      const total = state.cart.reduce((acc: number, item: CartItem) => (acc + (item.quantity * item.product.price)), 0)
      console.log('TOTAL =>', total)
      return total;
    },
    getCartCount: (state) => {
      return state.cart.length;
    },
    getCart: (state) => {
      return state.cart;
    }
  },
  actions: {
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    addToCart(product: ProductProps, quantity: number) {
      const existingProduct = this.cart.find((item: CartItem) => product.tag === item.product.tag)
      if (existingProduct) {
        console.log('UPDATE CART!')
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
    }
  }
})