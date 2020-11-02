import React from 'react';
import './ArrowLeft.scss';
import ArrowL from './Images/ArrowLeft.svg';

function ArrowLeft(props) {
  return (
    <>
      <button className="arrowLeft-warp">
        <img src={ArrowL} draggable="false"/>
      </button>
    </>
  );
}

export default ArrowLeft;
