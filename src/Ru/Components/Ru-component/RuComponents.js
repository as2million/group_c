import React, { useState } from "react";
import "Ru/Components/Ru-component/Style.scss";
import { Container, Col, Row } from "react-bootstrap";
// npm install gsap react-gsap => 安裝gsap套件
import { TimelineMax, TimelineLite } from "gsap";
import RuShowWidth from "Ru/Components/Ru-ShowWidth/RuShowWidth";
import star from "Ru/Components/Ru-component/Images/star.svg";
import cart from "Ru/Components/Ru-component/Images/cart.svg";

function RuComponents() {
  // 飛入購物車邏輯
  const addToCart = (e) => {
    const $addBtn = document.querySelector(".ru-addBtn");
    const $target = document.querySelector(".target");
    // getBoundingClientRect() 取得元素相對於瀏覽器視窗的位置
    let addBtnX = $addBtn.getBoundingClientRect().left + 75; // +75(button寬度的一半) 才會在正中心
    let addBtnY = $addBtn.getBoundingClientRect().top + 22.5;
    let targetX = $target.offsetLeft + 15;
    let targetY = $target.offsetTop + 15;
    let distanceX = Math.abs(targetX - addBtnX);
    let distanceY = Math.abs(targetY - addBtnY);
    let finalX = addBtnX + distanceX;
    let finalY = targetY;
    console.log(
      "按鈕X座標",
      addBtnX,
      "按鈕Y座標",
      addBtnY,
      "目標X座標",
      targetX,
      "目標Y座標",
      targetY,
      "距離X",
      distanceX,
      "距離Y",
      distanceY,
      "最終距離X",
      finalX,
      "最終距離Y",
      finalY
    );

    const newEl = document.createElement("img");
    let url = require("./Images/littleQ.svg"); // require() => 在react內 img的src可以用這個函式引入
    newEl.setAttribute("src", url);
    // const newContent = document.createTextNode("Hi there and greetings!");
    // newEl.appendChild(newContent);
    newEl.setAttribute(
      "style",
      `width:30px; position: fixed; z-index:500; left:${addBtnX}; top: ${addBtnY}px; transform:translate(-50%,-50%);`
    );
    newEl.setAttribute("id", `obj`);
    const $currentEl = document.querySelector(".ru-addBtn");
    const $currentElParent = document.querySelector(".ru-item-btn-warp");
    $currentElParent.insertBefore(newEl, $currentEl.nextSibling); // 已存在元素的父層.insertBefoe('新元素', 已存在元素) => 在已存在元素之前加入新元素
    // 這邊加入nextSibling => 相當於將新元素加到已存在元素之後
    new TimelineLite({ onComplete: removeNewEl }).to("#obj", 1, {
      // onComplete: callback => 當當動畫結束時執行
      left: finalX,
      top: finalY,
      width: "10px",
    });
    function removeNewEl() {
      document.querySelector("#obj").remove();
    }
  };

  // JSX
  return (
    <>
      <div
        className="fix"
        style={{
          width: "100%",
          height: "135px",
          backgroundColor: "#FF5151",
          position: "fixed",
          zIndex: "300",
        }}
      >
        我是navbar
        <img
          className="ru-cart target"
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "white",
            position: "absolute",
            top: "50%",
            left: "90%",
          }}
          src={cart}
        />
      </div>
      <div style={{ height: "135px", backgroundColor: "#FF5151" }}></div>
      {/* 如果元件有定義key或ref, 它們並不會向下傳資料, 它們不屬於props */}

      <RuShowWidth />
      <div className="ru-mainImg">
        <h1>享受美食 不需要理由</h1>
      </div>
      <div className="ru-containerA">
        <div className="ru-optionWarp">
          <input
            type="text"
            className="ru-searchBar"
            placeholder="search"
          ></input>
          <section className="ru-buttonWarp">
            <button className="ru-button ru-button1">低GI便當</button>
            <button className="ru-button ru-button2">鮮蔬沙拉</button>
            <button className="ru-button ru-button3">客製化便當</button>
            <button className="ru-button ru-button4">蔬菜箱</button>
          </section>
        </div>

        <div className="itemWarp itemWarp1">
          <div className="ru-item ru-item1">
            {/* item圖片s */}
            <section className="item-img">
              <button className="favorite-btn"></button>
            </section>
            {/* item圖片e */}
            {/* item資訊s */}
            <section className="item-info-warp">
              <div className="item-info">
                <h2>慢煮嫩雞胸-蒜味香草</h2>

                <div className="star-warp">
                  <img className="star" src={star} />
                  <img className="star" src={star} />
                  <img className="star" src={star} />
                  <img className="star" src={star} />
                  <img className="star" src={star} />
                </div>

                <span>
                  <p className="num commentNum">1180 則評論</p>
                  <p className="num buyNum">234 已購買</p>
                </span>

                <h3>$130</h3>
              </div>
            </section>
            {/* item資訊e */}
            {/* item按鈕s */}
            <section className="ru-item-btn-warp">
              <button className="ru-addBtn" onClick={addToCart}>
                <img className="ru-cart" src={cart} />
              </button>
            </section>
            {/* item按鈕e */}
          </div>

          {/* 待修正 s */}
          <div className="ru-item ru-item1">
            {/* item圖片s */}
            <section className="item-img"></section>
            {/* item圖片e */}
            {/* item資訊s */}
            <section className="item-info-warp">
              <div className="item-info">
                <h2>慢煮嫩雞胸-蒜味香草</h2>

                <div className="star-warp">
                  <img className="star" src={star} />
                  <img className="star" src={star} />
                  <img className="star" src={star} />
                  <img className="star" src={star} />
                  <img className="star" src={star} />
                </div>

                <span>
                  <p className="num commentNum">1180 則評論</p>
                  <p className="num buyNum">234 已購買</p>
                </span>

                <h3>$130</h3>
              </div>
            </section>
            {/* item資訊e */}
            {/* item按鈕s */}
            <section className="ru-item-btn-warp">
              <button className="ru-addBtn">
                <img className="ru-cart" src={cart} />
              </button>
            </section>
            {/* item按鈕e */}
          </div>

          <div className="ru-item ru-item1">
            {/* item圖片s */}
            <section className="item-img"></section>
            {/* item圖片e */}
            {/* item資訊s */}
            <section className="item-info-warp">
              <div className="item-info">
                <h2>慢煮嫩雞胸-蒜味香草</h2>

                <div className="star-warp">
                  <img className="star" src={star} />
                  <img className="star" src={star} />
                  <img className="star" src={star} />
                  <img className="star" src={star} />
                  <img className="star" src={star} />
                </div>

                <span>
                  <p className="num commentNum">1180 則評論</p>
                  <p className="num buyNum">234 已購買</p>
                </span>

                <h3>$130</h3>
              </div>
            </section>
            {/* item資訊e */}
            {/* item按鈕s */}
            <section className="ru-item-btn-warp">
              <button className="ru-addBtn">
                <img className="ru-cart" src={cart} />
              </button>
            </section>
            {/* item按鈕e */}
          </div>

          {/* 待修正 e */}
        </div>
      </div>

      <div style={{ height: "222px", backgroundColor: "#FF5151" }}>
        我是footer
      </div>
    </>
  );
}

export default RuComponents;
