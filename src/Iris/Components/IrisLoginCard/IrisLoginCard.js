import React, { useState } from 'react';
import './IrisLoginCard.scss';
import { ReactComponent as LoginCard } from './Images/login_card.svg';

function IrisLoginCard(props) {
  return (
    <>
      <div className="iris-login-card-container d-flex align-items-center">
        <div className="iris-login-background">
          <LoginCard />
        </div>
        <div className="iris-login-form">
          <div>會員登入</div>
          <div>帳號</div>
          <div>密碼</div>
          <div>記住我</div>
          <div>忘記密碼</div>
        </div>
      </div>
    </>
  );
}

export default IrisLoginCard;
