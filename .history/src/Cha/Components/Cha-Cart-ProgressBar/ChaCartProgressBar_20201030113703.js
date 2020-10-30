import React, { useState, useEffect } from 'react'
// import RightArrowWhite from 'Cha/Components/Cha-Cart-ProgressBar/Images/right-arrow-white.svg'
import './ChaCartProgressBar.scss'
import { Link } from 'react-router-dom'

window.addEventListener('scroll', () => {
  moveBar('#e74c3c')
})

// main code
function moveBar(color = '#0984e3') {
  let bar = document.querySelector('.cha-progress-bar')
  let w = Math.ceil(
    (Math.round(window.pageYOffset) /
      (document.body.scrollHeight - window.innerHeight)) *
      100
  )
  bar.style.width = w + '%'
  bar.style.background = color
}

function ChaCartProgressBar(props) {
  return (
    <>
      <div className="cha-progress-bar"></div>
      <div className="cha-progress-bar-arrow-header">
        <Link to="/">
          <div className="cha-right-arrow"></div>
        </Link>
        <div className="cha-progress-bar-header">建立訂單</div>
      </div>
    </>
  )
}
export default ChaCartProgressBar
