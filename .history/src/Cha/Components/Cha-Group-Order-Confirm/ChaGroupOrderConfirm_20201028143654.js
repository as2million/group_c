import React, { useState, useEffect } from 'react';

import './ChaGroupOrderConfirm.scss';

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
            加入揪團成功，如要購買，請點選「加入餐點」紐進行購買
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
  );
}
export default ChaGroupOrderConfirm;
