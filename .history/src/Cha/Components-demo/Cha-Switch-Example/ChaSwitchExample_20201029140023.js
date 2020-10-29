import React, { useState, useEffect } from 'react';
import './ChaSwitchExample.scss';

function ChaSwitchExample() {
  // Acomponent
  const ComponentA = (props) => {
    return <div style={{height="100px",w}}></div>;
  };

  // Bコンポーネント
  const ComponentB = (props) => {
    return (
      <div class="component">
        <h1>This component is</h1>
        <p>Show this component which on click tab-{props.name}.</p>
      </div>
    );
  };

  // タブメニューをアクティブ・ディアクティブにする関数
  const setTabActive = (addElem, removeName) => {
    let removeTargets = document.querySelectorAll(removeName);
    removeTargets.forEach((target) => {
      target.classList.remove('active');
    });

    addElem.classList.add('active');
  };

  const TabMenu = () => {
    const [component, setComponent] = React.useState(<ComponentA />);

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

export default ChaSwitchExample;
