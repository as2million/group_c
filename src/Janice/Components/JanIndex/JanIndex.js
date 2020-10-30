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
import starO from './Images/Svg/star-o.svg';
import MainPageSelectBox from '../../../Share/Components/Input/MainPageSelectBox';
import InputH50 from '../../../Share/Components/Input/InputH50';

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

      <div className="container-fluid jan-p0">
        <div className="row jan-p0 ">
          <div className="jan-index-feature-cards"></div>
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
          <div className="flex-column jan-p0 jan-map-title">
            <br />
            {/* 將餐桌上的美味 */}
            <div className="row mt-5">
              <img alt="" src={map1} />
            </div>
            {/* 外送給你 */}
            <div className="row ">
              <img alt="" src={map2} />
            </div>
            {/* 表單 */}
            <div className="row jan-p0 jan-adress-form">
              <form>
                <div className="jan-adress-radio">
                  <input type="radio" name="location" value="tv" /> 台北市
                  <input type="radio" name="location" value="ntc" /> 新北市
                </div>
                <br />
                <div className="jan-adress-select">
                  <MainPageSelectBox />
                </div>
                <br />
                <div className="jan-adress-input">
                  <InputH50 />
                </div>

                <br />
                <div className="jan-index-button">
                  <Button className="button-btn " text="確認送出" />
                </div>
              </form>
              <p>所在地點，符合滿</p>
              <p>元免運費</p>
              <p>最近的自取門市是</p>
              <div className="jan-map-buttons d-flex justify-content-between">
                <div className="jan-index-button">
                  <Button className="button-btn " text="商品列表" />
                </div>

                <div className="jan-index-button">
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
        <div className="jan-p0 flex-colunm justify-content-center">
          {/* 標題 */}
          <div className="row ml-1 d-flex justify-content-center">
            <img alt="" src={titleLeft} />
            <p className="m-5 jan-feature-title">好文推薦</p>
            <img alt="" src={titleRight} />
          </div>

          {/* 推薦文章卡片 */}

          <div className="row d-flex justify-content-center">
            {/* 左邊模糊卡片 */}
            <div className="col-3 jan-article-left-blur">
              <div className="jan-p0">
                <div className=" jan-p0 d-flex justify-content-center flex-wrap jan-article-bcc">
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
              </div>
            </div>

            <div className="col-6 d-flex justify-content-center">
              <div className="container jan-p0">
                <div className="row jan-p0 d-flex justify-content-center flex-wrap jan-article-bcc">
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
              </div>

              <div className="container jan-p0">
                <div className="row jan-p0 d-flex justify-content-center flex-wrap jan-article-bcc">
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
            </div>

            {/* 右邊模糊卡片 */}
            <div className="col-3 jan-article-right-blur">
              <div className="container jan-p0">
                <div className="row jan-p0 d-flex justify-content-center flex-wrap jan-article-bcc">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JanIndex;
