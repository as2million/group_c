import React, { useState, useEffect } from 'react'
import ChaCartMealLi from 'Cha/Components/Cha-Cart-Step-Card-Step1/Cha-Cart-Meal-Item/ChaCartMealLi'
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
    const newTodos = todos.filter((item, index) => item.id !== id)
    // 設定回原本的todos
    setTodos(newTodos)
  }

  // 利用id值尋找對應的item的索引值，然後改變completed值
  const handleCompleted = (id) => {
    // 先複製一個新的todos陣列
    const newTodos = [...todos]

    // 利用id值尋找對應的item的索引值
    const todoItemIndex = newTodos.findIndex((item) => item.id === id)

    // 如果尋找到的索引值不是-1時，代表有找到索引值
    if (todoItemIndex !== -1) {
      // 布林值 true變false，false變true
      newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed

      // 設定回原本的todos
      setTodos(newTodos)
    }
  }
  return (
    <>
      <div className="cha-main-card cha-main-card-step1">
        <div className="cha-step-header">步驟1：餐點明細</div>
        {/* 餐點項目 */}
        {cartMeals.map((value, index) => (
          <ChaCartMealLi
            key={value.text}
            productName={value.productName}
            productPrice={value.productPrice}
            productAmount={value.productAmount}
          />
        ))}
        {/* {chaCartOrders.map((_, index) => (
          <ChaOrder key={index} />
        ))} */}
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
