import React, { useState, useEffect } from 'react'
import { Link, Switch } from 'react-router-dom'

import MyNavbar from 'Cha/Components-demo/MyNavbar'

function Home(props) {
  return (
    <>
      <MyNavbar />
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>中繼站</h1>
        <hr />
        <Link to="/cha_farmer_cart">
          <button type="button" class="btn btn-primary btn-lg">
            Large button
          </button>
        </Link>
      </div>
    </>
  )
}

export default Home
