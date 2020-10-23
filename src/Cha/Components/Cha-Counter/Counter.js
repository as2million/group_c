import React, { useState, useEffect } from 'react'
import 'Cha/Components/Cha-Counter/Counter.scss'

function Counter(props) {
  const [count, setCount] = useState(1)

  const handleClick = (type) => {
    if (type === 'increment') {
      setCount(count + 1)
    }
    if (type === 'decrement' && count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <div className="counter-box">
        <div
          onClick={() => handleClick('decrement')}
          className="counter-decrement"
        >
          <p>-</p>
        </div>
        <div className="counter-count">
          <p>{count}</p>
        </div>
        <div
          onClick={() => handleClick('increment')}
          className="counter-increment"
        >
          <p>+</p>
        </div>
      </div>
    </>
  )
}

export default Counter
