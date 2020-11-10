import React, { useState } from 'react';
import './ChaOrderItem.scss';
function ChaOrderItem(props) {
  const { orderData } = props;
  return (
    <>
      <div className="cha-order-row">
        <div className="cha-order-column1-picture"></div>
        <div className="cha-order-column2">
          <div className="cha-order-column2-row1">
            <span>
              <span> 訂單編號: </span>
              <span> </span>
              <span className="cha-order-orange"> A11111 </span>
            </span>
            <span className="cha-order-divider"> | </span>
            <span>
              <span> 訂單金額: </span>
              <span> </span>
              <span className="cha-order-orange"> $999 </span>
            </span>
            <span className="cha-order-divider"> | </span>
            <span>
              <span> 訂單狀態: </span>
              <span> </span>
              <span className="cha-order-orange">火速運送中</span>
            </span>
          </div>
          <div className="cha-order-column2-row2">
            <span> 取餐聯絡人: </span>
            <span> 林凱特 </span>
          </div>
          <div className="cha-order-column2-row3">
            <span> 取餐時間: </span>
            <span> 2020/07/16 </span>
            <span> 11:23:40 </span>
            <span className="cha-order-divider"> | </span>
            <span> 取餐方式: </span>
            <span> 自取 </span>
          </div>

          <div className="cha-order-column2-row4">
            <span>
              <span> 取餐地址: </span>
              <span> 台北市大安區復興南路一段390號2樓 </span>
            </span>
          </div>
          <div className="cha-order-column2-row5">
            <span> 訂單明細 </span>
            <span> 用餐評價 </span>
            <span> 查閱發票 </span>
            {/* <span> 怪獸對決 </span> */}
          </div>
        </div>

        <div className="cha-order-column3-btn">
          <div className="cha-order-in-column3-control-height">
            <input type="button" value="再次訂購" />
            <input type="button" value="加入點餐" />
            <input type="button" value="分享連結" />
            <input type="button" value="收單" />
            {/* <input type="button" value="取消/退費" className="cha-order-btn-858585" /> */}
          </div>
        </div>
      </div>
      {/* //////////// 我的訂單
      // // 訂單編號
      // setOrderSidMyOrder(orderData[46].sid);
      // // 訂單狀態
      // setOrderStateMyOrder(orderData[46].order_state);
      // // 取餐人
      // setTakePersonMyOrder(orderData[46].take_person);
      // // 取餐日期
      // setTakeDateMyOrder(orderData[46].take_date);
      // // 取餐時間
      // setTakeTimeMyOrder(orderData[46].take_time);
      // //取餐方式
      // setTakeWayMyOrder(orderData[46].take_way);
      // // 取餐地址
      // setAddressMyOrder(orderData[46].take_address);
      // // 訂單金額
      // setTotalPriceMyOrder(orderData[46].total_price);
      // //////////// 我的訂單明細
      // // 商品編號
      // setProductSidDetail(orderData[46].order_detail[0].product_sid);
      // // 商品名稱
      // setProductNameDetail(orderData[46].order_detail[0].product_name);
      // // 商品價格
      // setProductPriceDetail(orderData[46].order_detail[0].product_price);
      // // 商品數量
      // setProductAmountDetail(orderData[46].order_detail[0].product_amount);
      // // 訂單小計
      // setSubtotalPriceDetail(orderData[46].subtotal_price);
      // // 怪獸幣
      // setBeastieCoinDetail(orderData[46].beastie_coin);
      // // 運費
      // setShippingDetail(orderData[46].shipping); */}
      <h1>★★我的訂單</h1>
      {/* <h1>訂單編號：AAA{orderData[46].sid}</h1>
          <h1>訂單狀態：{orderStateMyOrder}</h1>
          <h1>取餐人：{takePersonMyOrder}</h1>
          <h1>取餐日期：{takeDateMyOrder}</h1>
          <h1>取餐時間：{takeTimeMyOrder}</h1>
          <h1>取餐方式：{takeWayMyOrder}</h1>
          <h1>取餐地址：{addressMyOrder}</h1>
          <h1>訂單金額：{totalPriceMyOrder}</h1>
          <h1>★★定單明細</h1>
          {/* <h1>訂單編號：{orderSidMyOrder}</h1> */}
      {/* <h1>商品編號：{productSidDetail}</h1>
          <h1>商品名稱：{productNameDetail}</h1>
          <h1>商品價格：{productPriceDetail}</h1>
          <h1>商品數量：{productAmountDetail}</h1>*/}
      <h1>訂單小計：{orderData[46].subtotal_price}</h1>
      <h1>怪獸幣：{orderData[46].beastie_coin}</h1>
      <h1>運費：{orderData[46].shipping}</h1>
      <h1>訂單總額：{totalPriceMyOrder}</h1>{' '}
    </>
  );
}
export default ChaOrderItem;
