import React from "react";
import "Ru/Components/Ru-component/Style.scss";
import RuShowWidth from "Ru/Components/Ru-ShowWidth/RuShowWidth";
import { Container, Col, Row } from "react-bootstrap";
function RuComponents() {
  return (
    <>
      {/* 如果元件有定義key或ref, 它們並不會向下傳資料, 它們不屬於props */}
      <RuShowWidth />
      <div className="ru-mainImg">
        <p>享受美食 不需要理由</p>
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
        <Container className="ru-noMargin ru-containerB">
          <Row className="ru-noPadding ru-row">
            <Col className="ru-noPadding ru-col ru-col1">
              <div className="ru-itemWarp ru-itemWarp1">
                <div className="ru-item ru-item1">這裡是商品1</div>
              </div>
            </Col>
            <Col className="ru-noPadding ru-col ru-col2">
              <div className="ru-itemWarp ru-itemWarp2">
                <div className="ru-item ru-item2">這裡是商品2</div>
              </div>
            </Col>
            <Col className="ru-noPadding ru-col ru-col3">
              <div className="ru-itemWarp ru-itemWarp3">
                <div className="ru-item ru-item3">這裡是商品3</div>
              </div>
            </Col>
          </Row>
          <Row className="ru-noPadding ru-row">
            <Col className="ru-noPadding ru-col ru-col1">
              <div className="ru-itemWarp ru-itemWarp1">
                <div className="ru-item ru-item1">這裡是商品1</div>
              </div>
            </Col>
            <Col className="ru-noPadding ru-col ru-col2">
              <div className="ru-itemWarp ru-itemWarp2">
                <div className="ru-item ru-item2">這裡是商品2</div>
              </div>
            </Col>
            <Col className="ru-noPadding ru-col ru-col3">
              <div className="ru-itemWarp ru-itemWarp3">
                <div className="ru-item ru-item3">這裡是商品3</div>
              </div>
            </Col>
          </Row>
          <Row className="ru-noPadding ru-row">
            <Col className="ru-noPadding ru-col ru-col1">
              <div className="ru-itemWarp ru-itemWarp1">
                <div className="ru-item ru-item1">這裡是商品1</div>
              </div>
            </Col>
            <Col className="ru-noPadding ru-col ru-col2">
              <div className="ru-itemWarp ru-itemWarp2">
                <div className="ru-item ru-item2">這裡是商品2</div>
              </div>
            </Col>
            <Col className="ru-noPadding ru-col ru-col3">
              <div className="ru-itemWarp ru-itemWarp3">
                <div className="ru-item ru-item3">這裡是商品3</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default RuComponents;
