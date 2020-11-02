import React, { useState, useEffect } from 'react'
import Counter from 'Cha/Components/Cha-Cart-Step-Card-Step1/Counter/Counter'
import './ChaCartMealList.scss'
function ChaCartMealList(props) {
  const { productName, productPrice, productAmount, deleteMethod } = props
  return (
    <>
      <div className="cha-order">
        <div className="cha-order-right">
          <div className="cha-product-pic"></div>
          <div className="cha-step1-content">
            <div className="cha-step1-product-name">{productName}</div>
            <div className="cha-step1-product-price">${productPrice}</div>
          </div>
        </div>
        <div className="cha-order-left">
          <Counter
            productAmount={productAmount}
            // handleEditedToggle={handleEditedToggle}
            // handleCompleted={handleCompleted}
            // handleDelete={handleDelete}
            // handleEditedSave={handleEditedSave}
          />
          <div className="cha-trash-can" onClick={deleteMethod}></div>
        </div>
      </div>
    </>
  )
}
export default ChaCartMealList

// {cartMealItem.map((value, index) =>
//   <ChaCartMealList key={value.text} productName={value.productName} productPrice={value.productPrice} productAmount={value.productAmount}/>
// )
// }
