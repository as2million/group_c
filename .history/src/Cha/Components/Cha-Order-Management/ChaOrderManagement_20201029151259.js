import React, { useState, useEffect } from 'react';
import './ChaOrderManagement.scss';
import ChaOrderManagementNotArrived from './../Cha-Order-Management-NotArrived/ChaOrderManagementNotArrived';

function ChaOrderManagement(props) {
  return (
    <>
      <div className="cha-order-mana-content-container col-9">
        <div className="cha-order-mana-content-row1">
          <div style={{ color: '#F48145' }}>未送達</div>
          <div>已送達</div>
          <div>已退費</div>
          <div>揪團中</div>
        </div>
        {/* <div className="cha-order-mana-content-row2"> */}
        <div className="cha-order-mana-border"></div>
        {/* </div> */}
        <ChaOrderManagementNotArrived />
        <ChaOrderManagementNotArrived />
        <ChaOrderManagementNotArrived />
        <ChaOrderManagementNotArrived />
      </div>
    </>
  );
}



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
    <div className="container mt-5">
      <div className="jess-productTab">
        <ul className="jess-productTabMenu d-flex  justify-content-center">
          <li
            className="jess-productTabMenu__item active"
            onClick={tabContentA}
          >
            今日菜色
          </li>
          <li className="jess-productTabMenu__item" onClick={tabContentB}>
            營養標示
          </li>
        </ul>
        <div className="jess-productTabBorder"></div>
        <div className="jess-product-Tab1 d-flex ">{component}</div>
      </div>
    </div>
  );
};

return (
  <>
    <TabMenu />
  </>
);
}
export default ChaOrderManagement;
