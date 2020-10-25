import React from "react";
// import RuApp from "./Ru/RuApp";
import Button from "Share/Components/Button/Button";
import AddFavorite from "Share/Components/AddFavorite/AddFavorite";
import AddCart from "Share/Components/AddCart/AddCart";
import Card from "Share/Components/Card/Card";
import "./App.css";

function AppTest() {
  return (
    <>
      {/* <RuApp /> */}
      <Button text={"預設字樣"} />
      <AddFavorite />
      <div className="target" style={{ marginLeft: "1000px" }}>test-target</div>
      <AddCart target={".target"} />
      <Card title={'我是商品名稱'} comment={'NNNN'} buy={'KKK'} price={'$XXX'}/>
    </>
  );
}

export default AppTest;
