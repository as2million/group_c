import React, { useState, useEffect } from 'react';
import './JanIndex.scss';
import titleLeft from './Images/Svg/titleLeft.svg';
import titleRight from './Images/Svg/titleRight.svg';
import wave from './Images/Svg/wave.svg';
import farmer from './Images/Svg/farmer.svg';
import { Container, Button, Row } from 'react-bootstrap';

function JanIndex(props) {
  return (
    <>
      <div className="container-fluid">
        {/* 輪播牆 */}
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
        <div className="container"></div>
      </div>
    </>
  );
}

export default JanIndex;
