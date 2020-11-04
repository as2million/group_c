import React from 'react'
import './Style.scss'

function RuPriceA(props) {
  return (
    <>
      <div className="ru-info-item-container">
        {/* 詳細資料品項1 s */}
        <ul className="ru-info-item-warp">
          <li className="ru-info-item ru-info-item1">
            <div className="ru-category-container">
              <p className="ru-category">副食</p>
            </div>
            <p className="ru-selectionName">香甜白飯</p>
            <p className="ru-number">$10</p>
          </li>
          {/* 詳細資料品項1 e */}

          {/* 詳細資料品項2 s */}
          <li className="ru-info-item ru-info-item2">
            <div className="ru-category-container">
              <p className="ru-category">主食</p>
            </div>
            <p className="ru-selectionName">慢煮嫩雞胸-蒜味香草</p>
            <p className="ru-number">$55</p>
          </li>
          {/* 詳細資料品項2 e */}

          {/* 詳細資料品項3 s */}
          <li className="ru-info-item ru-info-item3">
            <div className="ru-category-container">
              <p className="ru-category">配菜</p>
            </div>
            <p className="ru-selectionName">清炒高麗菜</p>
            <p className="ru-number">$10</p>
          </li>
          {/* 詳細資料品項3 e */}

          {/* 詳細資料品項4 s */}
          <li className="ru-info-item ru-info-item4">
            <div className="ru-category-container">
              <p className="ru-category">配菜</p>
            </div>
            <p className="ru-selectionName">綠色嫩花椰</p>
            <p className="ru-number">$10</p>
          </li>
          {/* 詳細資料品項4 e */}

          {/* 詳細資料品項5 s */}
          <li className="ru-info-item ru-info-item5">
            <div className="ru-category-container">
              <p className="ru-category">配菜</p>
            </div>
            <p className="ru-selectionName">黃金玉米</p>
            <p className="ru-number">$15</p>
          </li>
          {/* 詳細資料品項5 e */}

          {/* 詳細資料品項6 s */}
          <li className="ru-info-item ru-info-item6">
            <div className="ru-category-container">
              <p className="ru-category">蛋</p>
            </div>
            <p className="ru-selectionName">水煮蛋</p>
            <p className="ru-number">$10</p>
          </li>
          {/* 詳細資料品項 e */}
        </ul>
      </div>
    </>
  )
}

export default RuPriceA
