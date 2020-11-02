import React, { useState, useEffect } from 'react'
import './Counter.scss'

function Counter(props) {
  // const [count, setCount] = useState(1)

  // const { productAmount } = props

  // const handleClick = (type) => {
  //   if (type === 'increment') {
  //     setCount(count + 1)
  //   }
  //   if (type === 'decrement' && count > 1) {
  //     setCount(count - 1)
  //   }
  // }
  const { productAmount, handleCount, sid } = props
  return (
    <>
      <div className="counter-box">
        <div
          onClick={() => {
            handleCount(sid, 'decrement')
            // if (count === 2) {
            //   setHoverBackgroundColor('white')
            //   setHoverMinusColor('#858585')
            // }
          }}
          className={
            productAmount === 1
              ? 'counter-decrement cursor-default'
              : 'counter-decrement counter-hover'
          }
        >
          <p>-</p>
        </div>
        <div className="counter-count">
          <p>{productAmount}</p>
        </div>
        <div
          onClick={() => handleCount(sid, 'increment')}
          className="counter-increment"
        >
          <p>+</p>
        </div>
      </div>
    </>
  )
}

export default Counter
