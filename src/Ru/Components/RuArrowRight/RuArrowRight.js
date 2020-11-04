import React from 'react'
import './Style.scss'
import ArrowR from './Images/ArrowRight.svg'

function RuArrowRight(props) {
  const { moveArea1 } = props

  function moveRight() {
    console.log(moveArea1)
    let moveX = 0
    setInterval(() => {
      moveX -= 50
    }, 500);
    moveArea1.style.transform = `translateX(${moveX}px)`

  }

  return (
    <>
      <button className="arrowRight-warp" onMouseDown={moveRight}>
        <img src={ArrowR} draggable="false" />
      </button>
    </>
  )
}

export default RuArrowRight
