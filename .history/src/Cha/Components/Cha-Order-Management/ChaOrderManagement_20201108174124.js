import React, { useState, useEffect } from 'react';
import './ChaOrderManagement.scss';
import ChaOrderManagementNotArrived from './../Cha-Order-Management-NotArrived/ChaOrderManagementNotArrived';
import ChaOrderManagementArrived from './../Cha-Order-Management-Arrived/ChaOrderManagementArrived';
import ChaOrderManagementRefund from './../Cha-Order-Management-Refund/ChaOrderManagementRefund';
import ChaOrderManagementGrouping from './../Cha-Order-Management-Grouping/ChaOrderManagementGrouping';

function ChaOrderManagement(props) {
  const [nameMyOrder, setNameMyOrder] = useState();
  // const [takeWay, setTakeWay] = useState();
  const [addressMyOrder, setAddressMyOrder] = useState();
  const [mobileMyOrder, setMobileMyOrder] = useState();
  const [memberSidMyOrder, setMemberSidMyOrder] = useState();
  const [beastieCoinMyOrder, setBeastieCoinMyOrder] = useState();
  const [orderStateMyOrder, setOrderStateMyOrder] = useState();

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
    async function getMyOrder() {
      const url = 'http://localhost:5000/cart-api/my-order';

      const request = new Request(url, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      });
      const response = await fetch(request);
      const dataMyOrder = await response.json();
      // data會是一個物件值
      console.log(dataMyOrder);
      // console.log(memberData);
      // setMemberData(data[0]);
      // setName(data[0].name);
      setNameMyOrder(dataMyOrder[0].take_person);
      setMobileMyOrder(dataMyOrder[0].mobile);
      // setTakeWay(data[0].take_way);
      setAddressMyOrder(dataMyOrder[0].take_address);
      setMemberSidMyOrder(dataMyOrder[0].sid);
      setBeastieCoinMyOrder(dataMyOrder[0].beastie_coin);
      setOrderStateMyOrder(dataMyOrder[0].order_state);
      getMyOrderDetail(dataMyOrder[0].sid);
    }
    // // GET會員資料
    // async function getMyOrder() {
    //   const url = 'http://localhost:5000/cart-api/my-order';

    //   const request = new Request(url, {
    //     method: 'GET',
    //     headers: new Headers({
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     }),
    //   });
    //   const response = await fetch(request);
    //   const dataMyOrder = await response.json();
    //   // data會是一個物件值
    //   console.log(dataMyOrder);
    //   // console.log(memberData);
    //   // setMemberData(data[0]);
    //   // setName(data[0].name);
    //   setNameMyOrder(dataMyOrder[0].take_person);
    //   setMobileMyOrder(dataMyOrder[0].mobile);
    //   // setTakeWay(data[0].take_way);
    //   setAddressMyOrder(dataMyOrder[0].take_address);
    //   setMemberSidMyOrder(dataMyOrder[0].sid);
    //   setBeastieCoinMyOrder(dataMyOrder[0].beastie_coin);
    //   setOrderStateMyOrder(dataMyOrder[0].order_state);
    // }

    // GET會員資料
    async function getMyOrderDetail(paramSOrderId) {
      const url = `http://localhost:5000/cart-api/my-order-deatail/${paramSOrderId}`;

      const request = new Request(url, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      });
      const response = await fetch(request);
      const dataMyOrderDetail = await response.json();

      console.log(dataMyOrderDetail);

      // data會是一個物件值
    }
    useEffect(() => {
      getMyOrder();
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
          {/* <div>{orderComponent}</div> */}
          <h1>{nameMyOrder}</h1>
          <h1>{mobileMyOrder}</h1>
          {/* <h1>{takeWay}</h1> */}
          <h1>{addressMyOrder}</h1>
          <h1>訂單編號：{memberSidMyOrder}</h1>
          <h1>訂單狀態：{orderStateMyOrder}</h1>
          <h1>{beastieCoinMyOrder}</h1>
          <h1>a</h1>
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
