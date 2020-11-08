// correct

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { ReactComponent as WaveLine } from './Images/wave_line.svg'
import { ReactComponent as StarOrange } from './Images/star_orange.svg'
import { ReactComponent as StarGrey } from './Images/star_grey.svg'
import './IrisMyFavSect.scss'
import Card from './Card/Card'
// import Star123 from './Images/star_orange.svg';

function IrisDataEditSect(props) {
  const { currentUser } = props
  const [myFav, setMyFav] = useState([])

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

  // 過濾出現在使用者的最愛
  const currentUserFav = myFav.filter(
    (myFav) => myFav.member_sid === currentUser
  )
  console.log(currentUserFav)

  // 新增最愛
  const addFav = (e) => {
    // 得到 product_sid
    const product_sid = e.target.className
    // console.log(product_sid)

    const newFavItem = {
      currentUser: currentUser,
      product_sid: product_sid,
    }
    // console.log(newProfile)

    fetch('http://localhost:5000/member/addMyFav', {
      method: 'POST',
      body: JSON.stringify(newFavItem),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
      .then((r) => r.json())
      .then((o) => {
        console.log(o)
      })
  }

  // 刪除最愛
  const deleteFav = (e) => {
    console.log('delete')

    // 得到 product_sid
    const product_sid = e.target.className
    // console.log(product_sid)

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
        console.log(o)
      })
  }

  return (
    <>
      <div className="container col-9">
        <div className="row justify-content-center iris-content-title-container ">
          <h2 className="iris-profile-title">我的最愛</h2>
          <WaveLine />
        </div>
        <div className="iris-cards-container d-flex">
          {currentUserFav.map((item, index) => {
            const imageId = 'card-img-' + item.product_sid
            const price = '$' + item.price
            return (
              <div>
                <Card
                  key={item.sid}
                  title={item.productname}
                  comment={item.contentNum}
                  price={price}
                  imgId={imageId}
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
                    addFav(e)
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

export default IrisDataEditSect
