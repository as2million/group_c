import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './JessListC.scss';

function JessListC() {
  // A-Veg
  const ComponentA = (props) => {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  };

  // B
  const ComponentB = (props) => {
    return (
      <div>
        <h1>Hello B</h1>
      </div>
    );
  };

  //
  const setTabActive = (addElem, removeName) => {
    let removeTargets = document.querySelectorAll(removeName);
    removeTargets.forEach((target) => {
      target.classList.remove('active');
    });

    addElem.classList.add('active');
  };

  const TabMenu = () => {
    const [component, setComponent] = React.useState(<ComponentA />);

    const vegA = (e) => {
      setTabActive(e.target, '.tab-menu__item1');
      setComponent(<ComponentA />);
    };

    const vegB = (e) => {
      setTabActive(e.target, '.tab-menu__item2');
      setComponent(<ComponentB />);
    };
    return (
      <>
        <div className="container-fluid jess-proC-bg ">
          {/* <img src="./images/jess-productlistC-768x457.jpg"></img> */}
          <div className="jess-proC-grace d-flex align-items-center">
            <div className="container ">
              <div className="row align-items-center">
                <div className="col-3">
                  <div className="jess-proC-farm"></div>
                </div>
                <div className="col-7">
                  <p className="jess-text-30white">每份餐點的無微不至</p>
                  <p className="jess-text-15white">您的每一份餐點</p>
                  <p className="jess-text-15white">
                    都是以下無微不至的用心製作. 讓您享受盒餐的新感官體驗
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container pt-5">
            <div className=" row">
              <div className="col-7">
                <p className="jess-text-24brown">台中新社</p>
                <p className="jess-text-20white">菇香厚實黑早冬菇</p>
                <p className="jess-text-15Gray">
                  嚴選生長期在12月至6月的黑早冬菇，將於寒冷氣候栽種的第一及第二水冬菇，經人工挑選出蘊含豐富養分的菇種，
                  由於風味濃郁、肉質肥厚因而被稱之「厚實」冬菇，而佔總產量30%的精選性更展現其珍貴與稀少
                  不僅馥郁香氣讓人為之陶醉，飽滿厚實的口感更猶如鮑魚般紮實彈牙，搭配各式食材料理皆能展現最佳風味
                </p>
              </div>
              <div className="jess-bento float-right"></div>
            </div>
          </div>
        </div>
        <div className="container-fluid jess-proC-vegChange">
          <ul className="row justify-content-around tab-menu">
            <li
              className="col mx-4 rounded tab-menu__item1 active"
              onClick={vegA}
            >
              111
            </li>
            <li className="col mx-4 rounded tab-menu__item2" onClick={vegB}>
              123
            </li>
          </ul>

          <div className="jess-product-Tab1 d-flex ">{component}</div>
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

export default JessListC;
