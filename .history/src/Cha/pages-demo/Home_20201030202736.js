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
        <h3>購物車</h3>
        <Link to="/cart">
          <button type="button" class="btn btn-primary btn-lg mr-5">
            一般購物車
          </button>
        </Link>
        <Link to="/">
          <button type="button" class="btn btn-secondary btn-lg mr-5">
          票券購物車
          </button>
        </Link>
        <Link to="/">
          <button type="button" class="btn btn-secondary btn-lg mr-5">
            交易成功
          </button>
        </Link>
        <hr />
        <h3>作伙揪團</h3>
        <Link to="/groupOrder/groupOrderCreate">
          <button type="button" class="btn btn-primary btn-lg mr-5">
            作伙揪團
          </button>
        </Link>
        <Link to="/groupOrder/groupOrderSearch">
          <button type="button" class="btn btn-primary btn-lg mr-5">
            呼朋引伴
          </button>
        </Link>
        <Link to="/groupOrder/groupOrderSignIn">
          <button type="button" class="btn btn-primary btn-lg mr-5">
            朋友註冊
          </button>
        </Link>
        <Link to="/groupOrder/groupOrderConfirm">
          <button type="button" class="btn btn-primary btn-lg mr-5">
            註冊確認
          </button>
        </Link>
        <Link to="/groupOrder/groupOrderMenu">
          <button type="button" class="btn btn-primary btn-lg mr-5">
            開始點餐
          </button>
        </Link>
        <hr />
        <h3>訂單管理</h3>
        <Link to="/irisProfilePageDemo">
          <button
            type="button"
            class="btn btn-primary
           btn-lg mr-5"
          >
            訂單管理
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            class="btn btn-secondary
           btn-lg mr-5"
          >
            揪團小遊戲
          </button>
        </Link>
        <hr />
        <h3>取餐方式</h3>
        <Link to="/">
          <button
            type="button"
            class="btn btn-secondary
           btn-lg mr-5"
          >
            自取
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            class="btn btn-secondary
           btn-lg mr-5"
          >
            外送
          </button>
        </Link>
      </div>
    </>
  )
}
export default Home
