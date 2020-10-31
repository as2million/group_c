import React, { useState, useEffect } from 'react';
import './JessMenuC.scss';
import brownBorder from 'Jess/Components/images/SVG/brownBorder.svg';

function JessMenuC() {
  return (
    <>
      <div className="container-fluid jess-MenuC-container-fluid">
        <div className="container  mt-5 mb-5">
          <p className="jess-text-30orange text-center  ">活力蔬菜</p>
          <p className="jess-text-15Gray text-center">
            中央廚房當日新鮮現做，嚴選新鮮食材讓您吃得到食材原形
            <br />
            熱量完整揭露輕鬆計算、詳細的食材來源
          </p>
          <div className="row mt-5">
            <div className="col-12 col-sm-6 d-flex ">
              <div className="row d-flex align-content-between jess-MenuC-RWD">
                <div className="jess-view-menuCpic1">
                  <div className="jess-menuC-pic1"></div>
                  <div class="mask">
                    <h2>生酮沙拉</h2>
                    <p>$130</p>
                  </div>
                </div>
                <div className="jess-view-menuCpic2">
                  <div className="jess-menuC-pic2"></div>
                  <div class="mask">
                    <h2>均衡蛋白質沙拉</h2>
                    <p>$135</p>
                  </div>
                </div>
              </div>
              <div className="row d-flex  align-content-between">
                <div className="jess-view-menuCpic3">
                  <div className="jess-menuC-pic3"></div>
                  <div class="mask">
                    <h2>肌肉UPUP(增肌)沙拉</h2>
                    <p>$130</p>
                  </div>
                </div>
                <div className="jess-view-menuCpic4">
                  <div className="jess-menuC-pic4"></div>
                  <div class="mask">
                    <h2>藜麥毛豆沙拉(全素)</h2>
                    <p>$150</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 ">
              <div className="jess-menuC-box"></div>
            </div>
          </div>
        </div>
        <div className="jess-Menu-bottomBorder">
          <img alt="" src={brownBorder}></img>
        </div>
      </div>
    </>
  );
}

export default JessMenuC;
