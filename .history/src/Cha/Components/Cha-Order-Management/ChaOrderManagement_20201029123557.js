import React, { useState, useEffect } from 'react';
import './ChaOrderManagement.scss';
function ChaOrderManagement(props) {
  return (
    <>
      <div className="cha-order-mana-content-container col-9">
        <div className="cha-order-mana-content-row1">
          <div style={{ color: '#F48145' }}>未送達</div>
          <div>已送達</div>
          <div>已退費</div>
          <div>揪團中</div>
        </div>
        <div className="cha-order-mana-content-row2">
          <div className="cha-order-mana-border"></div>
        </div>
        <div className="cha-order-mana-not-arrived-content-row3">
          <div className="cha-order-mana-not-arrived-picture"></div>
          <div className="cha-order-mana-not-arrived-content-row3-1">
            <div className="cha-order-mana-not-arrived-content-row3-1-1">
              <div className="cha-order-mana-not-arrived-content-row3-1-1-1">
                <span>
                  <span> 訂單編號: </span>
                  <span> </span>
                  <span> A11111 </span>
                </span>
                <span> | </span>
                <span>
                  <span> 訂單金額: </span>
                  <span> </span>
                  <span> $999 </span>
                </span>
                <span> | </span>
                <span>
                  <span> 訂單狀態: </span>
                  <span> </span>
                  <span> A11111</span>
                </span>
                <span> |</span>
              </div>
              <div className="cha-order-mana-not-arrived-content-row3-1-1-1"></div>
            </div>
            <div className="cha-order-mana-not-arrived-content-row3-1-2">
              <span> 訂購時間: </span>
              <span> 2020/07/16 </span>
              <span> 11:23:40 </span>
              <span> | </span>
              <span> 取餐時間: </span>
              <span> 2020/07/16 </span>
              <span> 11:23:40 </span>
            </div>

            <div className="cha-order-mana-not-arrived-content-row3-1-3">
              <span> 取餐地址: </span>
              <span> 台北市大安區復興南路一段390號2樓 </span>
            </div>
            <div className="cha-order-mana-not-arrived-content-row3-1-4">
              <span> 訂單明細 </span>
              <span> 用餐評價 </span>
              <span> 查閱發票 </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChaOrderManagement;
