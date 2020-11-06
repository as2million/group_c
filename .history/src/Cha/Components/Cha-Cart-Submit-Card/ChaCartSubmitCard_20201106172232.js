import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import 'Cha/Components/Cha-Cart-Submit-Card/ChaCartSubmitCard.scss';

function ChaCartSubmitCard(props) {
  const { mealsDisplay, step2Data } = props;
  const [shipping, setShipping] = useState(0);
  const [beastieCoin, setBeastieCoin] = useState(60);
  const [tableware, setTableware] = useState();
  const [submitData, setSubmitData] = useState({});

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
  setSubmitData({
    total_amount: totalAmount,
    subtotal_price: subtotalPrice,
    total_price: totalPrice,
    shipping: shipping,
    beastie_coin: beastieCoin,
    tableware: 'a',
  });

  //   "sid": 8,
  /////////////////   "order_sid": 1,
  /////////////////   "product_sid": 111,
  /////////////////   "product_amount": 11,
  //   "product_name": "玫瑰岩鹽烤雞",
  //   "product_price": 150
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
                  setGender(e.target.value);
                }}
              />
              附餐具
            </lab>
            <lab>
              <input
                type="radio"
                name="tableware"
                value="no"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              不附餐具
            </lab>
            <input
              type="radio"
              value="male"
              onChange={(e) => {
                setGender(e.target.value);
              }}
              checked={gender === 'male'}
            />
            <label>Female</label>
            <input
              type="radio"
              value="female"
              onChange={(e) => {
                setGender(e.target.value);
              }}
              checked={gender === 'female'}
            />{' '}
            */}
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
