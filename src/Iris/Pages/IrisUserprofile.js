import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import IrisMemberMenuSect from '../Components/IrisMemberMenuSect/IrisMemberMenuSect'
import IrisDataEditSect from '../Components/IrisDataEditSect/IrisDataEditSect'
import VNavbar from 'Share/Components/VNavbar/VNavbar'
import './IrisMemberPage.scss'
import { Redirect } from 'react-router-dom'

function IrisUserprofile(props) {
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const { isLogin, currentUser, setShowLoginModal } = props

  if (showUpdateModal === true) {
    document.querySelector('.iris-update-success-mask').style.display = 'block'
    document.querySelector('.iris-update-success-box').style.display = 'block'
  } else {
    if (
      document.querySelector('.iris-update-success-mask') &&
      document.querySelector('.iris-update-success-box')
    ) {
      document.querySelector('.iris-update-success-mask').style.display = 'none'
      document.querySelector('.iris-update-success-box').style.display = 'none'
    }
  }

  if (isLogin === false) {
    setShowLoginModal(true)
    return <Redirect to="/" />
  }
  return (
    <>
      <VNavbar />
      <div className="container iris-memberpage-container">
        <IrisMemberMenuSect currentUser={currentUser} />
        <IrisDataEditSect
          currentUser={currentUser}
          setShowUpdateModal={setShowUpdateModal}
        />
        <div
          className="iris-update-success-mask"
          onClick={() => {
            setShowUpdateModal(false)
          }}
        ></div>
        <div class="iris-update-success-box">
          <div class="iris-update-success-checkmark">
            <div class="iris-check-icon">
              <span class="icon-line line-tip"></span>
              <span class="icon-line line-long"></span>
              <div class="icon-circle"></div>
              <div class="icon-fix"></div>
            </div>
            <div class="iris-update-sucess">會員資料更新成功</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IrisUserprofile
