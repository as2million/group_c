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
          {/* card */}
          <div className="cha-group-create-card">
            <div className="cha-group-create-header-div">
              <div className="cha-group-create-header">呼朋引伴來訂餐</div>
              {/* #DECDBB */}
            </div>
            {/* 怪獸 */}
            <div className="group-monster-container">
              <div className="group-monster-row">
                <div className="group-left-monster"></div>
                <div className="group-right-monster"></div>
              </div>
            </div>
            <div className="group-search-text"
            {/* 連結 */}
            <div className="group-icon-container">
              <div className="group-icon-row">
                <div className="group-fb-icon"></div>
                <div className="group-link-icon"></div>
              </div>
            </div>
            {/* 提交按鈕 */}
            <div className="cha-shopping-cart-btn-div">
              <input
                type="button"
                value="送出"
                className="cha-shopping-cart-btn"
              />
            </div>
          </div>
          <div className="cha-group-create-alert">
            <div>如已建立揪團資料，請至「訂單管理」查看明細</div>
            <div className="cha-group-create-alert-to-order-management">
              前往訂單管理
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
