import React, { useState, useEffect } from 'react';
import './IrisOrderCommentSect.scss';
import { ReactComponent as WaveLine } from './Images/wave_line.svg';
import { ReactComponent as IrisMemberLine } from './Images/iris_member_line.svg';
import star from './Images/star.svg';
import IrisTextArea from './IrisTextArea/IrisTextArea';
// import InputH40 from './../../../Share/Components/Input/InputH40';

function IrisUserCommentSect() {
  const userComment = [
    { id: 1, text: '好吃1', date: '2020/01/21' },
    { id: 2, text: '好吃2', date: '2020/01/22' },
    { id: 3, text: '好吃3', date: '2020/01/23' },
  ];

  // 改留言
  const changeComment = (e) => {
    // 測試: 得到top parent的id
    // alert(e.target.parentNode.parentNode.parentNode.id);

    // 留言,編輯,刪除的字消失，出現輸入框
    const originalComment = document.querySelector('.iris-comment-text');
    document.querySelector('.iris-text-area .iris-textarea').value =
      originalComment.innerText;
    console.log(originalComment.innerText);
    const commentInput = document.querySelector('.iris-text-area');
    const editAndDelete = document.querySelector('.iris-comment-edit-delete');
    const commentUpdate = document.querySelector('.iris-comment-update');
    originalComment.style.display = 'none';
    commentInput.style.display = 'block';
    editAndDelete.style.display = 'none';
    commentUpdate.style.display = 'block';
  };

  // 輸入框消失，更新留言
  const doCommentUpdate = () => {
    const originalComment = document.querySelector('.iris-comment-text');
    const commentInput = document.querySelector('.iris-text-area');
    const editAndDelete = document.querySelector('.iris-comment-edit-delete');
    const commentUpdate = document.querySelector('.iris-comment-update ');
    console.log(commentInput.value);
    originalComment.innerText = document.querySelector(
      '.iris-text-area .iris-textarea'
    ).value;
    originalComment.style.display = 'block';
    commentInput.style.display = 'none';
    editAndDelete.style.display = 'block';
    commentUpdate.style.display = 'none';
  };

  // 留言框內容Template
  const commentDisplay = (
    <>
      <div className="iris-comment-box d-flex" id="comment1">
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
          <div className="iris-text-area">
            <IrisTextArea
            // value={document.querySelector('.iris-comment-text').innerText}
            />
            {/* <InputH40 /> */}
          </div>
          <div className="iris-comment-edit-delete">
            <span
              className="comment-edit"
              onClick={(e) => {
                changeComment(e);
              }}
            >
              編輯
            </span>
            &nbsp;<span> | </span>&nbsp;
            <span className="comment-delete">刪除</span>
          </div>
          <span
            className="iris-comment-update"
            onClick={() => {
              doCommentUpdate();
            }}
          >
            確認
          </span>
          <div className="iris-comment-date">2020/09/26</div>
        </div>
      </div>
    </>
  );

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
          {commentDisplay}
          <div className="iris-member-line"></div>
          {commentDisplay}
          <div className="iris-member-line"></div>
          {commentDisplay}
        </div>
      </div>
    </>
  );
}
export default IrisUserCommentSect;
