const CART = 'cart';
export default {
  getCart: () => {
    let cart = localStorage.getItem(CART) || '[]';
    return JSON.parse(cart);
  },
  addToCart: (mObj) => {
    let cart1 = this.getCart();
    cart1.push(mObj);
    localStorage.setItem(CART, JSON.stringify(cart1));
    return cart1;
  },
  removeItem: (pid) => {
    let cart1 = this.getCart();
    cart1 = cart1.filter((el) => pid !== el.id);
    localStorage.setItem(CART, JSON.stringify(cart1));
    return cart1;
  },
  clear: () => {
    localStorage.setItem(CART, '[]');
    return [];
  },
};
