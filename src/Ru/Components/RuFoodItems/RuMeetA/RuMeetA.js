import React from 'react'
import './Style.scss' // 單獨
import '../Style.scss' // 共用
import shrimp from './Images/shrimp.svg'
import shrimpAfter from './Images/shrimpAfter.svg'

// 網頁版 主食 選項
function RuMeetA() {
  return (
    <>
      2
      <li className="ru-species-item ru-species-item1" id="">
        <div className="ru-species-img" id="ru-item1">
          <img
            src={shrimp}
            className="ru-items ru-meet"
            id="ru-meet-1"
            draggable="true"
          ></img>
        </div>
        <div className="ru-species-info">
          <ul>
            <li>
              <h4>
                火烤萊姆蝦 <span>$60</span>
              </h4>
            </li>
            <li className="ru-species-calories">熱量: 50大卡</li>
            <li className="ru-species-carbohydrates">碳水化合物: 10大卡</li>
            <li className="ru-species-protein">蛋白質: 10大卡</li>
            <li className="ru-species-fat">脂肪: 10大卡</li>
          </ul>
        </div>
      </li>
    </>
  )
}

export default RuMeetA
