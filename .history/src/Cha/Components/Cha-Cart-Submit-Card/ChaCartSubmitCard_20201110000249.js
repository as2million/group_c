import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'Cha/Components/Cha-Cart-Submit-Card/ChaCartSubmitCard.scss';
// import RequestToServer from 'Cha/RequestToServer';
import ChaCartButton from './Cha-Cart-Button/ChaCartButton';
import { withRouter, useHistory } from 'react-router-dom';
function ChaCartSubmitCard(props) {
  const {
    // mealsDisplay,
    meals,
    memberSid,
    name,
    mobile,
    takeWay,
    address,
    beastieCoin,
    takeDate,
    takeTime,
  } = props;
  const [shipping, setShipping] = useState(0);
  const [tableware, setTableware] = useState('');
  // const [beastieCoin, setBeastieCoin] = useState(60);
  // const [totalAmount, setTotalAmount] = useState(0);
  // const [subtotalPrice, setSubtotalPrice] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(0);
  // fetch用
  const [error, setError] = useState(null);

  // 計算商品總量
  const calcuTotalAmount = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].productAmount;
    }
    return total;
  };
  let totalAmount = calcuTotalAmount(meals);
  // let totalAmount = calcuTotalAmount(mealsDisplay);
  // setTotalAmount(calcuTotalAmount(mealsDisplay));

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
  // setSubtotalPrice(calcuSubtotalPrice(mealsDisplay));

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
  // setTotalPrice(
  //   subtotalPrice + shipping - (totalAmount > 0 ? beastieCoin : 0)

  // 提交訂單後，清除localstorage
  const handleSubmitCartRemoveLocalStorage = () => {
    localStorage.removeItem('cart');
    const currentCartNumber =
      JSON.parse(localStorage.getItem('cartNumber')) || 0;
    const otherCart = currentCartNumber - totalAmount;
    localStorage.setItem('cartNumber', JSON.stringify(otherCart));
  };

  // 要POST給my_order的資料
  // {
  // order_state: "未送達",
  // step1餐點明細計算來的
  // step2：從會員資料表要來的
  //   member_sid: memberSid,
  //   take_person: name,
  //   mobile: mobile,
  //   take_address: address,
  //   beastie_coin: beastieCoin,
  // step2：用戶輸入的
  //   take_date: startDate,
  //   take_time: takeTime,
  // step4：購物清單
  // total_amount: totalAmount,
  // subtotal_price: subtotalPrice,
  // total_price: totalPrice,
  // shipping: shipping,
  // beastie_coin: beastieCoin,
  // tableware: tableware,
  //created_at: new Date()
  // }

  // POST給my_order的資料
  async function createToMyOrder() {
    const bodyData = {
      order_state: '未送達',
      member_sid: memberSid,
      take_person: name,
      mobile: mobile,
      take_way: takeWay,
      take_address: address,
      take_date: takeDate,
      take_time: takeTime,
      total_amount: totalAmount,
      subtotal_price: subtotalPrice,
      total_price: totalPrice,
      shipping: shipping,
      beastie_coin: beastieCoin,
      tableware: tableware,
      created_at: new Date(),
    };

    const url = 'http://localhost:5000/cart-api/my-order';

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
      const dataMyOrder = await response.json();
      createToMyOrderDetail(dataMyOrder.insertId);
      // data會是一個物件值
      console.log('my-order', dataMyOrder);
    } catch (error) {
      setError(error);
    }
  }

  // POST給my_order_detail的資料
  async function createToMyOrderDetail(orderSid) {
    // let myOrderDetailArray = mealsDisplay.map((item) => ({
    let myOrderDetailArray = meals.map((item) => ({
      member_sid: memberSid,
      // order_sid: dataMyOrder.insertId,
      order_sid: orderSid,
      product_sid: item.id,
      product_amount: item.productAmount,
      product_name: item.productName,
      product_price: item.productPrice,
    }));
    const url = 'http://localhost:5000/cart-api/my-order-detail';
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(myOrderDetailArray),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });

    try {
      const response = await fetch(request);
      const dataMyOrderDetail = await response.json();
      // data會是一個物件值
      console.log('my-order-detail', dataMyOrderDetail);
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
          <button
            className="cha-control-normal-switch cha-farmer-cart-switch"
            onClick={() => {
              props.history.push('/checkpoint');
            }}
          >
            小農購物車
          </button>
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
            <label htmlFor="cha-monster-coin">使用怪獸幣</label>
          </div>
          <div>-${beastieCoin}</div>
        </div>
        <div className="cha-horizontal-line"></div>
        <div className="cha-tableware">
          <div>
            <label>
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
            </label>
            <label>
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
            </label>
          </div>
        </div>
        <div className="cha-horizontal-line"></div>
        <div className="cha-shopping-list-total">
          <div>總計</div>
          <div className="cha-shopping-list-total-number">${totalPrice}</div>
        </div>
        {/* 提交按鈕 */}
        <div
          className="cha-shopping-cart-btn-div"
          onClick={() => {
            createToMyOrder();
            props.history.push('/orderManagement');
            handleSubmitCartRemoveLocalStorage();
          }}
        >
          <ChaCartButton
            text="送出"
            className="cha-shopping-cart-btn cha-submit-button-btn"
          />
        </div>
      </div>
    </>
  );
}
export default withRouter(ChaCartSubmitCard);
