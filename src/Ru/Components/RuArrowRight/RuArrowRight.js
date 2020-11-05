import React, { useState, useEffect } from 'react'
import './Style.scss'
import ArrowR from './Images/ArrowRight.svg'

function RuArrowRight(props) {
  const { moveX, setMoveX, limitX, setLimitX } = props
  const [isMoving, setIstMoving] = useState(false)

  function start() {
    setIstMoving(true)
  }

  function stop() {
    setIstMoving(false)
  }

  useEffect(() => {
    // console.log(isMoving)
    let movement = moveX
    let moving
    if (isMoving === true) {
      moving = setInterval(() => {
        // 右邊到底就停下
        if (movement !== limitX) {
          movement -= 10
          setMoveX(movement)
        }
      }, 20)
    }
    return () => {
      clearInterval(moving)
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
