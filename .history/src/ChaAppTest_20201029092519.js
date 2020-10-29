import React, { useState, useEffect } from 'react';

// import MyNavbar from 'Cha/Components-demo/MyNavbar'
// import MainContent from 'Cha/Components-demo/MainContent'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from 'Cha/pages-demo/Home';
import About from 'Cha/pages-demo/About';
import Product from 'Cha/pages-demo/Product';
import Success from 'Cha/pages-demo/Success';

// import ChaSwitchExample from 'Cha/Components-demo/Cha-Switch-Example/ChaSwitchExample';

import ChaCart from 'Cha/Pages/Cha-Cart/ChaCart';
import ChaGroupOrder from 'Cha/Pages/Cha-Group-Order/ChaGroupOrder';
import ChaOrderManagement from 'Cha/Components/Cha-Order-Management/ChaOrderManagement';
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
          <Route path="/groupOrder">
            <ChaGroupOrder />
          </Route>
          <Route path="/orderManagement">
            <ChaOrderManagement />
          </Route>
          <Route path="/orderManagement">
            <IrisProfilePage />
          </Route>
          {/* <Route path="/chaSwitchExample">
            <ChaSwitchExample />
          </Route> */}
        </Switch>
      </>
    </Router>
  );
}

export default ChaAppTest;
