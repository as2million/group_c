import React, { useState, useEffect } from 'react'
import 'Cha/Components/Cha-ToTop/TopButton.scss'
import 'Cha/Components/Cha-ToTop/ToTop.scss'
// import ScrollApp from 'ScrollApp'
import Monster from './Images/Monster.svg'
import TopArrow from './Images/TopArrow.svg'

function TopButton(props) {
  return (
    <>
      <div className="to-top">
        <img src={Monster} className="monster" alt="Monster" />
        <img src={TopArrow} className="top-arrow" alt="Monster" />
      </div>

      {/* <ScrollApp /> */}
    </>
  )
}

export default TopButton
