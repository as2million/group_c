import React, { useState, useEffect } from 'react'

import ChaGroupProgressBar from 'Cha/Components/Cha-Group-ProgressBar/ChaGroupProgressBar'

import 'Cha/Pages/Cha-Group-Order/ChaGroupOrder.scss'

function ChaGroupOrder(props) {
  return (
    <>
      <ChaGroupProgressBar />
      <div className="cha-group-breadcrumbs-container">
        <div className="cha-group-breadcrumbs-row">
        <div className="cha-group-breadcrumbs-icon"
          <div className="cha-group-breadcrumbs-icon">
            <div className="cha-group-create-icon"></div>
          </div>
          <span>建立揪團</span>
          <div className="cha-group-arrow-icon"></div>
          <div className="cha-group-breadcrumbs-icon">
            <div className="cha-group-search-icon"></div>
          </div>
          <span>呼朋引伴</span>
          <div className="cha-group-arrow-icon"></div>
          <div className="cha-group-breadcrumbs-icon">
            <div className="cha-group-menu-icon"></div>
          </div>
          <span>作伙點餐</span>
        </div>
      </div>
    </>
  )
}
export default ChaGroupOrder
