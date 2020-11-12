import React, { useState, useEffect } from 'react';

import ChaCartProgressBar from 'Cha/Components/Cha-Cart-ProgressBar/ChaCartProgressBar';
import ChaCartSubmitCard from 'Cha/Components/Cha-Cart-Submit-Card/ChaCartSubmitCard';
import ChaCartStepCardStep1 from 'Cha/Components/Cha-Cart-Step-Card-Step1/ChaCartStepCardStep1';
import ChaCartStepCardStep2 from 'Cha/Components/Cha-Cart-Step-Card-Step2/ChaCartStepCardStep2';
import ChaCartStepCardStep3 from 'Cha/Components/Cha-Cart-Step-Card-Step3/ChaCartStepCardStep3';
import ScrollButton from 'Share/Components/ToTopButton/ScrollButton';

import 'Cha/Pages/Cha-Cart/ChaCart.scss';

function ChaCart(props) {
  // 餐點資料
  const [meals, setMeals] = useState([]);
  // 餐點資料(已處理)
  // const [mealsDisplay, setMealsDisplay] = useState([]);
  // 控制navbar
  const { setShowBar, setCartNumber } = props;
  // 資料，準備傳送給「我的訂單」
  const [memberSid, setMemberSid] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [takeWay, setTakeWay] = useState('');
  const [takeDate, setTakeDate] = useState('');
  const [takeTime, setTakeTime] = useState('11:00 ~ 11:30');
  const [address, setAddress] = useState('');
  const [beastieCoin, setBeastieCoin] = useState('');
  const [county, setCounty] = useState('');
  const [district, setDistrict] = useState('');

  // 掛載就設定隱藏navbar
  useEffect(() => {
    setShowBar(false);
  }, []);

  // 讀取LocalStorage
  function readCartFromLocalStorage() {
    const newCart = localStorage.getItem('cart') || '[]';
    console.log(JSON.parse(newCart));
    setMeals(JSON.parse(newCart));
  }
  // componentDidMount，一開始會載入資料(在元件初始化完成後)
  useEffect(() => {
    readCartFromLocalStorage();
  }, []);
  // // }, [meals]);

  // // componentDidUpdate// 只要meals改變，就處理meals
  // useEffect(() => {
  //   // mealsDisplay運算
  //   let newMealsDisplay = [];

  //   //尋找mealsDisplay
  //   for (let i = 0; i < meals.length; i++) {
  //     //尋找mealsDisplay中有沒有此meals[i].id
  //     //有找到會返回陣列成員的索引值
  //     //沒找到會返回-1
  //     const index = newMealsDisplay.findIndex(
  //       (value) => value.id === meals[i].id
  //     );
  //     //有的話就數量+1
  //     if (index !== -1) {
  //       //每次只有加1個數量
  //       // newMealsDisplay[index].productAmount++;
  //       //假設是加數量的
  //       newMealsDisplay[index].productAmount += meals[i].productAmount;
  //     } else {
  //       //沒有的話就把項目加入，數量為1
  //       const newItem = { ...meals[i] };
  //       newMealsDisplay = [...newMealsDisplay, newItem];
  //     }
  //   }
  // // 刪掉數量為0的物件
  // newMealsDisplay = newMealsDisplay.filter(
  //   (item, index) => item.productAmount !== 0
  // );
  // console.log(newMealsDisplay);
  // 只要meals改變，就處理meals
  // setMealsDisplay(newMealsDisplay);
  // }, [meals]);

  // 新增LocalStorage;
  // const createCartToLocalStorage = (value) => {
  //   const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

  //   const newCart = [...currentCart, value];
  //   localStorage.setItem('cart', JSON.stringify(newCart));

  //   // // 設定資料
  //   setMeals(newCart);
  // };

  // const updateCartToLocalStorage1111 = (item) => {
  //   const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

  //   // find if the product in the localstorage with its id
  //   const index = currentCart.findIndex((v) => v.id === item.id);

  //   // found: index! == -1
  //   if (index > -1) {
  //     //currentCart[index].amount++
  //     setProductName('這個商品已經加過了');
  //     handleShow();
  //     return;
  //   } else {
  //     currentCart.push(item);
  //   }

  //   localStorage.setItem('cart', JSON.stringify(currentCart));

  //   // 設定資料
  //   setMycart(currentCart);
  //   setProductName('產品：' + item.name + '已成功加入購物車');
  //   handleShow();
  // };

  // 更新購物車中的商品
  const updateCartToLocalStorage = (item, amount = 1, isAdded = true) => {
    // console.log(item, isAdded);
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.id === item.id);
    // console.log('index', index);
    // found: index! == -1
    if (index > -1) {
      if (isAdded) {
        currentCart[index].productAmount += amount;
      } else if (!isAdded && currentCart[index].productAmount > 1) {
        currentCart[index].productAmount--;
      }
      // isAdded &&
      //   ? currentCart[index].productAmount++
      //   : currentCart[index].productAmount--;
    } else {
      currentCart.push(item);
      console.log('currentCart', currentCart);
    }
    localStorage.setItem('cart', JSON.stringify(currentCart));
    // 設定資料
    setMeals(currentCart);
  };
  // 刪除的商品數量
  const deleteItemToLocalStorage = (item) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

    // find if the product in the localstorage with its id
    const newCart = currentCart.filter((v) => v.id !== item.id);

    localStorage.setItem('cart', JSON.stringify(newCart));

    // 設定資料
    setMeals(newCart);
  };
  // 20201112新版購物車icon計數處理器(cartNumber)
  const handleCartNumber = (type = 'add', amount = 1) => {
    if (type === 'add') {
      let currentCartNumber =
        JSON.parse(localStorage.getItem('cartNumber')) || 0;
      let newCartNumber = +currentCartNumber + amount;
      localStorage.setItem('cartNumber', JSON.stringify(newCartNumber));
      setCartNumber(newCartNumber);
    }
    if (
      type === 'minus' &&
      JSON.parse(localStorage.getItem('cartNumber')) > 1
    ) {
      let currentCartNumber =
        JSON.parse(localStorage.getItem('cartNumber')) || 0;
      let newCartNumber = +currentCartNumber - amount;
      localStorage.setItem('cartNumber', JSON.stringify(newCartNumber));
      setCartNumber(newCartNumber);
    }
  };
  return (
    <>
      <ScrollButton />
      <ChaCartProgressBar />
      <div className="cha-wrap">
        {/* 訂單步驟欄*/}
        <main>
          {/* 步驟一*/}
          <ChaCartStepCardStep1
            meals={meals}
            setMeals={setMeals}
            // mealsDisplay={mealsDisplay}
            // setMealsDisplay={setMealsDisplay}
            // createCartToLocalStorage={createCartToLocalStorage}
            updateCartToLocalStorage={updateCartToLocalStorage}
            deleteItemToLocalStorage={deleteItemToLocalStorage}
            handleCartNumber={handleCartNumber}
          />
          {/* 步驟二 */}
          <ChaCartStepCardStep2
            memberSid={memberSid}
            setMemberSid={setMemberSid}
            name={name}
            setName={setName}
            mobile={mobile}
            setMobile={setMobile}
            county={county}
            setCounty={setCounty}
            district={district}
            setDistrict={setDistrict}
            address={address}
            setAddress={setAddress}
            beastieCoin={beastieCoin}
            setBeastieCoin={setBeastieCoin}
            takeDate={takeDate}
            setTakeDate={setTakeDate}
            takeWay={takeWay}
            setTakeWay={setTakeWay}
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
            meals={meals}
            // mealsDisplay={mealsDisplay}
            // step2
            memberSid={memberSid}
            name={name}
            mobile={mobile}
            takeWay={takeWay}
            address={address}
            beastieCoin={beastieCoin}
            takeDate={takeDate}
            takeTime={takeTime}
            handleCartNumber={handleCartNumber}
            {...props}
          />
        </aside>
      </div>
    </>
  );
}
export default ChaCart;
