import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './IrisGetCouponSect.scss';
import { ReactComponent as WaveLine } from './Images/wave_line.svg';
import { ReactComponent as BeastieCoupon20 } from './Images/beastie_coupon20.svg';
import { ReactComponent as BeastieCoupon } from './Images/beastie_coupon.svg';
import { ReactComponent as CouponVerticalLine } from './Images/coupon_vertical_line.svg';

function IrisGetCouponSect() {
  return (
    <>
      <div className="container col-9">
        {/* <div className="row justify-content-center"> */}
        <div className="row justify-content-center iris-content-title-container ">
          <h2 className="iris-comment-title">專屬優惠</h2>
          <WaveLine />
        </div>

        <div className="iris-getcoupon-content-container ">
          <div className="iris-getcoupon-container">
            <div className="iris-getcoupon-box d-flex align-items-center ">
              <div className="iris-coupon-icon">
                <BeastieCoupon />
              </div>
              <CouponVerticalLine />
              <div className="iris-coupon-info d-flex flex-column">
                <div className="iris-coupon-title">註冊禮</div>
                <div>
                  <div className="iris-coupon-issue">
                    <span>
                      玩遊戲獲得怪獸幣，分數越高獲得越多喔～快來試試吧
                    </span>
                  </div>
                  <div className="iris-coupon-due">
                    <span>活動截止日期: </span>
                    <span>不限</span>
                  </div>
                </div>
                <div className="iris-getcoupon-learnmore">點擊前往 >></div>
              </div>
            </div>

            <div className="iris-getcoupon-box d-flex align-items-center ">
              <div className="iris-coupon-icon">
                <BeastieCoupon20 />
              </div>
              <CouponVerticalLine />
              <div className="iris-coupon-info d-flex flex-column">
                <div className="iris-coupon-title">好友分享</div>
                <div>
                  <div className="iris-coupon-issue">
                    <span>分享給好友，即可獲得20元怪獸幣唷!!</span>
                  </div>
                  <div className="iris-coupon-due">
                    <span>活動截止日期: </span>
                    <span>2020/12/31</span>
                  </div>
                </div>
                <div className="iris-getcoupon-learnmore">點擊前往 >></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IrisGetCouponSect;
