import React, { useState } from 'react';
function ChaOrderItem(props) {
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
    </>
  );
}
export default ChaOrderItem;
