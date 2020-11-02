import React, { useState, useEffect } from 'react';
import './ChaOrderManagement.scss';
import ChaOrderManagementNotArrived from '.';
import ChaOrderManagementArrived from './../Cha-Order-Management-Arrived/ChaOrderManagementArrived';

function ChaOrderManagement(props) {
  // 未達成
  const ComponentA = (props) => {
    return (
      <>
        <ChaOrderManagementNotArrived />
        <ChaOrderManagementNotArrived />
        <ChaOrderManagementNotArrived />
        <ChaOrderManagementNotArrived />
      </>
    );
  };
  // 已達成
  const ComponentB = (props) => {
    return (
      <>
        <ChaOrderManagementArrived />
        <ChaOrderManagementArrived />
        <ChaOrderManagementArrived />
        <ChaOrderManagementArrived />
      </>
    );
  };
  // 已退費
  const ComponentC = (props) => {
    return (
      <>
        <div>已退費</div>
      </>
    );
  };
  // 已退費
  const ComponentD = (props) => {
    return (
      <>
        <div>揪團中</div>
      </>
    );
  };
  // 切換用函式
  const setTabActive = (addElem, removeName) => {
    let removeTargets = document.querySelectorAll(removeName);
    removeTargets.forEach((target) => {
      target.classList.remove('active');
    });

    addElem.classList.add('active');
  };
  const TabMenu = () => {
    const [component, setComponent] = useState(<ComponentA />);

    const tabContentA = (e) => {
      setTabActive(e.target, '.cha-productTabMenu__item');
      setComponent(<ComponentA />);
    };

    const tabContentB = (e) => {
      setTabActive(e.target, '.cha-productTabMenu__item');
      setComponent(<ComponentB />);
    };
    const tabContentC = (e) => {
      setTabActive(e.target, '.cha-productTabMenu__item');
      setComponent(<ComponentC />);
    };
    const tabContentD = (e) => {
      setTabActive(e.target, '.cha-productTabMenu__item');
      setComponent(<ComponentD />);
    };
    return (
      <>
        <div className="cha-order-mana-content-container col-9">
          <div className="cha-order-mana-content-row1">
            <div
              className="cha-productTabMenu__item active"
              onClick={tabContentA}
            >
              未送達
            </div>
            <div className="cha-productTabMenu__item" onClick={tabContentB}>
              已送達
            </div>
            <div className="cha-productTabMenu__item" onClick={tabContentC}>
              已退費
            </div>
            <div className="cha-productTabMenu__item" onClick={tabContentD}>
              揪團中
            </div>
          </div>
          {/* <div className="cha-order-mana-content-row2"> */}
          <div className="cha-order-mana-border"></div>
          {/* </div> */}
          <div>{component}</div>
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
