import React, { useState, useEffect } from 'react'
import { Link, Switch } from 'react-router-dom'
import MyNavbar from 'Cha/Components-demo/MyNavbar'

function About(props) {
  return (
    <>
      <MyNavbar />
      <br />
      <br />
      <br />
      <br />
      <h1>交易成功</h1>
      <Link to="/"><h1>交易成功</h1></Link>
    </>
  )
}

export default About
