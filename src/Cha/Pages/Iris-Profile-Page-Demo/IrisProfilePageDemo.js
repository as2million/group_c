import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import IrisMemberMenuSect from './../../../Iris/Components/IrisMemberMenuSect/IrisMemberMenuSect'
import IrisDataEdit from 'Cha/Components-demo/IrisDataEdit/IrisDataEdit'
import ChaOrderManagement from 'Cha/Components/Cha-Order-Management/ChaOrderManagement'
import './IrisProfilePageDemo.scss'

import NavBar from '../../../Share/Components/NavBar/NavBar'
import VNavbar from '../../../Share/Components/VNavbar/VNavbar'
function IrisProfilePageDemo() {
  return (
    <>
      <NavBar />
      <VNavbar />
      <div className="container iris-userprofile-container">
        <IrisMemberMenuSect />
        {/* <IrisDataEdit /> */}
        <ChaOrderManagement />
      </div>
    </>
  )
}

export default IrisProfilePageDemo
