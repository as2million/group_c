import React, { useState, useEffect } from 'react'
import Counter from 'Cha/Components/Cha-Counter/Counter'
import 'Cha/Pages/Cha-Counter/ChaCart.scss'

function ChaCart(props) {
  return (
    <>
      <div className="progress-bar"></div>
      <div className="wrap">
        <main className="main-card">
          <div className="step1-header">步驟1：餐點明細</div>

          <div className="order">
            <div className="product-pic"></div>
            <div className="step1-content">
              <div className="step1-product-name">慢煮嫩雞胸-蒜味香草 </div>
              <div className="step1-product-price">$150</div>
            </div>
            <Counter />
            <img
              className="trash-can-gray"
              src="./Images/trash-can-gray.svg"
              alt=""
            />
          </div>
          <div className="step1-total-price">
            <div className="step1-total-price-word">小計</div>
            <div className="step1-total-price-number">$1368</div>
          </div>
        </main>
        <aside className="aside-card">
          <div className="step1-header">購物清單</div>
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
          <div className="divider"></div>
          <div className="tableware">
            <div>
              <lab>
                <input type="radio" name="gender" value="male" />
                附餐具
              </lab>
              <lab>
                <input type="radio" name="gender" value="female" />
                不附餐具
              </lab>
            </div>
          </div>
          <div className="divider"></div>
          <div className="shopping-list-total">
            <div>總計</div>
            <div className="shopping-list-total-number">$3333</div>
          </div>
          <div className="btn">
            <input type="button" value="送出" className="shopping-cart-btn" />
          </div>
        </aside>
      </div>
    </>
  )
}
export default ChaCart
