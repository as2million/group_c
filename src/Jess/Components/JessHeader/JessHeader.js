import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Rate } from 'antd'
import 'antd/dist/antd.css'
import './JessHeader.scss'

function JessProdoctList() {
  return (
    <>
      <body className="mybody">
        <div className="jess-fluidBg">
          {/* <container className="jess-container"></container> */}
          <div className="jess-productList-chichenPic">
            {/* <img src={ChickenRice} alt="Background" />; */}
          </div>
          <div className="jess-menuList">
            <h1 className="jess-tittle">慢煮嫩雞胸-蒜味香草</h1>
            <p className="jess-content">
              以奧勒岡、紅甜椒等歐洲香料為主角，經冷油烹調加以醃製，清香純樸的風味，是一款嘗試香料魔法的好選擇！
            </p>
            <Row xs={4} md={4}>
              <Col>
                <div className="jess-nutrient">蛋白質25g</div>
              </Col>
              <Col>
                <div className="jess-nutrient">脂肪16g</div>
              </Col>
              <Col>
                <div className="jess-nutrient2">碳水化合物16g</div>
              </Col>
              <Col>
                <div className="jess-nutrient">卡路里385g</div>
              </Col>
            </Row>
            <div className="jess-rateStar">
              <Rate disabled defaultValue={5} />
              <span className="jess-rateStarMsgNum">180 則評論 </span>
            </div>
            <hr />
            <div className="jess-productPrice">
              <p className="jess-salePrice">$140</p>
              <p className="jess-saleTotal">今日已售出58個</p>
            </div>
            <hr />
          </div>
        </div>
      </body>
    </>
  )
}

export default JessProdoctList
