import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import IrisMemberMenuSect from '../Components/IrisMemberMenuSect/IrisMemberMenuSect'
import IrisOrderCommentSect from '../Components/IrisOrderCommentSect/IrisOrderCommentSect'
import './IrisMemberPage.scss'
import { Redirect } from 'react-router-dom'

function IrisOrderComment(props) {
  const { isLogin, currentUser } = props
  if (isLogin === false) return <Redirect to="/" />
  return (
    <>
      <div className="container iris-memberpage-container">
        <IrisMemberMenuSect currentUser={currentUser} />
        <IrisOrderCommentSect />
      </div>
    </>
  )
}

export default IrisOrderComment
