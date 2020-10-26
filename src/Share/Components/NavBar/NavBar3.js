// 導入其它的模組
import React, { useState } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import './Navbar3.scss'
import 'antd/dist/antd.css'

import { Menu, Dropdown } from 'antd'
import { ReactComponent as Logo } from '../../Images/SVG/navbar-logo.svg'
import { ReactComponent as BackArrow } from '../../Images/SVG/navbar-back arrow.svg'
import { ReactComponent as Monster } from '../../Images/SVG/navbar-monster.svg'
import { ReactComponent as ShoppingCart } from '../../Images/SVG/navbar-shopping-cart.svg'
// 選單連結要使用NavLink取代Link
// import { NavLink } from 'react-router-dom'

function MyNavbar(props) {
  //   function handleClick(e) {
  //     e.preventDefault()
  //     if()
  //   }
  const menu = (
    <div className="dropdown ">
      <li className="jess-navSelect">
        <a href="#home">低GI便當</a>
      </li>
      {/* <Monster /> */}
      <li className="jess-navSelect">
        <a href="#home">美味沙拉</a>
      </li>
      <li className="jess-navSelect">
        <a href="#home">蔬菜箱</a>
      </li>
      <li className="jess-navSelect">
        <a href="#home">客製化便當</a>
      </li>
      <li className="jess-navSelect">
        <a href="#home">外送服務</a>
      </li>
      <div className="triangle"></div>
    </div>
  )
  return (
    <>
      <Navbar expand="lg" fixed="top" className="jess-navBox ">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className=" jess-textTotal">
          <ul className=" jess-textTotal">
            <div className="jess-navText">
              <li className=" jess-text">
                <a href="#home">作伙揪團</a>
              </li>
              <li className=" jess-text">
                <a href="#home">哈囉小農</a>
              </li>
              <Dropdown className="switch" overlay={menu}>
                <li className=" jess-text">
                  <a href="#home" onClick={(e) => e.preventDefault()}>
                    尋找美味 <BackArrow />{' '}
                  </a>
                </li>
              </Dropdown>
            </div>
            <div className=" jess-navLogo">
              <Navbar.Brand href="#home">
                <Logo />
              </Navbar.Brand>
            </div>
            <div className="jess-navText2">
              <li className=" jess-text">
                <a href="#home">專屬優惠</a>
              </li>
              <li className=" jess-text">
                <a href="#home">關於我們</a>
              </li>

              <li className=" jess-text">
                <a href="#home">會員中心</a>
              </li>
              {/* <ul>
                <li className=" jess-text">
                  <a href="#home">訂單管理</a>
                </li>
                <li className=" jess-text">
                  <a href="#home">訂單管理</a>
                </li>
                <li className=" jess-text">
                  <a href="#home">修改會員資料</a>
                </li>
                <li className=" jess-text">
                  <a href="#home">我的最愛</a>
                </li>
              </ul> */}
              <ShoppingCart />
            </div>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

// 輸出元件(函式)

export default MyNavbar
