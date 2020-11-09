function CreateCartToLocalStorage(value) {
  const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

  const newCart = [...currentCart, value];
  localStorage.setItem('cart', JSON.stringify(newCart));

  // // 設定資料
  // setMeals(newCart);
}
export default CreateCartToLocalStorage;
