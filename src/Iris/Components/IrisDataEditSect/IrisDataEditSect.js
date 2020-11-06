import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './IrisDataEditSect.scss'
import { ReactComponent as WaveLine } from './Images/wave_line.svg'
import InputH40 from './../../../Share/Components/Input/InputH40'
// import SelectBox from './../../../Share/Components/Input/SelectBox';
import Button from './../../../Share/Components/Button/Button'

function IrisDataEditSect(props) {
  const { currentUser } = props
  const updateProfile = () => {
    // const d = {
    //   email: document.form1.email.value,
    //   password: document.form1.password.value,
    // }

    const familyname = document.querySelector('#iris-member-family-name').value
    const givenname = document.querySelector('#iris-member-given-name').value
    const birthday = document.querySelector('#iris-member-birthday').value
    const mobile = document.querySelector('#iris-member-mobile').value
    const password = document.querySelector('#iris-member-new-password').value
    const email = document.querySelector('#iris-member-email').value
    const address = document.querySelector('#iris-member-address').value
    const newProfile = {
      member_id: currentUser,
      familyname: familyname,
      givenname: givenname,
      birthday: birthday,
      mobile: mobile,
      password: password,
      email: email,
      address: address,
    }
    // console.log(newProfile)

    fetch('http://localhost:5000/member/updateProfile', {
      method: 'POST',
      body: JSON.stringify(newProfile),
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
      <div className="container col-9">
        {/* <div className="row justify-content-center"> */}
        <div className="row justify-content-center iris-content-title-container ">
          <h2 className="iris-profile-title">會員資料</h2>
          <WaveLine />
          <div />
          <div className="row justify-content-center">
            <h6 className="iris-profile-note">
              ※ 部分資料以 * 或隱藏處理，保護您的個人隱私
            </h6>
            <form className="iris-form-adjust">
              <div className="d-flex  align-items-center iris-profile-item-wrapper">
                <div className="iris-input-box testtest">姓氏</div>

                <InputH40
                  type="text"
                  placeholder=""
                  id="iris-member-family-name"
                />

                <div className="iris-input-box">名字</div>

                <InputH40
                  type="text"
                  placeholder=""
                  id="iris-member-given-name"
                />
              </div>
              <div className="d-flex noF-wrap align-items-center iris-profile-item-wrapper">
                <div className="iris-input-box">生日</div>

                <InputH40
                  type="text"
                  placeholder=""
                  id="iris-member-birthday"
                />
              </div>
              <div className="d-flex no-wrap align-items-center iris-profile-item-wrapper">
                <div className="iris-input-box">手機</div>
                <InputH40 type="text" placeholder="" id="iris-member-mobile" />
              </div>
              <div className="d-flex no-wrap align-items-center iris-profile-item-wrapper">
                <div className="iris-input-box">密碼</div>
                <InputH40
                  type="password"
                  placeholder=""
                  id="iris-member-password"
                />
              </div>
              <div className="d-flex no-wrap align-items-center iris-profile-item-wrapper">
                <div className="iris-input-box">新密碼</div>
                <InputH40 type="password" placeholder="" />
              </div>
              <div className="d-flex no-wrap align-items-center iris-profile-item-wrapper">
                <div className="iris-input-box">確認新密碼</div>
                <InputH40
                  type="password"
                  placeholder=""
                  id="iris-member-new-password"
                />
              </div>
              <div className="d-flex no-wrap align-items-center iris-profile-item-wrapper">
                <div className="iris-input-box">信箱</div>
                <InputH40 type="text" placeholder="" id="iris-member-email" />
              </div>
              <div className="d-flex no-wrap align-items-center iris-profile-item-wrapper">
                <div className="iris-input-box">配送地址</div>
                <InputH40 type="text" placeholder="" id="iris-member-address" />
              </div>
            </form>
            <div
              className="iris-profile-button"
              onClick={() => {
                updateProfile()
              }}
            >
              <Button className="button-btn" text="更新個人資料" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IrisDataEditSect
