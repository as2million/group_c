import React, { useState } from 'react'
import './IrisSuccessBox.scss'

function IrisSuccessBox(props) {
  return (
    <>
      <div class="iris-success-checkmark">
        <div class="iris-check-icon">
          <span class="icon-line line-tip"></span>
          <span class="icon-line line-long"></span>
          <div class="icon-circle"></div>
          <div class="icon-fix"></div>
        </div>
        <div class="iris-login-sucess">登入成功</div>
      </div>
    </>
  )
}

export default IrisSuccessBox
