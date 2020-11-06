import React, { useState, useEffect } from 'react';
import './ChaCartStepCardStep2.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, setHours, setMinutes } from 'date-fns';
import { registerLocale } from 'react-datepicker';
import { zhTW } from 'date-fns/esm/locale';
registerLocale('zh-TW', zhTW);

function ChaCartStepCardStep2(props) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  // const [takeWay, setTakeWay] = useState('');
  const [address, setAddress] = useState('');
  const [memberSid, setMemberSid] = useState('');
  const [beastieCoin, setBeastieCoin] = useState('');
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 11)
  );
  const [takeTime, setTakeTime] = useState('');
  // GET會員資料
  async function getMemberDataFromServer() {
    const url = 'http://localhost:5000/cart-api/get-member';

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    const response = await fetch(request);
    const data = await response.json();
    // data會是一個物件值
    // console.log(data);
    // console.log(memberData);
    // setMemberData(data[0]);
    setName(data[0].name);
    setMobile(data[0].mobile);
    // setTakeWay(data[0].take_way);
    setAddress(data[0].address);
    setMemberSid(data[0].member_sid);
    setBeastieCoin(data[0].beastie_coin);
  }

  // componentDidMount，一掛載就GET會員資料表
  useEffect(() => {
    getMemberDataFromServer();
  }, []);
  const step2Data = {
    member_sid: memberSid,
    name: name,
    mobile: mobile,
    address: address,
    beastie_coin: beastieCoin,
    take_date: startDate,
    take_time: takeTime,
  };
  return (
    <>
      <div className="cha-main-card cha-main-card-step2">
        <div className="cha-step-header">步驟2：訂單資料</div>
        {/* <form action="#" id="#"> */}
        {/* 聯絡人姓名 */}
        <div className="form-group">
          <label htmlFor="cha-step2-1-name">聯絡人姓名</label>
          <input
            type="text"
            className="form-control cha-step2-1-name"
            id="cha-step2-1-name"
            placeholder="請填寫姓名"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        {/* 手機號碼 */}
        <div className="form-group">
          <label htmlFor="cha-step2-2-phone">手機號碼</label>
          <input
            type="text"
            className="form-control cha-step2-2-phone"
            id="cha-step2-2-phone"
            placeholder="請填寫姓名"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
        </div>
        {/* 取餐日期、時間 */}

        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="cha-step2-3-take-date">取餐日期</label>
            <br />
            {/* <input
              type="text"
              className="form-control cha-step2-3-take-date"
              id="cha-step2-3-take-date"
              // placeholder="請填寫姓名"
              // value={name}
              // onChange={(e) => {
              //   setName(e.target.value);
              // }}
            /> */}
            <DatePicker
              dateFormat="yyyy-MM-dd / HH:mm"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={Date.now()}
              maxDate={addDays(new Date(), 13)}
              locale="zh-TW"
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              minTime={setHours(setMinutes(new Date(), 30), 11)}
              maxTime={setHours(setMinutes(new Date(), 30), 19)}
              timeCaption="time"
              showDisabledMonthNavigation
            />
          </div>
          <div className="form-group col">
            <label htmlFor="cha-step2-4-take-time">取餐時間</label>
            <select
              id="cha-step2-4-take-time"
              className="form-control cha-step2-4-take-time"
              value={takeTime}
              onChange={(e) => {
                setTakeTime(e.target.value);
              }}
            >
              <option selected>請選擇時間</option>
              <option>11:00 ~ 11:30</option>
              <option>11:30 ~ 12:00</option>
              <option>12:30 ~ 13:00</option>
              <option>13:30 ~ 13:00</option>
            </select>
          </div>
        </div>

        {/* handleChange(event) {
         this.setState({value: event.target.value});} */}

        {/* 取餐地址1 */}
        <div className="form-group">
          <label htmlFor="cha-step2-5-take-address-3">取餐地址</label>
          <input
            type="text"
            className="form-control cha-step2-5-take-address-1"
            id="cha-step2-5-take-address-1"
            placeholder="請填寫取餐地址"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        {/* 取餐地址2 */}
        {/* <div className="form-group">
        <label htmlFor="step2-5-take-address-2">取餐地址</label>
        <input
          type="text"
          className="form-control cha-step2-5-take-address-2"
          id="cha-step2-5-take-address-2"
          name="cha-step2-5-take-address-2"
          value="台北市大安區復興南路二段390號"
        />
      </div> */}
        {/* 取餐地址3 */}
        {/* <div className="form-group">
        <label htmlFor="step2-5-take-address-3">取餐地址</label>
        <input
          type="text"
          className="form-control cha-step2-5-take-address-3"
          id="cha-step2-5-take-address-3"
          name="cha-step2-5-take-address-3"
          placeholder="請填寫"
        />
      </div>
      <div className="cha-step-check-btn-div">
        <input type="button" value="確認" className="cha-step-check-btn" />
      </div>
    </form> */}
      </div>
    </>
  );
}
export default ChaCartStepCardStep2;
