import React, { useState } from 'react'
import './Style.scss'
import ArrowR from './Images/ArrowRight.svg'

function RuArrowRight(props) {
  const { moveX, setMoveX } = props
  const [ isStop, setIsStop ] = useState(false)

  
  function stop() {
    // clearInterval(moving)
  }

  function moveRight() {
    let movement = 0
    let moving = setInterval(() => {
      movement -= 50
      setMoveX(movement)
      // if (isStop === true) {
      // clearInterval(moving)
      // }
    }, 500)
  }

  return (
    <>
      <button
        className="arrowRight-warp"
        onMouseDown={moveRight}
        onMouseUp={stop}
      >
        <img src={ArrowR} draggable="false" />
      </button>
    </>
  )
}

export default RuArrowRight
