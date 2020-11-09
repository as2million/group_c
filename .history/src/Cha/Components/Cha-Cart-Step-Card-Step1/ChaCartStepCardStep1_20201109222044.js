import React from 'react';
import ChaCartMealList from 'Cha/Components/Cha-Cart-Step-Card-Step1/Cha-Cart-Meal-List/ChaCartMealList';
import './ChaCartStepCardStep1.scss';

function ChaCartStepCardStep1(props) {
  const {
    meals,
    setMeals,
    // mealsDisplay,
    // setMealsDisplay,
    createCartToLocalStorage,
    updateCartToLocalStorage,
    deleteItemToLocalStorage,
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
    productName: '慢煮嫩雞胸-蒜味香草',
    productPrice: 150,
    productAmount: 1,
  };
  const demoMeals2 = {
    id: 2,
    productName: '玫瑰岩鹽烤雞',
    productPrice: 160,
    productAmount: 3,
  };
  const demoMeals3 = {
    id: 3,
    productName: '乾煎功夫鱸魚',
    productPrice: 170,
    productAmount: 3,
  };
  const promotion2 = {
    id: 4,
    productName: '超健康蔬果沙拉',
    productPrice: 110,
    productAmount: 1,
  };
  return (
    <>
      <div className="cha-main-card cha-main-card-step1">
        <div
          className="cha-step-header"
          onClick={() => {
            createCartToLocalStorage(demoMeals1);
            createCartToLocalStorage(demoMeals2);
            createCartToLocalStorage(demoMeals3);
            // updateCartToLocalStorage(demoMeals1, true);
            // updateCartToLocalStorage(demoMeals2, true);
            // updateCartToLocalStorage(demoMeals3, true);
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
            createCartToLocalStorage={createCartToLocalStorage}
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
            onClick={() =>
              // createCartToLocalStorage(promotion2)
              updateCartToLocalStorage(promotion2, true)
            }
          ></div>
          <div className="cha-step1-promotion-picture cha-salad-03"></div>
        </div>
      </div>
    </>
  );
}
export default ChaCartStepCardStep1;
