import React, { useState, useEffect } from 'react'
import { Link, Switch } from 'react-router-dom'

import MyNavbar from 'Cha/Components-demo/MyNavbar'

function Home(props) {
  return (
    <>
      <MyNavbar />
      <br />
      <br />
      <br />
      <br />
      <h1>Hello</h1>
      <a href="/todo">a link to todopage</a>
      <hr />
      <Link to="/cha_cart">Link component to cha_cart</Link>
      <Link to="/cha_former-cart">Link component to cha_former-cart</Link>
      <Link to="/cha_farmer_cart" className="cha-control-normal-switch">
            <button className="cha-control-normal-switch cha-farmer-cart-switch">
              小農購物車
            </button>
          </Link>
    </>
  )
}

export default Home
