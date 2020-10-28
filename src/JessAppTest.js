import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import NavBar from './Share/Components/NavBar/NavBar'
import JessBento from './Jess/Pages/JessBento'

function JessAppTest() {
  return (
    <Router>
      <>
        <NavBar />
        <JessBento />
      </>
    </Router>
  )
}

export default JessAppTest
