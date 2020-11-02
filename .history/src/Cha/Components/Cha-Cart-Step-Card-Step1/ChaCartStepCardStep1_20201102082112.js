import React, { useState, useEffect } from 'react'
import ChaCartMealList from 'Cha/Components/Cha-Cart-Step-Card-Step1/Cha-Cart-Meal-List/ChaCartMealList'
import './ChaCartStepCardStep1.scss'

function ChaCartStepCardStep1(props) {
  // 將每個待辨事項改為物件值
  // { id, text: string, completed: bool }
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
  // // const chaCartOrders = Array.from({ length: 10 })

  const handleDelete = (id) => {
    //建立一個新的陣列，其中"不包含要被移除的項目(用filter)
    const newCartMeals = cartMeals.filter((item, index) => item.id !== id)

    setCartMeals(newCartMeals)
  }

  // const handleCount = (id,type) => {
  //   newCartMeals = [...cartMeals]
  //   const todoItemIndex = newCartMeals.findIndex((item) => item.id === id)
  //   if (todoItemIndex !== -1) {
    // if (type === 'increment') {
      //     newCartMeals[todoItemIndex].amount + 1
      //   }
      //   if (type === 'decrement' && count > 1) {
      //     setCount(count - 1)
      //   }
  //     newCartMeals[todoItemIndex].amount + 1
  //         setCartMeals(newCartMeals)
  //   }
  // }
  // (type) => {
  //   if (type === 'increment') {
  //     setCount(count + 1)
  //   }
  //   if (type === 'decrement' && count > 1) {
  //     setCount(count - 1)
  //   }
  // }
  return (
    <>
      <div className="cha-main-card cha-main-card-step1">
        <div className="cha-step-header">步驟1：餐點明細</div>
        {/* 餐點項目 */}
        {cartMeals.map((item, index) => (
          <ChaCartMealList
            key={item.id}
            id={item.id}
            productName={item.productName}
            productPrice={item.productPrice}
            productAmount={item.productAmount}
            deleteMethod={() => handleDelete(item.id)}
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
