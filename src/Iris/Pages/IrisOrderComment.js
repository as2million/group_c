import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import IrisMemberMenuSect from '../Components/IrisMemberMenuSect/IrisMemberMenuSect'
import IrisOrderCommentSect from '../Components/IrisOrderCommentSect/IrisOrderCommentSect'
import VNavbar from 'Share/Components/VNavbar/VNavbar'
import './IrisMemberPage.scss'
import { Redirect } from 'react-router-dom'

function IrisOrderComment(props) {
  const [commentDelete, setCommentDelete] = useState('')
  const { isLogin, currentUser, setShowLoginModal } = props
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
          commentDelete={commentDelete}
        />
        <IrisOrderCommentSect
          currentUser={currentUser}
          commentDelete={commentDelete}
          setCommentDelete={setCommentDelete}
        />
      </div>
    </>
  )
}

export default IrisOrderComment
