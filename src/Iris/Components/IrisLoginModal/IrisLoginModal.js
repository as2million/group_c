import React, { useState } from 'react'
import './IrisLoginModal.scss'
import IrisLoginCard from './../IrisLoginCard/IrisLoginCard'
import IrisSuccessBox from './../IrisSuccessBox/IrisSuccessBox'

function IrisLoginModal(props) {
  const [showSucessBox, SetShowSucessBox] = useState(false)
  const [showLoginCard, SetShowLoginCard] = useState(true)

  const {
    showLoginModal,
    setShowLoginModal,
    setIsLogin,
    setCurrentUser,
    isLogin,
  } = props

  // 若ShowLoginModal是true，就秀登入畫面
  if (document.querySelector('.iris-login-mask')) {
    if (showLoginModal === true) {
      // 秀登入畫面
      document.querySelector('.iris-login-mask').style.display = 'block'
      document.querySelector('.iris-login-container').style.display = 'block'
      document.documentElement.style.overflowY = 'hidden' // 禁止滾動
    } else {
      document.querySelector('.iris-login-mask').style.display = 'none'
      document.querySelector('.iris-login-container').style.display = 'none'
      document.querySelector('.iris-sucess-container').style.display = 'none'
      document.documentElement.style.overflowY = 'scroll'
    }
  }

  if (showLoginCard === false) {
    document.querySelector('.iris-login-container').style.display = 'none'
  }
  if (showSucessBox) {
    if (showSucessBox === true) {
      document.querySelector('.iris-sucess-container').style.display = 'block'
    } else {
      document.querySelector('.iris-sucess-container').style.display = 'none'
    }
  }

  return (
    <>
      <div
        className="iris-login-mask"
        onClick={() => {
          setShowLoginModal(false) // 點擊黑色遮罩把ShowLoginModa把改回false
          SetShowSucessBox(false)
        }}
      ></div>
      <div class="container iris-login-container">
        {/* <div
          className="iris-login-background"
          onClick={(e) => {
            console.log('pink');
            e.stopPropagation();
          }}
        ></div> */}

        <IrisLoginCard
          setIsLogin={setIsLogin}
          setCurrentUser={setCurrentUser}
          isLogin={isLogin}
          SetShowSucessBox={SetShowSucessBox}
          SetShowLoginCard={SetShowLoginCard}
        />
      </div>
      <div class="iris-sucess-container">
        <IrisSuccessBox />
      </div>
    </>
  )
}

export default IrisLoginModal
