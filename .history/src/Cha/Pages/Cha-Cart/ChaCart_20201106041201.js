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
  const { setShowBar } = props;

  // 餐點資料(已處理)
  const [mealsDisplay, setMealsDisplay] = useState([]);
  // 指示器
  // const [dataLoading, setDataLoading] = useState(false);

  // 掛載就設定
  useEffect(() => {
    setShowBar(false);
  }, []);

  // 讀取LocalStorage
  function getCartFromLocalStorage() {
    const newCart = localStorage.getItem('cart') || '[]';
    // console.log(JSON.parse(newCart));
    setMeals(JSON.parse(newCart));
  }
  // componentDidMount，一開始會載入資料(在元件初始化完成後)
  useEffect(() => {
    getCartFromLocalStorage();
  }, []);
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
        // newMealsDisplay[index].productAmount++;
        //假設是加數量的
        newMealsDisplay[index].productAmount += meals[i].productAmount;
      } else {
        //沒有的話就把項目加入，數量為1
        const newItem = { ...meals[i] };
        newMealsDisplay = [...newMealsDisplay, newItem];
      }
    }
    // console.log(newMealsDisplay);
    只要meals改變，就處理meals
    setMealsDisplay(newMealsDisplay);
  }, [meals]);

  const updateCartToLocalStorage = (value) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

    const newCart = [...currentCart, value];
    localStorage.setItem('cart', JSON.stringify(newCart));

    // // 設定資料
    setMeals(newCart);
  };

  // const demoMealsToLocalStorage = (items) => {
  //   const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

  //   const newCart = [...currentCart, ...items];
  //   localStorage.setItem('cart', JSON.stringify(newCart));

  //   // // 設定資料
  //   setMeals(newCart);
  // };

  // const handleCount = (id, type) => {
  //   const newMealsDisplay = [...mealsDisplay];
  //   const todoItemIndex = newMealsDisplay.findIndex((item) => item.id === id);
  //   if (todoItemIndex !== -1) {
  //     if (type === 'increment') {
  //       newMealsDisplay[todoItemIndex].productAmount += 1;
  //     }
  //     if (
  //       type === 'decrement' &&
  //       newMealsDisplay[todoItemIndex].productAmount > 1
  //     ) {
  //       newMealsDisplay[todoItemIndex].productAmount -= 1;
  //     }
  //     setMealsDisplay(newMealsDisplay);
  //   }
  // };
  //   async function addUserToSever() {

  //     const tep2Data =  {
  //         member_sid: memberSid,
  //         order_state: "未送達",
  //         order_name: name,
  //         mobile:mobile,
  //         take_way: takeWay,
  //         take_address: address,
  //         beastie_coin: beastieCoin,
  //       };
  // ///////////////   "toal_amount": 10,
  // ///////////////   "subtoal_price": 1300,
  // ///////////////   "shipping": 0,
  // ///////////////   "beastie_coin": 10,
  // ///////////////   "tableware": "是",
  // ///////////////   "total_price": 1290,
  // ///////////////   "take_date": "2020-11-02T16:00:00.000Z",
  // ///////////////   "take_time": "12:00:00",
  // ///////////////   "receipt": "二聯式發票",
  // // },
  //     // 連接的伺服器資料網址
  //     const url = 'http://localhost:5555/users/';

  //     // 注意資料格式要設定，伺服器才知道是json格式
  //     const request = new Request(url, {
  //       method: 'POST',
  //       body: JSON.stringify(tep2Data),
  //       headers: new Headers({
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       }),
  //     });

  //     console.log(JSON.stringify(tep2Data));

  //     const response = await fetch(request);
  //     const data = await response.json();

  //     console.log('伺服器回傳的json資料', data);
  //     // 要等驗証過，再設定資料(簡單的直接設定)
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
            // handleUpdateToLocalStorage={handleUpdateToLocalStorage}
            // handleDemoMeals={handleDemoMeals}
            updateCartToLocalStorage={updateCartToLocalStorage}
          />
          {/* 步驟二 */}
          <ChaCartStepCardStep2 />
          {/* 步驟三 */}
          <ChaCartStepCardStep3 />
        </main>
        {/* 購物清單欄*/}
        <aside>
          <ChaCartSubmitCard mealsDisplay={mealsDisplay} />
        </aside>
      </div>
    </>
  );
}
export default ChaCart;
