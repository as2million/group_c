import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import 'antd/dist/antd.css'
import './JessListE.scss'
import { Parallax } from 'rc-scroll-anim'
import { Link } from 'react-router-dom'

function JessListE() {
  return (
    <>
      <div className="container-fluid">
        <div className="container jess-proE-bg">
          <div className="jess-productTabBorder"></div>
          <h2 className="jess-text-30orange text-center ">你可能也想來點</h2>
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-xs-6 col-sm-4 mt-5 jessListE-view-first">
              <Link to="/bento/7">
                <div className="jess-proE-pic1"></div>
              </Link>
              <div class="mask">
                <h2>炙燒干貝</h2>
                <p>$230</p>
              </div>
            </div>
            <div className="col-xs-6 col-sm-4 mt-5 jessListE-view-first">
              <Link to="/bento/1">
                <div className="jess-proE-pic2"></div>
              </Link>
              <div class="mask">
                <h2>日式燒雞腿</h2>
                <p>$150</p>
              </div>
            </div>
            <div className="col-xs-6 col-sm-4 mt-5 jessListE-view-first">
              <Link to="/bento/6">
                <div className="jess-proE-pic3"></div>
              </Link>
              <div class="mask">
                <h2 className="jess-text-18white">頂級熟成菲力牛排</h2>
                <p>$230</p>
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
