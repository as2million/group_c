import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Rate } from 'antd'
import 'antd/dist/antd.css'
import './JessHeader.scss'

function JessProdoctList() {
  return (
    <>
      <container>
        <div className="productPic">
          {/* <img src={ChickenRice} alt="Background" />; */}
        </div>
        <div className="menuList">
          <h1>慢煮嫩雞胸-蒜味香草</h1>
          <p>
            以奧勒岡、紅甜椒等歐洲香料為主角，經冷油烹調加以醃製，清香純樸的風味，是一款嘗試香料魔法的好選擇！
          </p>
          <Row xs={4} md={4}>
            <Col>
              <div className="nutrient">蛋白質25g</div>
            </Col>
            <Col>
              <div className="nutrient">脂肪16g</div>
            </Col>
            <Col>
              <div className="nutrient2">碳水化合物16g</div>
            </Col>
            <Col>
              <div className="nutrient">卡路里385g</div>
            </Col>
          </Row>
          <div className="rateStar">
            <Rate disabled defaultValue={5} />
            <p>180 則評論 </p>
          </div>
          <hr />
          <div className="price">
            <h1>$140</h1>
            <p>今日已售出58個</p>
          </div>
          <hr />
        </div>
      </container>
    </>
  )
}

export default JessProdoctList
