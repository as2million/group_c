import React, { useState } from 'react';
import './IrisLoginModal.scss';

function IrisLoginModal(props) {
  const { showLoginModal, setShowLoginModal } = props;

  // 若ShowLoginModal是true，就秀登入畫面
  if (document.querySelector('.iris-login-mask')) {
    if (showLoginModal === true) {
      document.querySelector('.iris-login-mask').style.display = 'block'; // 秀登入畫面
      document.documentElement.style.overflowY = 'hidden'; // 禁止滾動
    } else {
      document.querySelector('.iris-login-mask').style.display = 'none';
      document.documentElement.style.overflowY = 'scroll';
    }
  }
  return (
    <>
      <div
        className="iris-login-mask"
        onClick={() => {
          setShowLoginModal(false); // 點擊黑色遮罩把ShowLoginModa把改回false
        }}
      >
        <div
          className="iris-change"
          onClick={(e) => {
            console.log('pink');
            e.stopPropagation();
          }}
        ></div>
      </div>
    </>
  );
}

export default IrisLoginModal;
