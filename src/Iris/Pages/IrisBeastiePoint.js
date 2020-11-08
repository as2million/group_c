import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import IrisMemberMenuSect from '../Components/IrisMemberMenuSect/IrisMemberMenuSect'
import IrisBeastiePointSect from '../Components/IrisBeastiePointSect/IrisBeastiePointSect'
import './IrisMemberPage.scss'
import { Redirect } from 'react-router-dom'

function IrisBeastiePoint(props) {
  const { isLogin, currentUser } = props
  if (isLogin === false) return <Redirect to="/" />
  return (
    <>
      <div className="container iris-memberpage-container">
        <IrisMemberMenuSect currentUser={currentUser} />
        <IrisBeastiePointSect currentUser={currentUser} />
      </div>
    </>
  )
}

export default IrisBeastiePoint
