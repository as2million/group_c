import React, { useState, useEffect } from 'react'

import ChaCartProgressBar from 'Cha/Components/Cha-Cart-ProgressBar/ChaCartProgressBar'
// import ChaOrder from 'Cha/Components/Cha-Order/ChaOrder'
import ChaCartSubmitCard from 'Cha/Components/Cha-Cart-Submit-Card/ChaCartSubmitCard'
import ChaCartStepCardStep1 from 'Cha/Components/Cha-Cart-Step-Card-Step1/ChaCartStepCardStep1'
import ChaCartStepCardStep2 from 'Cha/Components/Cha-Cart-Step-Card-Step2/ChaCartStepCardStep2'
import ChaCartStepCardStep3 from 'Cha/Components/Cha-Cart-Step-Card-Step3/ChaCartStepCardStep3'

import ChaCreditCardFront from 'Cha/Pages/Cha-Cart/Images/Cha-Credit-Card-Front.svg'
import ChaCreditCardBack from 'Cha/Pages/Cha-Cart/Images/Cha-Credit-Card-Back.svg'

import 'Cha/Pages/Cha-Cart/ChaCart.scss'

function ChaCart(props) {
  return (
    <>
      <ChaCartProgressBar />
      <div className="wrap">
        {/* 訂單步驟欄，開始 */}
        <main>
          {/* 步驟一，開始 */}
          <ChaCartStepCardStep1 />
          {/* 步驟一，結束 */}
          {/* 步驟二，開始 */}
          <ChaCartStepCardStep2 />
          {/* 步驟二，結束 */}
          {/* 步驟三，開始 */}
          <ChaCartStepCardStep3 />

          {/* 步驟三，結束 */}
        </main>
        {/* 訂單步驟欄，結束 */}

        {/* 購物清單欄*/}
        <ChaCartSubmitCard />
      </div>
    </>
  )
}
export default ChaCart
