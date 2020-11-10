import React, { useState, useEffect } from 'react';
import './Counter.scss';

function Counter(props) {
  const { handleCount, mealsItem } = props;
  return (
    <>
      <div className="cha-counter-box">
        <div
          onClick={() => {
            handleCount(mealsItem.id, 'decrement');
          }}
          className={
            mealsItem.productAmount === 1
              ? 'counter-decrement cursor-default'
              : 'counter-decrement counter-hover'
          }
        >
          <p>-</p>
        </div>
        <div className="counter-count">
          <p>{mealsItem.productAmount}</p>
        </div>
        <div
          onClick={() => handleCount(mealsItem.id, 'increment')}
          className="counter-increment"
        >
          <p>+</p>
        </div>
      </div>
    </>
  );
}

export default Counter;
