import React from 'react'
import './Style.scss' // 單獨
import '../Style.scss' // 共用
import egg from './Images/egg.svg'
import poachedEgg from './Images/poachedEgg.svg'

// 網頁版 蛋 選項
function RuEggA() {
  return (
    <>
      4{/* 品項1 s*/}
      <li className="ru-species-item ru-species-item1">
        <div className="ru-species-img">
          <img src={egg} className="ru-items ru-egg" id="ru-egg-1"></img>
        </div>
        <div className="ru-species-info">
          <ul>
            <li>
              <h4>
                白煮蛋 <span>$10</span>
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
      {/* 品項2 s*/}
      <li className="ru-species-item ru-species-item2">
        <div className="ru-species-img">
          <img src={poachedEgg} className="ru-items ru-egg" id="ru-egg-2"></img>
        </div>
        <div className="ru-species-info">
          <ul>
            <li>
              <h4>
                溏心蛋 <span>$15</span>
              </h4>
            </li>
            <li className="ru-species-calories">熱量: 50大卡</li>
            <li className="ru-species-carbohydrates">碳水化合物: 10大卡</li>
            <li className="ru-species-protein">蛋白質: 10大卡</li>
            <li className="ru-species-fat">脂肪: 10大卡</li>
          </ul>
        </div>
      </li>
      {/* 品項2 e*/}
    </>
  )
}

export default RuEggA
