import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import IrisMemberMenuSect from '../Components/IrisMemberMenuSect/IrisMemberMenuSect'
import IrisBeastiePointSect from '../Components/IrisBeastiePointSect/IrisBeastiePointSect'
import VNavbar from 'Share/Components/VNavbar/VNavbar'
import './IrisMemberPage.scss'
import { Redirect } from 'react-router-dom'

function IrisBeastiePoint(props) {
  const {
    isLogin,
    currentUser,
    setShowLoginModal,
    userCommentCount,
    userFavCount,
    userToTalCoin,
    setUserToTalCoin,
  } = props
  if (isLogin === false) {
    setShowLoginModal(true)
    return <Redirect to="/" />
  }
  return (
    <>
      <VNavbar />
      <div className="container iris-memberpage-container">
        <IrisMemberMenuSect
          currentUser={currentUser}
          // 投稿,最愛,怪獸幣數量
          // userCommentCount={userCommentCount}
          // userFavCount={userFavCount}
          // userToTalCoin={userToTalCoin}
        />
        <IrisBeastiePointSect
          currentUser={currentUser}
          // setUserToTalCoin={setUserToTalCoin}
        />
      </div>
    </>
  )
}

export default IrisBeastiePoint
