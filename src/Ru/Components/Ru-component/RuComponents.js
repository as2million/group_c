import React from "react";
import "Ru/Components/Ru-component/Style.scss";
import { Container, Col, Row } from "react-bootstrap";
import RuShowWidth from "Ru/Components/Ru-ShowWidth/RuShowWidth";
import star from "Ru/Components/Ru-component/Images/star.svg";
import cart from "Ru/Components/Ru-component/Images/cart.svg";
function RuComponents() {
  return (
    <>
      <div style={{ height: "135px", backgroundColor: "#FF5151" }}>
        我是navbar
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
            <section className="item-img"></section>
            <section className="item-info-warp">
              <h2>慢煮嫩雞胸-蒜味香草</h2>
              <section className="star-warp">
                <img className="star" src={star} />
                <img className="star" src={star} />
                <img className="star" src={star} />
                <img className="star" src={star} />
                <img className="star" src={star} />
                <p className="num commentNum">1180則評論</p>
                <p className="num buyNum">234已購買</p>
                <h3>$130</h3>
              </section>
              <button>
                <img className="cart" src={cart} />
              </button>
            </section>
            <section className="item-button-warp"></section>
          </div>
          <div className="ru-item ru-item1">
            <section className="item-img"></section>
            <section className="item-info-warp">
              <h2>慢煮嫩雞胸-蒜味香草</h2>
              <section className="star-warp">
                <img className="star" src={star} />
                <img className="star" src={star} />
                <img className="star" src={star} />
                <img className="star" src={star} />
                <img className="star" src={star} />
                <p className="num commentNum">1180則評論</p>
                <p className="num buyNum">234已購買</p>
                <h3>$130</h3>
              </section>
              <button>
                <img className="cart" src={cart} />
              </button>
            </section>
            <section className="item-button-warp"></section>
          </div>
          <div className="ru-item ru-item1">
            <section className="item-img"></section>
            <section className="item-info-warp">
              <h2>慢煮嫩雞胸-蒜味香草</h2>
              <section className="star-warp">
                <img className="star" src={star} />
                <img className="star" src={star} />
                <img className="star" src={star} />
                <img className="star" src={star} />
                <img className="star" src={star} />
                <p className="num commentNum">1180則評論</p>
                <p className="num buyNum">234已購買</p>
                <h3>$130</h3>
              </section>
              <button>
                <img className="cart" src={cart} />
              </button>
            </section>
            <section className="item-button-warp"></section>
          </div>
        </div>
      </div>

      <div style={{ height: "222px", backgroundColor: "#FF5151" }}>
        我是footer
      </div>
    </>
  );
}

export default RuComponents;
