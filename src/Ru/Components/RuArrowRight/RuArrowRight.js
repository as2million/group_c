import React, { useState, useEffect } from 'react'
import './Style.scss'
import ArrowR from './Images/ArrowRight.svg'

function RuArrowRight(props) {
  const { moveX, setMoveX } = props
  const [isMoving, setIstMoving] = useState(false)

  function start() {
    setIstMoving(true)
  }

  function stop() {
    setIstMoving(false)
  }

  useEffect(() => {
    console.log('A')
    let movement = 0
    let moving
    if (isMoving === true) {
      moving = setInterval(() => {
        movement -= 5
        setMoveX(movement)
      }, 20)
    } else {
      clearInterval(moving)
    }
    return () => {
      
    }
  }, [isMoving])

  return (
    <>
      <button className="arrowRight-warp" onMouseDown={start} onMouseUp={stop}>
        <img src={ArrowR} draggable="false" />
      </button>
    </>
  )
}

export default RuArrowRight
