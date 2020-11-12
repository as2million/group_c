import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import IrisMemberMenuSect from '../Components/IrisMemberMenuSect/IrisMemberMenuSect'
import IrisOrderCommentSect from '../Components/IrisOrderCommentSect/IrisOrderCommentSect'
import VNavbar from 'Share/Components/VNavbar/VNavbar'
import './IrisMemberPage.scss'
import { Redirect } from 'react-router-dom'
import ScrollButton from 'Share/Components/ToTopButton/ScrollButton'

function IrisOrderComment(props) {
  const [commentDelete, setCommentDelete] = useState('')
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
        <IrisMemberMenuSect
          currentUser={currentUser}
          commentDelete={commentDelete}
        />
        <IrisOrderCommentSect
          currentUser={currentUser}
          commentDelete={commentDelete}
          setCommentDelete={setCommentDelete}
        />
      </div>
      <ScrollButton />
    </>
  )
}

export default IrisOrderComment
