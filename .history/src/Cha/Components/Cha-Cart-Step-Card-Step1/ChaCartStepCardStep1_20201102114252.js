import React, { useState, useEffect } from 'react'
import ChaCartMealList from 'Cha/Components/Cha-Cart-Step-Card-Step1/Cha-Cart-Meal-List/ChaCartMealList'
import './ChaCartStepCardStep1.scss'

function ChaCartStepCardStep1(props) {
  const [cartMeals, setCartMeals] = useState([
    {
      id: 1,
      productName: '慢煮嫩雞胸-蒜味香草1',
      productPrice: 150,
      productAmount: 1,
    },
    {
      id: 2,
      productName: '慢煮嫩雞胸-蒜味香草2',
      productPrice: 160,
      productAmount: 2,
    },
    {
      id: 3,
      productName: '慢煮嫩雞胸-蒜味香草3',
      productPrice: 170,
      productAmount: 3,
    },
    {
      id: 4,
      productName: '慢煮嫩雞胸-蒜味香草4',
      productPrice: 180,
      productAmount: 4,
    },
    {
      id: 5,
      productName: '慢煮嫩雞胸-蒜味香草5',
      productPrice: 190,
      productAmount: 5,
    },
    {
      id: 6,
      productName: '慢煮嫩雞胸-蒜味香草6',
      productPrice: 200,
      productAmount: 6,
    },
  ])
  // 刪除商品選項
  const handleDelete = (id) => {
    const newCartMeals = cartMeals.filter((item, index) => item.id !== id)
    setCartMeals(newCartMeals)
  }
  // 計數器加減功能
  const handleCount = (id, type) => {
    const newCartMeals = [...cartMeals]
    const todoItemIndex = newCartMeals.findIndex((item) => item.id === id)
    if (todoItemIndex !== -1) {
      if (type === 'increment') {
        newCartMeals[todoItemIndex].productAmount += 1
        // setCartMeals(newCartMeals)
      }
      if (
        type === 'decrement' &&
        newCartMeals[todoItemIndex].productAmount > 1
      ) {
        newCartMeals[todoItemIndex].productAmount -= 1
      }
      setCartMeals(newCartMeals)
    }
  }
  // 計算總價用的函式
  const sum = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }
  return (
    <>
      <div className="cha-main-card cha-main-card-step1">
        <div className="cha-step-header">步驟1：餐點明細</div>
        {/* 餐點項目 */}
        {cartMeals.map((item, index) => (
          <ChaCartMealList
            key={item.id}
            mealsItem={item}
            deleteMethod={() => handleDelete(item.id)}
            handleCount={handleCount}
          />
        ))}
        <div className="cha-horizontal-line"></div>
        <div className="cha-step1-total-price">
          <div className="cha-step1-total-price-word">小計</div>
          <div className="cha-step1-total-price-number">$1368</div>
        </div>
        {/* 確認按鈕 */}
        {/* <div className="cha-step-check-btn-div">
          <input type="button" value="確認" className="cha-step-check-btn" />
        </div> */}
        <div className="cha-horizontal-line"></div>
        <div className="cha-step1-promotion-header-div">
          <div className="cha-step1-promotion-header">你可能還想來點</div>
        </div>
        <div className="cha-step1-promotion-row">
          <div className="cha-step1-promotion-picture"></div>
          <div className="cha-step1-promotion-picture"></div>
          <div className="cha-step1-promotion-picture"></div>
        </div>
      </div>
    </>
  )
}
export default ChaCartStepCardStep1
