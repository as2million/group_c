import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import 'antd/dist/antd.css';
import './JessVegB.scss';
import { Parallax } from 'rc-scroll-anim';

function JessVegB() {
  return (
    <>
      <div className="container-fluid jess-VegB-container-fluid mx-auto">
        <div className="container jess-VegB-container mx-auto">
          <div className="row">
            <div className="jess-VegB-farm col-12 col-md-12 text-center mt-5">
              <Fade top>
                <h1>有愛大地理念</h1>
                <p>
                  選用契作農作物 永續觀念 <br />
                  未來期許與小農合作更多可能
                  <br /> 用料理回饋社會
                </p>
              </Fade>
              <div className="jess-VegTittle text-left">
                <p>傳遞在地故事</p>
                <p>屬於這塊土地的脈絡與感動</p>
              </div>
              <div className="jess-VegBox "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JessVegB;
