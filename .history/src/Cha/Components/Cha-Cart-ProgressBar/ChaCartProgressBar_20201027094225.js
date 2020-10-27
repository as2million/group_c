import React, { useState, useEffect } from 'react'
// import RightArrowWhite from 'Cha/Components/Cha-Cart-ProgressBar/Images/right-arrow-white.svg'
import './ChaCartProgressBar.scss'
import { Link } from 'react-router-dom'

function ChaCartProgressBar(props) {
  return (
    <>
      <div className="progress-bar cha-progress-bar">
      
<Link to="">
        <div className="cha-right-arrow"></div></Link>

        <div className="cha-progress-bar-header">建立訂單</div>
      </div>
    </>
  )
}
export default ChaCartProgressBar
