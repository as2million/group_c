import React, { useState, useEffect } from 'react';
import './ChaOrderManagement.scss';
import ChaOrderManagementNotArrived from './../Cha-Order-Management-NotArrived/ChaOrderManagementNotArrived';
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

  const TabMenu = () => {
    const [component, setComponent] = useState(<ComponentA />);

    const tabContentA = (e) => {
      setTabActive(e.target, '.jess-productTabMenu__item');
      setComponent(<ComponentA />);
    };

    const tabContentB = (e) => {
      setTabActive(e.target, '.jess-productTabMenu__item');
      setComponent(<ComponentB />);
    };
    return (
      <>
        <div className="cha-order-mana-content-container col-9">
          <div className="cha-order-mana-content-row1">
            <div
              className="jess-productTabMenu__item"
              onClick={tabContentA}
            >
              未送達
            </div>
            <div
              className="jess-productTabMenu__item"
              onClick={tabContentB}
            >
              已送達
            </div>
            <div className="jess-productTabMenu__item" onClick={tabContentB}>
              已退費
            </div>
            <div className="jess-productTabMenu__item" onClick={tabContentB}>
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
