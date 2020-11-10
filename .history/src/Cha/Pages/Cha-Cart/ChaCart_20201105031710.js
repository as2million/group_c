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
    // 開啟載入的指示圖示
    // setDataLoading(true);

    const newCart = localStorage.getItem('cart') || '[]';
    // console.log(JSON.parse(newCart));
    setMeals(JSON.parse(newCart));
  }

  useEffect(() => {
    getCartFromLocalStorage();
  }, []);

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

  // 計算總價用的函式
  const sum = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].productAmount * items[i].productPrice;
    }
    return total;
  };

  return (
    <>
      <ChaCartProgressBar {...props} />
      <div className="cha-wrap">
        {/* 訂單步驟欄*/}
        <main>
          {/* 步驟一*/}
          <ChaCartStepCardStep1
            getCartFromLocalStorage={getCartFromLocalStorage}
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
