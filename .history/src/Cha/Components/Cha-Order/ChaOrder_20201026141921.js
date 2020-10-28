import React, { useState, useEffect } from 'react'
import Counter from 'Cha/Components/Cha-Counter/Counter'
import './ChaOrder.scss'
function ChaOrder(props) {
  return (
    <>
      <div className="cha-order">
        <div className="cha-order">
          <div className="cha-product-pic"></div>
          <div className="cha-step1-content">
            <div className="cha-step1-product-name">慢煮嫩雞胸-蒜味香草 </div>
            <div className="cha-step1-product-price">$150</div>
          </div>
        </div>
        <div className="cha-order">
          <Counter />
          <div className="cha-trash-can"></div>
        </div>
      </div>
    </>
  )
}
export default ChaOrder
