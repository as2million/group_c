import React from 'react'
import './Style.scss' // 單獨
import '../Style.scss' // 共用
import rice from './Images/rice.svg'
import riceAfter from './Images/riceAfter.svg'

// 網頁版 白飯 選項
function RuRiceA(props) {
  const { riceName1, ricePrice1 } = props
  return (
    <>
      {/* 品項1 s*/}
      <li className="ru-species-item ru-species-item1" id="">
        <div className="ru-species-img" id="ru-item1">
          <img
            src={rice}
            className="ru-items ru-rice"
            id="ru-rice-1"
            draggable="true"
          ></img>
        </div>
        <div className="ru-species-info">
          <ul>
            <li>
              <h4>
                香甜白飯 <span>$10</span>
              </h4>
            </li>
            <li className="ru-species-calories">熱量: 50大卡</li>
            <li className="ru-species-carbohydrates">碳水化合物: 10大卡</li>
            <li className="ru-species-protein">蛋白質: 10大卡</li>
            <li className="ru-species-fat">脂肪: 10大卡</li>
          </ul>
        </div>
      </li>
      {/* 品項1 e*/}
    </>
  )
}

export default RuRiceA
