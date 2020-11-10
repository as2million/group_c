import React, { useState } from 'react';
import './ChaOrderManagement.scss';
import ChaOrderManagementNotArrived from './../Cha-Order-Management-NotArrived/ChaOrderManagementNotArrived';
import ChaOrderManagementArrived from './../Cha-Order-Management-Arrived/ChaOrderManagementArrived';
import ChaOrderManagementRefund from './../Cha-Order-Management-Refund/ChaOrderManagementRefund';
import ChaOrderManagementGrouping from './../Cha-Order-Management-Grouping/ChaOrderManagementGrouping';

function ChaReceiptType(props) {
  // 未達成
  const ComponentA = (props) => {
    return (
      <>
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
      </>
    );
  };
  // 已達成
  const ComponentB = (props) => {
    return (
      <>
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
      </>
    );
  };
  // 已退費
  const ComponentC = (props) => {
    return (
      <>
        {chaOrderManagements.map((_, index) => (
          <ChaOrderManagementRefund key={index} />
        ))}
      </>
    );
  };
  // 已退費
  const ComponentD = (props) => {
    return (
      <>
        {chaOrderManagements.map((_, index) => (
          <ChaOrderManagementGrouping key={index} />
        ))}
      </>
    );
  };
  // 切換用函式
  const setTabActive = (addElem, removeName) => {
    let removeTargets = document.querySelectorAll(removeName);
    removeTargets.forEach((target) => {
      target.classList.remove('cha-active');
    });

    addElem.classList.add('cha-active');
  };
  const TabMenu = () => {
    const [orderComponent, setOrderComponent] = useState(<ComponentA />);

    const tabContentA = (e) => {
      setTabActive(e.target, '.cha-order-mana-title-switch');
      setOrderComponent(<ComponentA />);
    };

    const tabContentB = (e) => {
      setTabActive(e.target, '.cha-order-mana-title-switch');
      setOrderComponent(<ComponentB />);
    };
    const tabContentC = (e) => {
      setTabActive(e.target, '.cha-order-mana-title-switch');
      setOrderComponent(<ComponentC />);
    };
    const tabContentD = (e) => {
      setTabActive(e.target, '.cha-order-mana-title-switch');
      setOrderComponent(<ComponentD />);
    };
    return (
      <>
        <div className="cha-order-mana-content-container col-9">
          <div className="cha-order-mana-content-row1">
            <div
              className="cha-order-mana-title-switch cha-active"
              onClick={tabContentA}
            >
              未送達
            </div>
            <div className="cha-order-mana-title-switch" onClick={tabContentB}>
              已送達
            </div>
            <div className="cha-order-mana-title-switch" onClick={tabContentC}>
              已退費
            </div>
            <div className="cha-order-mana-title-switch" onClick={tabContentD}>
              揪團中
            </div>
          </div>
          {/* <div className="cha-order-mana-content-row2"> */}
          <div className="cha-order-mana-border"></div>
          {/* </div> */}
          <div>{orderComponent}</div>
        </div>
      </>
    );
  };
  return (
    <>
      <TabMenu />
    </>
  );
}

export default ChaReceiptType;
