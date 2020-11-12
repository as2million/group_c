import React, { useState, useEffect } from 'react'
import './JessMenuB.scss'
import { Link } from 'react-router-dom'
import brownBorder from 'Jess/Components/images/SVG/brownBorder.svg'

function JessMenuB() {
  return (
    <>
      <div className="container-fluid jess-MenuB-container-fluid">
        <div className="container  mt-5 mb-5">
          <p className="jess-text-30orange text-center  ">日常經典</p>
          <p className="jess-text-15Gray text-center">
            中央廚房當日新鮮現做，嚴選新鮮食材讓您吃得到食材原形
            <br />
            熱量完整揭露輕鬆計算、詳細的食材來源
          </p>
          <div className="row mt-5 ">
            <div class="col-12 col-sm-6 ">
              {/* <p className="jess-menuB-BentoText">客製化便當</p> */}
              <div className="jess-menuB-pic1"></div>
            </div>
            <div className="col-12 col-sm-6 d-flex jess-MenuB-RWD">
              <div className="row d-flex  align-content-between">
                <div className="jess-view-menuBpic2">
                  <a href="/bento/0/#1">
                    <div className="jess-menuB-pic2"></div>
                  </a>
                  <div class="mask">
                    <h2>慢煮嫩雞胸-蒜味香草</h2>
                    <p>$170</p>
                  </div>
                </div>
                <div className="jess-view-menuBpic3">
                  <Link to="/bento/1">
                    <div className="jess-menuB-pic3"></div>
                  </Link>
                  <div class="mask">
                    <h2>日式燒雞腿</h2>
                    <p>$135</p>
                  </div>
                </div>
              </div>
              <div className="row d-flex  align-content-between">
                <div className="jess-view-menuBpic4">
                  <Link to="/bento/4">
                    <div className="jess-menuB-pic4"></div>
                  </Link>
                  <div class="mask">
                    <h2>頂級熟成菲力牛排</h2>
                    <p>$230</p>
                  </div>
                </div>
                <div className="jess-view-menuBpic5">
                  <Link to="/bento/3">
                    <div className="jess-menuB-pic5"></div>
                  </Link>
                  <div class="mask">
                    <h2>熱帶火烤萊姆蝦</h2>
                    <p>$220</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jess-Menu-bottomBorder">
          <img alt="" src={brownBorder}></img>
        </div>
      </div>
    </>
  )
}

export default JessMenuB
