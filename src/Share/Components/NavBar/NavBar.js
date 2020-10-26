// 導入其它的模組
import React, { useState } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import './Navbar.scss'
import { ReactComponent as Logo } from '../../Images/SVG/navbar-logo.svg'
import { ReactComponent as BackArrow } from '../../Images/SVG/navbar-back arrow.svg'
import { ReactComponent as Monster } from '../../Images/SVG/navbar-monster.svg'
import { ReactComponent as ShoppingCart } from '../../Images/SVG/navbar-shopping-cart.svg'
import { ReactComponent as ShoppingAmount } from '../../Images/SVG/navbar-cartNumber.svg'
// 選單連結要使用NavLink取代Link
// import { NavLink } from 'react-router-dom'

function MyNavbar(props) {
  return (
    <>
      <Navbar expand="lg" fixed="top" className="jess-navBox ">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="header">
          <Nav className="mr-auto jess-textTotal ">
            <Nav.Link href="#home" className="text1">
              作伙揪團
            </Nav.Link>
            <Nav.Link href="#link">哈囉小農</Nav.Link>
            <NavDropdown title="尋找美味" id="basic-nav-dropdown">
              <div className="move">
                <NavDropdown.Item href="#" className="jess-navSelect">
                  低GI便當
                </NavDropdown.Item>
                <NavDropdown.Item href="#" className="jess-navSelect">
                  美味沙拉
                </NavDropdown.Item>
                <NavDropdown.Item href="#" className="jess-navSelect">
                  蔬菜箱
                </NavDropdown.Item>
                <NavDropdown.Item href="#" className="jess-navSelect">
                  客製化便當
                </NavDropdown.Item>
                <NavDropdown.Item href="#" className="jess-navSelect">
                  外送服務
                </NavDropdown.Item>
              </div>
            </NavDropdown>
          </Nav>

          <Navbar.Brand href="#home">
            <Logo className=" jess-navLogo" />
          </Navbar.Brand>
          <Nav className="mr-auto jess-textTotal ">
            <Nav.Link href="#home">作伙揪團</Nav.Link>
            <Nav.Link href="#link">哈囉小農</Nav.Link>
            <NavDropdown title="尋找美味" id="basic-nav-dropdown">
              <div className="move">
                <NavDropdown.Item href="#" className="jess-navSelect">
                  低GI便當
                </NavDropdown.Item>
                <NavDropdown.Item href="#" className="jess-navSelect">
                  美味沙拉
                </NavDropdown.Item>
                <NavDropdown.Item href="#" className="jess-navSelect">
                  蔬菜箱
                </NavDropdown.Item>
                <NavDropdown.Item href="#" className="jess-navSelect">
                  客製化便當
                </NavDropdown.Item>
                <NavDropdown.Item href="#" className="jess-navSelect">
                  外送服務
                </NavDropdown.Item>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

// 輸出元件(函式)

export default MyNavbar
