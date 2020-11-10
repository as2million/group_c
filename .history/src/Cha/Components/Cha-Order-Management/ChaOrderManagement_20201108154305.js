import React, { useState } from 'react';
import './ChaOrderManagement.scss';
import ChaOrderManagementNotArrived from './../Cha-Order-Management-NotArrived/ChaOrderManagementNotArrived';
import ChaOrderManagementArrived from './../Cha-Order-Management-Arrived/ChaOrderManagementArrived';
import ChaOrderManagementRefund from './../Cha-Order-Management-Refund/ChaOrderManagementRefund';
import ChaOrderManagementGrouping from './../Cha-Order-Management-Grouping/ChaOrderManagementGrouping';

function ChaOrderManagement(props) {
  const chaOrderManagements = Array.from({ length: 10 });
  // 未達成
  const ComponentA = (props) => {
    return (
      <>
        {chaOrderManagements.map((_, index) => (
          <ChaOrderManagementNotArrived key={index} />
        ))}
      </>
    );
  };
  // 已達成
  const ComponentB = (props) => {
    return (
      <>
        {chaOrderManagements.map((_, index) => (
          <ChaOrderManagementArrived key={index} />
        ))}
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

    // GET會員資料
    async function getMemberDataFromServer() {
      const url = 'http://localhost:5000/cart-api/member';

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
      // console.log(memberData);
      // setMemberData(data[0]);
      // setName(data[0].name);
      setName(data[0].name);
      setMobile(data[0].mobile);
      // setTakeWay(data[0].take_way);
      setAddress(data[0].address);
      setMemberSid(data[0].sid);
      setBeastieCoin(data[0].beastie_coin);
    }

    // componentDidMount，一掛載就GET會員資料表
    useEffect(() => {
      getMemberDataFromServer();
    }, []);

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

export default ChaOrderManagement;
