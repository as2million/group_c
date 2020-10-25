import React from "react";
import "./AddCart.scss";
import { TimelineMax, TimelineLite } from "gsap"; // npm install gsap react-gsap 安裝 tween套件
import cart from "./Images/cart.svg";
function AddCart(props) {
  // target這個變數放navbar購物車的class名稱
  const { target } = props;
  const addToCart = (e) => {
    const $addBtn = document.querySelector(".addCart-btn");
    const $target = document.querySelector(target);
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
    const $currentEl = document.querySelector(".addCart-btn");
    const $currentElParent = document.querySelector(".addCart-btn-warp");
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

  return (
    <>
      <div className="addCart-btn-warp">
        <button className="addCart-btn addCart-btn-n" onClick={addToCart}>
          <img className="addCart-cart addCart-cart-n" src={cart} />
        </button>
      </div>
    </>
  );
}

export default AddCart;
