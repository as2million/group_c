import React from 'react'
import './Style.scss'

function RuAddFavorite() {
  // 新增最愛
  // const addFav = (e) => {
  //   // 得到 product_sid
  //   const product_sid = e.target.className
  //   // console.log(product_sid)

  //   const newFavItem = {
  //     // currentUser: currentUser,
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
  //       console.log(o)
  //     })
  // }

  return (
    <>
      <button
        className="addFavorite-btn addFavorite-btn-n"
        onClick={(e) => {
          // addFav(e)
        }}
      ></button>
    </>
  )
}

export default RuAddFavorite
