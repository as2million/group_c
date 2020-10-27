import React, { useState, useEffect } from 'react'

import ChaCartProgressBar from 'Cha/Components/Cha-Cart-ProgressBar/ChaCartProgressBar'
// import ChaOrder from 'Cha/Components/Cha-Order/ChaOrder'
import ChaCartSubmitCard from 'Cha/Components/Cha-Cart-Submit-Card/ChaCartSubmitCard'
import ChaCartStepCardStep1 from 'Cha/Components/Cha-Cart-Step-Card-Step1/ChaCartStepCardStep1'

import ChaCreditCardFront from 'Cha/Pages/Cha-Cart/Images/Cha-Credit-Card-Front.svg'
import ChaCreditCardBack from 'Cha/Pages/Cha-Cart/Images/Cha-Credit-Card-Back.svg'

import 'Cha/Pages/Cha-Cart/ChaCart.scss'

function ChaCart(props) {
  return (
    <>
      <ChaCartProgressBar />
      <div className="cha-wrap">
        {/* 訂單步驟欄，開始 */}
        <main>
          {/* 步驟一，開始 */}
          <ChaCartStepCardStep1 />
          {/* 步驟一，結束 */}
          {/* 步驟二，開始 */}
          <div className="cha-main-card cha-main-card-step2">
            <div className="cha-step-header">步驟2：訂單資料</div>
            <form action="#" id="#">
              {/* 聯絡人姓名 */}
              <div className="form-group">
                <label htmlFor="cha-step2-1-name">聯絡人姓名</label>
                <input
                  type="text"
                  className="form-control cha-step2-1-name"
                  id="cha-step2-1-name"
                  name="cha-step2-1-name"
                  placeholder="請填寫姓名"
                />
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
              {/* 取餐日期、時間 */}
              <div className="cha-step2-take-date-time">
                <div className="form-group">
                  <label htmlFor="cha-step2-3-take-date">取餐日期</label>
                  <input
                    type="text"
                    className="form-control cha-step2-3-take-date"
                    id="cha-step2-3-take-date"
                    name="cha-step2-3-take-date"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cha-step2-4-take-time">取餐時間</label>
                  <input
                    type="text"
                    className="form-control step2-4-take-time"
                    id="step2-4-take-time"
                    name="step2-4-take-time"
                  />
                </div>
              </div>
              {/* 取餐地址1 */}
              <div className="form-group">
                <label htmlFor="step2-5-take-address-3">取餐地址</label>
                <input
                  type="text"
                  className="form-control step2-5-take-address-1"
                  id="step2-5-take-address-1"
                  name="step2-5-take-address-1"
                  value="台北市大安區復興南路一段390號"
                />
              </div>
              {/* 取餐地址2 */}
              <div className="form-group">
                {/* <label htmlFor="step2-5-take-address-2">取餐地址</label> */}
                <input
                  type="text"
                  className="form-control step2-5-take-address-2"
                  id="step2-5-take-address-2"
                  name="step2-5-take-address-2"
                  value="台北市大安區復興南路二段390號"
                />
              </div>
              {/* 取餐地址3 */}
              <div className="form-group">
                {/* <label htmlFor="step2-5-take-address-3">取餐地址</label> */}
                <input
                  type="text"
                  className="form-control step2-5-take-address-3"
                  id="step2-5-take-address-3"
                  name="step2-5-take-address-3"
                  placeholder="請填寫"
                />
              </div>
              <div className="cha-step-check-btn-div">
                <input type="button" value="確認" className="cha-step-check-btn" />
              </div>
            </form>
          </div>
          {/* 步驟二，結束 */}
          {/* 步驟三，開始 */}
          <div className="cha-main-card main-card-step3">
            <div className="cha-step-header">步驟3：付費</div>
            {/* 信用卡圖片，開始 */}
            <div className="cha-Cha-Credit-Card-div">
              <div className="cha-Cha-Credit-Card-flip">
                <div className="cha-Cha-Credit-Card-all">
                  <img
                    src={ChaCreditCardFront}
                    // src={ChaCreditCardBack}
                    className="cha-Cha-Credit-Card"
                    alt="ChaCreditCart"
                  ></img>
                  <div className="cha-card-number-on-picture">
                    0000 0000 0000 0000
                  </div>
                  <div className="cha-card-MONTH-YEAR-on-picture">
                    <span>01</span>/<span>20</span>
                  </div>
                </div>
                <div className="cha-Cha-Credit-Card-all">
                  <img
                    // src={ChaCreditCardFront}
                    src={ChaCreditCardBack}
                    className="cha-Cha-Credit-Card"
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
                  {/* <div className="cha-card-3number-on-picture">000</div> */}
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
              <div className="cha-step3-MONTH-YEAR-3number">
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
              <div className="cha-step3-5-receipt">
                <p className="cha-font-l-1">
                  <span ori="發票開立" err="請選擇發票類型">
                    發票開立
                  </span>
                </p>
                <div className="cha-step3-5-receipt-div">
                  <div className="cha-H-box-3">
                    <input
                      className="cha-margin"
                      id="invoice_type_1"
                      name="invoice_type"
                      type="radio"
                      value="1"
                    />
                    {/* <label className="cha-choice" for="invoice_type_1">
                      發票捐贈
                    </label>
                  </div>
                  <div className="cha-H-box-3">
                    <input
                      className="cha-margin"
                      id="invoice_type_2"
                      name="invoice_type"
                      type="radio"
                      value="2"
                    /> */}
                    <label className="cha-choice" for="invoice_type_2">
                      二聯式電子發票
                    </label>
                  </div>
                  <div className="cha-H-box-3">
                    <input
                      className="cha-margin"
                      id="invoice_type_3"
                      name="invoice_type"
                      type="radio"
                      value="3"
                    />
                    <label className="cha-choice" for="invoice_type_3">
                      三聯式電子發票
                    </label>
                  </div>
                </div>
              </div>
              <p className="cha-step3-receipt-alert">
                (依統一發票使用辦法規定：發票一經開立不得任意更改或改開發票。)
              </p>
              {/* <div className="form-group-l-1">
                <div className="cha-H-box-5">
                  <p className="cha-font-l-1">載具類型</p>
                  <div className="form-group-l-1">
                    <select className="cha-s1 s3" id="card_type" name="card_type">
                      <option value="1">會員載具</option>
                      <option value="2">手機載具</option>
                      <option value="3">自然人憑證</option>
                    </select>
                  </div>
                </div>
                <div className="cha-H-box-5 div_card_no" style="">
                  <p className="cha-font-l-1">
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
                <div claform-group-l-1">
                  <input
                    type="email"
                    id="email_2"
                    name="email_2"
                    value=""
                    maxlength=""
                    placeholder="Email"
                    claform-control"
                  />
                </div>
              </div> */}

              <div className="cha-step-check-btn-div">
                <input type="button" value="確認" className="cha-step-check-btn" />
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
