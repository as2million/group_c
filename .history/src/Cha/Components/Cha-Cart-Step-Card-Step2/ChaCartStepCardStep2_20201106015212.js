import React, { useState, useEffect } from 'react';
import './ChaCartStepCardStep2.scss';

function ChaCartStepCardStep2(props) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [takeWay, setTakeWay] = useState('');
  const [address, setAddress] = useState('');
  const [memberSid,setMemberSid] = useState('');
  const [beastieCoin,setBeastieCoin] = useState('');
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
    setTakeWay(data[0].take_way);
    setAddress(data[0].address);
    setMemberSid(data[0].member_sid);
    setBeastieCoin(data[0].beastie_coin);
  }

  // componentDidMount，一掛載就GET會員資料表
  useEffect(() => {
    getMemberDataFromServer();
  }, []);
  async function addUserToSever() {

    const newData =  {
        member_sid: memberSid,
        name: name,
        birthday: '1990-04-06T16:00:00.000Z',
        mobile:mobile,
        email: 'kate.lin1234@test.com',
        address: address,
        beastie_coin: beastieCoin,
        take_way: 1,
      };

    // 連接的伺服器資料網址
    const url = 'http://localhost:5555/users/';

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });

    console.log(JSON.stringify(newData));

    const response = await fetch(request);
    const data = await response.json();

    console.log('伺服器回傳的json資料', data);
    // 要等驗証過，再設定資料(簡單的直接設定)

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
            <input
              type="text"
              className="form-control cha-step2-3-take-date"
              id="cha-step2-3-take-date"
              // placeholder="請填寫姓名"
              // value={name}
              // onChange={(e) => {
              //   setName(e.target.value);
              // }}
            />
          </div>
          <div className="form-group col">
            <label htmlFor="cha-step2-4-take-time">取餐時間</label>
            <select
              id="cha-step2-4-take-time"
              className="form-control cha-step2-4-take-time"
              // placeholder="請填寫姓名"
              // value={name}
              // onChange={(e) => {
              //   setName(e.target.value);
              // }}
            >
              <option selected>請選擇</option>
              <option>11:00 ~ 11:30</option>
              <option>11:30 ~ 12:00</option>
              <option>12:30 ~ 13:00</option>
              <option>13:30 ~ 13:00</option>
            </select>
          </div>
        </div>

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
// const a = {
//   member_sid: 1,
//   account: 'kate1234',
//   password: 'kk1234',
//   name: '林凱特',
//   birthday: '1990-04-06T16:00:00.000Z',
//   mobile: '0910123456',
//   email: 'kate.lin1234@test.com',
//   address: '忠孝東路一段50號',
//   beastie_coin: 0,
//   take_way: 1,
// };

// 我的訂單
// {
//   "sid": 1,
///////////////   "member_sid": 0,
//   "order_state": "已送達",
//   "order_name": "aaa",
///////////////   "toal_amount": 10,
///////////////   "subtoal_price": 1300,
///////////////   "shipping": 0,
///////////////   "beastie_coin": 10,
///////////////   "tableware": "是",
///////////////   "total_price": 1290,
///////////////   "take_date": "2020-11-02T16:00:00.000Z",
///////////////   "take_time": "12:00:00",
///////////////   "take_way": "自取",
///////////////   "take_address": "台北市大安區復興南路一段390號",
///////////////   "take_person": "王小明",
///////////////   "mobile": "0900-000-000",
///////////////   "receipt": "二聯式發票",
//   "created_at": null
// },

// {
//   "sid": 8,
/////////////////   "order_sid": 1,
/////////////////   "product_sid": 111,
/////////////////   "product_amount": 11,
//   "product_name": "玫瑰岩鹽烤雞",
//   "product_price": 150
// },
