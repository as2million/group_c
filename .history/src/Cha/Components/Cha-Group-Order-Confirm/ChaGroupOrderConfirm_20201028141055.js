import React, { useState, useEffect } from 'react'

import './ChaGroupOrderConfirm.scss'

function ChaGroupOrderConfirm(props) {
  return (
    <>
      <div className="cha-bc-lunch-box">
        <div className="cha-group-cocard">
          <div className="cha-group-coheader-div">
            <div className="cha-group-confirm-logo"></div>
          </div>
          <div className="cha-horizontal-line"></div>

          {/* 手機號碼 */}
          <div className="form-group cha-group-cophone">
            <label htmlFor="cha-group-cophone">手機號碼</label>
            <input
              type="text"
              className="form-control"
              id="cha-group-cophone"
              name="cha-group-cophone"
            />
          </div>

          {/* 提交按鈕 */}
          <div className="cha-group-cobtn-div">
            <input
              type="button"
              value="確認"
              className="cha-group-cobtn"
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default ChaGroupOrderConfirm
