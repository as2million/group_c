import React, { useRef, useState, useEffect } from 'react';
import './ChaOrderManagement.scss';
import { ReactComponent as WaveLine } from './Images/wave_line.svg';
import ChaOrderItem from 'Cha/Components/Cha-Order-Management/Cha-Order-Item/ChaOrderItem';

function ChaOrderManagement(props) {
  // ---------點選退費，實現自動切換頁面---------------//
  const [forceKey, setForceKey] = useState(false);
  const [tabindexKey, setTabindexKey] = useState('A');

  const [error, setError] = useState(null);

  // ---------當前登入的會員id--------------//
  const [currentMemberSid, setCurrentMemberSid] = useState(1);

  //----------- 整包訂單、訂單明細的資料------------//
  const [orderData, setOrderData] = useState([]);

  // -----------退費後刷新頁面用-----------//
  const [changeOrderState, setChangeOrderState] = useState(0);

  const { setShowBar, handleCartNumber } = props;

  // -----------恢復Navbar--------------//
  useEffect(() => {
    setShowBar(true);
    console.log('useEffect，設定navbar出現');
  }, []);

  // ---------------讀入訂單資料--------------//
  async function getMyOrderData(paramsMemberId) {
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
    console.log('讀入訂單資料', dataAllOrder);
    setOrderData(dataAllOrder);
  }
  // --------------掛載就讀入當前會員的訂單-----------------//
  useEffect(() => {
    getMyOrderData(currentMemberSid);
    console.log('useEffect，讀入當前會員的訂單資料');
  }, []);

  //  --------------重新載入資料，切換到退費頁面-----------------//
  useEffect(() => {
    getMyOrderData(currentMemberSid);
    console.log(
      'useEffect，getMyOrderData(currentMemberSid)，[changeOrderState]'
    );
  }, [changeOrderState]);

  //  --------------分類訂單內容的函式-----------------//
  function handleClassifyState(orderState1, orderState2) {
    return orderData.filter(
      (item, index) =>
        item.order_state === orderState1 || item.order_state === orderState2
    );
  }

  // 未送達
  const ComponentA = (props) => {
    return (
      <>
        {/* notArrivedItem */}
        {handleClassifyState('未送達', '火速運送中')
          .reverse()
          .map((item, value) => (
            <ChaOrderItem
              key={item.sid}
              orderItem={item}
              setForceKey={setForceKey}
              setTabindexKey={setTabindexKey}
              setChangeOrderState={setChangeOrderState}
            />
          ))}
      </>
    );
  };
  // 已送達
  const ComponentB = (props) => {
    return (
      <>
        {handleClassifyState('已送達')
          .reverse()
          .map((item, value) => (
            <ChaOrderItem
              key={item.sid}
              orderItem={item}
              setChangeOrderState={setChangeOrderState}
              handleCartNumber={handleCartNumber}
            />
          ))}
      </>
    );
  };
  // 已退費/已取消
  const ComponentC = (props) => {
    return (
      <>
        {handleClassifyState('已退費')
          .reverse()
          .map((item, value) => (
            <ChaOrderItem
              key={item.sid}
              orderItem={item}
              setForceKey={setForceKey}
              setTabindexKey={setTabindexKey}
              setChangeOrderState={setChangeOrderState}
              handleCartNumber={handleCartNumber}
            />
          ))}
      </>
    );
  };
  // 揪團中
  const ComponentD = (props) => {
    return (
      <>
        {handleClassifyState('揪團中').map((item, value) => (
          <ChaOrderItem
            key={item.sid}
            orderItem={item}
            setChangeOrderState={setChangeOrderState}
          />
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
  const TabMenu = (props) => {
    const [orderComponent, setOrderComponent] = useState(<ComponentA />);
    // force bool, index = A, B, C...
    const { force, index } = props;
    const elA = useRef(null);
    const elC = useRef(null);

    useEffect(() => {
      if (force && index) {
        switch (index) {
          case 'A':
            setTabActive(elA.current, '.cha-order-mana-title-switch');
            setOrderComponent(<ComponentA />);
            break;
          case 'C':
            console.log(elC.current);
            setTabActive(elC.current, '.cha-order-mana-title-switch');
            setOrderComponent(<ComponentC />);
            break;
          default:
            break;
        }
      }
    }, [force, index]);

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
        <div className="cha-order-mana-content-container col-9 ">
          <div className="cha-order-mana-content-row1">
            <div
              className="cha-order-mana-title-switch cha-active"
              ref={elA}
              onClick={tabContentA}
            >
              未送達
            </div>
            <div className="cha-order-mana-title-switch" onClick={tabContentB}>
              已送達
            </div>
            <div
              className="cha-order-mana-title-switch"
              onClick={tabContentC}
              ref={elC}
            >
              已退費
            </div>
            <div className="cha-order-mana-title-switch" onClick={tabContentD}>
              揪團中
            </div>
          </div>
          <div className="cha-order-mana-content-row2">
            <WaveLine />
          </div>
          <div>{orderComponent}</div>
        </div>
      </>
    );
  };
  return (
    <>
      <TabMenu force={forceKey} index={tabindexKey} />
    </>
  );
}

export default ChaOrderManagement;
