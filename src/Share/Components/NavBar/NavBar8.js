// 導入其它的模組
import React, { useState } from 'react'
import { Navbar, Button } from 'react-bootstrap'
import './Navbar8.scss'
import { ReactComponent as Logo } from '../../Images/SVG/navbar-logo.svg'
import { ReactComponent as BackArrow } from '../../Images/SVG/navbar-back arrow.svg'
import { ReactComponent as Monster } from '../../Images/SVG/navbar-monster.svg'
import { ReactComponent as ShoppingCart } from '../../Images/SVG/navbar-shopping-cart.svg'
import { ReactComponent as ShoppingAmount } from '../../Images/SVG/navbar-cartNumber.svg'
// 選單連結要使用NavLink取代Link
// import { NavLink } from 'react-router-dom'

function NavBar8(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hi</h1>
      <div className="nav">
        <div className="container">
          {/* <button type="button" name="button" className="nav_toggle">
            Toggle
          </button> */}
          <div className="nav_collapse collapse">
            <ul className="nav_navigation">
              <li className="nav_navigation_item">
                <a href="#home">作伙揪團</a>
              </li>
              <li className="nav_navigation_item">
                <a href="#home">哈囉小農</a>
              </li>
              <li className="nav_navigation_item">
                <a href="#home">尋找美味</a>
                <ul className="dropdown">
                  <li className="dropdown_item">
                    <a href="#home">低GI便當</a>
                  </li>
                  <li className="dropdown_item">
                    <a href="#home">美味沙拉</a>
                  </li>
                  <li className="dropdown_item">
                    <a href="#home">蔬菜箱</a>
                  </li>
                  <li className="dropdown_item">
                    <a href="#home">客製化便當</a>
                  </li>
                  <div className="triangle"></div>
                </ul>
              </li>
              <a href="#home" className="nav_brand">
                <Logo />
              </a>
              <li className="nav_navigation_item">
                <a href="#home">Element 3</a>
              </li>
              <li className="nav_navigation_item">
                <a href="#home">Element 4</a>
                <ul className="dropdown">
                  <li className="dropdown_item">
                    <a href="#home">Element 4.1</a>
                  </li>
                  <li className="dropdown_item">
                    <a href="#home">Element 4.2</a>
                  </li>
                  <li classNameName="dropdown_item">
                    <a href="#home">Element 4.3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <script src="js/app.js" type="text/javascript"></script> */}
    </>
  )
}

// 輸出元件(函式)

export default NavBar8
