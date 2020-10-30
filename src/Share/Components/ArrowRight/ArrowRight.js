import React from 'react';
import './ArrowRight.scss';
import ArrowR from './Images/ArrowRight.svg';

function ArrowRight(props) {
  return (
    <>
      <button className="arrowRight-warp">
        <img src={ArrowR} draggable="false"/>
      </button>
    </>
  );
}

export default ArrowRight;
