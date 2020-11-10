import React, { useState, useEffect } from 'react';
import { Link, Switch } from 'react-router-dom';

function ChaCheckpoint(props) {
  return (
    <>
      <div className="container">
        <div
          style={{ width: '100%', height: '15rem', backgroundColor: '#faf' }}
        ></div>
        <h1>中繼站</h1>
        <hr />
        <h3>購物車</h3>
        <Link to="/cart">
          <button type="button" class="btn btn-primary btn-lg mr-5">
            餐點購物車
          </button>
        </Link>
        <hr />
        <Link to="/">
          <button type="button" class="btn btn-secondary btn-lg mr-5">
            小農購物車
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
            訂單管理(點餐)
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
      <div
        style={{ width: '100%', height: '15rem', backgroundColor: '#faf' }}
      ></div>
    </>
  );
}
export default ChaCheckpoint;
