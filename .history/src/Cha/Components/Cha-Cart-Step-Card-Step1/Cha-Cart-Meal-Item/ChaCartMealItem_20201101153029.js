import React, { useState, useEffect } from 'react'
import Counter from 'Share/Components/Counter/Counter'
import './ChaCartMealItem.scss'
function ChaCartMealItem(props) {
  const { productName, setTodoInput, todos, setTodos } = props  
  return (
    <>
      <div className="cha-order">
        <div className="cha-order-right">
          <div className="cha-product-pic"></div>
          <div className="cha-step1-content">
            <div className="cha-step1-product-name">慢煮嫩雞胸-蒜味香草 </div>
            <div className="cha-step1-product-price">$150</div>
          </div>
        </div>
        <div className="cha-order-left">
          <Counter />
          <div className="cha-trash-can"></div>
        </div>
      </div>
    </>
  )
}
export default ChaCartMealItem


{cartMealItem.map((value, index) =>
  <ChaCartMealItem key={value.text} productName={value.productName} productPrice={value.productPrice} productAmount={value.productAmount}/>
)
}