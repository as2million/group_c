import React, { useState } from "react";
import "Ru/Components/Ru-component/Style.scss";
import { Container, Col, Row } from "react-bootstrap";
import RuShowWidth from "Ru/Components/Ru-ShowWidth/RuShowWidth";
import star from "Ru/Components/Ru-component/Images/star.svg";
import cart from "Ru/Components/Ru-component/Images/cart.svg";
function RuComponents() {
  // const [state, setstate] = useState(initialState);
  const addToCart = (e) => {
    console.log("按鈕座標", e.clientX, e.clientY);
    let $cart = document.querySelector(".target");
    console.log(
      "目標",
      $cart,
      "X座標: ",
      $cart.offsetLeft,
      "Y座標: ",
      $cart.offsetTop
    );
    const top = e.clientX;
    const letf = e.clientY;
    const offsetTop = $cart.offsetTop + "px";
    const offsetLeft = $cart.offsetLeft + "px";

    const newEl = document.createElement("div");
    const newContent = document.createTextNode("Hi there and greetings!");
    newEl.appendChild(newContent);
    newEl.setAttribute(
      "style",
      `position:absolute; top: ${top}; left:${letf}, z-index:100`
    );
    console.log(newEl);

    const $currentEl = document.querySelector(".ru-addBtn");
    const $currentElParent = document.querySelector(".ru-item-btn-warp");
    $currentElParent.insertBefore(newEl, $currentEl.nextSibling); // 已存在元素的父層.insertBefoe('新元素', 已存在元素) => 在已存在元素之前加入新元素
    setInterval(() => {
      top += 1;
    }, 500);
    console.log(newEl.getAttribute("style"));
  };
  return (
    <>
      <div style={{ height: "135px", backgroundColor: "#FF5151" }}>
        我是navbar
        <img
          className="ru-cart target"
          style={{ backgroundColor: "white" }}
          src={cart}
        />
      </div>
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
