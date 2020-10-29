import React, { useState, useEffect } from 'react';

// import MyNavbar from 'Cha/Components-demo/MyNavbar'
// import MainContent from 'Cha/Components-demo/MainContent'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from 'Cha/pages-demo/Home';
import About from 'Cha/pages-demo/About';
import Product from 'Cha/pages-demo/Product';
import Success from 'Cha/pages-demo/Success';

import ChaGroupOrder from 'Cha/Pages/Cha-Group-Order/ChaGroupOrder';
import ChaGroupOrderSearch from 'Cha/Components/Cha-Group-Order-Search/ChaGroupOrderSearch';
import ChaSwitchExample from 'Cha/Components-demo/Cha-Switch-Example/ChaSwitchExample';

import ChaCart from 'Cha/Pages/Cha-Cart/ChaCart';

function ChaAppTest() {
  return (
    <Router>
      <>
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
          <Route path="/groupOrder">
            <ChaGroupOrder />
          </Route>
          <Route path="/chaSwitchExample">
            <ChaSwitchExample />
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
  );
}

export default ChaAppTest;
