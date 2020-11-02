import React, { useState, useEffect } from 'react'
import './JanIndex.scss'
import titleLeft from './Images/Svg/titleLeft.svg'
import titleRight from './Images/Svg/titleRight.svg'
import titleLeftLight from './Images/Svg/titleLeft-light.svg'
import titleRightLight from './Images/Svg/titleRight-light.svg'
import recommend1 from './Images/Svg/recommend1.svg'
import recommend2 from './Images/Svg/recommend2.svg'
import map1 from './Images/Svg/map1.svg'
import map2 from './Images/Svg/map2.svg'
import stepArrow from './Images/Svg/stepArrow.svg'
import Button from '../../../Share/Components/Button/Button'
import starO from './Images/Svg/star-o.svg'
import ArrowLeft from '../../../Share/Components/ArrowLeft/ArrowLeft'
import ArrowRight from '../../../Share/Components/ArrowRight/ArrowRight'
import VNavbar from '../../../Share/Components/VNavbar/VNavbar'
import ToToop from '../../../Share/Components/ToTopButton/ScrollButton'

function JanIndex(props) {
  const { placeholder, type, id } = props
  return (
    <>
      <VNavbar />

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

            {/* 滾動提示 */}
            <div className="position-absolute jan-mouse-scroll d-flex justify-content-center w-100"></div>

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

      {/* 品牌特色 參考jess list a*/}
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

      {/* intros */}
      <div className="container-fluid jan-p0 jan-intro-area">
        <div className="container jan-intro1 jan-p0">
          {/* 在地小農 */}
          <div className="jan-intro1">
            {/* 介紹欄位 */}
            <div className="jan-intro1-wrap">
              <div className="jan-intro1-title"></div>
              <div className="jan-intro1-text">
                <p>嚴選在地農產品</p>
                <p>透過小農地圖</p>
                <p className="jan-intro1-large-text">
                  “拾餐“帶你從餐桌看見台灣
                </p>
                <p>走訪這些在地小農</p>
                <p>打開感官體驗</p>
                <p>拾餐也提供蔬菜箱寄送</p>
                <p>給想自己料理的你</p>
                <p>不用出門也能品嘗到安心的美味</p>
              </div>
              <div className="jan-index-button float-right mt-3">
                <Button className="button-btn-g" text="小農地圖" />
              </div>
            </div>
            {/* 小農欄位 */}
            <div className="jan-intro1-cards p-5">
              {/* 萱草園．農友張武增 */}
              <div className="jan-intro1-card1">
                <div className="jan-intro1-farmer1 d-flex justify-content-center"></div>
                <div className="jan-intro1-card1-wrap flex-column">
                  <div className="jan-intro1-fake-farmer1"></div>
                  <p className="jan-card1-title">萱草園．農友張武增</p>
                  <p className="jan-card1-text ">
                    張武增張大哥，生於花蓮赤柯山 田地保育山羌，通過綠色保育標章
                    「安心金針」甘甜風味受好評 友善耕種，堅持不使用農藥、化肥
                    熱風烘乾，堅持提供無硫金針。
                  </p>
                  <div className="jan-card-arrow float-right"></div>
                  <br />
                  <p className="jan-card1-viewmore float-right">view more</p>
                </div>
              </div>

              {/* 青翠園有機農場・農友莊翠蘭 */}
              <div className="jan-intro1-card2">
                <div className="jan-intro1-card2">
                  <div className="jan-intro1-farmer2"></div>
                  <div className="jan-intro1-card2-wrap flex-column">
                    <div className="jan-intro1-fake-farmer2"></div>
                    <p className="jan-card2-title">
                      青翠園有機農場・農友莊翠蘭
                    </p>
                    <p className="jan-card2-text ">
                      堅持至今的信念是個好： 「對自己身體好，對消費者的身體好，
                      對土地好，對天地萬物好」。 她的心願是，「如果土地會說話，
                      希望他們會說：『嗯，我很舒服』， 這樣就太好了！」
                    </p>
                    <div className="jan-card-arrow float-right"></div>
                    <br />
                    <p className="jan-card2-viewmore float-right">view more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 產銷履歷 */}
          <div className="jan-intro2 ">
            <div className="jan-intro2-wrap">
              <div className="jan-intro2-title"></div>
              <div className="jan-intro2-text">
                <p>農產品產銷履歷制度</p>
                <p>是一種農產品從農場到餐桌</p>
                <p>在生產、加工、運輸、銷售過程</p>
                <p>完整記錄的安心保證制度</p>
                <p>具備可追溯生產者或加工者之資訊</p>
                <p>對於健康的把關</p>
                <p>拾餐總是比你更在意</p>
              </div>
              <div className="jan-index-button float-right mt-3">
                <Button className="button-btn" text="商品列表" />
              </div>
            </div>
            <div className="jan-intro2-cards"></div>
          </div>

          {/* 客製化便當 */}
          {/* <div className="jan-intro3">
            <div className="jan-intro3-wrap">
              <div className="jan-intro3-title"></div>
              <div className="jan-intro3-text">
                <p>親愛的，是不是有那些日子，看著菜單卻覺得無從下手，</p>
                <p>想吃照燒雞肉配玉米炒蛋，</p>
                <p>可偏偏照燒雞肉的配菜卻是最討厭的菜色呢？</p>
                <p>照過來，照過來!</p>
                <p className="jan-intro3-large-text">“拾餐”客製化便當</p>
                <p>幫你實現午餐到晚餐的美味想法；</p>
                <p>自由組合，隨心搭配，</p>
                <p>別再讓你的想法受限於制式的菜單上了！</p>
              </div>
              <div className="jan-index-button float-right mt-3">
                <Button className="button-btn" text="客製化便當" />
              </div>
            </div>
            <div className="jan-intro3-cards"></div>
          </div> */}

          {/* 揪團訂購 */}
          <div className="jan-intro4">
            <div className="jan-intro4-wrap">
              <div className="jan-intro4-title"></div>
              <div className="jan-intro4-text">
                <p>農產品產銷履歷制度</p>
                <p>是一種農產品從農場到餐桌</p>
                <p>在生產、加工、運輸、銷售過程</p>
                <p>完整記錄的安心保證制度</p>
                <p>具備可追溯生產者或加工者之資訊</p>
                <p>對於健康的把關</p>
                <p>拾餐總是比你更在意</p>
              </div>
              <div className="jan-index-button float-right mt-3">
                <Button className="button-btn" text="商品列表" />
              </div>
            </div>
            <div className="jan-intro4-cards"></div>
          </div>
          {/* 營養標示 */}
          <div className="jan-intro5">
            <div className="jan-intro5-wrap">
              <div className="jan-intro5-title"></div>
              <div className="jan-intro5-text">
                <p>農產品產銷履歷制度</p>
                <p>是一種農產品從農場到餐桌</p>
                <p>在生產、加工、運輸、銷售過程</p>
                <p>完整記錄的安心保證制度</p>
                <p>具備可追溯生產者或加工者之資訊</p>
                <p>對於健康的把關</p>
                <p>拾餐總是比你更在意</p>
              </div>
              <div className="jan-index-button float-right mt-3">
                <Button className="button-btn" text="商品列表" />
              </div>
            </div>
            <div className="jan-intro5-cards"></div>
          </div>
        </div>
      </div>

      {/* 今日推薦 */}
      <div className="container-fluid jan-p0 jan-recommend ">
        <div className="jan-recommend-wrap">
          <div className="container flex-column jan-p0">
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
          <div className="mt-5 container jan-recommend-cards">
            <div className="d-flex justify-content-between">
              {/* <Card1 /> */}
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
              {/* <Card2 /> */}
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
              {/* Card3 */}
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
            <div className="d-flex align-items-center mt-4 mb-3">
              <img alt="" src={titleLeft} />
              <p className="jan-feature-title">專屬優惠</p>
              <img alt="" src={titleRight} />
            </div>
            {/* 活動卡片 */}
            <div class="container">
              <div class="row">
                <div class="col-12 d-flex justify-content-center">
                  <div class="jan-event d-flex ">
                    <div className="jan-event-img">
                      <img src="" alt="" />
                    </div>
                    <div className="jan-event-text text-center m-auto">
                      <div className="jan-event-title mb-5">
                        <p>現在訂購</p>
                        <p>就送 Blender Bottle 搖搖杯</p>
                      </div>
                      <div className="jan-event-content mt-3">
                        <p>環保，才是歷久不衰的流行。</p>
                        <p>現在訂購，就送Blender Bottle搖搖杯</p>
                        <br />
                        <br />
                        <p>你可以這樣做，輕鬆拿到限量搖搖杯！</p>
                        <br />
                        <br />
                        <p>訂20個 期間限定百元餐盒</p>
                        <p>包兩週 外送宅配到公司</p>
                        <br />
                        <br />
                        <p className="jan-call-to-action">馬上訂購</p>
                      </div>
                      <div className="jan-event-date">
                        活動日期：2020.11.1~2020.12.31
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 mt-5 ">
                  <div class="img-wrap d-flex justify-content-between align-items-center">
                    <div className="jan-event-arrowL">
                      <ArrowLeft />
                    </div>
                    <div className="jan-img-select d-flex justify-content-between">
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
                    <div className="jan-event-arrowR">
                      <ArrowRight />
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
        <div className="container flex-column align-items-center jan-map-form-bcc">
          <div className="flex-column jan-map-form-wrap">
            <br />
            {/* 標題 */}
            <div className="mt-5">
              <img alt="" src={map1} />
              <img alt="" src={map2} />
            </div>

            {/* 表單 */}
            <div className="jan-adress-form-wrap d-flex justify-content-center align-items-center">
              <div className="jan-form-wrap2 d-flex flex-column m-0">
                <div className="mb-4">
                  <form name="jan-adress-form" id="jan-adress-form">
                    <p className="jan-form-announce">
                      請填寫地址，查看免運金額
                    </p>
                    <div className="jan-adress-radio">
                      <input type="radio" name="location" value="tc" /> 台北市
                      <input
                        className="ml-5"
                        type="radio"
                        name="location"
                        value="ntc"
                      />{' '}
                      新北市
                    </div>
                    <br />
                    <div className="jan-adress-select">
                      <div className="iris-mainpage-select-wrapper d-flex">
                        <div className="iris-selectbar-wrapper">
                          <select
                            className="form-control iris-mainpage-select"
                            id="exampleFormControlSelect1"
                          >
                            <option
                              value="1"
                              style={{ color: '#b6b6b6', fontSize: '1rem' }}
                              disabled
                              selected
                            >
                              請選擇區域
                            </option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                          <div className="iris-mainpage-whitebox"></div>
                          <div className="iris-mainpage-trianglearrow" />
                        </div>
                      </div>
                    </div>

                    <br />
                    <div className="jan-adress-input">
                      <input
                        className="form-control iris-inputH50"
                        type={type}
                        placeholder={placeholder}
                        id={id}
                      />
                    </div>

                    <br />
                    <div className="jan-index-button float-right">
                      <Button className="button-btn-y " text="確認送出" />
                    </div>
                  </form>
                </div>
                <div className="jan-map-results mt-4">
                  <p>
                    所在地點，符合滿<span>500元</span>免運費
                  </p>
                  <p>
                    最近的自取地點是大安門市<span>（查看其他門市）</span>
                  </p>
                </div>
                <div className="jan-map-buttons d-flex justify-content-between mt-4">
                  <div className="jan-index-button">
                    <Button className="button-btn" text="商品列表" />
                  </div>
                  <br />
                  <div className="jan-index-button">
                    <Button className="button-btn" text="揪團訂購" />
                  </div>
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
        <div className="jan-p0 flex-colunm justify-content-center">
          {/* 標題 */}
          <div className="row ml-1 mb-5 d-flex justify-content-center">
            <img alt="" src={titleLeft} />
            <p className="mt-2 jan-feature-title">好文推薦</p>
            <img alt="" src={titleRight} />
          </div>

          {/* 推薦文章卡片 */}
          <div className="row d-flex justify-content-center align-items-center">
            {/* 左邊模糊卡片 */}
            <div className="col-3">
              <div className="m-auto d-flex justify-content-center flex-wrap jan-article-bcc  jan-article-left-blur">
                {/* 圖片 */}
                <div className="jan-article-img"></div>
                {/* 文字 */}
                <div className="jan-article-text-area">
                  <p className="jan-article-name">Alice Yong</p>
                  <p className="jan-article-text">
                    以前勤勞的時候天天煮低卡便當，但是發覺實在很累。兩個人的食材份量很難拿捏，還要採買、準備、收拾清潔，後來乾脆直接放棄。你們的出現真的是一大救星~低卡方便又超好吃，偶爾想下廚也有菜箱寄送服務，而且還看得到產銷履歷，真的讓人很安心！
                  </p>
                </div>
              </div>
            </div>

            {/* 中間兩張卡片 */}
            <div className="col-6 d-flex justify-content-around">
              <div className="d-flex justify-content-center flex-wrap jan-article-bcc">
                {/* 圖片 */}
                <div className="jan-article-img1"></div>
                {/* 文字 */}
                <div className="jan-article-text-area">
                  <p className="jan-article-name">Alice Yong</p>
                  <p className="jan-article-text">
                    以前勤勞的時候天天煮低卡便當，但是發覺實在很累。兩個人的食材份量很難拿捏，還要採買、準備、收拾清潔，後來乾脆直接放棄。你們的出現真的是一大救星~低卡方便又超好吃，偶爾想下廚也有菜箱寄送服務，而且還看得到產銷履歷，真的讓人很安心！
                  </p>
                </div>
              </div>

              <div className="d-flex justify-content-center flex-wrap jan-article-bcc">
                {/* 圖片 */}
                <div className="jan-article-img2"></div>
                {/* 文字 */}
                <div className="jan-article-text-area">
                  <p className="jan-article-name">小傑</p>
                  <p className="jan-article-text">
                    我一直都有健身的習慣，也有在喝高蛋白，對於飲食基本上我沒有甚麼克制。很感謝你們讓我可以體驗到好吃又健康吃不膩的水煮餐，真的滿適合健身的我這樣吃！
                    吃得飽又吃得健康，現在的人太常外食很硬攝取到高熱量、高油脂的食物，會造成身體負擔。
                    但有了這樣的餐盒產生，就可以減少這一些麻煩了！
                  </p>
                </div>
              </div>
            </div>

            {/* 右邊模糊卡片 */}
            <div className="col-3">
              <div className="m-auto d-flex justify-content-center flex-wrap jan-article-bcc jan-article-right-blur">
                {/* 圖片 */}
                <div className="jan-article-img"></div>
                {/* 文字 */}
                <div className="jan-article-text-area">
                  <p className="jan-article-name">小傑</p>
                  <p className="jan-article-text">
                    我一直都有健身的習慣，也有在喝高蛋白，對於飲食基本上我沒有甚麼克制。很感謝你們讓我可以體驗到好吃又健康吃不膩的水煮餐，真的滿適合健身的我這樣吃！
                    吃得飽又吃得健康，現在的人太常外食很硬攝取到高熱量、高油脂的食物，會造成身體負擔。
                    但有了這樣的餐盒產生，就可以減少這一些麻煩了！
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ToToop />
          <div className="jan-article-arrowR">
            <ArrowRight />
          </div>
          <div className="jan-article-blurR"></div>
          <div className="jan-article-arrowL">
            <ArrowLeft />
          </div>
          <div className="jan-article-blurL"></div>
        </div>
      </div>
    </>
  )
}

export default JanIndex
