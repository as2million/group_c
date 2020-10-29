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
          <div className="cha-group-breadcrumbs-container">
            <div className="cha-group-breadcrumbs-row">
              <div className="cha-group-breadcrumbs-text">
                <div className="cha-group-breadcrumbs-icon">
                  <div className="cha-group-create-icon"></div>
                </div>
                <span className="cha-group-create-text-yellow">建立揪團</span>
              </div>
              <div className="cha-group-arrow-icon"></div>
              <div className="cha-group-breadcrumbs-text">
                <div className="cha-group-breadcrumbs-icon">
                  <div className="cha-group-search-icon"></div>
                </div>
                <span className="cha-group-search-text">呼朋引伴</span>
              </div>
              <div className="cha-group-arrow-icon"></div>
              <div className="cha-group-breadcrumbs-text">
                <div className="cha-group-breadcrumbs-icon">
                  <div className="cha-group-menu-icon"></div>
                </div>
                <span className="cha-group-menu-text">作伙點餐</span>
              </div>
            </div>
          </div>
          <Switch>
            <Route path="/groupOrder">{/* <ChaGroupOrderCreate /> */}</Route>
            {/* <Route path="/groupOrderSearch"> */}
            {/* <ChaGroupOrderSearch /> */}
            {/* </Route> */}
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
