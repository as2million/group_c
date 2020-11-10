import React from 'react'
import './ArrowLeft.scss'

function ArrowLeft(props) {
  return (
    <>
      <div className="arrowLeft-warp">
        <div className="jan-arrow-circleL" draggable="true">
          <div className="jan-arrow-left"></div>
        </div>
      </div>
    </>
  )
}

export default ArrowLeft
