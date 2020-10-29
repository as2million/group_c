import React, { useState, useEffect } from 'react'

import ChaGroupProgressBar from 'Cha/Components/Cha-Group-ProgressBar/ChaGroupProgressBar'
import ChaGroupOrderCreate from 'Cha/Components/Cha-Group-Order-Create/ChaGroupOrderCreate'

import 'Cha/Pages/Cha-Group-Order/ChaGroupOrder.scss'

function ChaGroupOrder(props) {
  return (
    <>
      <ChaGroupProgressBar />

      <div className="cha-group-wrap">
        <ChaGroupOrderCreate />
      </div>
    </>
  )
}
export default ChaGroupOrder
