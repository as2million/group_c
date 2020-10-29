import React, { useState, useEffect } from 'react';

import './ChaGroupOrderMenu.scss';

function ChaGroupOrderMenu(props) {
  return (
    <>
      <div className="cha-group-menu-fake-navbar"></div>
      <div className="cha-group-menu-fake-navbar2"></div>
      <div className="cha-group-menu-promt-container">
        <div className="cha-group-menu-promt-row">
          <div className="cha-group-menu-create-icon"></div>
          <div className="cha-group-menu-lack-promt"></div>
          <div className="cha-group-menu-lack-promt">
            <div>尚缺一份</div>
          </div>
          <div className="cha-group-menu-lack-promt"></div>
          <div className="cha-group-menu-lack-promt"></div>

        </div>
      </div>
    </>
  );
}
export default ChaGroupOrderMenu;
