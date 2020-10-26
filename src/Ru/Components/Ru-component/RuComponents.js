import React, { useState } from "react";
import "Ru/Components/Ru-component/Style.scss";
// import { Container, Col, Row } from "react-bootstrap";
// // npm install gsap react-gsap => 安裝gsap套件
// import { TimelineMax, TimelineLite } from "gsap";
// import RuShowWidth from "Ru/Components/Ru-ShowWidth/RuShowWidth";
// import star from "Ru/Components/Ru-component/Images/star.svg";
// import cart from "Ru/Components/Ru-component/Images/cart.svg";
import Button from "Share/Components/Button/Button";
import Card from "Share/Components/Card/Card";

function RuComponents() {
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
          id="target"
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "white",
            position: "absolute",
            top: "50%",
            left: "90%",
          }}
          // src={cart}
        />
      </div>
      <div style={{ height: "135px", backgroundColor: "#FF5151" }}></div>
      {/* 如果元件有定義key或ref, 它們並不會向下傳資料, 它們不屬於props */}

      {/* <RuShowWidth /> */}
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
            <Button text={"低GI便當"} className={"button-btn"} />
            <Button text={"鮮蔬沙拉"} className={"button-btn"} />
            <Button text={"客製化便當"} className={"button-btn"} />
            <Button text={"蔬菜箱"} className={"button-btn-g"} />
          </section>
        </div>

        <div className="itemWarp itemWarp1">
          <Card
            title={"慢煮嫩雞胸-蒜味香草"}
            comment={"1180"}
            buy={"234"}
            price={"$130"}
            id={"addCart-btn-1"}
            parentId={"addCart-btn-warp-1"}
          />
          <Card
            title={"慢煮嫩雞胸-蒜味香草"}
            comment={"1180"}
            buy={"234"}
            price={"$130"}
            id={"addCart-btn-2"}
            parentId={"addCart-btn-warp-2"}
          />
          <Card
            title={"慢煮嫩雞胸-蒜味香草"}
            comment={"1180"}
            buy={"234"}
            price={"$130"}
            id={"addCart-btn-3"}
            parentId={"addCart-btn-warp-3"}
          />
        </div>

        <div className="itemWarp itemWarp2">
          <Card
            title={"慢煮嫩雞胸-蒜味香草"}
            comment={"1180"}
            buy={"234"}
            price={"$130"}
            id={"addCart-btn-4"}
            parentId={"addCart-btn-warp-4"}
          />
          <Card
            title={"慢煮嫩雞胸-蒜味香草"}
            comment={"1180"}
            buy={"234"}
            price={"$130"}
            id={"addCart-btn-5"}
            parentId={"addCart-btn-warp-5"}
          />
          <Card
            title={"慢煮嫩雞胸-蒜味香草"}
            comment={"1180"}
            buy={"234"}
            price={"$130"}
            id={"addCart-btn-6"}
            parentId={"addCart-btn-warp-6"}
          />
        </div>

        <div className="itemWarp itemWarp3">
          <Card
            title={"慢煮嫩雞胸-蒜味香草"}
            comment={"1180"}
            buy={"234"}
            price={"$130"}
            id={"addCart-btn-7"}
            parentId={"addCart-btn-warp-7"}
          />
          <Card
            title={"慢煮嫩雞胸-蒜味香草"}
            comment={"1180"}
            buy={"234"}
            price={"$130"}
            id={"addCart-btn-8"}
            parentId={"addCart-btn-warp-8"}
          />
          <Card
            title={"慢煮嫩雞胸-蒜味香草"}
            comment={"1180"}
            buy={"234"}
            price={"$130"}
            id={"addCart-btn-9"}
            parentId={"addCart-btn-warp-9"}
          />
        </div>
      </div>

      <div style={{ height: "222px", backgroundColor: "#FF5151" }}>
        我是footer
      </div>
    </>
  );
}

export default RuComponents;
