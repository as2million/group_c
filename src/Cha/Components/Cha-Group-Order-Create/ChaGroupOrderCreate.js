import React, { useState } from 'react';
import InputH40 from './InputH40/InputH40';
import './ChaGroupOrderCreate.scss';
// -------------時間套件，start-------------------//
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns';
import { registerLocale } from 'react-datepicker';
import { zhTW } from 'date-fns/esm/locale';
registerLocale('zh-TW', zhTW);
// -------------時間套件，over-------------------//
function ChaGroupOrderCreate(props) {
  const [takeDate, setTakeDate] = useState(new Date());
  const [takeTime, setTakeTime] = useState('11:00 ~ 11:30');
  // const [takeWay, setTakeWay] = useState();
  const [groupName, setGroupName] = useState('');
  const [name, setName] = useState('');
  return (
    <>
      {/* -------------------麵包屑，開始---------- */}
      <div className="cha-group-create-wrap">
        <div className="cha-group-breadcrumbs-container">
          <div className="cha-group-breadcrumbs-row">
            <div className="cha-group-breadcrumbs-text">
              <div className="cha-group-breadcrumbs-icon">
                <div className="cha-group-create-icon"></div>
              </div>
              <span className="cha-group-create-text-yellow">建立揪團</span>
            </div>
            <div className="cha-group-arrow-icon"></div>
            <div className="cha-group-breadcrumbs-text">
              <div className="cha-group-breadcrumbs-icon">
                <div className="cha-group-search-icon"></div>
              </div>
              <span className="cha-group-search-text">呼朋引伴</span>
            </div>
            <div className="cha-group-arrow-icon"></div>
            <div className="cha-group-breadcrumbs-text">
              <div className="cha-group-breadcrumbs-icon">
                <div className="cha-group-menu-icon"></div>
              </div>
              <span className="cha-group-menu-text">作伙點餐</span>
            </div>
          </div>
        </div>
        {/* -------------------麵包屑，結束---------- */}

        {/* -------------------表單，開始---------- */}
        <div className="cha-group-create-card">
          {/* 表單大標 */}
          <div className="cha-group-create-header-div">
            <div className="cha-group-create-header">建立揪團</div>
          </div>
          {/* 表單們 */}
          <div className="cha-group-create-forms">
            {/* 群組名稱與揪團人姓名 */}
            {/* <div className="cha-group-create-groupName-and-name"> */}
            {/* 群組名稱 */}
            <div className="form-group">
              <label htmlFor="">群組名稱</label>
              <InputH40
                type="text"
                className="form-control "
                id="cha-group-create-groupName"
                placeholder="請填寫群組名稱"
                value={groupName}
                onChange={(e) => {
                  setGroupName(e.target.value);
                }}
              />
            </div>
            {/* 揪團人姓名 */}
            <div className="form-group">
              <label htmlFor="cha-group">揪團人姓名</label>
              <InputH40
                type="text"
                className="form-control "
                id=""
                placeholder="請填寫揪團人姓名"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              {/* </div> */}
            </div>
            {/* 取餐方式 */}
            <div className="form-group">
              <label htmlFor="">取餐方式</label>
              <div className="cha-tableware">
                <div>
                  <label>
                    <input
                      type="radio"
                      name="tableware"
                      value="tableware-yes"
                    />
                    自取
                  </label>
                  <label>
                    <input type="radio" name="tableware" value="tableware-no" />
                    外送
                  </label>
                </div>
              </div>
              {/* <InputH40
                type="text"
                className="form-control "
                id=""
                placeholder="請輸入取餐地址"
              /> */}
            </div>
            {/* 取餐日期、時間 */}

            <div className="form-row">
              <div className="form-group col-6">
                <label htmlFor="cha-step2-3-take-date">取餐日期</label>
                <br />
                <div className="cha-DatePicker-display cha-DatePicker-display-group">
                  <DatePicker
                    // className="form-control cha-step2-3-take-date"
                    // id="cha-step2-3-take-date"
                    // placeholder="請填寫姓名"
                    dateFormat="yyyy-MM-dd"
                    selected={takeDate}
                    onChange={(date) => {
                      setTakeDate(date);
                      console.log(takeDate);
                    }}
                    minDate={Date.now()}
                    maxDate={addDays(new Date(), 13)}
                    locale="zh-TW"
                  />
                </div>
              </div>
              <div className="form-group col-6">
                <label htmlFor="cha-step2-4-take-time">取餐時間</label>
                <select
                  id="cha-step2-4-take-time"
                  className="form-control cha-step2-4-take-time"
                  // defaultValue=""
                  value={takeTime}
                  onChange={(e) => {
                    setTakeTime(e.target.value);
                  }}
                >
                  {/* <option selected>請選擇時間</option> */}
                  <option>11:00 ~ 11:30</option>
                  <option>11:30 ~ 12:00</option>
                  <option>12:00 ~ 12:30</option>
                  <option>12:30 ~ 13:00</option>
                </select>
              </div>
            </div>

            {/* 提交按鈕 */}
            <div className="cha-shopping-cart-btn-div">
              <input
                type="button"
                value="送出"
                className="cha-shopping-cart-btn"
              />
            </div>
          </div>
        </div>
        {/* -------------------表單，結束---------- */}
        <div className="cha-group-create-alert">
          <div>如已建立揪團資料，請至「訂單管理」查看明細</div>
          <div className="cha-group-create-alert-to-order-management">
            前往訂單管理
          </div>
        </div>
      </div>
    </>
  );
}
export default ChaGroupOrderCreate;
