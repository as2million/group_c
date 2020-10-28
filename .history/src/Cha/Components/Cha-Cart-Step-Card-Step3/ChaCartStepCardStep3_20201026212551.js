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
          <label className="choice" for="card">
            
            <span className="m-1">/</span>
            <select className="s1" id="valid_year" name="valid_year">
              <option value="20">2020</option>
              <option value="21">2021</option>
              <option value="22">2022</option>
              <option value="23">2023</option>
              <option value="24">2024</option>
              <option value="25">2025</option>
              <option value="26">2026</option>
              <option value="27">2027</option>
              <option value="28">2028</option>
              <option value="29">2029</option>
            </select>
          </label>
          {/* MMM */}
          <div className="cha-step3-MONTH-YEAR-3number">
            <div className="form-group">
              <label htmlhtmlFor="step3-2-MONTH">月</label>
              <select className="s1 s2" id="valid_month" name="valid_month">
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
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
          <br />
          <br />
          <br />
          {/* 發票捐贈 */}
          <div className="cha-group-receipt-type-2">
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
          </div>
          <div className="cha-horizontal-line"></div>
          <br />
          <br />
          <br />
          {/* 二聯式電子發票 */}
          <div className="cha-group-receipt-type-2">
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
                className="form-control cha-step3-5-2-3-vehicle"
                id="cha-step3-5-2-3-vehicle"
                name="cha-step3-5-2-3-vehicle"
                placeholder="縣市"
              />
              <input
                type="text"
                className="form-control cha-step3-5-2-4-vehicle"
                id="cha-step3-5-2-4-vehicle"
                name="cha-step3-5-2-4-vehicle"
                placeholder="鄉鎮市區"
              />
              <input
                type="text"
                className="form-control cha-step3-5-2-5-vehicle"
                id="cha-step3-5-2-5-vehicle"
                name="cha-step3-5-2-5-vehicle"
                placeholder="發票寄送地址"
              />
              <p className="cha-step3-receipt-alert">
                (由拾餐為您兌獎，中獎後將會寄送紙本發票給您)
              </p>
            </div>
          </div>
          <div className="cha-horizontal-line"></div>
          <br />
          <br />
          <br />
          {/* 三聯式電子發票 */}
          <div className="cha-group-receipt-type-3">
            <div className="form-group">
              <label htmlhtmlFor="cha-step3-5-3-1-vehicle">公司抬頭</label>
              <input
                type="text"
                className="form-control cha-step3-5-3-1-vehicle"
                id="cha-step3-5-3-1-vehicle"
                name="cha-step3-5-3-1-vehicle"
                placeholder="公司抬頭"
              />
            </div>
            <div className="form-group">
              <label htmlhtmlFor="cha-step3-5-3-2-vehicle">統一編號</label>
              <input
                type="text"
                className="form-control cha-step3-5-3-2-vehicle"
                id="cha-step3-5-3-2-vehicle"
                name="cha-step3-5-3-2-vehicle"
                placeholder="統一編號"
              />
            </div>
            <div className="form-group">
              <label htmlhtmlFor="cha-step3-5-3-3-vehicle">Email</label>
              <input
                type="text"
                className="form-control cha-step3-5-3-3-vehicle"
                id="cha-step3-5-3-3-vehicle"
                name="cha-step3-5-3-3-vehicle"
                placeholder="Email"
              />
            </div>
          </div>
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
