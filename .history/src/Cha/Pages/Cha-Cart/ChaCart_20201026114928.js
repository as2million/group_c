import React, { useState, useEffect } from 'react'

import ChaCartProgressBar from 'Cha/Components/Cha-Cart-ProgressBar/ChaCartProgressBar'
// import ChaOrder from 'Cha/Components/Cha-Order/ChaOrder'
import ChaCartSubmitCard from 'Cha/Components/Cha-Cart-Submit-Card/ChaCartSubmitCard'
import ChaCartStepCardStep1 from 'Cha/Components/Cha-Cart-Step-Card-Step1/ChaCartStepCardStep1'
import ChaCartStepCardStep2 from 'Cha/Components/Cha-Cart-Step-Card-Step2/ChaCartStepCardStep2'

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
          <div className="main-card main-card-step3">
            <div className="step-header">步驟3：付費</div>
            {/* 信用卡圖片，開始 */}
            <div className="Cha-Credit-Card-div">
              <div className="Cha-Credit-Card-flip">
                <div className="Cha-Credit-Card-all">
                  <img
                    src={ChaCreditCardFront}
                    // src={ChaCreditCardBack}
                    className="Cha-Credit-Card"
                    alt="ChaCreditCart"
                  ></img>
                  <div className="card-number-on-picture">
                    0000 0000 0000 0000
                  </div>
                  <div className="card-MONTH-YEAR-on-picture">
                    <span>01</span>/<span>20</span>
                  </div>
                </div>
                <div className="Cha-Credit-Card-all">
                  <img
                    // src={ChaCreditCardFront}
                    src={ChaCreditCardBack}
                    className="Cha-Credit-Card"
                    alt="ChaCreditCart"
                  ></img>
                  <input
                    type="text"
                    className="form-control card-3number-on-picture"
                    id="card-3number-on-picture"
                    name="card-3number-on-picture"
                    placeholder="●●●"
                    // disabled
                    // value="111"
                  />
                  {/* <div className="card-3number-on-picture">000</div> */}
                </div>
              </div>
            </div>
            {/* 信用卡圖片，結束 */}
            <form action="#" id="#">
              {/* 信用卡號 */}
              <div className="form-group">
                <label htmlFor="step3-1-card-number">信用卡號</label>
                <input
                  type="text"
                  className="form-control step3-1-card-number"
                  id="step3-1-card-number"
                  name="step3-1-card-number"
                  placeholder="XXXX XXXX XXXX XXXX"
                />
              </div>

              {/* 月、年、後三碼 */}
              <div className="step3-MONTH-YEAR-3number">
                <div className="form-group">
                  <label htmlFor="step3-2-MONTH">月</label>
                  <input
                    type="text"
                    className="form-control step3-2-MONTH"
                    id="step3-2-MONTH"
                    name="step3-2-MONTH"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="step3-3-YEAR">年</label>
                  <input
                    type="text"
                    className="form-control step3-3-YEAR"
                    id="step3-3-YEAR"
                    name="step3-3-YEAR"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="step3-4-back-3number">後三碼</label>
                  <input
                    type="text"
                    className="form-control step3-4-back-3number"
                    id="step3-4-back-3number"
                    name="step3-4-back-3number"
                    placeholder="請填寫後三碼"
                  />
                </div>
              </div>
              {/* 發票開立 */}
              <div className="step3-5-receipt">
                <p className="font-l-1">
                  <span ori="發票開立" err="請選擇發票類型">
                    發票開立
                  </span>
                </p>
                <div className="step3-5-receipt-div">
                  <div className="H-box-3">
                    <input
                      className="margin"
                      id="invoice_type_1"
                      name="invoice_type"
                      type="radio"
                      value="1"
                    />
                    {/* <label className="choice" for="invoice_type_1">
                      發票捐贈
                    </label>
                  </div>
                  <div className="H-box-3">
                    <input
                      className="margin"
                      id="invoice_type_2"
                      name="invoice_type"
                      type="radio"
                      value="2"
                    /> */}
                    <label className="choice" for="invoice_type_2">
                      二聯式電子發票
                    </label>
                  </div>
                  <div className="H-box-3">
                    <input
                      className="margin"
                      id="invoice_type_3"
                      name="invoice_type"
                      type="radio"
                      value="3"
                    />
                    <label className="choice" for="invoice_type_3">
                      三聯式電子發票
                    </label>
                  </div>
                </div>
              </div>
              <p className="step3-receipt-alert">
                (依統一發票使用辦法規定：發票一經開立不得任意更改或改開發票。)
              </p>
              {/* <div className="form-group-l-1">
                <div className="H-box-5">
                  <p className="font-l-1">載具類型</p>
                  <div className="form-group-l-1">
                    <select className="s1 s3" id="card_type" name="card_type">
                      <option value="1">會員載具</option>
                      <option value="2">手機載具</option>
                      <option value="3">自然人憑證</option>
                    </select>
                  </div>
                </div>
                <div className="H-box-5 div_card_no" style="">
                  <p className="font-l-1">
                    <span ori="載具號碼" err="載具號碼未輸入或錯誤">
                      載具號碼
                    </span>
                  </p>
                  <div className="form-group-l-1">
                    <input
                      type="text"
                      id="card_no"
                      name="card_no"
                      value=""
                      maxlength=""
                      placeholder="載具號碼"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="H-box-6">
                <p class="font-l-1">
                  <span ori="Email" err="請輸入Email">
                    Email
                  </span>
                </p>
                <div class="form-group-l-1">
                  <input
                    type="email"
                    id="email_2"
                    name="email_2"
                    value=""
                    maxlength=""
                    placeholder="Email"
                    class="form-control"
                  />
                </div>
              </div> */}

              <div className="step-check-btn-div">
                <input type="button" value="確認" className="step-check-btn" />
              </div>
            </form>
          </div>

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
