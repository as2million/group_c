import React, { useState, useEffect } from 'react'
// import RightArrowWhite from 'Cha/Components/Cha-Group-ProgressBar/Images/right-arrow-white.svg'
import './ChaGroupProgressBar.scss'
import { Link } from 'react-router-dom'

function ChaGroupProgressBar(props) {
  return (
    <>
      <div className="cha-navbar-group-order">
        <Link to="/">
          <div className="cha-right-arrow"></div>
        </Link>
        <div className="cha-progress-bar-header">建立訂單</div>
      </div>
    </>
  )
}
export default ChaGroupProgressBar
