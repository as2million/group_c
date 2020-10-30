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
        
        <Switch>
          <Route path="/groupOrder">
                    
          <ChaGroupOrderCreate />
        </div>
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

      </>
    </Router>
  )
}
export default ChaGroupOrder
