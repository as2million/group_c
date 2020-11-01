import React, { useState, useEffect } from 'react';
import './IrisLoginCard.scss';
import { ReactComponent as LoginCardBg } from './Images/login_card.svg';
import { ReactComponent as RegisterCardBg } from './Images/register_card.svg';
import InputH44 from './../../../Share/Components/Input/InputH44.js';
import Button from './Button/Button';

function IrisLoginCard(props) {
  // 變成註冊表單
  const ToRegisterForm = () => {
    // 白底移動
    const loginEnrollCard = document.querySelector('.iris-login-form');
    loginEnrollCard.style.transform = 'translate(0%, 0)';
    loginEnrollCard.style.transition = '1.3s';
    // -------------登入卡消失效果
    document.querySelector('.iris-login-content').style.display = 'none';
    document.querySelector('.iris-login-background').style.opacity = '0';
    document.querySelector('.iris-login-background').style.transition =
      'opacity 2s';
    setTimeout(function () {
      document.querySelector('.iris-login-background').style.display = 'none';
    }, 900);
    //------------ 註冊卡出現效果
    setTimeout(function () {
      document.querySelector('.iris-register-background').style.display =
        'block';
    }, 990);
    document.querySelector('.iris-register-content').style.display = 'flex';
    setTimeout(function () {
      document.querySelector('.iris-register-background').style.opacity = '1';
      document.querySelector('.iris-register-background').style.transition =
        'opacity 1.1s';
    }, 1100);
  };

  // 變成登入表單
  const ToLoginForm = () => {
    // 白底移動
    const loginEnrollCard = document.querySelector('.iris-login-form');
    loginEnrollCard.style.transform = 'translate(-85%, 0)';
    loginEnrollCard.style.transition = '1.3s';
    // -------------註冊卡消失效果
    document.querySelector('.iris-register-content').style.display = 'none';
    document.querySelector('.iris-register-background').style.opacity = '0';
    document.querySelector('.iris-register-background').style.transition =
      'opacity 2s';
    setTimeout(function () {
      document.querySelector('.iris-register-background').style.display =
        'none';
    }, 900);
    //------------ 登入卡出現效果
    setTimeout(function () {
      document.querySelector('.iris-login-background').style.display = 'block';
    }, 990);
    document.querySelector('.iris-login-content').style.display = 'flex';
    setTimeout(function () {
      document.querySelector('.iris-login-background').style.opacity = '1';
      document.querySelector('.iris-login-background').style.transition =
        'opacity 1.1s';
    }, 1100);
  };

  return (
    <>
      <div className="iris-login-card-container d-flex align-items-center">
        <div className="iris-card-background">
          <div className="iris-login-background">
            <LoginCardBg />
          </div>
          <div className="iris-register-background">
            <RegisterCardBg />
          </div>
        </div>
        <div className="iris-login-form">
          {/* ----------------登入表單----------------- */}
          <div className="iris-login-content">
            <div className="iris-login-title">會員登入</div>
            <div className="iris-login-input d-flex  align-items-center">
              <div className="iris-login-text">帳號</div>
              <InputH44 type="text" />
            </div>
            <div className="iris-login-input d-flex  align-items-center">
              <div className="iris-login-text">密碼</div>
              <InputH44 type="password" />
            </div>
            <div className="iris-login-other d-flex">
              <div class="form-check">
                <input
                  class="form-check-input iris-big-checkbox"
                  type="checkbox"
                  id="gridCheck"
                />
                <div className="iris-login-remember-me">記住我</div>
              </div>
              <div className="iris-login-forget-pw">忘記密碼</div>
            </div>
            <div className="iris-login-button">
              <Button className="button-btn-g" text="登入" />
            </div>
            <div className="d-flex">
              <div className="iris-no-account">還沒有帳號嗎?</div>
              <div
                className="iris-no-account-register"
                onClick={() => {
                  ToRegisterForm();
                }}
              >
                註冊訂餐
              </div>
            </div>
          </div>
          {/* ----------------註冊表單----------------- */}
          <div className="iris-register-content">
            <div className="iris-register-title">會員註冊</div>
            <div className="iris-login-input d-flex  align-items-center">
              <div className="iris-login-text">帳號</div>
              <InputH44 type="text" />
            </div>
            <div className="iris-login-input d-flex  align-items-center">
              <div className="iris-login-text">密碼</div>
              <InputH44 type="password" />
            </div>
            <div className="iris-login-input d-flex  align-items-center">
              <div className="iris-login-text">信箱</div>
              <InputH44 type="text" />
            </div>
            <div className="iris-login-input d-flex  align-items-center">
              <div className="iris-login-text">手機</div>
              <InputH44 type="text" />
            </div>

            <div className="iris-register-button">
              <Button className="button-btn" text="送出" />
            </div>
            <div className="d-flex">
              <div className="iris-no-account">已經有帳號了嗎?</div>
              <div
                className="iris-login-now"
                onClick={() => {
                  ToLoginForm();
                }}
              >
                立即登入
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IrisLoginCard;
