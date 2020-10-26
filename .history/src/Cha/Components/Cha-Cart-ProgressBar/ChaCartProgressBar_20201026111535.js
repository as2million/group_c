import React, { useState, useEffect } from 'react'
import RightArrowWhite from 'Cha/Components/Cha-Cart-ProgressBar/Images/right-arrow-white.svg'
import './ChaCartProgressBar.scss'

function ChaCartProgressBar(props) {
  return (
    <>
      <div className="progress-bar cha-progress-bar">
        <img
          className="cha-right-arrow-white"
          src={RightArrowWhite}
          alt="RightArrowWhite"
        ></img>
        <div className="cha-progress-bar-header">建立訂單</div>
      </div>
    </>
  )
}
export default ChaCartProgressBar
