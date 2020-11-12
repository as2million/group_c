import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import IrisMemberMenuSect from '../Components/IrisMemberMenuSect/IrisMemberMenuSect'
import IrisGetCouponSect from '../Components/IrisGetCouponSect/IrisGetCouponSect'
import VNavbar from 'Share/Components/VNavbar/VNavbar'
import './IrisMemberPage.scss'
import { Redirect } from 'react-router-dom'
import ScrollButton from 'Share/Components/ToTopButton/ScrollButton'

function IrisGetCoupon(props) {
  const {
    isLogin,
    currentUser,
    setShowLoginModal,
    // vnbar
    county,
    setCounty,
    township,
    setTownship,
    address,
    setAddress,
  } = props
  if (isLogin === false) {
    setShowLoginModal(true)
    return <Redirect to="/" />
  }
  return (
    <>
      <VNavbar
        county={county}
        setCounty={setCounty}
        township={township}
        setTownship={setTownship}
        address={address}
        setAddress={setAddress}
      />
      <div className="container iris-memberpage-container">
        <IrisMemberMenuSect currentUser={currentUser} />
        <IrisGetCouponSect />
      </div>
      <ScrollButton />
    </>
  )
}

export default IrisGetCoupon
