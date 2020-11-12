import React from 'react'
import './Style.scss'
import star from './Images/star.svg'
import starHalf from './Images/starHalf.svg'
import starFull from './Images/starFull.svg'
import RuAddCart from 'Ru/Components/RuAddCart/RuAddCart'
import RuAddFavorite from 'Ru/Components/RuAddFavorite/RuAddFavorite'
import { withRouter } from 'react-router'

function RuCard(props) {
  // title 品名
  // comment 有幾則評論
  // buy 有多少人買
  // price 價格
  // cardMargin 卡片margin => props傳入 card-margin
  // id 不同元件id => addCart-btn-n n為自訂數
  // parentId 不同元件父母id => addCart-btn-warp-n n為自訂數
  // imgId 產品圖片 => card-img-n n為1~9
  const {
    data,
    title,
    comment,
    buy,
    price,
    cardMargin,
    stars,
    id,
    proudctId,
    parentId,
    imgId,
    handleCartNumber,
  } = props

  // 每個卡片跳轉到指定的詳頁 邏輯
  function linkToDetail() {
    for (let i = 0; i < 21; i++) {
      switch (proudctId) {
        case data[i].sid:
          props.history.push(`/bento/${i}`)
          break
      }
    }
  }

  return (
    <>
      <div className="ru-card-container" id={cardMargin}>
        {/* item圖片s */}
        <section className="ru-card-img-warp">
          <a href="" className="ru-card-link" onClick={linkToDetail}>
            <img
              className="ru-card-img"
              style={{
                // "/" => 表示在public資料夾
                backgroundImage: `url("/productImages/Bento/${imgId}.jpg")`,
              }}
            ></img>
          </a>
          <div className="ru-card-abs">
            <RuAddFavorite />
          </div>
        </section>
        {/* item圖片e */}
        {/* item資訊s */}
        <section className="ru-card-info-warp">
          <div className="ru-card-none">
            {/* 取間隔用 s */}
            <h3>${price}</h3>
            {/* 取間隔用 e */}
          </div>
          <div className="ru-card-info">
            <h2>{title}</h2>
            <section>
              <div>
                {stars === 5 && (
                  <div className="ru-card-star-warp">
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                  </div>
                )}
                {stars === 4.5 && (
                  <div className="ru-card-star-warp">
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starHalf} />
                  </div>
                )}
                {stars === 4 && (
                  <div className="ru-card-star-warp">
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={star} />
                  </div>
                )}
                {stars === 3.5 && (
                  <div className="ru-card-star-warp">
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starHalf} />
                    <img className="ru-card-star" src={star} />
                  </div>
                )}
                {stars === 3 && (
                  <div className="ru-card-star-warp">
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={star} />
                    <img className="ru-card-star" src={star} />
                  </div>
                )}

                <span>
                  <p className="ru-card-num ru-card-commentNum">
                    {comment} 則評論
                  </p>
                  <p className="ru-card-num ru-card-buyNum">{buy} 已購買</p>
                </span>
              </div>
            </section>
          </div>
          <div className="ru-card-price">
            <h3>${price}</h3>
          </div>
        </section>
        {/* item資訊e */}
        {/* 加入購物車按鈕s */}
        <section className="ru-card-addCartWarp">
          <div className="ru-card-hr">
            <RuAddCart
              target={'target'}
              id={id}
              proudctId={proudctId}
              parentId={parentId}
              price={price}
              title={title}
              handleCartNumber={handleCartNumber} // localStorage函式
            />
          </div>
        </section>
        {/* 加入購物車按鈕e */}
      </div>
    </>
  )
}
export default withRouter(RuCard)
