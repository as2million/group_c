import React, { useState, useEffect } from 'react';

import ChaCreditCardFront from 'Cha/Components/Cha-Cart-Step-Card-Step3/Images/Cha-Credit-Card-Front.svg';
import ChaCreditCardBack from 'Cha/Components/Cha-Cart-Step-Card-Step3/Images/Cha-Credit-Card-Back.svg';

import TWZipCode from './Cha-Address-Select/TWZipCode';
import './ChaCartStepCardStep3.scss';

function ChaCartStepCardStep3(props) {
  const [creditNumber, setCreditNumber] = useState('');
  const [numberPointText, setNumberPointText] = useState('●●●●●●●●●●●●');
  const [creditMonth, setCreditMonth] = useState('●●');
  const [creditYear, setCreditYear] = useState('●●');
  const [creditFlip, setCreditFlip] = useState(false);
  const [credit3Number, setCredit3Number] = useState('');
  const [treeNumberPointText, setThreeNumberPointText] = useState('●●●');

  // 信用卡號呈現效果
  function ShowInCard() {
    if (creditNumber.length >= 0) {
      let p = '';
      let pl = 12 - creditNumber.length;
      for (let i = 0; i < pl; i++) {
        p += '●';
      }
      setNumberPointText(creditNumber + p);
    }
    if (credit3Number.length >= 0) {
      let p = '';
      let pl = 3 - credit3Number.length;
      for (let i = 0; i < pl; i++) {
        p += '●';
      }
      setThreeNumberPointText(credit3Number + p);
    }
  }
  useEffect(() => {
    ShowInCard();
  }, [creditNumber]);

  return (
    <>
      <div className="cha-main-card cha-main-card-step3">
        <div className="cha-step-header">步驟3：付費</div>
        {/* 信用卡圖片，開始 */}
        <div className="cha-Credit-Card-div">
          <div className="cha-Credit-Card-flip">
            <div
              className={
                !creditFlip
                  ? 'cha-Credit-Card-all cha-Credit-Card-all-b1'
                  : 'cha-Credit-Card-all cha-Credit-Card-all-a1'
              }
            >
              <img
                src={ChaCreditCardFront}
                // src={ChaCreditCardBack}
                className="cha-Credit-Card"
                alt="ChaCreditCart"
              ></img>
              <div className="cha-card-number-on-picture">
                {numberPointText}
              </div>
              <div className="cha-card-MONTH-YEAR-on-picture">
                <span>{creditMonth}</span>/<span>{creditYear}</span>
              </div>
            </div>
            <div
              className={
                !creditFlip
                  ? 'cha-Credit-Card-all cha-Credit-Card-all-b2'
                  : 'cha-Credit-Card-all cha-Credit-Card-all-a2'
              }
            >
              <img
                // src={ChaCreditCardFront}
                src={ChaCreditCardBack}
                className="cha-Credit-Card"
                alt="ChaCreditCart"
              ></img>
              <div className="cha-card-3number-on-picture">
                {treeNumberPointText}
              </div>
            </div>
          </div>
        </div>
        {/* 信用卡圖片，結束 */}
        <form action="#" id="#">
          {/* 信用卡號 */}
          <div className="form-group">
            <label htmlFor="cha-step3-1-card-number">信用卡號</label>
            <input
              type="text"
              className="form-control cha-step3-1-card-number"
              id="cha-step3-1-card-number"
              maxLength="12"
              placeholder="XXXX XXXX XXXX XXXX"
              value={creditNumber}
              onChange={(e) => {
                setCreditNumber(e.target.value);
              }}
            />
          </div>
          {/* 月、年、後三碼 */}
          <label className="choice" for="card"></label>
          {/* MMM */}
          <div className="form-row">
            <div className="form-group col">
              <label>月</label>
              <select
                className="form-control cha-step3-2-MONTH"
                id="cha-step3-2-MONTH"
                name="cha-step3-2-MONTH"
                onChange={(e) => {
                  setCreditMonth(e.target.value);
                }}
              >
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
            </div>
            <div className="form-group">
              <label></label>
              <div className="m-1 mt-3">/</div>
            </div>
            <div className="form-group col">
              <label>年</label>
              <select
                className="form-control cha-step3-3-YEAR"
                id="cha-step3-3-YEAR"
                name="cha-step3-3-YEAR"
                onChange={(e) => {
                  setCreditYear(e.target.value);
                }}
              >
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
            </div>

            <div className="form-group col">
              <label htmlFor="cha-step3-4-back-3number">後三碼</label>
              <input
                type="text"
                value={credit3Number}
                className="form-control cha-step3-4-back-3number"
                id="cha-step3-4-back-3number"
                name="cha-step3-4-back-3number"
                placeholder="請填寫後三碼"
                maxLength="3"
                onChange={(e) => {
                  setCredit3Number(e.target.value);
                }}
                onFocus={() => {
                  setCreditFlip(true);
                }}
                onBlur={() => {
                  setCreditFlip(false);
                }}
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
              <label htmlFor="cha-step3-5-1-charitable">愛心碼</label>
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
              <label htmlFor="cha-step3-5-2-1-vehicle">載具類型</label>
              <input
                type="text"
                className="form-control cha-step3-5-2-1-vehicle"
                id="cha-step3-5-2-1-vehicle"
                name="cha-step3-5-2-1-vehicle"
                placeholder="會員載具"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cha-step3-5-2-2-vehicle">Email</label>
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
              <TWZipCode />
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
              <label htmlFor="cha-step3-5-3-1-vehicle">公司抬頭</label>
              <input
                type="text"
                className="form-control cha-step3-5-3-1-vehicle"
                id="cha-step3-5-3-1-vehicle"
                name="cha-step3-5-3-1-vehicle"
                placeholder="公司抬頭"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cha-step3-5-3-2-vehicle">統一編號</label>
              <input
                type="text"
                className="form-control cha-step3-5-3-2-vehicle"
                id="cha-step3-5-3-2-vehicle"
                name="cha-step3-5-3-2-vehicle"
                placeholder="統一編號"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cha-step3-5-3-3-vehicle">Email</label>
              <input
                type="email"
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
  );
}
export default ChaCartStepCardStep3;
