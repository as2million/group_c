import React, { useState, useEffect } from 'react';
import './ChaOrderManagement.scss';
import ChaOrderManagementNotArrived from './../Cha-Order-Management-NotArrived/ChaOrderManagementNotArrived';
import ChaOrderManagementArrived from './../Cha-Order-Management-Arrived/ChaOrderManagementArrived';
import ChaOrderManagementRefund from './../Cha-Order-Management-Refund/ChaOrderManagementRefund';
import ChaOrderManagementGrouping from './../Cha-Order-Management-Grouping/ChaOrderManagementGrouping';
import ChaOrderItem from 'Cha/Components/Cha-Order-Management/Cha-Order-Item/ChaOrderItem';

function ChaOrderManagement(props) {
  // 當前登入的會員id
  const [currentMemberSid, setCurrentMemberSid] = useState(0);
  const [orderData, setOrderData] = useState([]);
  const [notArrivedState, setNotArrivedState] = useState([]);
  const [arrivedState, setArrivedState] = useState([]);
  const [refundState, setRefundState] = useState([]);
  const [groupingState, setGroupingState] = useState([]);

  // 舊的樣板
  // const chaOrderManagements = Array.from({ length: 1 });
  // {chaOrderManagements.map((_, index) => (
  //   <ChaOrderManagementArrived key={index} /> ))}
  //   {chaOrderManagements.map((_, index) => (
  //   <ChaOrderManagementRefund key={index} /> ))}
  //   {chaOrderManagements.map((_, index) => (
  //   <ChaOrderManagementGrouping key={index} /> ))}

  function handleClassifyState(orderState) {
    return;
    orderData.filter((item, index) => item.order_state !== orderState);
  }

  //   if (item.order_state === '未送達') {
  //     notArrivedState.push(item);
  //   } else if (item.order_state === '已送達') {
  //     arrivedState.push(item);
  //   } else if (item.order_state === '已退費/已取消') {
  //     refundState.push(item);
  //   } else if (item.order_state === '揪團中') {
  //     groupingState.push(item);
  //   }
  // });
  // 未送達
  const ComponentA = (props) => {
    return (
      <>
        {/* notArrivedItem */}
        {handleClassifyState('未送達').map((item, value) => (
          <ChaOrderItem key={item.id} orderItem={item} />
        ))}
      </>
    );
  };
  // 已送達
  const ComponentB = (props) => {
    return (
      <>
        {handleClassifyState('已送達').map((item, value) => (
          <ChaOrderItem key={item.id} orderItem={item} />
        ))}
      </>
    );
  };
  // 已退費/已取消
  const ComponentC = (props) => {
    return (
      <>
        {handleClassifyState('已退費/已取消').map((item, value) => (
          <ChaOrderItem key={item.id} orderItem={item} />
        ))}
      </>
    );
  };
  // 揪團中
  const ComponentD = (props) => {
    return (
      <>
        {handleClassifyState('揪團中').map((item, value) => (
          <ChaOrderItem key={item.id} orderItem={item} />
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
    async function getMyOrderAndMyOderDetail(paramsMemberId) {
      const url = `http://localhost:5000/cart-api/my-order-my-order-detail/${paramsMemberId}`;

      const request = new Request(url, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      });
      const response = await fetch(request);
      const dataAllOrder = await response.json();
      setOrderData(dataAllOrder);
      // console.log(dataAllOrder);
      // console.log(
      //   dataOrders[0] && dataOrders[0].take_person && dataOrders[0].take_person
      // );
    }
    // 只讀入當前會員的訂單
    useEffect(() => {
      getMyOrderAndMyOderDetail(currentMemberSid);
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
          {/* <div>
            {dataOrders[0] &&
              dataOrders[0].take_person &&
              dataOrders[0].take_person}
          </div> */}
          <h1>{orderComponent}</h1>
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
