import React, { useState, useEffect } from 'react'
import 'Cha/Components/Cha-ToTop/ToTop.scss'

function ToTop(props) {
  // const [count, setCount] = useState(1)

  return (
    <>
      <div className="to-top">
        <img className="monster" src="./Images/monster.svg" />
        <img className="top-arrow" src="./Images/top-arrow.svg" />
      </div>
    </>
  )
}

export default ToTop
