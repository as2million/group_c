import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import 'antd/dist/antd.css'
import './JessListE.scss'
import { Parallax } from 'rc-scroll-anim'

function JessListE() {
  return (
    <>
      <div className="container-fluid">
        <div className="container jess-proE-bg">
          <div className="jess-productTabBorder"></div>
          <h2 className="jess-text-30orange text-center ">你可能也想來點</h2>
          <div className="row d-flex justify-content-center mt-5">
            {/* <div class="col-xs-6 col-sm-3">
              <div class="fall-item fall-effect">
                <div className="jess-proE-pic1"></div>
                <div class="mask">
                  <p>
                    A wonderful serenity has taken possession of my entire soul,
                    like these.
                  </p>
                </div>
              </div>
            </div> */}
            <div className="col-xs-6 col-sm-4 mt-5 jessListE-view-first">
              <div className="jess-proE-pic1"></div>
              <div class="mask">
                <h2>醬烤厚切豬菲力</h2>
                <p>$120</p>
              </div>
            </div>
            <div className="col-xs-6 col-sm-4 mt-5 jessListE-view-first">
              <div className="jess-proE-pic2"></div>
              <div class="mask">
                <h2>日式燒雞腿</h2>
                <p>$130</p>
              </div>
            </div>
            <div className="col-xs-6 col-sm-4 mt-5 jessListE-view-first">
              <div className="jess-proE-pic3"></div>
              <div class="mask">
                <h2 className="jess-text-18white">醬烤厚切1983黑豚</h2>
                <p>$140</p>
              </div>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JessListE
