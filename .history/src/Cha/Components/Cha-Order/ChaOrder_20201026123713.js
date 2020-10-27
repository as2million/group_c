import React, { useState, useEffect } from 'react'
import Counter from 'Cha/Components/Cha-Counter/Counter'
// import TrashCanGray from 'Cha/Components/Cha-Order/Images/trash-can-gray.svg'
import './ChaOrder.scss'
function ChaOrder(props) {
  return (
    <>
      <div className="cha-order">
        <div className="cha-product-pic"></div>
        <div className="cha-step1-content">
          <div className="cha-step1-product-name">慢煮嫩雞胸-蒜味香草 </div>
          <div className="cha-step1-product-price">$150</div>
        </div>
        <Counter />
        {/* <img className="cha-trash-can-gray" src={TrashCanGray} alt="" /> */}
        <div className="a"></div>
      </div>
    </>
  )
}
export default ChaOrder
