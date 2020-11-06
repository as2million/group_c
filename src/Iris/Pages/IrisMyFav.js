import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import IrisMemberMenuSect from '../Components/IrisMemberMenuSect/IrisMemberMenuSect'
import IrisMyFavSect from '../Components/IrisMyFavSect/IrisMyFavSect'
import './IrisMemberPage.scss'
import { Redirect } from 'react-router-dom'

function IrirsMyFav(props) {
  const { isLogin, currentUser } = props
  if (isLogin === false) return <Redirect to="/" />
  return (
    <>
      <div className="container iris-memberpage-container">
        <IrisMemberMenuSect currentUser={currentUser} />
        <IrisMyFavSect />
      </div>
    </>
  )
}

export default IrirsMyFav
