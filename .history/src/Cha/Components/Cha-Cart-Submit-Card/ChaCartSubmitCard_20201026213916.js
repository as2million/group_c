import React, { useState, useEffect } from 'react'
import 'Cha/Components/Cha-Cart-Submit-Card/ChaCartSubmitCard.scss'

function ChaCartSubmitCard(props) {
  return (
    <>
      <div className="cha-aside-card-fake"></div>
      <div className="cha-aside-card">
        <div className="cha-step-header">
          購物清單
          <button className="cha-former-cart-switch">小農購物車</button>
          <button className="cha-normal-cart-switch" disabled>
            訂餐購物車
          </button>
        </div>
        <div className="cha-little-total">
          <div>
            小計 X <span>$10</span>
          </div>
          <div>$1351</div>
        </div>

        <div className="cha-shipping">
          <div>運費</div>
          <div>$1351</div>
        </div>
        <div className="cha-shipping">
          <labe><input type="checkbox" name="hobby" value="mus" />
          <div>使用怪獸幣</labe>
          <div>-$50</div>
        </div>
        <div className="cha-horizontal-line"></div>
        <div className="cha-tableware">
          <div>
            <lab>
              <input type="radio" name="tableware" value="tableware-yes" />
              附餐具
            </lab>
            <lab>
              <input type="radio" name="tableware" value="tableware-no" />
              不附餐具
            </lab>
          </div>
        </div>
        <div className="cha-horizontal-line"></div>
        <div className="cha-shopping-list-total">
          <div>總計</div>
          <div className="cha-shopping-list-total-number">$3333</div>
        </div>
        <div className="cha-shopping-cart-btn-div">
          <input type="button" value="送出" className="cha-shopping-cart-btn" />
        </div>
      </div>
    </>
  )
}
export default ChaCartSubmitCard
