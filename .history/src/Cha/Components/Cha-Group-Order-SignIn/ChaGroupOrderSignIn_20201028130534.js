import React, { useState, useEffect } from 'react'

import './ChaGroupOrderSignIn.scss'

function ChaGroupOrderSignIn(props) {
  return (
    <>
      <div className="cha-bc-lunch-box">
        <div className="cha-group-sign-in-card">
          <div className="cha-group-sign-in-header-div">
            <div className="cha-group-sign-in-header">登入 / 註冊</div>
          </div>
          <div className="cha-horizontal-line"></div>

          {/* 手機號碼 */}
          <div className="form-group">
            <label htmlFor="">手機號碼</label>
            <input type="text" className="form-control" id="" name="" />
          </div>

          {/* 提交按鈕 */}
          <div className="cha-step-check-btn-div">
            <input type="button" value="確認" className="cha-step-check-btn" />
          </div>
        </div>
      </div>
    </>
  )
}
export default ChaGroupOrderSignIn
