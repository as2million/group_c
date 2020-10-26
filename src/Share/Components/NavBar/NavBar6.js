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
  return (
    <>
      <div className="nav">
        <div className="container">
          <div className="icons-list nav_toggle">
            <MenuOutlined />
          </div>

          <div className="nav_collapse ">
            <ul className="nav_navigation">
              <li>
                <a href="#home">作伙揪團</a>
              </li>
              <li className="nav_navigation_item">
                <a href="#home">哈囉小農</a>
              </li>
              <li className="nav_navigation_item">
                <a href="#home">
                  尋找美味 <BackArrow />{' '}
                </a>
                <ul className="dropdown">
                  <li className="dropdown_item">
                    <a href="#home">低GI便當</a>
                    <Monster className="jess-monster1" />
                  </li>
                  <li className="dropdown_item">
                    <a href="#home">美味沙拉</a>
                    <Monster className="jess-monster2" />
                  </li>
                  <li className="dropdown_item">
                    <a href="#home">蔬菜箱</a>
                    <Monster className="jess-monster3" />
                  </li>
                  <li className="dropdown_item">
                    <a href="#home">客製化便當</a>
                    <Monster className="jess-monster4" />
                  </li>
                  <li className="dropdown_item">
                    <a href="#home">外送服務</a>
                    <Monster className="jess-monster5" />
                  </li>
                  <div className="triangle"></div>
                </ul>
              </li>
              <a href="#home" className="nav_brand">
                <Logo />
              </a>
              <li>
                <a href="#home">專屬優惠</a>
              </li>
              <li className="nav_navigation_item">
                <a href="#home">關於我們</a>
              </li>
              <li className="nav_navigation_item">
                <a href="#home">
                  會員中心 <BackArrow />{' '}
                </a>
                <ul className="dropdown">
                  <li className="dropdown_item">
                    <a href="#home">訂單管理</a>
                    <Monster className="jess-monster1" />
                  </li>
                  <li className="dropdown_item">
                    <a href="#home">修改會員資料</a>
                    <Monster className="jess-monster2" />
                  </li>
                  <li className="dropdown_item">
                    <a href="#home">我的最愛</a>
                    <Monster className="jess-monster3" />
                  </li>
                  <li className="dropdown_item">
                    <a href="#home">登出</a>
                    <Monster className="jess-monster4" />
                  </li>
                  <li className="dropdown_item">
                    <a href="#home">外送服務</a>
                    <Monster className="jess-monster5" />
                  </li>
                  <div className="triangle"></div>
                </ul>
              </li>

              <li>
                <Popover
                  placement="bottomLeft"
                  content={shoppingList}
                  title="我的購買清單"
                  trigger="hover"
                >
                  <ShoppingCart className="dropdown_item" />
                  <ShoppingAmount className="jess-navbarAmount" />
                  <span className="jess-navbarCartNum">{count}</span>
                </Popover>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

// 輸出元件(函式)

export default MyNavbar
