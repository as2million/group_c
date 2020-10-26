import React from "react";
import "./Card.scss";
import star from "./Images/star.svg";
import AddCart from "Share/Components/AddCart/AddCart";
import AddFavorite from "Share/Components/AddFavorite/AddFavorite";
function Card(props) {
  // title 品名
  // comment 有幾則評論
  // buy 有多少人買
  // price 價格
  // id 不同元件id => addCart-btn-n n為自訂數
  // parentId 不同元件父母id => addCart-btn-warp-n n為自訂數
  // imgId 產品圖片 => card-img-n n為1~9
  const { title, comment, buy, price, id, parentId, imgId } = props;

  return (
    <>
      <div className="card-container">
        {/* item圖片s */}
        <section className="card-img-warp">
          <a href="" className="card-link">
            <img className="card-img" id={imgId}></img>
          </a>
          <div className="card-abs">
            <AddFavorite />
          </div>
        </section>
        {/* item圖片e */}
        {/* item資訊s */}
        <section className="card-info-warp">
          <div className="card-hr">
            <div className="card-info">
              <h2>{title}</h2>
              <div className="card-star-warp">
                <img className="card-star" src={star} />
                <img className="card-star" src={star} />
                <img className="card-star" src={star} />
                <img className="card-star" src={star} />
                <img className="card-star" src={star} />
              </div>
              <span>
                <p className="card-num card-commentNum">{comment} 則評論</p>
                <p className="card-num card-buyNum">{buy} 已購買</p>
              </span>
              <h3>{price}</h3>
            </div>
          </div>
        </section>
        {/* item資訊e */}
        {/* 加入購物車按鈕s */}
        <section className="card-addCartWarp">
          <AddCart target={"target"} id={id} parentId={parentId} />
        </section>
        {/* 加入購物車按鈕e */}
      </div>
    </>
  );
}

export default Card;
