// 導入其它的模組
import React, { useState } from 'react'
import { Navbar, Button } from 'react-bootstrap'
import './Navbar6.scss'
import 'antd/dist/antd.css'
import { Popover } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { ReactComponent as Logo } from '../../Images/SVG/navbar-logo.svg'
import { ReactComponent as BackArrow } from '../../Images/SVG/navbar-back arrow.svg'
import { ReactComponent as Monster } from '../../Images/SVG/navbar-monster.svg'
import { ReactComponent as ShoppingCart } from '../../Images/SVG/navbar-shopping-cart.svg'
import { ReactComponent as ShoppingAmount } from '../../Images/SVG/navbar-cartNumber.svg'
// 選單連結要使用NavLink取代Link
// import { NavLink } from 'react-router-dom'

function MyNavbar(props) {
  const [count, setCount] = useState(0)
  const [shoppingList, setShoppingList] = useState('0')

  function myFunction() {
    const x = document.getElementById('myNavBar')
    if (x.className === 'nav') {
      x.className += ' responsive'
    } else {
      x.className = 'nav'
    }
  }
  return (
    <>
      <div className="nav" id="myNavBar">
        <div className="navBar-jess-container">
          <div className="navBar-jess-navCollapse ">
            <ul className="navBar-jess-navigation">
              <li className="navBar-jess-navigation_item">
                <a href="#home">作伙揪團</a>
              </li>
              <li className="navBar-jess-navigation_item">
                <a href="#home">哈囉小農</a>
              </li>
              <li className="navBar-jess-navigation_item">
                <a href="#home">
                  尋找美味 <BackArrow className="backArrow" />{' '}
                </a>
                <ul className="navBar-jess-dropdown">
                  <div className="navBar-jess-triangle"></div>
                  <li className="navBar-jess-dropdown_item">
                    <a href="#home">低GI便當</a>
                    {/* <Monster className="navBar-jess-monster1" /> */}
                  </li>
                  <li className="navBar-jess-dropdown_item">
                    <a href="#home">美味沙拉</a>
                    {/* <Monster className="navBar-jess-monster2" /> */}
                  </li>
                  <li className="navBar-jess-dropdown_item">
                    <a href="#home">蔬菜箱</a>
                    {/* <Monster className="navBar-jess-monster3" /> */}
                  </li>
                  <li className="navBar-jess-dropdown_item">
                    <a href="#home">客製化便當</a>
                    {/* <Monster className="navBar-jess-monster4" /> */}
                  </li>
                  <li className="navBar-jess-dropdown_item">
                    <a href="#home">外送服務</a>
                    {/* <Monster className="navBar-jess-monster5" /> */}
                  </li>
                </ul>
              </li>
              <a href="#home" className="navBar-jess-nav_brand">
                <Logo />
              </a>
              <li className="navBar-jess-navigation_item">
                <a href="#home">專屬優惠</a>
              </li>
              <li className="navBar-jess-navigation_item">
                <a href="#home">關於我們</a>
              </li>
              <li className="navBar-jess-navigation_item">
                <a href="#home">
                  會員中心 <BackArrow className="backArrow" />{' '}
                </a>
                <ul className="navBar-jess-dropdown2">
                  <div className="navBar-jess-triangle2"></div>
                  <li className="navBar-jess-dropdown_item">
                    <a href="#home">訂單管理</a>
                    {/* <Monster className="navBar-jess-monster1" /> */}
                  </li>
                  <li className="navBar-jess-dropdown_item">
                    <a href="#home">修改會員資料</a>
                    {/* <Monster className="navBar-jess-monster2" /> */}
                  </li>
                  <li className="navBar-jess-dropdown_item">
                    <a href="#home">我的最愛</a>
                    {/* <Monster className="navBar-jess-monster3" /> */}
                  </li>
                  <li className="navBar-jess-dropdown_item">
                    <a href="#home">我的怪獸</a>
                    <Monster className="navBar-jess-monster4" />
                  </li>
                  <li className="navBar-jess-dropdown_item">
                    <a href="#home">登出</a>
                    {/* <Monster className="navBar-jess-monster5" /> */}
                  </li>
                </ul>
              </li>

              <li>
                <Popover
                  placement="bottomLeft"
                  content={shoppingList}
                  title="我的購買清單"
                  trigger="hover"
                  className="navbar-jess-popover"
                >
                  <ShoppingCart className="navbar-jess-ShopingCart" />
                  <ShoppingAmount className="jess-navbarCartAmount" />
                  <span className="jess-navbarCartNum">{count}</span>
                </Popover>
              </li>
            </ul>
          </div>
        </div>
        <div className="icons-list nav_toggle" onClick={myFunction}>
          <MenuOutlined />
        </div>
      </div>
    </>
  )
}

// 輸出元件(函式)

export default MyNavbar
