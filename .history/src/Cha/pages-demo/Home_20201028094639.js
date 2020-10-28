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
        <Link to="/cart">
          <button type="button" class="btn btn-primary btn-lg mr-5">
            購物車
          </button>
        </Link>
        
        <Link to="/cart">
          <button type="button" class="btn btn-primary btn-lg">
            小ㄇㄨㄥ購物車
          </button>
        </Link>
      </div>
    </>
  )
}

export default Home
