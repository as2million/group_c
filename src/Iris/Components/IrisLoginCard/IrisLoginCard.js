import React, { useState, useEffect } from 'react'
import './IrisLoginCard.scss'
import { ReactComponent as LoginCardBg } from './Images/login_card.svg'
import { ReactComponent as RegisterCardBg } from './Images/register_card.svg'
import InputH44 from './../../../Share/Components/Input/InputH44.js'
import Button from './Button/Button'
import ButtonLogin from './Button/ButtonLogin'
import $ from 'jquery'

function IrisLoginCard(props) {
  const { setIsLogin, setCurrentUser, isLogin } = props


  // 變成註冊表單
  const ToRegisterForm = () => {
    // 白底移動
    const loginEnrollCard = document.querySelector('.iris-login-form')
    loginEnrollCard.style.transform = 'translate(0%, 0)'
    loginEnrollCard.style.transition = '1.3s'
    // -------------登入卡消失效果
    document.querySelector('.iris-login-content').style.display = 'none'
    document.querySelector('.iris-login-background').style.opacity = '0'
    document.querySelector('.iris-login-background').style.transition =
      'opacity 2s'
    setTimeout(function () {
      document.querySelector('.iris-login-background').style.display = 'none'
    }, 900)
    //------------ 註冊卡出現效果
    setTimeout(function () {
      document.querySelector('.iris-register-background').style.display =
        'block'
    }, 990)
    document.querySelector('.iris-register-content').style.display = 'flex'
    setTimeout(function () {
      document.querySelector('.iris-register-background').style.opacity = '1'
      document.querySelector('.iris-register-background').style.transition =
        'opacity 1.1s'
    }, 1100)
  }

  // 變成登入表單
  const ToLoginForm = () => {
    // 白底移動
    const loginEnrollCard = document.querySelector('.iris-login-form')
    loginEnrollCard.style.transform = 'translate(-85%, 0)'
    loginEnrollCard.style.transition = '1.3s'
    // -------------註冊卡消失效果
    document.querySelector('.iris-register-content').style.display = 'none'
    document.querySelector('.iris-register-background').style.opacity = '0'
    document.querySelector('.iris-register-background').style.transition =
      'opacity 2s'
    setTimeout(function () {
      document.querySelector('.iris-register-background').style.display = 'none'
    }, 900)
    //------------ 登入卡出現效果
    setTimeout(function () {
      document.querySelector('.iris-login-background').style.display = 'block'
    }, 990)
    document.querySelector('.iris-login-content').style.display = 'flex'
    setTimeout(function () {
      document.querySelector('.iris-login-background').style.opacity = '1'
      document.querySelector('.iris-login-background').style.transition =
        'opacity 1.1s'
    }, 1100)
  }

  // 登入
  let userinfo = []
  // 拿資料庫會員資料
  async function getData() {
    const url = 'http://localhost:5000/member/allUserProfile'
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    userinfo = await response.json()
  }

  // 比對帳密
  async function handleLogin() {
    await getData()
    const useraccount = document.querySelector('#useraccount').value
    const userpassword = document.querySelector('#userpassword').value
    for (let i = 0; i < userinfo.length; i++) {
      if (
        useraccount === userinfo[i].account &&
        userpassword === userinfo[i].password
      ) {
        setIsLogin(true)
        setCurrentUser(userinfo[i].member_sid)
        document.querySelector('.iris-login-content').style.display = 'none'
        document.querySelector('.iris-success-checkmark').style.display =
          'block'
      } else {
        // 若帳密錯誤，顯示錯誤提示
        $('.iris-login-alert').slideDown('slow')
        setTimeout(() => {
          $('.iris-login-alert').slideUp('slow')
        }, 2000)
      }
    }
  }

  // 註冊
  const handleRegister = () => {
    const account = document.querySelector('#createaccount').value
    const password = document.querySelector('#createpassword').value
    const email = document.querySelector('#createmail').value
    const mobile = document.querySelector('#createmobile').value

    // 把輸入的內容包成物件傳出去
    const newRegister = {
      account: account,
      password: password,
      email: email,
      mobile: mobile,
    }

    fetch('http://localhost:5000/member/userRegister', {
      method: 'POST',
      body: JSON.stringify(newRegister),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
      .then((r) => r.json())
      .then((o) => {
        console.log(o)
      })
  }

  return (
    <>
      <div className="iris-login-card-container d-flex align-items-center">
        <div className="iris-card-background">
          <div className="iris-login-background">
            {/* <LoginCardBg /> */}
            <img src={require('./Images/login_card.png')} />
          </div>
          <div className="iris-register-background">
            {/* <RegisterCardBg /> */}
            <img src={require('./Images/register_card.png')} />
          </div>
        </div>
        <div className="iris-login-form">
          {/* ----------------登入表單----------------- */}
          <div className="iris-login-content">
            <div className="iris-login-title">會員登入</div>
            <div class="alert alert-danger iris-login-alert" role="alert">
              帳號或密碼錯誤
            </div>
            <div className="iris-login-input d-flex  align-items-center">
              <div className="iris-login-text">帳號</div>
              <InputH44 type="text" id="useraccount" />
            </div>
            <div className="iris-login-input d-flex  align-items-center">
              <div className="iris-login-text">密碼</div>
              <InputH44 type="password" id="userpassword" />
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
            <div
              className="iris-login-button"
              onClick={() => {
                handleLogin()
              }}
            >
              <ButtonLogin
                className="button-btn-g"
                id="iris-login-btn"
                text="登入"
              />
            </div>
            <div className="d-flex">
              <div className="iris-no-account">還沒有帳號嗎?</div>
              <div
                className="iris-no-account-register"
                onClick={() => {
                  ToRegisterForm()
                }}
              >
                註冊訂餐
              </div>
            </div>
          </div>

          <div class="iris-success-checkmark">
            <div class="iris-check-icon">
              <span class="icon-line line-tip"></span>
              <span class="icon-line line-long"></span>
              <div class="icon-circle"></div>
              <div class="icon-fix"></div>
            </div>
            <div class="iris-login-sucess">登入成功</div>
          </div>
          {/* ----------------註冊表單----------------- */}
          <div className="iris-register-content">
            <div className="iris-register-title">會員註冊</div>
            <div className="iris-login-input d-flex  align-items-center">
              <div className="iris-login-text">帳號</div>
              <InputH44 type="text" id="createaccount" />
            </div>
            <div className="iris-login-input d-flex  align-items-center">
              <div className="iris-login-text">密碼</div>
              <InputH44 type="password" id="createpassword" />
            </div>
            <div className="iris-login-input d-flex  align-items-center">
              <div className="iris-login-text">信箱</div>
              <InputH44 type="text" id="createmail" />
            </div>
            <div className="iris-login-input d-flex  align-items-center">
              <div className="iris-login-text">手機</div>
              <InputH44 type="text" id="createmobile" />
            </div>

            <div
              className="iris-register-button"
              onClick={() => {
                handleRegister()
              }}
            >
              <Button
                className="button-btn"
                id="iris-register-btn"
                text="送出"
              />
            </div>
            <div className="d-flex">
              <div className="iris-no-account">已經有帳號了嗎?</div>
              <div
                className="iris-login-now"
                onClick={() => {
                  ToLoginForm()
                }}
              >
                立即登入
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IrisLoginCard
