import React from 'react'
import './Style.scss' // 單獨
import '../Style.scss' // 共用
import shrimp from './Images/shrimp.svg'
import shrimpAfter from './Images/shrimpAfter.svg'

// 網頁版 主食 選項
function RuMeetA(props) {
  const { data } = props
  return (
    <>
      {/* 品項3 s*/}
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
                {data[5].productName} <span>${data[5].price}</span>
              </h4>
            </li>
            <li className="ru-species-calories">
              熱量: {data[5].calories}大卡
            </li>
            <li className="ru-species-carbohydrates">
              碳水化合物:{data[5].cabohydrate}g
            </li>
            <li className="ru-species-protein">蛋白質: {data[5].protein}g</li>
            <li className="ru-species-fat">脂肪: {data[5].fat}g</li>
          </ul>
        </div>
      </li>
      {/* 品項3 e*/}
    </>
  )
}

export default RuMeetA
