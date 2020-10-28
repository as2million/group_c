import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import 'antd/dist/antd.css'
import './JessListB.scss'

function JessListB() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="jess-ListB-cheif">
            <Fade top>
              <h1>產銷履歷安心雞肉，餐桌上肉品的首選</h1>
              <p>
                我們選用的雞肉，皆能透過產銷履歷的把關，溯源到養殖環境、成長過程等等
                從源頭為親朋好友提供最安心與健康的食材。 再藉由蒸烤爐控制火侯
                讓食材發揮出最新鮮原始的鮮甜味。
              </p>
            </Fade>
            <div className="jess-ListB-chicken"></div>
          </div>
          <div className="jess-ListB-word">
            <p>
              菜色以減油、減鹽、不油炸、多蔬菜的料理為主
              由中央廚房當日新鮮現做，嚴選新鮮食材讓您吃得到食材原形，
              熱量完整揭露輕鬆計算、詳細的食材來源
              讓您看得到、吃得到安心，外食族的健康新選擇。
            </p>
            <h2>主廚用心研發</h2>
            <div className="jessListBpic1"></div>
            <div className="jessListBpic2"></div>
            <div className="jessListBpic3"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JessListB
