import React, { useState, useEffect } from 'react';
import './IrisOrderCommentSect.scss';
import { ReactComponent as WaveLine } from './Images/wave_line.svg';
import { ReactComponent as IrisMemberLine } from './Images/iris_member_line.svg';
import star from './Images/star.svg';

function IrisUserCommentSect() {
  return (
    <>
      <div className="container col-9">
        <div className="row justify-content-center iris-content-title-container ">
          <h2 className="iris-comment-title">我的投稿</h2>
          <WaveLine />
        </div>
        <div className="iris-comment-list-container">
          <h6 className="iris-comment-note">
            您共有 <span className="iris-comment-quantity">6</span> 則投稿
          </h6>
          {/* <IrisMemberLine /> */}
          <div className="iris-member-line"></div>
          <div className="iris-comment-box d-flex">
            <div className="iris-comment-img-warpper">
              <img className="iris-comment-img comment-img-1"></img>
            </div>
            <div className="iris-comment-section-wrapper">
              <div className="iris-comment-text-wrapper d-flex">
                <div>慢煮嫩雞胸-蒜味香草</div>&nbsp;&nbsp;
                <div className="card-star-warp">
                  <img className="card-star" src={star} />
                  <img className="card-star" src={star} />
                  <img className="card-star" src={star} />
                  <img className="card-star" src={star} />
                  <img className="card-star" src={star} />
                </div>
              </div>
              <div className="iris-comment-text">
                方便又美味 上班吃什麼都不煩惱了
              </div>
              <div className="iris-comment-edit-delete">
                <span className="comment-edit">編輯</span>
                &nbsp;<span> | </span>&nbsp;
                <span className="comment-delete">刪除</span>
              </div>
              <div className="iris-comment-date">2020/09/26</div>
            </div>
          </div>
          <div className="iris-member-line"></div>
          <div className="iris-comment-box d-flex">
            <div className="iris-comment-img-warpper">
              <img className="iris-comment-img comment-img-2"></img>
            </div>
            <div className="iris-comment-section-wrapper">
              <div className="iris-comment-text-wrapper d-flex">
                <div>慢煮嫩雞胸-蒜味香草</div>&nbsp;&nbsp;
                <div className="card-star-warp">
                  <img className="card-star" src={star} />
                  <img className="card-star" src={star} />
                  <img className="card-star" src={star} />
                  <img className="card-star" src={star} />
                  <img className="card-star" src={star} />
                </div>
              </div>
              <div className="iris-comment-text">
                方便又美味 上班吃什麼都不煩惱了
              </div>
              <div className="iris-comment-edit-delete">
                <span className="comment-edit">編輯</span>
                &nbsp; <span> | </span>&nbsp;
                <span className="comment-delete">刪除</span>
              </div>
              <div className="iris-comment-date">2020/09/26</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default IrisUserCommentSect;
