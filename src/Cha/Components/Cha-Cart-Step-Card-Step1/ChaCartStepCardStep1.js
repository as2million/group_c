import React from 'react';
import ChaCartMealList from 'Cha/Components/Cha-Cart-Step-Card-Step1/Cha-Cart-Meal-List/ChaCartMealList';
import './ChaCartStepCardStep1.scss';

function ChaCartStepCardStep1(props) {
  const {
    meals,
    setMeals,
    // mealsDisplay,
    // setMealsDisplay,
    // createCartToLocalStorage,
    updateCartToLocalStorage,
    deleteItemToLocalStorage,
    handleCartNumber,
  } = props;

  // 刪除商品選項
  const handleDelete = (id) => {
    const newMealsDisplay = meals.filter((item, index) => item.id !== id);
    setMeals(newMealsDisplay);
  };
  // const handleDelete = (id) => {
  //   const newMealsDisplay = mealsDisplay.filter(
  //     (item, index) => item.id !== id
  //   );
  //   setMealsDisplay(newMealsDisplay);
  // };
  // 計數器加減功能
  const handleCount = (id, type) => {
    const newMeals = [...meals];
    const mealsItemIndex = newMeals.findIndex((item) => item.id === id);
    if (mealsItemIndex !== -1) {
      if (type === 'increment') {
        newMeals[mealsItemIndex].productAmount += 1;
      }
      if (type === 'decrement' && newMeals[mealsItemIndex].productAmount > 1) {
        newMeals[mealsItemIndex].productAmount -= 1;
      }
      setMeals(newMeals);
    }
  };
  // const handleCount = (id, type) => {
  //   const newMealsDisplay = [...mealsDisplay];
  //   const mealsItemIndex = newMealsDisplay.findIndex((item) => item.id === id);
  //   if (mealsItemIndex !== -1) {
  //     if (type === 'increment') {
  //       newMealsDisplay[mealsItemIndex].productAmount += 1;
  //     }
  //     if (
  //       type === 'decrement' &&
  //       newMealsDisplay[mealsItemIndex].productAmount > 1
  //     ) {
  //       newMealsDisplay[mealsItemIndex].productAmount -= 1;
  //     }
  //     setMealsDisplay(newMealsDisplay);
  //   }
  // };
  // 計算商品價格小計
  const calcuSubtotalPrice = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].productAmount * items[i].productPrice;
    }
    return total;
  };
  let subtotalPrice = calcuSubtotalPrice(meals);
  // let subtotalPrice = calcuSubtotalPrice(mealsDisplay);
  const demoMeals1 = {
    id: 1,
    productName: '中歐香料嫩雞胸',
    productPrice: 170,
    productAmount: 1,
    productImage: '00_bento-chicken-breast',
  };
  const demoMeals2 = {
    id: 2,
    productName: '日式燒雞腿',
    productPrice: 150,
    productAmount: 3,
    productImage: '01_bento-chicken-thigh',
  };
  const demoMeals3 = {
    id: 3,
    productName: '醬烤厚切1983黑豚',
    productPrice: 175,
    productAmount: 5,
    productImage: '00_bento-chicken-breast',
  };
  const promotion2 = {
    id: 13,
    productName: '激瘦下午茶沙拉',
    productPrice: 130,
    productAmount: 1,
    productImage: '12_afternoon',
  };
  return (
    <>
      <div className="cha-main-card cha-main-card-step1">
        <div
          className="cha-step-header"
          onClick={() => {
            // createCartToLocalStorage(demoMeals1);
            // createCartToLocalStorage(demoMeals2);
            // createCartToLocalStorage(demoMeals3);
            updateCartToLocalStorage(demoMeals1, 1);
            updateCartToLocalStorage(demoMeals2, 3);
            updateCartToLocalStorage(demoMeals3, 5);
            handleCartNumber('add', 9);
          }}
        >
          步驟1：餐點明細
        </div>
        {/* 餐點項目 */}
        {/* {mealsDisplay.map((item, index) => ( */}
        {meals.map((item, index) => (
          <ChaCartMealList
            key={item.id}
            mealsItem={item}
            handleDelete={handleDelete}
            handleCount={handleCount}
            handleCartNumber={handleCartNumber}
            // createCartToLocalStorage={createCartToLocalStorage}
            updateCartToLocalStorage={updateCartToLocalStorage}
            deleteItemToLocalStorage={deleteItemToLocalStorage}
          />
        ))}
        <div style={{ display: subtotalPrice === 0 && 'none' }}>
          <div className="cha-horizontal-line"></div>
          <div className="cha-step1-total-price">
            <div className="cha-step1-total-price-word">小計</div>
            <div className="cha-step1-total-price-number">${subtotalPrice}</div>
            <div className="cha-horizontal-line"></div>
          </div>
        </div>
        {/* 確認按鈕 */}
        {/* <div className="cha-step-check-btn-div">
          <input type="button" value="確認" className="cha-step-check-btn" />
        </div> */}
        <div className="cha-step1-promotion-header-div">
          <div className="cha-step1-promotion-header">你可能還想來點</div>
        </div>
        <div className="cha-step1-promotion-row">
          <div className="cha-step1-promotion-picture cha-salad-01"></div>
          <div
            className="cha-step1-promotion-picture cha-salad-02"
            onClick={() => {
              updateCartToLocalStorage(promotion2);
              handleCartNumber();
            }}
          ></div>
          <div className="cha-step1-promotion-picture cha-salad-03"></div>
        </div>
      </div>
    </>
  );
}
export default ChaCartStepCardStep1;
