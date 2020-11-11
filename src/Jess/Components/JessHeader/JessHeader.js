import React, { useState, useEffect } from 'react'
import { withRouter, useParams } from 'react-router-dom'
import { Rate } from 'antd'
import 'antd/dist/antd.css'
import './JessHeader.scss'
import chickenpic from './Images/02.jpg'
import Counter from '../../../Share/Components/Counter/Counter'
import AddCart from 'Share/Components/AddCart/AddCart'
import cart from '../../../Share/Components/AddCart/Images/cart.svg'
import BreadCrumb from '../JessBreadCrumb/BreadCrumb'

function JessProdoctList(props) {
  // const [count, setCount] = useState(1)
  // const [total, setTotal] = useState(170)
  const {
    handleCartNumber,
    count,
    setCount,
    total,
    setTotal,
    menu,
    setMenu,
  } = props
  // console.log(props)
  //useParams 設定id
  let { id } = useParams()
  // const [menu, setMenu] = useState([])
  // async function bentoData() {
  //   const url = 'http://localhost:5000/product/bento'

  //   const request = new Request(url, {
  //     method: 'GET',
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })

  //   const response = await fetch(request)
  //   const data = await response.json()

  //   // setMenu(data[0])
  //   //這邊id值可以設定分頁
  //   setMenu(data[id])
  //   console.log(data)
  // }

  // useEffect(() => {
  //   bentoData()
  // }, [])

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

  const CreateCartToLocalStorage = (item, amount = 1, isAdded) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []
    const index = currentCart.findIndex((v) => v.id === item.id)
    if (index > -1) {
      if (isAdded) {
        currentCart[index].productAmount += amount
      } else if (!isAdded && currentCart[index].productAmount > 1) {
        currentCart[index].productAmount--
      }
    } else {
      currentCart.push(item)
      console.log('currentCart', currentCart)
    }
    localStorage.setItem('cart', JSON.stringify(currentCart))
  }

  const calA = (e) => {
    setTabActive(e.target, '.jess-a')
  }
  const setTabActive = (addElem, removeName) => {
    let removeTargets = document.querySelectorAll(removeName)
    removeTargets.forEach((target) => {
      target.classList.toggle('active')
    })
  }
  return (
    <>
      <div className="jess-fluidBg">
        <div className="container jess-breadCrumb">
          <BreadCrumb menu={menu} />
        </div>

        <div className="jess-productList-chichenPic">
          <img
            className="jess-HeadPic"
            src={'/productImages/Bento/' + menu.img_id + '.jpg'}
          ></img>
          <img className="jess-HeadPic" src={chickenpic}></img>
        </div>
        {/* <p>/productImages/Bento/{menu.img_id}.jpg</p> */}

        <div className="jess-menuList ">
          <div className="jess-fav ">
            <button
              className="addFavorite-btn addFavorite-btn-n jess-a"
              onClick={calA}
            ></button>
            {/* <AddFavorite /> */}
          </div>
          <h1 className="jess-tittle">{menu.productname}</h1>
          <p className="jess-content">{menu.introduction}</p>
          <div className="row mt-1">
            <div className="col-3 col-md-3">
              <div className="jess-nutrient">蛋白質{menu.Protein}</div>
            </div>
            <div className="col-3 col-md-3">
              <div className="jess-nutrient">脂肪{menu.Fat}</div>
            </div>
            <div className="col-3 col-md-3">
              <div className="jess-nutrient2">
                碳水化合物{menu.carbohydrate}
              </div>
            </div>
            <div className="col-3 col-md-3">
              <div className="jess-nutrient3">卡路里{menu.calories}</div>
            </div>
          </div>
          <div className="jess-rateStar">
            <Rate disabled defaultValue={4} />
            <a href="#1" className="jess-contentId">
              <span className="jess-rateStarMsgNum">
                {menu.contentNum} 則評論{' '}
              </span>
            </a>
          </div>
          <hr />
          <div className="jess-productPrice mt-1">
            <p className="jess-salePrice mt-2">${total}</p>
            <p className="jess-saleTotal">今日已售出{menu.purchased}個</p>
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
            <button
              className="addCart-btn addCart-btn-n"
              onClick={() => {
                handleCartNumber('add', count)

                CreateCartToLocalStorage(
                  {
                    id: 1,
                    productName: '中歐香料嫩雞胸',
                    productPicture: '00_bento-chicken-breast',
                    productPrice: 150,
                    productAmount: 1,
                  },

                  count,
                  true
                )
              }}
            >
              <img className="addCart-cart addCart-cart-n" src={cart} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(JessProdoctList)
