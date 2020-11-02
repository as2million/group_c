import React, { useState, useEffect } from 'react';
import './ChaOrderManagement.scss';
import ChaOrderManagementNotArrived from './../Cha-Order-Management-NotArrived/ChaOrderManagementNotArrived';

function ChaOrderManagement(props) {
  return (
    <>
    const TabMenu = () => {
  const [component, setComponent] = useState(<ComponentA />);

  const tabContentA = (e) => {
    setTabActive(e.target, '.jess-productTabMenu__item');
    setComponent(<ComponentA name="Hi" />);
  };

  const tabContentB = (e) => {
    setTabActive(e.target, '.jess-productTabMenu__item');
    setComponent(<ComponentB name="B" />);
  };
  return (
    <>
      <div className="cha-order-mana-content-container col-9">
        <div className="cha-order-mana-content-row1">
          <div className="jess-productTabMenu__item" onClick={tabContentB}>未送達</div>
          <div className="jess-productTabMenu__item" onClick={tabContentB}>已送達</div>
          <div className="jess-productTabMenu__item" onClick={tabContentB}>已退費</div>
          <div className="jess-productTabMenu__item" onClick={tabContentB}>揪團中</div>
        </div>
        {/* <div className="cha-order-mana-content-row2"> */}
        <div className="cha-order-mana-border"></div>
        {/* </div> */}
        <div>{component}</div>
        <ChaOrderManagementNotArrived />
        <ChaOrderManagementNotArrived />
        <ChaOrderManagementNotArrived />
        <ChaOrderManagementNotArrived />
      </div>
    </>
  );
}
  return (
    <>
      <TabMenu />
    </>
  );
}




 


export default ChaOrderManagement;
