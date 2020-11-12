import React from 'react';
import './Counter.scss';

function Counter(props) {
  const { handleCount, mealsItem, updateCartToLocalStorage } = props;
  return (
    <>
      <div className="cha-counter-box">
        <div
          onClick={() => {
            handleCount(mealsItem.id, 'decrement');
            // if (mealsItem.productAmount < 1) return;
            updateCartToLocalStorage(mealsItem, false);
            handleCartNumber('minus');
          }}
          className={
            mealsItem.productAmount === 1
              ? 'cha-counter-decrement cha-cursor-default'
              : 'cha-counter-decrement cha-counter-hover'
          }
        >
          <p>-</p>
        </div>
        <div className="cha-counter-count">
          <p>{mealsItem.productAmount}</p>
        </div>
        <div
          onClick={() => {
            handleCount(mealsItem.id, 'increment');
            updateCartToLocalStorage(mealsItem, true);
          }}
          className="cha-counter-increment"
        >
          <p>+</p>
        </div>
      </div>
    </>
  );
}

export default Counter;
