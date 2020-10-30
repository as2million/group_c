import React, { useState } from 'react';
import 'Ru/Components/RuCards/Style.scss';
import RuArrowLeft from 'Ru/Components/RuArrowLeft/RuArrowLeft';
import RuArrowRight from 'Ru/Components/RuArrowRight/RuArrowRight';

// 引用共用元件
import Card from 'Share/Components/Card/Card';

// 引用圖片
import background from './Images/background.png';

function RuCustom() {
  return (
    <>
      {/* <h1 style={{ textAlign: 'center', fontSize: '80px' }}>
        ----- 這頁是客製化便當 -----
      </h1> */}

      <div className="ru-custom-container">
        <div className="ru-custom-warp">
          <div className="ru-drop-container">
            <div className="ru-drop-warp">
              <div className="ru-box-container"></div>
              <div className="ru-detail-container">
                <div className="ru-switchBtn-container"></div>
                <div className="ru-info-container">
                  <div className="ru-info-item-container">
                    <div className="ru-info-item-warp">
                      <div className="ru-info-item">
                        <div className="ru-category-container">
                          <div className="ru-category">副食</div>
                        </div>
                        <div className="ru-selectionName">香甜白飯</div>
                        <div className="ru-number">$10</div>
                      </div>
                      <div className="ru-info-item"></div>
                      <div className="ru-info-item"></div>
                      <div className="ru-info-item"></div>
                      <div className="ru-info-item"></div>
                      <div className="ru-info-item"></div>
                    </div>
                  </div>
                  <div className="ru-info-total-container">
                    <div className="ru-info-total"></div>
                  </div>
                </div>
                <div className="ru-checkout-container">
                  <div className="ru-checkout-warp"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="ru-drag-container">
            <span>
              <RuArrowLeft />
            </span>
            <div className="ru-drag-warp">
              <div className="ru-selection-container">
                <div className="ru-selection-warp"></div>
              </div>
              <div className="ru-species-container">
                {/* 副食 / 主食 / 配菜 / 蛋 的元件 s*/}
                <div className="ru-species-warp ru-species-warp1">
                  <div className="ru-species ru-species1">AAA</div>
                  <div className="ru-species ru-species2">BBB</div>
                  <div className="ru-species ru-species3">CCC</div>
                  <div className="ru-species ru-species4">DDD</div>
                  <div className="ru-species ru-species5">EEE</div>
                </div>
                {/*  副食 / 主食 / 配菜 / 蛋 的元件 e*/}
              </div>
            </div>
            <span>
              <RuArrowRight />
            </span>
          </div>
        </div>
      </div>

      {/* <div className="ru-species-container"> */}
      {/* <div className="ru-species-warp"></div> */}
      {/* </div> */}

      {/* 背景米圖 s */}
      {/* <img src={background}></img> */}
      {/* 背景米圖 e */}
    </>
  );
}

export default RuCustom;
