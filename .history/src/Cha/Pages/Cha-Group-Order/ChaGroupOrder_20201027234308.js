import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import ChaGroupProgressBar from 'Cha/Components/Cha-Group-ProgressBar/ChaGroupProgressBar'
import ChaGroupOrderCreate from 'Cha/Components/Cha-Group-Order-Create/ChaGroupOrderCreate'

import 'Cha/Pages/Cha-Group-Order/ChaGroupOrder.scss'

function ChaGroupOrder(props) {
  return (
    <Router>
      <>
        <ChaGroupProgressBar />
        <div className="cha-group-wrap">
          <Switch>
            <Route excactpath="/">
              <ChaGroupOrderCreate />
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
          </Switch>
        </div>
      </>
    </Router>
  )
}
export default ChaGroupOrder
