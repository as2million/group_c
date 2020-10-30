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
              <div className="ru-detail-container"></div>
            </div>
          </div>
          <div className="ru-drag-container">
            <span>
              <RuArrowLeft />
            </span>
            <div className="ru-drag-warp">
              <div className="ru-selection-container"></div>
              <div className="ru-species-container"></div>
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
