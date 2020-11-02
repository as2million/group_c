import React, { useState, useEffect } from 'react'
import Counter from 'Share/Components/Counter/Counter'
import './ChaOrder.scss'
function ChaCartI(props) {
  // 將每個待辨事項改為物件值
  // { id, text: string, completed: bool }
  const [todos, setTodos] = useState([
    { id: 1, text: '買iphone 12', completed: false },
    { id: 2, text: '學好react', completed: true },
  ])
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
export default ChaOrder
