import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Rate } from 'antd'
import 'antd/dist/antd.css'
import './JessVegHeader.scss'
import Counter from '../../../Share/Components/Counter/Counter'
import AddCart from 'Share/Components/AddCart/AddCart'
import BreadCrumb from '../JessBreadCrumb/BreadCrumb'
import AddFavorite from 'Share/Components/AddFavorite/AddFavorite'

function JessVegHeader() {
  const [count, setCount] = useState(1)
  const [total, setTotal] = useState(350)
  const [veg, setVeg] = useState([])
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
    // data會是一個array
    // console.log(data)
    // console.log(data[0].productname)

    // setTotal(total.push(data))
    // setTotal(data)
    setVeg(data[22])
    console.log(data[22])
  }
  const handleClick = (type) => {
    if (type === 'increment') {
      setCount(count + 1)
    }
    if (type === 'decrement' && count > 1) {
      setCount(count - 1)
    }
  }
  const handleTotal = (type) => {
    if (total - 350 >= 0 && count > 0 && type === 'decrement') {
      setTotal(total - 350)
    }
    if (type === 'increment') {
      setTotal(total + 350)
    }
  }

  useEffect(() => {
    bentoData()
  }, [])
  return (
    <>
      <div className="jess-fluidBg">
        <div className="container jess-breadCrumb">
          <BreadCrumb />
        </div>
        {/* <container className="jess-container"></container> */}
        <div className="jess-productList-VegPic">
          {/* <img src={ChickenRice} alt="Background" />; */}
        </div>
        <div className="jess-menuList ">
          <AddFavorite />
          <h1 className="jess-tittle">{veg.productname}</h1>
          <p className="jess-text20Green mt-2">11月盛產季節限定</p>
          <p className="jess-contentVeg">{veg.introduction}</p>
          <p className="jess-text20GreenTc">
            ・出貨日期： <span className="jess-text-15Gray">預計 4 天到貨</span>
          </p>
          <div className="row mt-3 ">
            <div className="col-2">
              <button className="jess-calendar  active">11/21 星期六</button>
            </div>
            <div className="col-2">
              <button className="jess-calendar">11/22 星期日</button>
            </div>
            <div className="col-2">
              <button className="jess-calendar">11/23 星期一</button>
            </div>
            <div className="col-2">
              <button className="jess-calendar">11/24 星期二</button>
            </div>
            <div className="col-2">
              <button className="jess-calendar">11/25 星期三</button>
            </div>
          </div>
          <p className="jess-text20GreenTc mt-3">・尺寸</p>
          <div className="row mt-3 jess-VegSize ">
            <div className="col-2">
              <button className="jess-size active">S</button>
            </div>
            <div className="col-2">
              <button className="jess-size">M</button>
            </div>
            <div className="col-2">
              <button className="jess-size">L</button>
            </div>
          </div>
          <hr />
          <div className="jess-productPrice">
            <p className="jess-salePrice">${total}</p>
            <p className="jess-saleTotal">剩餘2箱</p>
          </div>
          <hr />
          <div className=" mt-5 d-flex justify-content-center">
            <div className="counter-box">
              <div
                onClick={() => {
                  handleClick('decrement')
                  handleTotal('decrement')
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

export default JessVegHeader
