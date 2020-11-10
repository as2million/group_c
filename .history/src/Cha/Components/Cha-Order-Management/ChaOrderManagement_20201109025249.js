import React, { useState, useEffect } from 'react';
import './ChaOrderManagement.scss';
import ChaOrderManagementNotArrived from './../Cha-Order-Management-NotArrived/ChaOrderManagementNotArrived';
import ChaOrderManagementArrived from './../Cha-Order-Management-Arrived/ChaOrderManagementArrived';
import ChaOrderManagementRefund from './../Cha-Order-Management-Refund/ChaOrderManagementRefund';
import ChaOrderManagementGrouping from './../Cha-Order-Management-Grouping/ChaOrderManagementGrouping';

function ChaOrderManagement(props) {
  //////////// 我的訂單
  // 訂單編號
  const [orderSidMyOrder, setOrderSidMyOrder] = useState();
  // 訂單狀態
  const [orderStateMyOrder, setOrderStateMyOrder] = useState();
  // 取餐人
  const [takePersonMyOrder, setTakePersonMyOrder] = useState();
  // 取餐日期
  const [takeDateMyOrder, setTakeDateMyOrder] = useState();
  // 取餐時間
  const [takeWayMyOrder, setTakeWayMyOrder] = useState();
  //取餐方式
  const [takeTimeMyOrder, setTakeTimeMyOrder] = useState();
  // 取餐地址
  const [addressMyOrder, setAddressMyOrder] = useState();
  // 訂單金額
  const [totalPriceMyOrder, setTotalPriceMyOrder] = useState();
  //////////// 我的訂單明細
  // 商品編號
  const [productSidDetail, setProductSidDetail] = useState();
  // 商品名稱
  const [productNameDetail, setProductNameDetail] = useState();
  // 商品價格
  const [productPriceDetail, setProductPriceDetail] = useState();
  // 商品數量
  const [productAmountDetail, setProductAmountDetail] = useState();
  // 訂單小計
  const [subtotalPriceDetail, setSubtotalPriceDetail] = useState();
  // 怪獸幣
  const [beastieCoinDetail, setBeastieCoinDetail] = useState();
  // 運費
  const [shippingDetail, setShippingDetail] = useState();

  // 當前登入的會員id
  const [currentMemberSid, setCurrentMemberSid] = useState(0);

  const chaOrderManagements = Array.from({ length: 10 });
  // 未達成
  const ComponentA = (props) => {
    return (
      <>
        {chaOrderManagements.map((_, index) => (
          <ChaOrderManagementNotArrived key={index} />
        ))}
      </>
    );
  };
  // 已達成
  const ComponentB = (props) => {
    return (
      <>
        {chaOrderManagements.map((_, index) => (
          <ChaOrderManagementArrived key={index} />
        ))}
      </>
    );
  };
  // 已退費
  const ComponentC = (props) => {
    return (
      <>
        {chaOrderManagements.map((_, index) => (
          <ChaOrderManagementRefund key={index} />
        ))}
      </>
    );
  };
  // 已退費
  const ComponentD = (props) => {
    return (
      <>
        {chaOrderManagements.map((_, index) => (
          <ChaOrderManagementGrouping key={index} />
        ))}
      </>
    );
  };
  // 切換用函式
  const setTabActive = (addElem, removeName) => {
    let removeTargets = document.querySelectorAll(removeName);
    removeTargets.forEach((target) => {
      target.classList.remove('cha-active');
    });

    addElem.classList.add('cha-active');
  };
  const TabMenu = () => {
    const [orderComponent, setOrderComponent] = useState(<ComponentA />);

    const tabContentA = (e) => {
      setTabActive(e.target, '.cha-order-mana-title-switch');
      setOrderComponent(<ComponentA />);
    };

    const tabContentB = (e) => {
      setTabActive(e.target, '.cha-order-mana-title-switch');
      setOrderComponent(<ComponentB />);
    };
    const tabContentC = (e) => {
      setTabActive(e.target, '.cha-order-mana-title-switch');
      setOrderComponent(<ComponentC />);
    };
    const tabContentD = (e) => {
      setTabActive(e.target, '.cha-order-mana-title-switch');
      setOrderComponent(<ComponentD />);
    };

    // // GET會員資料
    // async function getMyOrder(paramsMemberId) {
    //   const url = `http://localhost:5000/cart-api/my-order/${paramsMemberId}`;

    //   const request = new Request(url, {
    //     method: 'GET',
    //     headers: new Headers({
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     }),
    //   });
    //   const response = await fetch(request);
    //   const dataMyOrder = await response.json();
    //   // data會是一個物件值
    //   console.log('dataMyOrder', dataMyOrder);
    //   // console.log(memberData);
    //   // setMemberData(data[0]);
    //   // setName(data[0].name);
    //   setNameMyOrder(dataMyOrder[0].take_person);
    //   setMobileMyOrder(dataMyOrder[0].mobile);
    //   // setTakeWay(data[0].take_way);
    //   setAddressMyOrder(dataMyOrder[0].take_address);
    //   setMemberSidMyOrder(dataMyOrder[0].sid);
    //   setBeastieCoinMyOrder(dataMyOrder[0].beastie_coin);
    //   setOrderStateMyOrder(dataMyOrder[0].order_state);
    //   getMyOrderDetail(dataMyOrder[0].sid);
    // }
    // // GET會員資料
    // async function getMyOrder() {
    //   const url = 'http://localhost:5000/cart-api/my-order';

    //   const request = new Request(url, {
    //     method: 'GET',
    //     headers: new Headers({
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     }),
    //   });
    //   const response = await fetch(request);
    //   const dataMyOrder = await response.json();
    //   // data會是一個物件值
    //   console.log(dataMyOrder);
    //   // console.log(memberData);
    //   // setMemberData(data[0]);
    //   // setName(data[0].name);
    //   setNameMyOrder(dataMyOrder[0].take_person);
    //   setMobileMyOrder(dataMyOrder[0].mobile);
    //   // setTakeWay(data[0].take_way);
    //   setAddressMyOrder(dataMyOrder[0].take_address);
    //   setMemberSidMyOrder(dataMyOrder[0].sid);
    //   setBeastieCoinMyOrder(dataMyOrder[0].beastie_coin);
    //   setOrderStateMyOrder(dataMyOrder[0].order_state);
    // }

    // // GET會員資料
    // async function getMyOrderDetail(paramsOrderId) {
    //   const url = `http://localhost:5000/cart-api/my-order-deatail/${paramsOrderId}`;

    //   const request = new Request(url, {
    //     method: 'GET',
    //     headers: new Headers({
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     }),
    //   });
    //   const response = await fetch(request);
    //   const dataMyOrderDetail = await response.json();

    //   console.log(dataMyOrderDetail);

    //   setOrderSidDetail(dataMyOrderDetail[0].order_sid);
    //   setProductSidDetail(dataMyOrderDetail[0].product_sid);
    //   setProductAmountDetail(dataMyOrderDetail[0].product_amount);
    //   setProductNameDetail(dataMyOrderDetail[0].product_name);
    //   setProductPriceDetail(dataMyOrderDetail[0].product_price);

    // GET會員資料
    async function getMyOrderAndMyOderDetail(paramsMemberId) {
      const url = `http://localhost:5000/cart-api/my-order-my-order-detail/${paramsMemberId}`;

      const request = new Request(url, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      });
      const response = await fetch(request);
      const dataAllOrder = await response.json();

      console.log(dataAllOrder[44].order_detail);

      //////////// 我的訂單
      // 訂單編號
      setOrderSidMyOrder(dataAllOrder[44].sid);
      // 訂單狀態
      setOrderStateMyOrder(dataAllOrder[44].order_state);
      // 取餐人
      setTakePersonMyOrder(dataAllOrder[44].take_person);
      // 取餐日期
      setTakeDateMyOrder(dataAllOrder[44].take_date);
      // 取餐時間
      setTakeTimeMyOrder(dataAllOrder[44].take_time);
      //取餐方式
      setTakeWayMyOrder(dataAllOrder[44].take_way);
      // 取餐地址
      setAddressMyOrder(dataAllOrder[44].take_address);
      // 訂單金額
      setTotalPriceMyOrder(dataAllOrder[44].total_price);
      //////////// 我的訂單明細
      // 商品編號
      setProductSidDetail(dataAllOrder[44].order_detail[0].product_sid);
      // 商品名稱
      setProductNameDetail(dataAllOrder[44].order_detail[0].product_name);
      // 商品價格
      setProductPriceDetail(dataAllOrder[44].order_detail[0].product_price);
      // 商品數量
      setProductAmountDetail(dataAllOrder[44].order_detail[0].product_amount);
      // 訂單小計
      setSubtotalPriceDetail(dataAllOrder[44].subtotal_price);
      // 怪獸幣
      setBeastieCoinDetail(dataAllOrder[44].beastie_coin);
      // 運費
      setShippingDetail(dataAllOrder[44].order_detail[0].shipping);
    }
    // "sid": 45,
    // "member_sid": 0,
    // "order_state": "未送達",
    // "order_name": "",
    // "total_amount": 48,
    // "subtotal_price": 6090,
    // "shipping": 0,
    // "beastie_coin": 0,
    // "tableware": "",
    // "total_price": 6090,
    // "take_date": "1899-11-29T16:00:00.000Z",
    // "take_time": "11:00 ~ 11:30",
    // "take_way": "1",
    // "take_address": "忠孝東路一段50號",
    // "take_person": "林凱特",
    // "mobile": "0910123456",
    // "receipt": "",
    // "created_at": "2020-11-08T09:57:28.000Z",
    // "order_detail": [
    //   {
    //     "sid": 109,
    //     "member_sid": 0,
    //     "order_sid": 45,
    //     "product_sid": 4,
    //     "product_amount": 30,
    //     "product_name": "超健康蔬果沙拉",
    //     "product_price": 110
    //   },
    //   {
    useEffect(() => {
      getMyOrderAndMyOderDetail(currentMemberSid);
    }, []);

    return (
      <>
        <div className="cha-order-mana-content-container col-9">
          <div className="cha-order-mana-content-row1">
            <div
              className="cha-order-mana-title-switch cha-active"
              onClick={tabContentA}
            >
              未送達
            </div>
            <div className="cha-order-mana-title-switch" onClick={tabContentB}>
              已送達
            </div>
            <div className="cha-order-mana-title-switch" onClick={tabContentC}>
              已退費
            </div>
            <div className="cha-order-mana-title-switch" onClick={tabContentD}>
              揪團中
            </div>
          </div>
          {/* <div className="cha-order-mana-content-row2"> */}
          <div className="cha-order-mana-border"></div>
          {/* </div> */}
          {/* <div>{orderComponent}</div> */}

          <h1>★★我的訂單</h1>
          <h1>訂單編號：AAA{orderSidMyOrder}</h1>
          <h1>訂單狀態：{orderStateMyOrder}</h1>
          <h1>取餐人：{takePersonMyOrder}</h1>
          <h1>取餐日期：{takeDateMyOrder}</h1>
          <h1>取餐時間：{takeTimeMyOrder}</h1>
          <h1>取餐方式：{takeWayMyOrder}</h1>
          <h1>取餐地址：{addressMyOrder}</h1>
          <h1>訂單金額：{totalPriceMyOrder}</h1>
          <h1>★★定單明細</h1>
          {/* <h1>訂單編號：{orderSidMyOrder}</h1> */}
          <h1>商品編號：{productSidDetail}</h1>
          <h1>商品名稱：{productNameDetail}</h1>
          <h1>商品價格：{productPriceDetail}</h1>
          <h1>商品數量：{productAmountDetail}</h1>
          <h1>訂單小計：{subtotalPriceDetail}</h1>
          <h1>怪獸幣：{beastieCoinDetail}</h1>
          <h1>運費：{shippingDetail}</h1>
          <h1>訂單總額：{totalPriceMyOrder}</h1>
        </div>
      </>
    );
  };
  return (
    <>
      <TabMenu />
    </>
  );
}
export default ChaOrderManagement;
