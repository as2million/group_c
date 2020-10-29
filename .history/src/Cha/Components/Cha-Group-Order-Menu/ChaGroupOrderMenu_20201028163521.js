import React, { useState, useEffect } from 'react';

import './ChaGroupOrderMenu.scss';

function ChaGroupOrderMenu(props) {
  return (
    <>
      <div className="cha-group-menu-fake-navbar"></div>
      <div className="cha-group-menu-prompt-container">
        <div className="cha-group-menu-prompt-row">
          <div className="cha-group-menu-search-icon"></div>
          <div>開始揪團</div>
          <div className="cha-group-menu-arrow-one"></div>
          <div className="cha-group-menu-lack-prompt">
            <div>尚缺一份</div>
          </div>
          <div className="cha-group-menu-arrow-two"></div>
          <div className="cha-group-menu-group-success"></div>
          <div>開始揪團</div>
        </div>
      </div>
    </>
  );
}
export default ChaGroupOrderMenu;
