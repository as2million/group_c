import React, { useState, useEffect } from 'react';
import './IrisUserComment.scss';
import { ReactComponent as WaveLine } from './Images/wave_line.svg';

function IrisUserComment() {
  return (
    <>
      <div className="container col-9">
        <div className="row justify-content-center iris-content-title-container ">
          <h2 className="iris-comment-title">我的投稿</h2>

          <WaveLine />
        </div>
        <h6 className="iris-comment-note">
          您共有 <span className="iris-comment-quantity">6</span> 則投稿
        </h6>
      </div>
    </>
  );
}
export default IrisUserComment;
