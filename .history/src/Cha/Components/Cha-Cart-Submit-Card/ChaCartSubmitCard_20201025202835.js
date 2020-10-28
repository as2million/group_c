import React, { useState, useEffect } from 'react'
import 'Cha/Components/Cha-Cart-Submit-Card/ChaCartSubmitCard.scss'

function ChaCartSubmitCard(props) {
  return (
    <>
      <aside>
        <div className="aside-card-fake"></div>
        <div className="aside-card">
          <div className="step-header">購物清單</div>
          <div className="little-total">
            <div>
              小計 X <span>$10</span>
            </div>
            <div>$1351</div>
          </div>

          <div className="shipping">
            <div>運費</div>
            <div>$1351</div>
          </div>
          <div className="shipping">
            <div>使用怪獸幣</div>
            <div>-$50</div>
          </div>
          <div className="horizontal-line"></div>
          <div className="tableware">
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
          <div className="horizontal-line"></div>
          <div className="shopping-list-total">
            <div>總計</div>
            <div className="shopping-list-total-number">$3333</div>
          </div>
          <div className="shopping-cart-btn-div">
            <input type="button" value="送出" className="shopping-cart-btn" />
          </div>
        </div>
      </aside>
    </>
  )
}
export default ChaCartSubmitCard
