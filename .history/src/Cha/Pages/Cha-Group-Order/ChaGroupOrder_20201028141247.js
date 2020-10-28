import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import ChaGroupProgressBar from 'Cha/Components/Cha-Group-ProgressBar/ChaGroupProgressBar'
import ChaGroupOrderCreate from 'Cha/Components/Cha-Group-Order-Create/ChaGroupOrderCreate'
import ChaGroupOrderSearch from 'Cha/Components/Cha-Group-Order-Search/ChaGroupOrderSearch'
import ChaGroupOrderSignIn from 'Cha/Components/Cha-Group-Order-SignIn/ChaGroupOrderSignIn'

import 'Cha/Pages/Cha-Group-Order/ChaGroupOrder.scss'

function ChaGroupOrder(props) {
  return (
    <Router>
      <>
        <ChaGroupProgressBar />
        <div className="cha-group-wrap">
          {/* <ChaGroupOrderSearch /> */}

          <Switch>
            <Route path="/groupOrder/groupOrderCreate">
              <ChaGroupOrderCreate />
            </Route>
            <Route path="/groupOrder/groupOrderSearch">
              <ChaGroupOrderSearch />
            </Route>
            <Route path="/groupOrder/groupOrderSignIn">
              <ChaGroupOrderSignIn />
            </Route>
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
