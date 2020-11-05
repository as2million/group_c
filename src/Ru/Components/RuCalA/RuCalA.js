import React, { useEffect, useState } from 'react'
import './Style.scss'

function RuCalA(props) {
  const [Cal, setCal] = useState(0)

  useEffect(() => {
    const $numbers = document.querySelectorAll(
      '.ru-custom-containerA .ru-number'
    )
    const numberArr = [...$numbers]
    // console.log($numbers, numberArr)
    let total = 0
    numberArr.map((item, i) => {
      total += parseInt(item.innerHTML.replace('$', ''))
    })
    // console.log(total)
    setCal(total)
    return () => {}
  }, [])
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
            <p className="ru-number">108kcal</p>
          </li>
          {/* 詳細資料品項1 e */}

          {/* 詳細資料品項2 s */}
          <li className="ru-info-item ru-info-item2">
            <div className="ru-category-container">
              <p className="ru-category">主食</p>
            </div>
            <p className="ru-selectionName">慢煮嫩雞胸-蒜味香草</p>
            <p className="ru-number">208kcal</p>
          </li>
          {/* 詳細資料品項2 e */}

          {/* 詳細資料品項3 s */}
          <li className="ru-info-item ru-info-item3">
            <div className="ru-category-container">
              <p className="ru-category">配菜</p>
            </div>
            <p className="ru-selectionName">清炒高麗菜</p>
            <p className="ru-number">58kcal</p>
          </li>
          {/* 詳細資料品項3 e */}

          {/* 詳細資料品項4 s */}
          <li className="ru-info-item ru-info-item4">
            <div className="ru-category-container">
              <p className="ru-category">配菜</p>
            </div>
            <p className="ru-selectionName">綠色嫩花椰</p>
            <p className="ru-number">62kcal</p>
          </li>
          {/* 詳細資料品項4 e */}

          {/* 詳細資料品項5 s */}
          <li className="ru-info-item ru-info-item5">
            <div className="ru-category-container">
              <p className="ru-category">配菜</p>
            </div>
            <p className="ru-selectionName">黃金玉米</p>
            <p className="ru-number">53kcal</p>
          </li>
          {/* 詳細資料品項5 e */}

          {/* 詳細資料品項6 s */}
          <li className="ru-info-item ru-info-item6">
            <div className="ru-category-container">
              <p className="ru-category">蛋</p>
            </div>
            <p className="ru-selectionName">水煮蛋</p>
            <p className="ru-number">62kcal</p>
          </li>
          {/* 詳細資料品項 e */}
        </ul>
      </div>
      <div className="ru-info-total-container">
        <div className="ru-info-total-warp">
          <div className="ru-category-container ru-hold">
            <p className="ru-category">佔寬</p>
          </div>
          <h3>總熱量</h3>
          <p>{Cal}kcal</p>
        </div>
      </div>
    </>
  )
}

export default RuCalA
