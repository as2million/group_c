import React, { useState, useEffect } from 'react';
import ChaCartMealList from 'Cha/Components/Cha-Cart-Step-Card-Step1/Cha-Cart-Meal-List/ChaCartMealList';
import './ChaCartStepCardStep1.scss';

function ChaCartStepCardStep1(props) {
  const {
    mealsDisplay,
    setMealsDisplay,
    // handleUpdateToLocalStorage,
    updateCartToLocalStorage,
  } = props;

  // 刪除商品選項
  const handleDelete = (id) => {
    const newMealsDisplay = mealsDisplay.filter(
      (item, index) => item.id !== id
    );
    setMealsDisplay(newMealsDisplay);
  };
  // 計數器加減功能
  const handleCount = (id, type) => {
    const newMealsDisplay = [...mealsDisplay];
    const mealsItemIndex = newMealsDisplay.findIndex((item) => item.id === id);
    if (mealsItemIndex !== -1) {
      if (type === 'increment') {
        newMealsDisplay[mealsItemIndex].productAmount += 1;
      }
      if (
        type === 'decrement' &&
        newMealsDisplay[mealsItemIndex].productAmount > 1
      ) {
        newMealsDisplay[mealsItemIndex].productAmount -= 1;
      }
      setMealsDisplay(newMealsDisplay);
    }
  };
  // 計算商品價格小計
  const calcuSubtotalPrice = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].productAmount * items[i].productPrice;
    }
    return total;
  };
  let subtotalPrice = calcuSubtotalPrice(mealsDisplay);
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
            updateCartToLocalStorage(demoMeals1);
            updateCartToLocalStorage(demoMeals2);
            updateCartToLocalStorage(demoMeals3);
          }}
        >
          步驟1：餐點明細
        </div>
        {/* 餐點項目 */}
        {mealsDisplay.map((item, index) => (
          <ChaCartMealList
            key={item.id}
            mealsItem={item}
            deleteMethod={() => handleDelete(item.id)}
            handleCount={handleCount}
            updateCartToLocalStorage={updateCartToLocalStorage}
            // handleUpdateToLocalStorage={handleUpdateToLocalStorage}
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
            }}
          ></div>
          <div className="cha-step1-promotion-picture cha-salad-03"></div>
        </div>
      </div>
    </>
  );
}
export default ChaCartStepCardStep1;
