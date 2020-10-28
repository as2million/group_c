import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './IrisDataEdit.scss';
import { ReactComponent as WaveLine } from './Images/wave_line.svg';
import InputH40 from './../../../Share/Components/Input/InputH40';
// import SelectBox from './../../../Share/Components/Input/SelectBox';
import Button from './../../../Share/Components/Button/Button';

function IrisDataEdit() {
  return (
    <>
      <div class="container iris-content-container col-9">
        <div class="row justify-content-center">
          <h2 class="iris-profile-title">會員資料修改</h2>
          <WaveLine />
          <h6 class="iris-profile-note">
            ※ 部分資料以 * 或隱藏處理，保護您的個人隱私
          </h6>
          <form class="iris-form-adjust">
            <div class="d-flex  align-items-center iris-profile-item-wrapper">
              <div class="iris-input-box">姓氏</div>

              <InputH40 type="text" placeholder="" />

              <div class="iris-input-box">名字</div>

              <InputH40 type="text" placeholder="" />
            </div>
            <div class="d-flex noF-wrap align-items-center iris-profile-item-wrapper">
              <div class="iris-input-box">生日</div>

              <InputH40 type="text" placeholder="" />
            </div>
            <div class="d-flex no-wrap align-items-center iris-profile-item-wrapper">
              <div class="iris-input-box">手機</div>
              <InputH40 type="text" placeholder="" />
            </div>
            <div class="d-flex no-wrap align-items-center iris-profile-item-wrapper">
              <div class="iris-input-box">密碼</div>
              <InputH40 type="password" placeholder="" />
            </div>
            <div class="d-flex no-wrap align-items-center iris-profile-item-wrapper">
              <div class="iris-input-box">新密碼</div>
              <InputH40 type="password" placeholder="" />
            </div>
            <div class="d-flex no-wrap align-items-center iris-profile-item-wrapper">
              <div class="iris-input-box">確認新密碼</div>
              <InputH40 type="password" placeholder="" />
            </div>
            <div class="d-flex no-wrap align-items-center iris-profile-item-wrapper">
              <div class="iris-input-box">信箱</div>
              <InputH40 type="text" placeholder="" />
            </div>
            <div class="d-flex no-wrap align-items-center iris-profile-item-wrapper">
              <div class="iris-input-box">配送地址</div>
              <InputH40 type="text" placeholder="" />
            </div>
          </form>
          <div class="iris-profile-button">
            <Button className="button-btn" text="更新個人資料" />
          </div>
        </div>
      </div>
    </>
  );
}

export default IrisDataEdit;
