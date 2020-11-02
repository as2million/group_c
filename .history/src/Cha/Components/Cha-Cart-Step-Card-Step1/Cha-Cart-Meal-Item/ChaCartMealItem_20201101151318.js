import React, { useState, useEffect } from 'react'
import Counter from 'Share/Components/Counter/Counter'
import './ChaCartMealItem.scss'
function ChaCartMealItem(props) {
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


<ul>
{/* map使用時通常子元素會要求唯一key值(id值)  */}
{/* 這裡用id作為key值  */}
{/* 依照每個項目的completed來控制呈現的樣子  */}
{todos.map((value, index) =>
  value.completed ? (
    <li key={value.text}>
      <del>{value.text}</del>
    </li>
  ) : (
    <li key={value.text}>{value.text}</li>
  )
)}
</ul>