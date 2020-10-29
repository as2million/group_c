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
import Button from '../../../Share/Components/Button/Button';
import star from './Images/Svg/star.svg';
import starO from './Images/Svg/star-o.svg';
import Card from '../../../Share/Components/Card/Card';

function JanIndex(props) {
  return (
    <>
      {/* 線上客服 */}
      <div className="jan-chat position-absolute d-flex justify-content-center align-items-center position-fixed">
        <div className="jan-chat-icon"></div>
      </div>
      <div className="jan-fake-nav d-flex justify-content-center align-items-center">
        navbar的高度
      </div>
      {/* 輪播牆 */}
      <div className="container-fluid jan-p0">
        <div className="row">
          <div className="jan-index-carousel position-relative">
            {/* 應用程式下載 */}
            {/* 橘底 */}
            <div className="position-absolute jan-download-area d-flex justify-content-center">
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

            {/* 切換鈕 */}
            <ul class="position-absolute jan-carousel-dots d-flex justify-content-center">
              <li class="jan-carousel-dot1"></li>
              <li class="jan-carousel-dot2"></li>
              <li class="jan-carousel-dot3"></li>
              <li class="jan-carousel-dot4"></li>
              <li class="jan-carousel-dot5"></li>
            </ul>
          </div>
        </div>
      </div>

      {/* 品牌特色 */}
      <div className="container jan-p0">
        <div className="row jan-index-feature d-flex align-items-center justify-content-center">
          {/* 標題 */}
          <div className="d-flex align-items-center">
            <img alt="" src={titleLeft} />
            <p className="jan-feature-title">品牌特色</p>
            <img alt="" src={titleRight} />
          </div>
          {/* circles */}
          <div className="d-flex jan-circles justify-content-around align-items-center">
            {/* circle1 */}
            <div className="jan-index-feature-circle d-flex flex-wrap justify-content-center align-items-center">
              <div className="jan-farmer-icon"></div>
              <p className="jan-circle-title">在地小農</p>
            </div>
            <div className="jan-index-feature-smcircle"></div>
            {/* circle2 */}
            <div className="jan-index-feature-circle d-flex flex-wrap justify-content-center align-items-center">
              <div className="jan-diet-icon"></div>
              <p className="jan-circle-title">產銷履歷</p>
            </div>
            <div className="jan-index-feature-smcircle"></div>
            {/* circle3 */}
            <div className="jan-index-feature-circle d-flex flex-wrap justify-content-center align-items-center">
              <div className="jan-choices-icon"></div>
              <p className="jan-circle-title">客製化便當</p>
            </div>
            <div className="jan-index-feature-smcircle"></div>
            {/* circle4 */}
            <div className="jan-index-feature-circle d-flex flex-wrap justify-content-center align-items-center">
              <div className="jan-network-icon"></div>
              <p className="jan-circle-title">揪團訂購</p>
            </div>
            <div className="jan-index-feature-smcircle"></div>
            {/* circle5 */}
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
      <div className="container-fluid jan-p0 jan-recommend ">
        <div className="jan-recommend-wrap">
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

          {/* 商品卡片 */}
          <div className="mt-5 container jan-recommend-cards d-flex justify-content-around">
            {/* <Card1 /> */}
            <div className="row">
              <div className="jan-card-container">
                {/* item圖片 */}
                <section className="jan-card-img-warp">
                  <a href="/" className="jan-card-link">
                    <img alt="" className="jan-card-img"></img>
                  </a>
                </section>

                <section className="jan-card-info-warp d-flex justify-content-center">
                  <div className="jan-card-info d-flex flex-column">
                    <h3>慢煮嫩雞胸-蒜味香草</h3>
                    {/* 分隔線 */}
                    <section>
                      <div className="jan-card-hr d-flex flex-column justify-content-center align-items-center">
                        <div className="mt-3  mb-2 jan-card-star-warp">
                          <img alt="" className="jan-card-star" src={starO} />
                          <img alt="" className="jan-card-star" src={starO} />
                          <img alt="" className="jan-card-star" src={starO} />
                          <img alt="" className="jan-card-star" src={starO} />
                          <img alt="" className="jan-card-star" src={starO} />
                        </div>
                        <span className="d-flex justify-content-center">
                          <p>232 則評論 </p>
                          <p>250 已購買</p>
                        </span>
                      </div>
                    </section>
                  </div>
                </section>
              </div>
            </div>
            {/* <Card2 /> */}
            <div className="row">
              <div className="jan-card-container">
                {/* item圖片 */}
                <section className="jan-card-img-warp">
                  <a href="/" className="jan-card-link">
                    <img alt="" className="jan-card-img"></img>
                  </a>
                </section>

                <section className="jan-card-info-warp d-flex justify-content-center">
                  <div className="jan-card-info d-flex flex-column">
                    <h3>慢煮嫩雞胸-蒜味香草</h3>
                    {/* 分隔線 */}
                    <section>
                      <div className="jan-card-hr d-flex flex-column justify-content-center align-items-center">
                        <div className="mt-3  mb-2 jan-card-star-warp">
                          <img alt="" className="jan-card-star" src={starO} />
                          <img alt="" className="jan-card-star" src={starO} />
                          <img alt="" className="jan-card-star" src={starO} />
                          <img alt="" className="jan-card-star" src={starO} />
                          <img alt="" className="jan-card-star" src={starO} />
                        </div>
                        <span className="d-flex justify-content-center">
                          <p>232 則評論 </p>
                          <p>250 已購買</p>
                        </span>
                      </div>
                    </section>
                  </div>
                </section>
              </div>
            </div>
            {/* Card3 */}
            <div className="row">
              <div className="jan-card-container">
                {/* item圖片 */}
                <section className="jan-card-img-warp">
                  <a href="/" className="jan-card-link">
                    <img alt="" className="jan-card-img"></img>
                  </a>
                </section>

                <section className="jan-card-info-warp d-flex justify-content-center">
                  <div className="jan-card-info d-flex flex-column">
                    <h3>慢煮嫩雞胸-蒜味香草</h3>
                    {/* 分隔線 */}
                    <section>
                      <div className="jan-card-hr d-flex flex-column justify-content-center align-items-center">
                        <div className="mt-3  mb-2 jan-card-star-warp">
                          <img alt="" className="jan-card-star" src={starO} />
                          <img alt="" className="jan-card-star" src={starO} />
                          <img alt="" className="jan-card-star" src={starO} />
                          <img alt="" className="jan-card-star" src={starO} />
                          <img alt="" className="jan-card-star" src={starO} />
                        </div>
                        <span className="d-flex justify-content-center">
                          <p>232 則評論 </p>
                          <p>250 已購買</p>
                        </span>
                      </div>
                    </section>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* 商品列表按鈕 */}
          <div className="mt-5 container jan-index-button d-flex justify-content-center">
            <Button className="button-btn" text="商品列表" />
          </div>
        </div>
      </div>

      {/* 專屬優惠 */}
      <div className="container-fluid jan-p0  jan-discount">
        <div className="container jan-p0">
          <div className="row jan-p0  d-flex justify-content-center">
            {/* 專屬優惠標題 */}
            <div className="d-flex align-items-center">
              <img alt="" src={titleLeft} />
              <p className="jan-feature-title">專屬優惠</p>
              <img alt="" src={titleRight} />
            </div>
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="img-demo">
                    <img src="./imgs/product1.jpg" alt="" />
                  </div>
                </div>
                <div class="col-12">
                  <div class="img-wrap d-flex">
                    <div class="img-row">
                      <img src="" alt="" />
                    </div>
                    <div class="img-row">
                      <img src="" alt="" />
                    </div>
                    <div class="img-row">
                      <img src="" alt="" />
                    </div>
                    <div class="img-row">
                      <img src="" alt="" />
                    </div>
                    <div class="img-row">
                      <img src="" alt="" />
                    </div>
                  </div>
                </div>
              </div>
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
        {/* 橘色底色 */}
        <div className="container flex-column jan-p0 jan-map-form">
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
          {/* 表單 */}
          <div className="container jan-p0 jan-adress-form">
            <div className="container jan-p0">
              <p>所在地點，符合滿</p>
              <p>元免運費</p>
              <p>最近的自取門市是</p>
              <div className="jan-map-buttons d-flex justify-content-around">
                <div className="row jan-index-button">
                  <Button className="button-btn " text="商品列表" />
                </div>
                <div className="row jan-index-button">
                  <Button className="button-btn " text="揪團訂購" />
                </div>
              </div>
            </div>
          </div>

          {/* 地圖 */}
          <div className="jan-map-view"></div>
        </div>
      </div>

      {/* 好文推薦 */}
      <div className="container-fluid jan-p0 jan-article">
        <div className="container jan-p0 d-flex justify-content-center">
          {/* 標題 */}
          <div className="d-flex align-items-center">
            <img alt="" src={titleLeft} />
            <p className="jan-feature-title">好文推薦</p>
            <img alt="" src={titleRight} />
          </div>

          <div>
            <div className="row">
              <div className="jan-card-container">
                {/* item圖片 */}
                <section className="jan-card-img-warp">
                  <a href="/" className="jan-card-link">
                    <img alt="" className="jan-card-img"></img>
                  </a>
                </section>

                <section className="jan-card-info-warp d-flex justify-content-center">
                  <div className="jan-card-info d-flex flex-column">
                    <h3>慢煮嫩雞胸-蒜味香草</h3>
                    {/* 分隔線 */}
                    <section>
                      <div className="jan-card-hr d-flex flex-column justify-content-center align-items-center">
                        <div className="mt-3  mb-2 jan-card-star-warp">
                          <img alt="" className="jan-card-star" src={starO} />
                          <img alt="" className="jan-card-star" src={starO} />
                          <img alt="" className="jan-card-star" src={starO} />
                          <img alt="" className="jan-card-star" src={starO} />
                          <img alt="" className="jan-card-star" src={starO} />
                        </div>
                        <span className="d-flex justify-content-center">
                          <p>232 則評論 </p>
                          <p>250 已購買</p>
                        </span>
                      </div>
                    </section>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JanIndex;
