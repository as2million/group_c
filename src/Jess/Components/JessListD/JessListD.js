import React, { useState, useEffect } from 'react';
import './JessListD.scss';
import Button from '../../../Share/Components/Button/Button';

function JessListD() {
  return (
    <>
      <div className="container-fluid">
        <div className="container mt-5 jess-proD-bg">
          <h2 className="jess-text-30orange text-center mt-5">商品評論</h2>
          <div className="row d-flex jess-msg-tittle justify-content-between mt-5">
            <div className="col-9 d-flex align-items-center">
              <ul className="list-unstyled">
                <li class="jess-text-20orange">整體滿意度</li>
                <li class="jess-text-15Gray">來自 180 則評分，滿分5顆星</li>
              </ul>
            </div>
            <div className="col-2 jess-msg-todo d-flex align-items-center">
              <Button className="button-btn" text="我要評論"></Button>
            </div>
          </div>
          <div className="row d-flex jess-msg-content justify-content-between">
            <div className="col-9 d-flex align-items-center">
              <ul className="list-unstyled">
                <li class="jess-text-15Gray">白*華</li>
                <li class="jess-text-15brown">
                  方便又美味 上班吃什麼都不煩惱了
                </li>
              </ul>
            </div>
            <div className="col-2 jess-msg-todo d-flex align-items-center">
              <div className="jess-text-15Gray">2020/09/26</div>
            </div>
          </div>
          <div className="row d-flex jess-msg-tittle justify-content-between ">
            <div className="col-9 d-flex align-items-center">
              <ul className="list-unstyled">
                <li class="jess-text-15Gray">吳*婷</li>
                <li class="jess-text-15brown">
                  方便又美味 上班吃什麼都不煩惱了
                </li>
              </ul>
            </div>
            <div className="col-2 jess-msg-todo d-flex align-items-center">
              <div className="jess-text-15Gray">2020/09/26</div>
            </div>
          </div>
          <div className="row d-flex jess-msg-content justify-content-between">
            <div className="col-9 d-flex align-items-center">
              <ul className="list-unstyled">
                <li class="jess-text-15Gray">白*華</li>
                <li class="jess-text-15brown">
                  方便又美味 上班吃什麼都不煩惱了
                </li>
              </ul>
            </div>
            <div className="col-2 jess-msg-todo d-flex align-items-center">
              <div className="jess-text-15Gray">2020/09/26</div>
            </div>
          </div>
          <div className="row d-flex jess-msg-tittle justify-content-between ">
            <div className="col-9 d-flex align-items-center">
              <ul className="list-unstyled">
                <li class="jess-text-15Gray">吳*婷</li>
                <li class="jess-text-15brown">
                  方便又美味 上班吃什麼都不煩惱了
                </li>
              </ul>
            </div>
            <div className="col-2 jess-msg-todo d-flex align-items-center">
              <div className="jess-text-15Gray">2020/09/26</div>
            </div>
          </div>
          <div className="jess-productTabBorder"></div>
        </div>
      </div>
    </>
  );
}

export default JessListD;
