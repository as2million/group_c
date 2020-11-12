export default {
  getCart: () => {
    const cart = localStorage.getItem('cart') || '[]';
    return JSON.parse(cart);
  },
  addToCart: (m) => {},
};
