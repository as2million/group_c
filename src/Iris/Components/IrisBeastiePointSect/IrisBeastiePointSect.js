import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './IrisBeastiePointSect.scss';
import { ReactComponent as WaveLine } from './Images/wave_line.svg';
import { ReactComponent as BesatieBook } from './Images/beastie_book.svg';
import { ReactComponent as BesatieCoin } from './Images/beastie_coin.svg';
import { ReactComponent as BesatieQ } from './Images/beastie_q.svg';
import { ReactComponent as VerticalLine } from './Images/vertical_line.svg';
import { ReactComponent as PencilIcon } from './Images/pencil_icon.svg';
import { ReactComponent as BeastieCoupon20 } from './Images/beastie_coupon20.svg';
import { ReactComponent as BeastieCoupon20Grey } from './Images/beastie-coupon20-grey.svg';
import { ReactComponent as CouponVerticalLine } from './Images/coupon_vertical_line.svg';

function IrisBeastiePointSect() {
  return (
    <>
      <div className="container col-9">
        {/* <div className="row justify-content-center"> */}
        <div className="row justify-content-center iris-content-title-container ">
          <h2 className="iris-comment-title">怪獸幣</h2>
          <WaveLine />
        </div>

        <div className="iris-beastie-content-container ">
          <div className="iris-beastie-icons-container d-flex  justify-content-center">
            <div className="iris-icon-box d-flex align-items-center">
              <BesatieCoin />
              <p>怪獸幣總資產</p>
            </div>
            <div className="iris-beastie-coin">480</div>

            <VerticalLine />

            <div className="iris-beastie-box ">
              <div className="iris-beastie-name-box d-flex align-items-center justify-content-center">
                <PencilIcon />
                &nbsp;&nbsp;
                <div className="iris-beastie-name">小Q怪</div>
              </div>
              <BesatieQ />
            </div>

            <VerticalLine />

            <div className="iris-icon-box d-flex align-items-center ">
              <BesatieBook />
              <p>遊戲規則</p>
            </div>
          </div>

          <div className="iris-coupon-container">
            <div className="iris-coupon-box d-flex align-items-center ">
              <div className="iris-coupon-icon">
                <BeastieCoupon20 />
              </div>
              <CouponVerticalLine />
              <div className="iris-coupon-info d-flex flex-column">
                <div className="iris-coupon-title">20元怪獸幣</div>
                <div>
                  <div className="iris-coupon-issue">
                    <span>領取時間:</span>
                    <span> 2020/09/20 13:32</span>
                  </div>
                  <div className="iris-coupon-due">
                    <span>使用期限:</span>
                    <span>2020/10/20 23:59 </span>
                    <span>前</span>
                  </div>
                </div>
              </div>
            </div>

            {/* due */}
            <div className="iris-coupon-box d-flex align-items-center ">
              <div className="iris-coupon-icon">
                <BeastieCoupon20Grey />
              </div>
              <CouponVerticalLine />
              <div className="iris-coupon-info d-flex flex-column">
                <div className="iris-coupon-title-grey">20元怪獸幣</div>
                <div>
                  <div className="iris-coupon-issue-grey">
                    <span>領取時間:</span>
                    <span> 2020/09/20 13:32</span>
                  </div>
                  <div className="iris-coupon-due-grey">
                    <span>使用期限:</span>
                    <span>2020/10/20 23:59 </span>
                    <span>前</span>
                  </div>
                </div>
                <div className="iris-coupon-due-text">已失效</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IrisBeastiePointSect;
