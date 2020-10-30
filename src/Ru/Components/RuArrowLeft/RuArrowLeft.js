import React from 'react';
import './RuArrowLeft.scss';
import ArrowL from './Images/ArrowLeft.svg';

function RuArrowLeft(props) {
  return (
    <>
      <button className="arrowLeft-warp">
        <img src={ArrowL} draggable="false" />
      </button>
    </>
  );
}

export default RuArrowLeft;
