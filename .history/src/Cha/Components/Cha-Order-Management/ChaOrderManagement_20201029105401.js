import React, { useState, useEffect } from 'react';
import './ChaOrderManagement.scss';
function ChaOrderManagement(props) {
  return (
    <>
      <div className="cha-order-mana-container col-9">
        <div className="row">
          <div className="cha-order-mana-title">未送達</div>
          <div className="cha-order-mana-title">已送達</div>
          <div className="cha-order-mana-title">已退費</div>
          <div className="cha-order-mana-title">揪團中</div>
        </div>
        <div className="cha-order-mana-border"></div>
      </div>
    </>
  );
}
export default ChaOrderManagement;
