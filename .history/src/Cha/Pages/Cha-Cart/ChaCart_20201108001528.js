import React, { useState, useEffect } from 'react';

import ChaCartProgressBar from 'Cha/Components/Cha-Cart-ProgressBar/ChaCartProgressBar';
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
  // 控制navbar
  const { setShowBar } = props;
  // 資料，準備傳送給「我的訂單」
  const [memberSid, setMemberSid] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  // const [takeWay, setTakeWay] = useState('');
  const [address, setAddress] = useState('');
  const [beastieCoin, setBeastieCoin] = useState('');

  const [takeDate, setTakeDate] = useState('');
  const [takeTime, setTakeTime] = useState('11:00 ~ 11:30');

  // 掛載就設定隱藏navbar
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

  // componentDidUpdate// 只要meals改變，就處理meals
  useEffect(() => {
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
    // // 刪掉數量為0的物件
    newMealsDisplay = newMealsDisplay.filter(
      (item, index) => item.productAmount !== 0
    );
    // console.log(newMealsDisplay);
    // 只要meals改變，就處理meals
    setMealsDisplay(newMealsDisplay);
  }, [meals]);

  // 新增LocalStorage
  const updateCartToLocalStorage = (value) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

    const newCart = [...currentCart, value];
    localStorage.setItem('cart', JSON.stringify(newCart));

    // // 設定資料
    setMeals(newCart);
  };
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
            updateCartToLocalStorage={updateCartToLocalStorage}
          />
          {/* 步驟二 */}
          <ChaCartStepCardStep2
            memberSid={memberSid}
            setMemberSid={setMemberSid}
            name={name}
            setName={setName}
            mobile={mobile}
            setMobile={setMobile}
            address={address}
            setAddress={setAddress}
            beastieCoin={beastieCoin}
            setBeastieCoin={setBeastieCoin}
            takeDate={takeDate}
            setTakeDate={setTakeDate}
            takeTime={takeTime}
            setTakeTime={setTakeTime}
          />
          {/* 步驟三 */}
          <ChaCartStepCardStep3 />
        </main>
        {/* 購物清單欄*/}
        <aside>
          <ChaCartSubmitCard
            // step1
            mealsDisplay={mealsDisplay}
            // step2
            memberSid={memberSid}
            name={name}
            mobile={mobile}
            address={address}
            beastieCoin={beastieCoin}
            takeDate={takeDate}
            takeTime={takeTime}
          />
        </aside>
      </div>
    </>
  );
}
export default ChaCart;
