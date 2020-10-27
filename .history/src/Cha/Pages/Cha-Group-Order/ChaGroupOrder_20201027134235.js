import React, { useState, useEffect } from 'react'

import ChaGroupProgressBar from 'Cha/Components/Cha-Group-ProgressBar/ChaGroupProgressBar'

import 'Cha/Pages/Cha-Group-Order/ChaGroupOrder.scss'

function ChaGroupOrder(props) {
  return (
    <>
      <ChaGroupProgressBar />
      <div className="cha-group-breadcrumbs-container">
        <div className="cha-group-breadcrumbs-row">
          <div className="cha-group-breadcrumbs">
            <div className="cha-group-create-icon"></div>
            <div>建立揪團</div>
          </div>
          <div className="cha-group-arrow-icon"></div>
          <div>
            <div className="cha-group-search-icon"></div>
            <div>呼朋引伴</div>
          </div>
          <div className="cha-group-arrow-icon"></div>
          <div>
            <div className="cha-group-menu-icon"></div>
            <div>作伙點餐</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ChaGroupOrder
