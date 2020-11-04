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
      //尋找mealsDisplay中有沒有此meals[i].id
      //有找到會返回陣列成員的索引值
      //沒找到會返回-1
      const index = newMealsDisplay.findIndex(
        (value) => value.id === meals[i].id
      );
      //有的話就數量+1
      if (index !== -1) {
        //每次只有加1個數量
        newMealsDisplay[index].productAmount++;
        //假設是加數量的
        newMealsDisplay[index].productAmount += meals[i].productAmount;
      } else {
        //沒有的話就把項目加入，數量為1
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
          <ChaCartStepCardStep1 mealsDisplay={mealsDisplay} />
          {/* 步驟二 */}
          <ChaCartStepCardStep2 />
          {/* 步驟三 */}
          <ChaCartStepCardStep3 />
        </main>
        {/* 購物清單欄*/}
        <aside>
          <ChaCartSubmitCard mealsDisplay={mealsDisplay} setMealsDispla={setMealsDisplay/>
        </aside>
      </div>
    </>
  );
}
export default ChaCart;
