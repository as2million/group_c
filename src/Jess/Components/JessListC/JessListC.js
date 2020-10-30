import React, { useState, useEffect } from 'react';
import './JessListC.scss';
import { Parallax } from 'rc-scroll-anim';
import Slide from 'react-reveal/Slide';
import vegChoice1 from './images/jess-onion.png';

function JessListC() {
  // A-Veg
  const ComponentA = (props) => {
    return (
      <div className="container-fluid mt-5 ">
        <div className="row  justify-content-start">
          <div className="col-8 d-flex align-items-center">
            <Parallax
              animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
              style={{ transform: 'translateX(-100px)', opacity: 0 }}
              className="jess-vegChoice1  mx-3 col-12 col-md-4"
            ></Parallax>
            {/* <div className=" jess-vegChoice1 mx-3 col-12 col-md-4"></div> */}
            <Parallax
              animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
              style={{ transform: 'translateX(-100px)', opacity: 0 }}
              className="jess-vegChoice2 mx-3 col-12 col-md-4"
            ></Parallax>
            {/* <div className=" jess-vegChoice2 mx-3 col-12 col-md-4"></div> */}
            <Parallax
              animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
              style={{ transform: 'translateX(-100px)', opacity: 0 }}
              className="jess-vegChoice3 mx-3 col-12 col-md-4"
            ></Parallax>
            {/* <div className=" jess-vegChoice3 mx-3 col-12 col-md-4"></div> */}
          </div>
          <div className="col-2  jess-vegChoice-text">
            <p className="jess-text-15Gray">
              頂級溫室栽培 使用大量鮮奶 等天然營 養素、並施用有機肥 果實飽滿
              香氣濃郁 口感極佳 甜度高 給消費者吃的健康、安
              心、讓你吃的安心還想在吃。
            </p>
            <h2>朝敏果菜行</h2>
          </div>
        </div>
      </div>
    );
  };
  const ComponentA2 = (props) => {
    return (
      <Slide bottom cascade>
        <div className="col-7">
          <p className="jess-text-24brown">哈囉台中新社</p>
          <p className="jess-text-20white">菇香厚實黑早冬菇</p>
          <p className="jess-text-15Gray">
            嚴選生長期在12月至6月的黑早冬菇，將於寒冷氣候栽種的第一及第二水冬菇，經人工挑選出蘊含豐富養分的菇種，
            由於風味濃郁、肉質肥厚因而被稱之「厚實」冬菇，而佔總產量30%的精選性更展現其珍貴與稀少
            不僅馥郁香氣讓人為之陶醉，飽滿厚實的口感更猶如鮑魚般紮實彈牙，搭配各式食材料理皆能展現最佳風味
          </p>
        </div>
      </Slide>
    );
  };
  // B
  const ComponentB = (props) => {
    return (
      <div className="container-fluid mt-5 ">
        <div className="row  justify-content-start">
          <div className="col-8 d-flex align-items-center">
            <div className=" jess-vegChoice1 mx-3 col-12 col-md-4"></div>

            <div className=" jess-vegChoice2 mx-3 col-12 col-md-4"></div>

            <div className=" jess-vegChoice3 mx-3 col-12 col-md-4"></div>
          </div>
          <div className="col-2  jess-vegChoice-text">
            <p className="jess-text-15Gray">
              頂級溫室栽培 使用大量鮮奶 等天然營 養素、並施用有機肥 果實飽滿
              香氣濃郁 口感極佳 甜度高 給消費者吃的健康、安
              心、讓你吃的安心還想在吃。
            </p>
            <h2>朝敏果菜行</h2>
          </div>
        </div>
      </div>
    );
  };
  const ComponentB2 = (props) => {
    return (
      <div className="col-7">
        <p className="jess-text-24brown">哈囉我是B2</p>
        <p className="jess-text-20white">菇香厚實黑早冬菇</p>
        <p className="jess-text-15Gray">
          嚴選生長期在12月至6月的黑早冬菇，將於寒冷氣候栽種的第一及第二水冬菇，經人工挑選出蘊含豐富養分的菇種，
          由於風味濃郁、肉質肥厚因而被稱之「厚實」冬菇，而佔總產量30%的精選性更展現其珍貴與稀少
          不僅馥郁香氣讓人為之陶醉，飽滿厚實的口感更猶如鮑魚般紮實彈牙，搭配各式食材料理皆能展現最佳風味
        </p>
      </div>
    );
  };
  // C
  const ComponentC = (props) => {
    return (
      <div className="container-fluid mt-5 ">
        <div className="row  justify-content-start">
          <div className="col-8 d-flex align-items-center">
            <div className=" jess-vegChoice1 mx-3 col-12 col-md-4"></div>

            <div className=" jess-vegChoice2 mx-3 col-12 col-md-4"></div>

            <div className=" jess-vegChoice3 mx-3 col-12 col-md-4"></div>
          </div>
          <div className="col-2  jess-vegChoice-text">
            <p className="jess-text-15Gray">
              頂級溫室栽培 使用大量鮮奶 等天然營 養素、並施用有機肥 果實飽滿
              香氣濃郁 口感極佳 甜度高 給消費者吃的健康、安
              心、讓你吃的安心還想在吃。
            </p>
            <h2>朝敏果菜行</h2>
          </div>
        </div>
      </div>
    );
  };
  // D
  const ComponentD = (props) => {
    return (
      <div className="container-fluid mt-5 ">
        <div className="row  justify-content-start">
          <div className="col-8 d-flex align-items-center">
            <div className=" jess-vegChoice1 mx-3 col-12 col-md-4"></div>

            <div className=" jess-vegChoice2 mx-3 col-12 col-md-4"></div>

            <div className=" jess-vegChoice3 mx-3 col-12 col-md-4"></div>
          </div>
          <div className="col-2  jess-vegChoice-text">
            <p className="jess-text-15Gray">
              頂級溫室栽培 使用大量鮮奶 等天然營 養素、並施用有機肥 果實飽滿
              香氣濃郁 口感極佳 甜度高 給消費者吃的健康、安
              心、讓你吃的安心還想在吃。
            </p>
            <h2>朝敏果菜行</h2>
          </div>
        </div>
      </div>
    );
  };
  // E
  const ComponentE = (props) => {
    return (
      <div className="container-fluid mt-5 ">
        <div className="row  justify-content-start">
          <div className="col-8 d-flex align-items-center">
            <div className=" jess-vegChoice1 mx-3 col-12 col-md-4"></div>

            <div className=" jess-vegChoice2 mx-3 col-12 col-md-4"></div>

            <div className=" jess-vegChoice3 mx-3 col-12 col-md-4"></div>
          </div>
          <div className="col-2  jess-vegChoice-text">
            <p className="jess-text-15Gray">
              頂級溫室栽培 使用大量鮮奶 等天然營 養素、並施用有機肥 果實飽滿
              香氣濃郁 口感極佳 甜度高 給消費者吃的健康、安
              心、讓你吃的安心還想在吃。
            </p>
            <h2>朝敏果菜行</h2>
          </div>
        </div>
      </div>
    );
  };

  //
  const setTabActive = (addElem, removeName) => {
    let removeTargets = document.querySelectorAll(removeName);
    removeTargets.forEach((target) => {
      target.classList.remove('active');
      console.log(target);
    });

    addElem.classList.add('active');
  };

  const TabMenu = () => {
    const [component, setComponent] = React.useState(<ComponentA />);
    const [component2, setComponent2] = React.useState(<ComponentA2 />);

    const vegA = (e) => {
      setTabActive(e.target, '.a');
      setComponent(<ComponentA />);
      setComponent2(<ComponentA2 />);
    };

    const vegB = (e) => {
      setTabActive(e.target, '.jess-a');
      setComponent(<ComponentB />);
      setComponent2(<ComponentB2 />);
    };
    const vegC = (e) => {
      setTabActive(e.target, '.jess-a');
      setComponent(<ComponentC />);
    };
    const vegD = (e) => {
      setTabActive(e.target, '.jess-a');
      setComponent(<ComponentD />);
    };
    const vegE = (e) => {
      setTabActive(e.target, '.jess-a');
      setComponent(<ComponentE />);
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
            <div className="jess-bento float-right"></div>
            <div className="jess-coverbg">
              <div className=" row jess-zindex">
                {component2}
                {/* <div className="col-7">
                <p className="jess-text-24brown">台中新社</p>
                <p className="jess-text-20white">菇香厚實黑早冬菇</p>
                <p className="jess-text-15Gray">
                  嚴選生長期在12月至6月的黑早冬菇，將於寒冷氣候栽種的第一及第二水冬菇，經人工挑選出蘊含豐富養分的菇種，
                  由於風味濃郁、肉質肥厚因而被稱之「厚實」冬菇，而佔總產量30%的精選性更展現其珍貴與稀少
                  不僅馥郁香氣讓人為之陶醉，飽滿厚實的口感更猶如鮑魚般紮實彈牙，搭配各式食材料理皆能展現最佳風味
                </p>
              </div> */}
                {/* <div className="jess-bento float-right"></div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid jess-proC-vegChange">
          <ul className="row justify-content-around  align-items-end jess-proC-vegbox">
            <li className="col-2 "></li>
            <li
              className="col mx-4 rounded jess-proC-vegPic1 jess-a active"
              onClick={vegA}
            ></li>
            <li
              className="col mx-4 rounded jess-proC-vegPic2 jess-a"
              onClick={vegB}
            ></li>
            <li
              className="col mx-4 rounded jess-proC-vegPic3 jess-a"
              onClick={vegC}
            ></li>
            <li
              className="col mx-4 rounded jess-proC-vegPic4 jess-a"
              onClick={vegD}
            ></li>
            <li
              className="col mx-4 rounded jess-proC-vegPic5 jess-a"
              onClick={vegE}
            ></li>
            <li className="col-2 "></li>
          </ul>

          <div className="jess-product-Tab1 d-flex ">{component}</div>
          <div className="container d-flex justify-content-end">
            <div className="jess-proC-rArrow d-flex float-right"></div>
          </div>
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
