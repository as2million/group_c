import React, { useState, useEffect } from 'react';

import ChaCartProgressBar from 'Cha/Components/Cha-Cart-ProgressBar/ChaCartProgressBar';
// import ChaOrder from 'Cha/Components/Cha-Order/ChaOrder'
import ChaCartSubmitCard from 'Cha/Components/Cha-Cart-Submit-Card/ChaCartSubmitCard';
import ChaCartStepCardStep1 from 'Cha/Components/Cha-Cart-Step-Card-Step1/ChaCartStepCardStep1';
import ChaCartStepCardStep2 from 'Cha/Components/Cha-Cart-Step-Card-Step2/ChaCartStepCardStep2';
import ChaCartStepCardStep3 from 'Cha/Components/Cha-Cart-Step-Card-Step3/ChaCartStepCardStep3';

import 'Cha/Pages/Cha-Cart/ChaCart.scss';

function ChaCart(props) {
  // 餐點資料(未處理)
  const [meals, setMeals] = useState([]);
  // 餐點資料(已處理)
  const [mealsDisplay, setMealsDisplay] = useState([]);
  // 小計
  const [subtotal, setSubtotal] = useState(0);
  // 指示器
  // const [dataLoading, setDataLoading] = useState(false);

  function getCartFromLocalStorage() {
    const newCart = localStorage.getItem('cart') || '[]';
    // console.log(JSON.parse(newCart));
    setMeals(JSON.parse(newCart));
  }

  useEffect(() => {
    getCartFromLocalStorage();
  }, []);
  const updateCartToLocalStorage = (value) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newCart = [...currentCart, value];
    localStorage.setItem('cart', JSON.stringify(newCart));
    // 設定資料
    setMeals(newCart);
  };
  // 每次meals資料有改變，1秒後關閉載入指示
  // componentDidUpdate
  useEffect(() => {
    //   setTimeout(() => setDataLoading(false), 1000);

    // mealsDisplay運算
    let newMealsDisplay = [];

    //尋找mealsDisplay
    for (let i = 0; i < meals.length; i++) {
      const index = newMealsDisplay.findIndex(
        (value) => value.id === meals[i].id
      );
      if (index !== -1) {
        newMealsDisplay[index].productAmount += meals[i].productAmount;
      } else {
        const newItem = { ...meals[i] };
        newMealsDisplay = [...newMealsDisplay, newItem];
      }
    }
    // console.log(newMealsDisplay);
    setMealsDisplay(newMealsDisplay);
  }, [meals]);

  return (
    <>
      <ChaCartProgressBar {...props} />
      <div className="cha-wrap">
        {/* 訂單步驟欄*/}
        <main>
          {/* 步驟一*/}
          <ChaCartStepCardStep1
            mealsDisplay={mealsDisplay}
            setMealsDisplay={setMealsDisplay}
            subtotal={subtotal}
            setSubtotal={setSubtotal}
          />
          {/* 步驟二 */}
          <ChaCartStepCardStep2 />
          {/* 步驟三 */}
          <ChaCartStepCardStep3 />
        </main>
        {/* 購物清單欄*/}
        <aside>
          <ChaCartSubmitCard subtotal={subtotal} mealsDisplay={mealsDisplay} />
        </aside>
      </div>
    </>
  );
}
export default ChaCart;
