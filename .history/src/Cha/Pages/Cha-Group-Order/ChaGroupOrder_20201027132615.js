import React, { useState, useEffect } from 'react'

import ChaGroupProgressBar from 'Cha/Components/Cha-Group-ProgressBar/ChaGroupProgressBar'

import 'Cha/Pages/Cha-Group-Order/ChaGroupOrder.scss'

function ChaGroupOrder(props) {
  return (
    <>
      <div className="row cha-breadcrumbs-row">
        <div className="group-greate"></div>{' '}
      </div>
      <h1>小農購物車</h1>
      <ChaGroupProgressBar />
    </>
  )
}
export default ChaGroupOrder
