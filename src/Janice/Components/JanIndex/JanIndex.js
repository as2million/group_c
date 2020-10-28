import React, { useState, useEffect } from 'react';
import './JanIndex.scss';
import titleLeft from './Images/Svg/titleLeft.svg';
import titleRight from './Images/Svg/titleRight.svg';
import recommend1 from './Images/Svg/recommend1.svg';
import recommend2 from './Images/Svg/recommend2.svg';
import VNavbar from '../../../Share/Components/VNavbar/VNavbar';

function JanIndex(props) {
  return (
    <>
      <VNavbar className="jan-import-nv" />
      <div className="jan-import-nv">
        <VNavbar />
      </div>

      {/* 輪播牆 */}
      <div className="container-fluid">
        <div className="row">
          <div className="box d-flex justify-content-center align-items-center">
            navbar的高度
          </div>
          <div className="jan-index-carousel"></div>
        </div>
      </div>

      {/* 品牌特色 */}
      <div className="container ">
        <div className="row jan-index-feature d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center">
            <img alt="" src={titleLeft} />
            <p className="jan-feature-title">品牌特色</p>
            <img alt="" src={titleRight} />
          </div>

          <div className="d-flex jan-circles justify-content-around align-items-center">
            <div className="jan-index-feature-circle d-flex flex-wrap justify-content-center align-items-center">
              <div className="jan-farmer-icon"></div>
              <p className="jan-circle-title">在地小農</p>
            </div>
            <div className="jan-index-feature-smcircle"></div>
            <div className="jan-index-feature-circle d-flex flex-wrap justify-content-center align-items-center">
              <div className="jan-diet-icon"></div>
              <p className="jan-circle-title">產銷履歷</p>
            </div>
            <div className="jan-index-feature-smcircle"></div>
            <div className="jan-index-feature-circle d-flex flex-wrap justify-content-center align-items-center">
              <div className="jan-choices-icon"></div>
              <p className="jan-circle-title">客製化便當</p>
            </div>
            <div className="jan-index-feature-smcircle"></div>
            <div className="jan-index-feature-circle d-flex flex-wrap justify-content-center align-items-center">
              <div className="jan-network-icon"></div>
              <p className="jan-circle-title">揪團訂購</p>
            </div>
            <div className="jan-index-feature-smcircle"></div>
            <div className="jan-index-feature-circle d-flex flex-wrap justify-content-center align-items-center">
              <div className="jan-kcal-icon"></div>
              <p className="jan-circle-title">營養標示</p>
            </div>
          </div>
        </div>
        <div className="jan-index-feature-triangle"></div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="jan-index-feature-cards"></div>
        </div>
      </div>

      {/* 今日推薦 */}
      <div className="container-fluid jan-recommend">
        <div className="container">
          <div className="row mt-5">
            <img alt="" src={recommend1} className="ml-5 mr-5" />
            <br />
            <img alt="" src={recommend2} />
          </div>
          <div className="jan-recommend-cards"> </div>
        </div>
      </div>

      {/* 專屬優惠 */}
      <div className="container-fluid jan-discount">
        <div className="container">
          <div className="row mt-5 d-flex justify-content-center">
            <div className="d-flex align-items-center">
              <img alt="" src={titleLeft} />
              <p className="jan-feature-title">專屬優惠</p>
              <img alt="" src={titleRight} />
            </div>
          </div>
        </div>
      </div>
      {/* 購物流程 */}
      <div className="container-fluid jan-shopping-process">
        <div className="jan-blur">
          <div className="container jan-black-blur">
            <div className="row d-flex justify-content-center">
              <div className="d-flex align-items-center">
                <img alt="" src={titleLeft} />
                <p className="jan-feature-title">購物流程</p>
                <img alt="" src={titleRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 地圖判斷 */}
      {/* 好文推薦 */}
    </>
  );
}

export default JanIndex;
