import React, { useState, useEffect } from 'react'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap'

// 選單連結要使用NavLink取代Link
import { NavLink } from 'react-router-dom'

function MyNavbar(props) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand href="#home">React測試站</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* 把Nav.Link作為NavLink來使用 */}
            {/* 一定要加上exact，不然首頁會一直點亮(active) */}
            <Nav.Link as={NavLink} to="/" exact>
              首頁
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart">
              購物車
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cha_farmer_cart">
              小農購物車
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cha_cart_order_success">
              交易成功
            </Nav.Link>
            <Nav.Link as={NavLink} to="/groupOrder">
              作伙揪團
            </Nav.Link>
            <Nav.Link as={NavLink} to="/order_management">
              訂單管理
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/about">
              關於我們
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
