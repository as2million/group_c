import React from 'react';
import './RuArrowRight.scss';
import ArrowR from './Images/ArrowRight.svg';

function RuArrowRight(props) {
  return (
    <>
      <button className="arrowRight-warp">
        <img src={ArrowR} draggable="false"/>
      </button>
    </>
  );
}

export default RuArrowRight;
