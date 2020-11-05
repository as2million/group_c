import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Rate } from 'antd'
import 'antd/dist/antd.css'
import './JessHeader.scss'
import Counter from '../../../Share/Components/Counter/Counter'
import AddCart from 'Share/Components/AddCart/AddCart'
import BreadCrumb from '../JessBreadCrumb/BreadCrumb'
import AddFavorite from 'Share/Components/AddFavorite/AddFavorite'
import { data } from 'jquery'

function JessProdoctList() {
  // const adressData = (e) => {
  //   fetch('http://localhost:5000/product/bento', {
  //     method: 'GET',
  //     headers: new Headers({
  //       'Content-Type': 'application/json',
  //     }),
  //   })
  //     .then((r) => r.json())

  //     .then((obj) => {
  //       console.log('test', obj)
  //     })
  // }
  const [menu, setMenu] = useState([])
  async function adressData() {
    const url = 'http://localhost:5000/product/bento'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // data會是一個array
    // console.log(data)
    // console.log(data[0].productname)

    // setTotal(total.push(data))
    // setTotal(data)
    setMenu(data[0])
    console.log()
  }

  useEffect(() => {
    adressData()
  }, [])

  return (
    <>
      {/* <div className="container jess-breadCrumb">
        <BreadCrumb />
      </div> */}
      {/* <BreadCrumb className="jess-breadCrumb" /> */}
      <div className="jess-fluidBg">
        <div className="container jess-breadCrumb">
          <BreadCrumb />
        </div>
        {/* <container className="jess-container"></container> */}
        <div className="jess-productList-chichenPic">
          {/* <img src={ChickenRice} alt="Background" />; */}
        </div>
        <div className="jess-menuList ">
          <AddFavorite />
          <h1 className="jess-tittle">{menu.productname}</h1>
          <p className="jess-content">{menu.introduction}</p>
          <Row xs={4} md={4}>
            <Col>
              <div className="jess-nutrient">蛋白質{menu.Protein}</div>
            </Col>
            <Col>
              <div className="jess-nutrient">脂肪{menu.Fat}</div>
            </Col>
            <Col>
              <div className="jess-nutrient2">
                碳水化合物{menu.carbohydrate}
              </div>
            </Col>
            <Col>
              <div className="jess-nutrient3">卡路里{menu.calories}</div>
            </Col>
          </Row>
          <div className="jess-rateStar">
            <Rate disabled defaultValue={5} />
            <span className="jess-rateStarMsgNum">
              {menu.contentNum} 則評論{' '}
            </span>
          </div>
          <hr />
          <div className="jess-productPrice">
            <p className="jess-salePrice">{menu.price}</p>
            <p className="jess-saleTotal">今日已售出58個</p>
          </div>
          <hr />
          <div className=" mt-5 d-flex justify-content-center">
            <Counter />
          </div>
          <div className=" mt-5 d-flex justify-content-center">
            <AddCart />
          </div>
        </div>
      </div>
    </>
  )
}

export default JessProdoctList
