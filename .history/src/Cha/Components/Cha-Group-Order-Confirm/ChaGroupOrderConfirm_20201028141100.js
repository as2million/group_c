import React, { useState, useEffect } from 'react'

import './ChaGroupOrderConfirm.scss'

function ChaGroupOrderConfirm(props) {
  return (
    <>
      <div className="cha-bc-lunch-box">
        <div className="cha-group-confirm-card">
          <div className="cha-group-confirm-header-div">
            <div className="cha-group-confirm-logo"></div>
          </div>
          <div className="cha-horizontal-line"></div>

          {/* 手機號碼 */}
          <div className="form-group cha-group-confirm-phone">
            <label htmlFor="cha-group-confirm-phone">手機號碼</label>
            <input
              type="text"
              className="form-control"
              id="cha-group-confirm-phone"
              name="cha-group-confirm-phone"
            />
          </div>

          {/* 提交按鈕 */}
          <div className="cha-group-confirm-btn-div">
            <input
              type="button"
              value="確認"
              className="cha-group-confirm-btn"
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default ChaGroupOrderConfirm
