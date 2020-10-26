// 導入其它的模組
import React, { useState } from 'react'
import { Navbar, Button } from 'react-bootstrap'
import './Navbar2.scss'
import { ReactComponent as Logo } from '../../Images/SVG/navbar-logo.svg'
import { ReactComponent as BackArrow } from '../../Images/SVG/navbar-back arrow.svg'
import { ReactComponent as Monster } from '../../Images/SVG/navbar-monster.svg'
import { ReactComponent as ShoppingCart } from '../../Images/SVG/navbar-shopping-cart.svg'
import { ReactComponent as ShoppingAmount } from '../../Images/SVG/navbar-cartNumber.svg'
// 選單連結要使用NavLink取代Link
// import { NavLink } from 'react-router-dom'

function MyNavbar(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar expand="lg" fixed="top" className="jess-navBackgroung ">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className=" jess-textTotal">
          <ul className=" jess-textTotalRange">
            <div className="jess-navLeftText">
              <li className="jess-menu">
                <a href="#home">作伙揪團</a>
              </li>
              <li className="jess-menu">
                <a href="#home">哈囉小農</a>
              </li>
              <div className="jess-dropdown">
                <li className="jess-menu">
                  <a href="#home">
                    尋找美味 <BackArrow />{' '}
                  </a>
                </li>

                <div className="jess-dropdownMenu">
                  <li className="jess-menuItem">
                    <a href="#home">低GI便當</a>
                    <div className="jess-monster">
                      <Monster />
                    </div>
                  </li>

                  <li className="jess-menuItem">
                    <a href="#home">美味沙拉</a>
                    <div className="jess-monster1">
                      <Monster />
                    </div>
                  </li>
                  <li className="jess-menuItem">
                    <a href="#home">蔬菜箱</a>
                    <div className="jess-monster2">
                      <Monster />
                    </div>
                  </li>
                  <li className="jess-menuItem">
                    <a href="#home">客製化便當</a>
                    <div className="jess-monster3">
                      <Monster />
                    </div>
                  </li>
                  <li className="jess-menuItem">
                    <a href="#home">外送服務</a>
                    <div className="jess-monster4">
                      <Monster />
                    </div>
                  </li>
                  <div className="triangle"></div>
                </div>
              </div>
            </div>
            <div className=" jess-navLogo">
              <Navbar.Brand href="#home">
                <Logo />
              </Navbar.Brand>
            </div>
            <div className="jess-navRightText">
              <li className="jess-menu">
                <a href="#home">專屬優惠</a>
              </li>
              <li className="jess-menu">
                <a href="#home">關於我們</a>
              </li>
              <div className="jess-dropdown">
                <li className="jess-menu">
                  <a href="#home">
                    會員中心 <BackArrow />{' '}
                  </a>
                </li>
                <div className="jess-dropdownMenu">
                  <li className="jess-menuItem">
                    <a href="#home">訂單管理</a>
                    <div className="jess-monster">
                      <Monster />
                    </div>
                  </li>

                  <li className="jess-menuItem">
                    <a href="#home">修改會員資料</a>
                    <div className="jess-monster1">
                      <Monster />
                    </div>
                  </li>
                  <li className="jess-menuItem">
                    <a href="#home">我的最愛</a>
                    <div className="jess-monster2">
                      <Monster />
                    </div>
                  </li>
                  <li className="jess-menuItem">
                    <a href="#home">我的怪獸</a>
                    <div className="jess-monster3">
                      <Monster />
                    </div>
                  </li>
                  <li className="jess-menuItem">
                    <a href="#home">登出</a>
                    <div className="jess-monster4">
                      <Monster />
                    </div>
                  </li>
                  <div className="triangle"></div>
                </div>
              </div>
              <li>
                <div className="jess-navbarAmount">
                  <ShoppingAmount />
                  <span className="jess-navbarCartNum">{count}</span>
                </div>
                <a href="#home">
                  <ShoppingCart />
                </a>
              </li>
            </div>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

// 輸出元件(函式)

export default MyNavbar
