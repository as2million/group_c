import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import IrisMemberMenuSect from '../Components/IrisMemberMenuSect/IrisMemberMenuSect'
import IrisMyFavSect from '../Components/IrisMyFavSect/IrisMyFavSect'
import VNavbar from 'Share/Components/VNavbar/VNavbar'
import './IrisMemberPage.scss'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import ScrollButton from 'Share/Components/ToTopButton/ScrollButton'

function IrirsMyFav(props) {
  const [
    userFavDelete,
    setUserFavDelete,
    // vnbar
    county,
    setCounty,
    township,
    setTownship,
    address,
    setAddress,
  ] = useState('')
  const { isLogin, currentUser, setShowLoginModal } = props
  if (isLogin === false) {
    setShowLoginModal(true)
    return <Redirect to="/" />
    // 不讓它到首頁  測試讓它回到上一頁 失敗
    // const goBack = () => {
    // props.history.goBack()
    // }
    // goBack()
  }
  return (
    <>
      <VNavbar {...props} />
      <div className="container iris-memberpage-container">
        <IrisMemberMenuSect
          currentUser={currentUser}
          userFavDelete={userFavDelete}
        />
        <IrisMyFavSect
          currentUser={currentUser}
          userFavDelete={userFavDelete}
          setUserFavDelete={setUserFavDelete}
        />
      </div>
      <ScrollButton />
    </>
  )
}

export default withRouter(IrirsMyFav)
