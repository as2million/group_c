import React, { useState, useEffect } from 'react'

import MyNavbar from 'Cha/Components-demo/MyNavbar'
import MainContent from 'Cha/Components-demo/MainContent'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from 'Cha/pages-demo/Home'
import About from 'Cha/pages-demo/About'
import Product from 'Cha/pages-demo/Product'
import Success from 'Cha/pages-demo/Success'

// import Counter from 'Cha/Components/Cha-Counter/Counter'
// import ScrollApp from 'Cha/Components/Cha-ToTop/ScrollApp'
// import ScrollArrow from 'Cha/Components/Cha-ToTop/ScrollArrow'
import ChaCart from 'Cha/Pages/Cha-Cart/ChaCart'
// import ChaProgressBar from 'Cha/Components/Cha-ProgressBar/ChaProgressBar'

function AppTest() {
  return (
    <Router>
      <>
        {/* <MainContent> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cha_cart">
            <ChaCart />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cha_farmer_cart">
            <Product />
          </Route>
          <Route path="/cha_cart_order_success">
            <Success />
          </Route>
          {/* <Route path="/cha_group_order_create">
            <ChaGroupOrderCreate />
          </Route>
          <Route path="/cha_group_order_search">
            <ChaGroupOrderSearch />
          </Route> */}
          {/* <Route path="/cha_group_order_sign_in">
            <ChaGroupOrderSignIn />
          </Route> */}
          {/* <Route path="/cha_group_order_menu">
            <ChaGroupOrderMenu />
          </Route> */}
          {/* <Route path="/cha_group_order_confirm">
            <ChaGroupOrderConfirm />
          </Route> */}
          {/* <Route path="/cha_order_management">
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

export default AppTest
