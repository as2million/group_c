import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import './JessVegHeader.scss';
import Counter from '../../../Share/Components/Counter/Counter';
import AddCart from 'Share/Components/AddCart/AddCart';
import BreadCrumb from '../JessBreadCrumb/BreadCrumb';
import AddFavorite from 'Share/Components/AddFavorite/AddFavorite';

function JessVegHeader() {
  return (
    <>
      <div className="jess-fluidBg">
        <div className="container jess-breadCrumb">
          <BreadCrumb />
        </div>
        {/* <container className="jess-container"></container> */}
        <div className="jess-productList-VegPic">
          {/* <img src={ChickenRice} alt="Background" />; */}
        </div>
        <div className="jess-menuList ">
          <AddFavorite />
          <h1 className="jess-tittle">在地農作蔬菜箱</h1>
          <p className="jess-text20Green mt-2">11月盛產季節限定</p>
          <p className="jess-contentVeg">
            在地特具有產地證明。
            蔬菜箱內含5~6種當季蔬果，100%為台灣在地蔬菜，保證5台斤以上
          </p>
          <p className="jess-text20GreenTc">
            ・出貨日期： <span className="jess-text-15Gray">預計 4 天到貨</span>
          </p>
          <div className="row mt-3 ">
            <div className="col-2">
              <button className="jess-calendar active">11/21 星期六</button>
            </div>
            <div className="col-2">
              <button className="jess-calendar">11/22 星期日</button>
            </div>
            <div className="col-2">
              <button className="jess-calendar">11/22 星期日</button>
            </div>
            <div className="col-2">
              <button className="jess-calendar">11/22 星期日</button>
            </div>
            <div className="col-2">
              <button className="jess-calendar">11/22 星期日</button>
            </div>
          </div>
          <p className="jess-text20GreenTc mt-3">・尺寸</p>
          <div className="row mt-3 ">
            <div className="col-2">
              <button className="jess-size active">S</button>
            </div>
            <div className="col-2">
              <button className="jess-size">M</button>
            </div>
            <div className="col-2">
              <button className="jess-size">L</button>
            </div>
          </div>
          <hr />
          <div className="jess-productPrice">
            <p className="jess-salePrice">$350</p>
            <p className="jess-saleTotal">剩餘2箱</p>
          </div>
          <hr />
          <div className=" mt-5 d-flex justify-content-center">
            <Counter />
          </div>
          <div className=" mt-5 d-flex justify-content-center">
            <AddCart />
          </div>
        </div>
      </div>
    </>
  );
}

export default JessVegHeader;
