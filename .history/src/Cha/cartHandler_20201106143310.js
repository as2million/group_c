const CART = 'cart';
export default {
  getCart: function () {
    let cart = localStorage.getItem(CART) || '[]';
    return JSON.parse(cart);
  },
  addOne: function (pid) {
    const cart1 = this.getCart();
    const one = cart1.filter((el) => pid === el.id);
    one[0].productAmount++;
    localStorage.setItem(CART, JSON.stringify(cart1));
    return cart1;
  },
  minusOne: function (pid) {},
  addToCart: function (mObj) {
    let cart1 = this.getCart();
    cart1.push(mObj);
    localStorage.setItem(CART, JSON.stringify(cart1));
    return cart1;
  },
  removeItem: function (pid) {
    let cart1 = this.getCart();
    cart1 = cart1.filter((el) => pid !== el.id);
    localStorage.setItem(CART, JSON.stringify(cart1));
    return cart1;
  },
  clear: function () {
    localStorage.setItem(CART, '[]');
    return [];
  },
};
