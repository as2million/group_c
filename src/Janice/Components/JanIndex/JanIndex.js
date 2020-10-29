import React, { useState, useEffect } from 'react';
import './JanIndex.scss';
import titleLeft from './Images/Svg/titleLeft.svg';
import titleRight from './Images/Svg/titleRight.svg';
import titleLeftLight from './Images/Svg/titleLeft-light.svg';
import titleRightLight from './Images/Svg/titleRight-light.svg';
import recommend1 from './Images/Svg/recommend1.svg';
import recommend2 from './Images/Svg/recommend2.svg';
import map1 from './Images/Svg/map1.svg';
import map2 from './Images/Svg/map2.svg';
import stepArrow from './Images/Svg/stepArrow.svg';

function JanIndex(props) {
  return (
    <>
      <div className="box d-flex justify-content-center align-items-center">
        navbar的高度
      </div>
      {/* 輪播牆 */}
      <div className="container-fluid jan-p0">
        <div className="row">
          <div className="jan-index-carousel position-relative">
            {/* 切換鈕 */}
            <ul class="position-absolute jan-carousel-dots d-flex justify-content-center">
              <li class="jan-carousel-dot1"></li>
              <li class="jan-carousel-dot2"></li>
              <li class="jan-carousel-dot3"></li>
              <li class="jan-carousel-dot4"></li>
              <li class="jan-carousel-dot5"></li>
            </ul>

            {/* 應用程式下載 */}
            {/* 橘底 */}
            <div className="jan-download-area d-flex justify-content-center">
              {/* AppLogo＋應用程式icon */}
              <div className="jan-app-logo"></div>
              <div className="d-flex flex-column align-items-center jan-app-info">
                <p className="mt-1">點擊此處下載應用程式</p>
                <div className="jan-download-buttonsm d-flex justify-content-center">
                  <div className="jan-ios mr-3"></div>
                  <div className="jan-android"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 品牌特色 */}
      <div className="container jan-p0">
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

      <div className="container-fluid jan-p0">
        <div className="row jan-p0 ">
          <div className="jan-index-feature-cards"></div>
        </div>
      </div>

      {/* 今日推薦 */}
      <div className="container-fluid jan-p0 jan-recommend">
        <div className="container mt-5 flex-column jan-p0">
          {/* 今日推薦 */}
          <div className="row col-6">
            <img alt="" src={recommend1} />
          </div>
          {/* 你一定要試試 */}
          <div className="row col-6">
            <img alt="" src={recommend2} />
          </div>
        </div>
        <div className="container jan-recommend-cards">
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
        </div>
        <div className="jan-recommend-button"></div>
      </div>

      {/* 專屬優惠 */}
      <div className="container-fluid jan-p0  jan-discount">
        <div className="container jan-p0">
          <div className="row jan-p0 mt-5 d-flex justify-content-center">
            {/* 專屬優惠標題 */}
            <div className="d-flex align-items-center">
              <img alt="" src={titleLeft} />
              <p className="jan-feature-title">專屬優惠</p>
              <img alt="" src={titleRight} />
            </div>
          </div>
        </div>
      </div>

      {/* 購物流程 */}
      {/* 背景圖 */}
      <div className="container-fluid jan-p0 jan-shopping-process">
        {/* 模糊效果 */}
        <div className="jan-blur d-flex align-items-center">
          {/* 黑灰文字區塊 */}
          <div className="jan-p0 jan-black-blur">
            <div className="row d-flex justify-content-center align-items-center flex-column">
              {/* 購物流程標題-淺色 */}
              <div className="d-flex align-items-center mt-5">
                <img alt="" src={titleLeftLight} />
                <p className="jan-feature-title " style={{ color: '#F7EDE2' }}>
                  購物流程
                </p>
                <img alt="" src={titleRightLight} />
              </div>
              {/* 五個步驟 */}
              <div className="container jan-p0 jan-step-circle d-flex justify-content-between">
                {/* step1 */}
                <div className="jan-step1 d-flex flex-wrap justify-content-center align-items-center">
                  <div className="jan-step1-icon"></div>
                  <p>選購商品</p>
                </div>
                <img alt="" src={stepArrow} />
                {/* step2 */}
                <div className="jan-step2 d-flex flex-wrap justify-content-center align-items-center">
                  <div className="jan-step2-icon"></div>
                  <p className="">加入購物車</p>
                </div>
                <img alt="" src={stepArrow} />
                {/* step3 */}
                <div className="jan-step3 d-flex flex-wrap justify-content-center align-items-center">
                  <div className="jan-step3-icon"></div>
                  <p>會員登入</p>
                </div>
                <img alt="" src={stepArrow} />
                {/* step4 */}
                <div className="jan-step4 d-flex flex-wrap justify-content-center align-items-center">
                  <div className="jan-step4-icon"></div>
                  <p>確認結帳</p>
                </div>
                <img alt="" src={stepArrow} />
                {/* step5 */}
                <div className="jan-step5 d-flex flex-wrap justify-content-center align-items-center">
                  <div className="jan-step5-icon"></div>
                  <p>領取餐點</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 地圖 */}
      <div className="container-fluid jan-p0 jan-map mt-5">
        {/* 表格 */}
        <div className="container jan-p0 jan-map-form">
          {/* 標題 */}
          <div className="container mt-5 flex-column jan-p0 jan-map-title">
            <br />
            {/* 將餐桌上的美味 */}
            <div className="row mt-5">
              <img alt="" src={map1} />
            </div>
            {/* 外送給你 */}
            <div className="row ">
              <img alt="" src={map2} />
            </div>
          </div>
          <div className="container">
            <div className="row"></div>
          </div>
          <div className="container jan-map-buttons">
            <div className="row 5"></div>
            <div className="row 5"></div>
          </div>

          {/* 地圖 */}
          <div className="jan-map-view"></div>
        </div>
      </div>

      {/* 好文推薦 */}
      <div className="container-fluid jan-p0 jan-article">
        <div className="container jan-p0 d-flex justify-content-center">
          <div className="d-flex align-items-center">
            <img alt="" src={titleLeft} />
            <p className="jan-feature-title">好文推薦</p>
            <img alt="" src={titleRight} />
          </div>
        </div>
      </div>
    </>
  );
}

export default JanIndex;
