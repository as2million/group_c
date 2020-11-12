import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'Cha/Components/Cha-Cart-Submit-Card/ChaCartSubmitCard.scss';
// import RequestToServer from 'Cha/RequestToServer';

function ChaCartSubmitCard(props) {
  const { 
    mealsDisplay,  
    memberSid,
    name,
    mobile,
    address,
    beastieCoin,
    takeDate,
    takeTime} = props;



  const [shipping, setShipping] = useState(0);
  const [beastieCoin, setBeastieCoin] = useState(60);
  const [tableware, setTableware] = useState('');
  // const [submitData, setSubmitData] = useState({});
  const [error, setError] = useState(null);
  // 計算商品總量
  const calcuTotalAmount = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].productAmount;
    }
    return total;
  };
  let totalAmount = calcuTotalAmount(mealsDisplay);

  // 計算商品價格小計
  const calcuSubtotalPrice = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].productAmount * items[i].productPrice;
    }
    return total;
  };
  let subtotalPrice = calcuSubtotalPrice(mealsDisplay);

  useEffect(() => {
    // 運費的商業邏輯
    if (totalAmount > 0 && totalAmount <= 2) {
      setShipping(50);
    } else {
      setShipping(0);
    }
  }, [totalAmount]);
  // 計算總價
  let totalPrice =
    subtotalPrice + shipping - (totalAmount > 0 ? beastieCoin : 0);

  // 彙整要POST的資料
  const aa = {
    total_amount: totalAmount,
    subtotal_price: subtotalPrice,
    total_price: totalPrice,
    shipping: shipping,
    beastie_coin: beastieCoin,
    tableware: tableware,
  };

  // 要給訂單明細的資料
  const bb = {
    sid: 8,
    order_sid: 1,
    product_sid: 111,
    product_amount: 11,
    product_name: '玫瑰岩鹽烤雞',
    product_price: 150,
  };
  // RequestToServer(
  //   url,
  //   method = 'GET',
  //   bodyData = '', //bodyData 必需為 json 字串
  //   verify = () => true,
  //   successCallback = () => {},
  //   failCallback = () => {},
  //   debug = false
  // )

  // 彙整要POST的資料
  // setStep2Data({
  //   member_sid: memberSid,
  //   name: name,
  //   mobile: mobile,
  //   address: address,
  //   beastie_coin: beastieCoin,
  //   take_date: startDate,
  //   take_time: takeTime,
  // });

  // 載入資料用
  async function updateTotalToServer(value) {
    const bodyData = {};

    const url = 'http://localhost:5555/counter/1';

    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(bodyData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });

    try {
      const response = await fetch(request);
      const data = await response.json();
      // data會是一個物件值
      console.log(data);
    } catch (error) {
      setError(error);
    }
  }
  return (
    <>
      <div className="cha-aside-card-fake"></div>
      <div className="cha-aside-card">
        <div className="cha-step-header">
          購物清單
          <Link to="/cha_farmer_cart" className="cha-control-normal-switch">
            <button className="cha-control-normal-switch cha-farmer-cart-switch">
              小農購物車
            </button>
          </Link>
          <button className="cha-normal-cart-switch" disabled>
            訂餐購物車
          </button>
        </div>
        <div className="cha-little-total">
          <div>
            小計 X <span>{totalAmount}</span>
          </div>
          <div>${subtotalPrice}</div>
        </div>

        <div className="cha-shipping">
          <div>運費</div>
          <div>${shipping}</div>
        </div>
        <div className="cha-shipping">
          <div className="form-group">
            <input
              type="checkbox"
              name="cha-monster-coin"
              value="cha-monster-coin"
              id="cha-monster-coin"
            />
            <labe htmlFor="cha-monster-coin">使用怪獸幣</labe>
          </div>
          <div>-${beastieCoin}</div>
        </div>
        <div className="cha-horizontal-line"></div>
        <div className="cha-tableware">
          <div>
            <lab>
              <input
                type="radio"
                name="tableware"
                value="yes"
                onChange={(e) => {
                  setTableware(e.target.value);
                }}
                checked={tableware === 'yes'}
              />
              附餐具
            </lab>
            <lab>
              <input
                type="radio"
                name="tableware"
                value="no"
                onChange={(e) => {
                  setTableware(e.target.value);
                }}
                checked={tableware === 'no'}
              />
              不附餐具
            </lab>
          </div>
        </div>
        <div className="cha-horizontal-line"></div>
        <div className="cha-shopping-list-total">
          <div>總計</div>
          <div className="cha-shopping-list-total-number">${totalPrice}</div>
        </div>
        {/* 提交按鈕 */}
        <div className="cha-shopping-cart-btn-div">
          <Link to="/cha_cart_order_success">
            <input
              type="button"
              value="送出"
              className="cha-shopping-cart-btn"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
export default ChaCartSubmitCard;
