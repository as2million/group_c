import React, { useState, useEffect } from 'react'

import MyNavbar from 'Cha/Components-demo/MyNavbar'
import MainContent from 'Cha/Components-demo/MainContent'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from 'Cha/pages-demo/Home'
import About from 'Cha/pages-demo/About'
import Product from 'Cha/pages-demo/Product'
import Success from 'Cha/pages-demo/Success'

import ChaGroupOrder from 'Cha/Pages/Cha-Group-Order/ChaGroupOrder'

// import ChaCart from "Cha/Pages/ChaCart"
import ChaGroupOrder from "Cha/Pages/Cha-Group-Order/ChaGroupOrder"
// import ChaOrderManagement from "Cha/Pages/Order-Management/OrderManagement"

// import Counter from 'Cha/Components/Cha-Counter/Counter'
// import ScrollApp from 'Cha/Components/Cha-ToTop/ScrollApp'
// import ScrollArrow from 'Cha/Components/Cha-ToTop/ScrollArrow'
import ChaCart from 'Cha/Pages/Cha-Cart/ChaCart'
// import ChaProgressBar from 'Cha/Components/Cha-ProgressBar/ChaProgressBar'

function ChaAppTest() {
  return (
    <Router>
      <>
        {/* <MainContent> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <ChaCart />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/farmer_cart">
            <Product />
          </Route>
          <Route path="/cart_order_success">
            <Success />
          </Route>
          <Route path="/group_order">
            <ChaGroupOrder />
          </Route>
          {/* <Route path="/group_order_search">
            <ChaGroupOrderSearch />
          </Route> */}
          {/* <Route path="/group_order_sign_in">
            <ChaGroupOrderSignIn />
          </Route> */}
          {/* <Route path="/group_order_menu">
            <ChaGroupOrderMenu />
          </Route> */}
          {/* <Route path="/group_order_confirm">
            <ChaGroupOrderConfirm />
          </Route> */}
          {/* <Route path="/order_management">
            <ChaOrderManagement />
          </Route> */}


          <Route  path="/cart">
            <ChaCart />
          </Route>
          <Route path="/groupOrder">
            <ChaGroupOrder />
          </Route>
          {/* <Route path="/orderManagement">
            <ChaOrderManagement />
          </Route> */}
        </Switch>
        {/* </MainContent> */}
      </>
    </Router>
    //  <Counter />
    // <ChaCart />
    // <ScrollArrow />
    // <ScrollApp />
    // <ChaProgressBar />
  )
}

export default ChaAppTest
