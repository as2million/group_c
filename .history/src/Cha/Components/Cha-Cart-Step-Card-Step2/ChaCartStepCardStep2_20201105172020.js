import React, { useState, useEffect } from 'react';
import './ChaCartStepCardStep2.scss';

function ChaCartStepCardStep2(props) {
  const [memberData, setMemberData] = useState([]);

  // 載入資料用
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
    console.log(data);
    setMemberData(data);
  }

  // componentDidMount，一開始會載入資料(在元件初始化完成後)
  useEffect(() => {
    getMemberDataFromServer();
  }, []);

  return (
    <>
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

          <div className="form-row">
            <div className="form-group col">
              <label htmlFor="cha-step2-3-take-date">取餐日期</label>
              <input
                type="text"
                className="form-control cha-step2-3-take-date"
                id="cha-step2-3-take-date"
                name="cha-step2-3-take-date"
              />
            </div>
            <div className="form-group col">
              <label htmlFor="cha-step2-4-take-time">取餐時間</label>
              <select
                id="cha-step2-4-take-time"
                className="form-control cha-step2-4-take-time"
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
              name="cha-step2-5-take-address-1"
              value="台北市大安區復興南路一段390號"
            />
          </div>
          {/* 取餐地址2 */}
          <div className="form-group">
            {/* <label htmlFor="step2-5-take-address-2">取餐地址</label> */}
            <input
              type="text"
              className="form-control cha-step2-5-take-address-2"
              id="cha-step2-5-take-address-2"
              name="cha-step2-5-take-address-2"
              value="台北市大安區復興南路二段390號"
            />
          </div>
          {/* 取餐地址3 */}
          <div className="form-group">
            {/* <label htmlFor="step2-5-take-address-3">取餐地址</label> */}
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
        </form>
      </div>
    </>
  );
}
export default ChaCartStepCardStep2;
{
  /* <table className="table table-striped">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">姓名</th>
    <th scope="col">帳號</th>
    <th scope="col">操作</th>
  </tr>
</thead>
<tbody>
  {users.map((value, index) => {
    return (
      <tr key={value.id}>
        <td>{value.id}</td>
        <td>{value.name}</td>
        <td>{value.username}</td>
        <td>
          <Button
            variant="success"
            onClick={() => {
              props.history.push('/user-edit/' + value.id)
            }}
          >
            <MdModeEdit /> 編輯
          </Button>
          {'  '}
          <Button
            onClick={() => {
              deletcUserFromServer(value.id)
            }}
            variant="danger"
          >
            <MdDelete /> 刪除
          </Button>
        </td>
      </tr>
    )
  })}
</tbody>
</table> */
}
