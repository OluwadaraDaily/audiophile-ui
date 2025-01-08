export const initializeCart = () => {
  const storedCart = localStorage.getItem('cart')
  if (!storedCart) {
    localStorage.setItem('cart', JSON.stringify([]))
  }
}