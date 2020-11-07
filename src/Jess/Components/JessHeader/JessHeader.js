import React, { useState, useEffect } from 'react'
import { withRouter, useParams } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { Rate } from 'antd'
import 'antd/dist/antd.css'
import './JessHeader.scss'
import chickenpic from './Images/chickenRice02.jpg'
import Counter from '../../../Share/Components/Counter/Counter'
import AddCart from 'Share/Components/AddCart/AddCart'
import BreadCrumb from '../JessBreadCrumb/BreadCrumb'
import AddFavorite from 'Share/Components/AddFavorite/AddFavorite'

function JessProdoctList(props) {
  const [count, setCount] = useState(1)
  const [total, setTotal] = useState(170)
  console.log(props)
  //useParams 設定id
  let { id } = useParams()
  // const { menu } = props
  const [menu, setMenu] = useState([])
  async function bentoData() {
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

    // setMenu(data[0])
    //這邊id值可以設定分頁
    setMenu(data[id])
    console.log(data)
  }

  useEffect(() => {
    bentoData()
  }, [])

  const handleClick = (type) => {
    if (type === 'increment') {
      setCount(count + 1)
    }
    if (type === 'decrement' && count > 1) {
      setCount(count - 1)
    }
  }
  const handleTotal = (type) => {
    if (total - 170 >= 0 && count > 0 && type === 'decrement') {
      setTotal(total - 170)
    }
    if (type === 'increment') {
      setTotal(total + 170)
    }
  }

  return (
    <>
      <div className="jess-fluidBg">
        <div className="container jess-breadCrumb">
          <BreadCrumb />
        </div>
        {/* <container className="jess-container"></container> */}

        <div className="jess-productList-chichenPic">
          <img
            className="jess-HeadPic"
            src={'/productImages/Bento/' + menu.img_id + '.jpg'}
          ></img>
          <img className="jess-HeadPic" src={chickenpic}></img>
        </div>
        {/* <p>/productImages/Bento/{menu.img_id}.jpg</p> */}

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
            <p className="jess-salePrice">${total}</p>
            <p className="jess-saleTotal">今日已售出58個</p>
          </div>
          <hr />
          <div className=" mt-5 d-flex justify-content-center">
            <div className="counter-box">
              <div
                onClick={() => {
                  handleClick('decrement')
                  handleTotal('decrement')
                  // if (count === 2) {
                  //   setHoverBackgroundColor('white')
                  //   setHoverMinusColor('#858585')
                  // }
                }}
                className={
                  count === 1
                    ? 'counter-decrement cursor-default'
                    : 'counter-decrement counter-hover'
                }
              >
                <p>-</p>
              </div>
              <div className="counter-count">
                <p>{count}</p>
              </div>
              <div
                onClick={() => {
                  handleClick('increment')
                  handleTotal('increment')
                }}
                className="counter-increment"
              >
                <p>+</p>
              </div>
            </div>
          </div>
          <div className=" mt-5 d-flex justify-content-center">
            <AddCart />
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(JessProdoctList)
