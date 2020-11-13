// correct

import React, { useState, useEffect, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { ReactComponent as WaveLine } from './Images/wave_line.svg'
import { ReactComponent as StarOrange } from './Images/star_orange.svg'
import { ReactComponent as StarGrey } from './Images/star_grey.svg'
import './IrisMyFavSect.scss'
import IrisCard from './IrisCard/IrisCard'
// import Star123 from './Images/star_orange.svg';

function IrisMyFavSect(props) {
  const {
    currentUser,
    userFavDelete,
    // 設定userFavDelete的狀態，傳到memberMenu，若有改變數字會減一
    setUserFavDelete,
  } = props
  const [myFav, setMyFav] = useState([])
  const [showFavArr, setShowFavArr] = useState([])

  // 得到目前所有的最愛資料
  async function getMyFavFromServer() {
    const url = 'http://localhost:5000/member/myFavList'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    console.log(data)
    setMyFav(data)
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getMyFavFromServer()
  }, [])

  // useEffect(() => {
  //   // 拿到有幾筆要固定我的最愛按鈕 邏輯
  //   const favArr = [] // 放抓到的myFav[i].product_sid資料
  //   for (let i = 0; i < myFav.length; i++) {
  //     // 如果當前會員 跟 我的最愛資料表的member_sid匹配
  //     if (currentUser === myFav[i].member_sid) {
  //       // console.log(myFav[i].product_sid)
  //       favArr.push(myFav[i].product_sid)
  //     }
  //   }
  //   // console.log(favArr)
  //   setShowFavArr(favArr) // 這樣才可以傳到RuAddFavorite
  //   console.log(showFavArr)
  // }, [myFav])

  // 過濾出現在使用者的最愛
  const currentUserFav = myFav.filter(
    (myFav) => myFav.member_sid === currentUser
  )
  console.log(currentUserFav)

  // 新增最愛
  // const addFav = (e) => {
  //   // 得到 product_sid
  //   const product_sid = e.target.className
  //   // console.log(product_sid)

  //   const newFavItem = {
  //     currentUser: currentUser,
  //     product_sid: product_sid,
  //   }
  //   // console.log(newProfile)

  //   fetch('http://localhost:5000/member/addMyFav', {
  //     method: 'POST',
  //     body: JSON.stringify(newFavItem),
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })
  //     .then((r) => r.json())
  //     .then((o) => {
  //       // console.log(o)
  //     })
  // }

  // 刪除最愛
  const deleteFav = (e) => {
    // 得到 product_sid
    const product_sid = e.target.className

    // 2. 連動menu數字
    // 設甚麼值無所謂，重點是讓狀態改變，menu那邊useEffect才會偵測到
    setUserFavDelete(product_sid)

    const itemToBeDelete = {
      currentUser: currentUser,
      product_sid: product_sid,
    }
    // console.log(newProfile)

    fetch('http://localhost:5000/member/deleteMyFav', {
      method: 'POST',
      body: JSON.stringify(itemToBeDelete),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
      .then((r) => r.json())
      .then((o) => {
        // console.log(o)
      })
  }

  return (
    <>
      <div className="container col-9">
        <div className="row justify-content-center iris-content-title-container ">
          <h2 className="iris-profile-title">我的最愛</h2>
          <WaveLine />
        </div>
        <div className="iris-cards-container row">
          {currentUserFav.map((item, index) => {
            // const imageId = 'card-img-' + item.product_sid
            const imageId = item.img_id
            const price = '$' + item.price
            return (
              <div class="col-4">
                <IrisCard
                  key={item.sid}
                  title={item.productname}
                  comment={item.contentNum}
                  price={price}
                  imgId={imageId}
                  showFavArr={showFavArr}
                  currentUserFav={currentUserFav}
                />
                <div
                  id="iris-card-delete"
                  className={item.product_sid}
                  onClick={(e) => {
                    deleteFav(e)
                  }}
                >
                  delete
                </div>
                <div
                  id="iris-card-add"
                  className={item.product_sid}
                  onClick={(e) => {
                    // addFav(e)
                  }}
                >
                  add
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default IrisMyFavSect
