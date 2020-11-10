function CreateCartToLocalStorage(value) {
  const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

  const newCart = [...currentCart, value];
  localStorage.setItem('cart', JSON.stringify(newCart));

  // // 設定資料
  // {
  //   id: 1,
  //   productName: '慢煮嫩雞胸-蒜味香草',
  //   productPicture: img_id,
  //   productPrice: 150,
  //   productAmount: 1,
  // };
}
export default CreateCartToLocalStorage;
