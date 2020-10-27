import React, { useState, useEffect } from 'react'
import ChaOrder from 'Cha/Components/Cha-Order/ChaOrder'
import './ChaCartStepCardStep1.scss'

function ChaCartStepCardStep1(props) {
  return (
    <>
      <div className="main-card main-card-step1">
        <div className="step-header">步驟1：餐點明細</div>
        <ChaOrder />
        <ChaOrder />
        <ChaOrder />
        <ChaOrder />
        <ChaOrder />
        <ChaOrder />
        <ChaOrder />
        <ChaOrder />
        <ChaOrder />
        <div className="horizontal-line"></div>
        <div className="step1-total-price">
          <div className="step1-total-price-word">小計</div>
          <div className="step1-total-price-number">$1368</div>
        </div>
        {/* 確認按鈕 */}
        <div className="step-check-btn-div">
          <input type="button" value="確認" className="step-check-btn" />
        </div>
        <div className="horizontal-line"></div>
        <div className="step1-promotion-header-div">
          <div className="step1-promotion-header">你可能還想來點</div>
        </div>
        <div className="step1-promotion-row">
          <div className="step1-promotion-picture"></div>
          <div className="step1-promotion-picture"></div>
          <div className="step1-promotion-picture"></div>
        </div>
      </div>
    </>
  )
}
export default ChaCartStepCardStep1
