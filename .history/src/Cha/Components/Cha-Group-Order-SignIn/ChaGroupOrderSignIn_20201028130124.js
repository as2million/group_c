import React, { useState, useEffect } from 'react'

import './ChaGroupOrderSignIn.scss'

function ChaGroupOrderSignIn(props) {
  return (
    <>
      <div className="cha-bc-lunch-box">
        <div className="cha-group-sign-in-card">
          <div className="cha-group-sign-in-header">登入 / 註冊</div>
          <div className="cha-horizontal-line"></div>
        </div>
        {/* 手機號碼 */}
        <div className="form-group">
          <label htmlFor="cha-step2-2-phone">手機號碼</label>
          <input
            type="text"
            className="form-control cha-step2-2-phone"
            id="cha-step2-2-phone"
            name="cha-step2-2-phone"
          />
        </div>
      </div>
    </>
  )
}
export default ChaGroupOrderSignIn
