import React, { useState, useEffect } from 'react'

import ChaCreditCardFront from 'Cha/Pages/Cha-Cart/Images/Cha-Credit-Card-Front.svg'
import ChaCreditCardBack from 'Cha/Pages/Cha-Cart/Images/Cha-Credit-Card-Back.svg'

import './ChaCartStepCardStep3.scss'

function ChaCartStepCardStep3(props) {
  return (
    <>
      <div className="cha-main-card cha-main-card-step3">
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
              <div className="cha-card-number-on-picture">●●●● ●●●● ●●●●</div>
              <div className="cha-card-MONTH-YEAR-on-picture">
                <span>●●</span>/<span>●●</span>
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
                className="form-control cha-card-3number-on-picture"
                id="cha-card-3number-on-picture"
                name="cha-ard-3number-on-picture"
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
            <label htmlhtmlFor="cha-step3-1-card-number">信用卡號</label>
            <input
              type="text"
              className="form-control cha-step3-1-card-number"
              id="cha-step3-1-card-number"
              name="cha-step3-1-card-number"
              placeholder="XXXX XXXX XXXX XXXX"
            />
          </div>
          {/* 月、年、後三碼 */}
          <div className="cha-step3-MONTH-YEAR-3number">
            <div className="form-group">
              <label htmlhtmlFor="step3-2-MONTH">月</label>
              <input
                type="text"
                className="form-control cha-step3-2-MONTH"
                id="cha-step3-2-MONTH"
                name="cha-step3-2-MONTH"
              />
            </div>
            <div className="form-group">
              <label htmlhtmlFor="cha-step3-3-YEAR">年</label>
              <input
                type="text"
                className="form-control cha-step3-3-YEAR"
                id="cha-step3-3-YEAR"
                name="cha-step3-3-YEAR"
              />
            </div>

            <div className="form-group">
              <label htmlhtmlFor="cha-step3-4-back-3number">後三碼</label>
              <input
                type="text"
                className="form-control cha-step3-4-back-3number"
                id="cha-step3-4-back-3number"
                name="cha-step3-4-back-3number"
                placeholder="請填寫後三碼"
              />
            </div>
          </div>
          {/* 發票開立 */}
          <div className="cha-step3-5-receipt-choose">
            <p>
              <span ori="發票開立" err="請選擇發票類型">
                發票開立
              </span>
            </p>
            <div className="cha-step3-5-receipt-div">
              <div className="">
                <input
                  className=""
                  id="cha-receipt-type-1"
                  name="cha-receipt-type"
                  type="radio"
                  value="1"
                />
                <label className="" htmlFor="cha-receipt-type-1">
                  發票捐贈
                </label>
              </div>
              <div className="">
                <input
                  className=""
                  id="cha-receipt-type-2"
                  name="cha-receipt-type"
                  type="radio"
                  value="2"
                />
                <label className="" htmlFor="cha-receipt-type-2">
                  二聯式電子發票
                </label>
              </div>
              <div className="">
                <input
                  className=""
                  id="cha-receipt-type-3"
                  name="cha-receipt-type"
                  type="radio"
                  value="3"
                />
                <label className="" htmlFor="cha-receipt-type-3">
                  三聯式電子發票
                </label>
              </div>
            </div>
          </div>
          <p className="cha-step3-receipt-alert">
            (依統一發票使用辦法規定：發票一經開立不得任意更改或改開發票。)
          </p>
          <div className="cha-horizontal-line"></div>
          {/* cha-step3-charitable */}
          <div className="form-group">
            <label htmlhtmlFor="cha-step3-5-1-charitable">愛心碼</label>
            <input
              type="text"
              className="form-control cha-step3-5-1-charitable"
              id="cha-step3-5-1-charitable"
              name="cha-step3-5-1-charitable"
              placeholder="請填寫後三碼"
            />
          </div>
          <div className="cha-horizontal-line"></div>
          <div className="cha-group-receipt-type-1">
            <div className="form-group">
              <label htmlhtmlFor="cha-step3-5-2-1-vehicle">載具類型</label>
              <input
                type="text"
                className="form-control cha-step3-5-2-1-vehicle"
                id="cha-step3-5-2-1-vehicle"
                name="cha-step3-5-2-1-vehicle"
                placeholder="會員載具"
              />
            </div>
            <div className="form-group">
              <label htmlhtmlFor="cha-step3-5-2-2-vehicle">Email</label>
              <input
                type="email"
                className="form-control cha-step3-5-2-2-vehicle"
                id="cha-step3-5-2-2-vehicle"
                name="cha-step3-5-2-2-vehicle"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label>發票寄送地址</label>
              <input
                type="text"
                className="form-control cha-step3-5-2-1-vehicle"
                id="cha-step3-5-2-1-vehicle"
                name="cha-step3-5-2-1-vehicle"
                placeholder="縣市"
              />
              <input
                type="text"
                className="form-control cha-step3-5-2-3-2-vehicle"
                id="cha-step3-5-2-3-2-vehicle"
                name="cha-step3-5-2-3-2-vehicle"
                placeholder="鄉鎮市區"
              />
              <input
                type="text"
                className="form-control cha-step3-5-2-3-3-vehicle"
                id="cha-step3-5-2-3-3-vehicle"
                name="cha-step3-5-2-3-3-vehicle"
                placeholder="發票寄送地址"
              />
              <p className="cha-step3-receipt-alert">
              (由拾餐為您兌獎，中獎後將會寄送紙本發票給您)
              </p>
            </div>
          </div>

          {/* <div className="form-group-l-1">
                <div className="cha-H-box-5">
                  <p className="cha-font-l-1">載具類型</p>
                  <div className="form-group-l-1">
                    <select className="cha-s1 s3" id="cha-card_type" name="card_type">
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
                      id="cha-card_no"
                      name="cha-card_no"
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
          {/* 確認按鈕 */}
          <div className="cha-step-check-btn-div">
            <input type="button" value="確認" className="cha-step-check-btn" />
          </div>
        </form>
      </div>
    </>
  )
}
export default ChaCartStepCardStep3
