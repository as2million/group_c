import React from 'react'
import './Style.scss' // 單獨
import '../Style.scss' // 共用
import cauliflower from './Images/cauliflower.svg'
import cabage from './Images/cabage.svg'
import corn from './Images/corn.svg'

// 網頁版 配菜 選項
function RuVegetableA(props) {
  const { data, veg1available, veg2available, veg3available } = props
  return (
    <>
      {/* 品項1 s*/}
      <li className="ru-species-item ru-species-item1">
        <div className="ru-species-img">
          {veg1available ? (
            <img
              src={cauliflower}
              className="ru-items ru-veg"
              id="ru-veg-1"
            ></img>
          ) : (
            <img
              src={cauliflower}
              className="ru-items ru-veg"
              id="ru-veg-1"
              style={{ pointerEvents: 'none', filter: 'grayscale(100%)' }}
            ></img>
          )}
        </div>
        <div className="ru-species-info">
          <ul>
            <li>
              <h4>
                {data[8].productName} <span>${data[8].price}</span>
              </h4>
            </li>
            <li className="ru-species-calories">
              熱量: {data[8].calories}大卡
            </li>
            <li className="ru-species-carbohydrates">
              碳水化合物:{data[8].cabohydrate}g
            </li>
            <li className="ru-species-protein">蛋白質: {data[8].protein}g</li>
            <li className="ru-species-fat">脂肪: {data[8].fat}g</li>
          </ul>
        </div>
      </li>
      {/* 品項1 e*/}
      {/* 品項2 s*/}
      <li className="ru-species-item ru-species-item2">
        <div className="ru-species-img">
          {veg2available ? (
            <img src={cabage} className="ru-items ru-veg" id="ru-veg-2"></img>
          ) : (
            <img
              src={cabage}
              className="ru-items ru-veg"
              id="ru-veg-2"
              style={{ pointerEvents: 'none', filter: 'grayscale(100%)' }}
            ></img>
          )}
        </div>
        <div className="ru-species-info">
          <ul>
            <li>
              <h4>
                {data[9].productName} <span>${data[9].price}</span>
              </h4>
            </li>
            <li className="ru-species-calories">
              熱量: {data[9].calories}大卡
            </li>
            <li className="ru-species-carbohydrates">
              碳水化合物:{data[9].cabohydrate}g
            </li>
            <li className="ru-species-protein">蛋白質: {data[9].protein}g</li>
            <li className="ru-species-fat">脂肪: {data[9].fat}g</li>
          </ul>
        </div>
      </li>
      {/* 品項2 e*/}
      {/* 品項3 s*/}
      <li className="ru-species-item ru-species-item3">
        {veg3available ? (
          <div className="ru-species-img">
            <img src={corn} className="ru-items ru-veg" id="ru-veg-3"></img>
          </div>
        ) : (
          <img
            src={corn}
            className="ru-items ru-veg"
            id="ru-veg-3"
            style={{ pointerEvents: 'none', filter: 'grayscale(100%)' }}
          ></img>
        )}

        <div className="ru-species-info">
          <ul>
            <li>
              <h4>
                {data[10].productName} <span>${data[10].price}</span>
              </h4>
            </li>
            <li className="ru-species-calories">
              熱量: {data[10].calories}大卡
            </li>
            <li className="ru-species-carbohydrates">
              碳水化合物:{data[10].cabohydrate}g
            </li>
            <li className="ru-species-protein">蛋白質: {data[10].protein}g</li>
            <li className="ru-species-fat">脂肪: {data[10].fat}g</li>
          </ul>
        </div>
      </li>
      {/* 品項3 e*/}
    </>
  )
}

export default RuVegetableA
