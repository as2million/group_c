import React, { useState, useEffect } from 'react'
import 'Ru/Components/RuCards/Style.scss'
import RuNothing from 'Ru/Components/RuNothing/RuNothing'
import RuCard from 'Ru/Components/RuCard/RuCard'

// 引用圖片
import background from './Images/background.png'

function RuBento(props) {
  const { searchInput, handleAddCartNumber, currentUser } = props

  const [itemWarp1, setItemWarp1] = useState(false)
  const [itemWarp2, setItemWarp2] = useState(false)
  const [itemWarp3, setItemWarp3] = useState(false)
  const [itemWarp4, setItemWarp4] = useState(false)
  const [itemWarp5, setItemWarp5] = useState(false)
  const [itemWarp6, setItemWarp6] = useState(false)
  const [itemWarp7, setItemWarp7] = useState(false)
  const [itemWarp8, setItemWarp8] = useState(false)
  const [itemWarp9, setItemWarp9] = useState(false)
  const [isShowNothing, setIsShowNothing] = useState(false)
  // console.log(searchInput);

  let title1 = '慢煮嫩雞胸-蒜味香草'
  let title2 = '慢煮嫩雞胸-中歐香料'
  let title3 = '醬烤厚切1983黑豚'
  let title4 = '熱帶火烤萊姆蝦'
  let title5 = '麴塩五香松阪豬'
  let title6 = '美式熟成烤牛肋條'
  let title7 = '頂級熟成菲力牛排'
  let title8 = '炙燒干貝'
  let title9 = '會議雙拼組合'

  const $containerA = document.querySelector('.ru-itemWarp')

  // if (searchInput === '慢煮嫩雞胸-蒜味香草') {
  // setItemWarp1(true);
  // }

  // 搜尋功能 s
  useEffect(() => {
    // 第一次掛載DOM 與 每次state改變時 都會觸發
    console.log(searchInput)
    setItemWarp1(true)
    setItemWarp2(true)
    setItemWarp3(true)
    setItemWarp4(true)
    setItemWarp5(true)
    setItemWarp6(true)
    setItemWarp7(true)
    setItemWarp8(true)
    setItemWarp9(true)
    setIsShowNothing(false)

    if (title1.indexOf(searchInput) == -1) {
      setItemWarp1(false)
    }
    if (title2.indexOf(searchInput) == -1) {
      setItemWarp2(false)
    }
    if (title3.indexOf(searchInput) == -1) {
      setItemWarp3(false)
    }
    if (title4.indexOf(searchInput) == -1) {
      setItemWarp4(false)
    }
    if (title5.indexOf(searchInput) == -1) {
      setItemWarp5(false)
    }
    if (title6.indexOf(searchInput) == -1) {
      setItemWarp6(false)
    }
    if (title7.indexOf(searchInput) == -1) {
      setItemWarp7(false)
    }
    if (title8.indexOf(searchInput) == -1) {
      setItemWarp8(false)
    }
    if (title9.indexOf(searchInput) == -1) {
      setItemWarp9(false)
    }
    if (
      title1.indexOf(searchInput) == -1 &&
      title2.indexOf(searchInput) == -1 &&
      title3.indexOf(searchInput) == -1 &&
      title4.indexOf(searchInput) == -1 &&
      title5.indexOf(searchInput) == -1 &&
      title6.indexOf(searchInput) == -1 &&
      title7.indexOf(searchInput) == -1 &&
      title8.indexOf(searchInput) == -1 &&
      title9.indexOf(searchInput) == -1
    ) {
      setIsShowNothing(true)
    }
    return () => {}
  }, [searchInput]) // 如果這邊沒有設定state, 就只會在掛載時執行一次 / 如果有, 在每次state變動時都會執行一次.
  // 搜尋功能 e

  return (
    <>
      {/* 商品區 - 網頁版 s */}
      <div className="ru-item-containerA">
        {/* 卡片區 s */}
        <div className="ru-card-warp">
          <div className="ru-itemWarp">
            {isShowNothing && <RuNothing />}
            {itemWarp1 && (
              <RuCard
                title={'慢煮嫩雞胸-蒜味香草'}
                comment={'1180'}
                buy={'234'}
                price={'$130'}
                id={'addCart-btn-1'}
                parentId={'addCart-btn-warp-1'}
                imgId={'card-img-1'}
                handleAddCartNumber={handleAddCartNumber}
                currentUser={currentUser}
              />
            )}
            {itemWarp2 && (
              <RuCard
                title={'慢煮嫩雞胸-中歐香料'}
                comment={'1180'}
                buy={'234'}
                price={'$130'}
                id={'addCart-btn-2'}
                parentId={'addCart-btn-warp-2'}
                imgId={'card-img-2'}
                handleAddCartNumber={handleAddCartNumber}
                currentUser={currentUser}
              />
            )}
            {itemWarp3 && (
              <RuCard
                title={'醬烤厚切1983黑豚'}
                comment={'1180'}
                buy={'234'}
                price={'$130'}
                id={'addCart-btn-3'}
                parentId={'addCart-btn-warp-3'}
                imgId={'card-img-3'}
                handleAddCartNumber={handleAddCartNumber}
                currentUser={currentUser}
              />
            )}

            {itemWarp4 && (
              <RuCard
                title={'熱帶火烤萊姆蝦'}
                comment={'1180'}
                buy={'234'}
                price={'$130'}
                id={'addCart-btn-4'}
                parentId={'addCart-btn-warp-4'}
                imgId={'card-img-4'}
                handleAddCartNumber={handleAddCartNumber}
                currentUser={currentUser}
              />
            )}
            {itemWarp5 && (
              <RuCard
                title={'麴塩五香松阪豬'}
                comment={'1180'}
                buy={'234'}
                price={'$130'}
                id={'addCart-btn-5'}
                parentId={'addCart-btn-warp-5'}
                imgId={'card-img-5'}
                handleAddCartNumber={handleAddCartNumber}
                currentUser={currentUser}
              />
            )}
            {itemWarp6 && (
              <RuCard
                title={'美式熟成烤牛肋條'}
                comment={'1180'}
                buy={'234'}
                price={'$130'}
                id={'addCart-btn-6'}
                parentId={'addCart-btn-warp-6'}
                imgId={'card-img-6'}
                handleAddCartNumber={handleAddCartNumber}
                currentUser={currentUser}
              />
            )}

            {itemWarp7 && (
              <RuCard
                title={'頂級熟成菲力牛排'}
                comment={'1180'}
                buy={'234'}
                price={'$130'}
                id={'addCart-btn-7'}
                parentId={'addCart-btn-warp-7'}
                imgId={'card-img-7'}
                handleAddCartNumber={handleAddCartNumber}
                currentUser={currentUser}
              />
            )}
            {itemWarp8 && (
              <RuCard
                title={'炙燒干貝'}
                comment={'1180'}
                buy={'234'}
                price={'$130'}
                id={'addCart-btn-8'}
                parentId={'addCart-btn-warp-8'}
                imgId={'card-img-8'}
                handleAddCartNumber={handleAddCartNumber}
                currentUser={currentUser}
              />
            )}
            {itemWarp9 && (
              <RuCard
                title={'會議雙拼組合'}
                comment={'1180'}
                buy={'234'}
                price={'$130'}
                id={'addCart-btn-9'}
                parentId={'addCart-btn-warp-9'}
                imgId={'card-img-9'}
                handleAddCartNumber={handleAddCartNumber}
                currentUser={currentUser}
              />
            )}
          </div>
        </div>
        {/* 卡片區 e */}
        {/* 背景米圖 s */}
        <img src={background}></img>
        {/* 背景米圖 e */}
      </div>
      {/* 商品區 - 網頁版 e */}
      {/* 商品區 - ipad版 s */}
      <div className="ru-item-containerB">
        {/* 卡片區 s */}
        <div className="ru-card-warp">
          <div className="ru-itemWarp ru-itemWarp1">
            <RuCard
              title={'慢煮嫩雞胸-蒜味香草'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'addCart-btn-1'}
              parentId={'addCart-btn-warp-1'}
              imgId={'card-img-1'}
            />
            <RuCard
              title={'慢煮嫩雞胸-中歐香料'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'addCart-btn-2'}
              parentId={'addCart-btn-warp-2'}
              imgId={'card-img-2'}
              cardMargin={'card-margin'}
            />
          </div>

          <div className="ru-itemWarp ru-itemWarp2">
            <RuCard
              title={'醬烤厚切1983黑豚'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'addCart-btn-3'}
              parentId={'addCart-btn-warp-3'}
              imgId={'card-img-3'}
            />
            <RuCard
              title={'熱帶火烤萊姆蝦'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'addCart-btn-4'}
              parentId={'addCart-btn-warp-4'}
              imgId={'card-img-4'}
            />
          </div>

          <div className="ru-itemWarp ru-itemWarp3">
            <RuCard
              title={'麴塩五香松阪豬'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'addCart-btn-5'}
              parentId={'addCart-btn-warp-5'}
              imgId={'card-img-5'}
              cardMargin={'card-margin'}
            />
            <RuCard
              title={'美式熟成烤牛肋條'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'addCart-btn-6'}
              parentId={'addCart-btn-warp-6'}
              imgId={'card-img-6'}
            />
          </div>
          <div className="ru-itemWarp ru-itemWarp4">
            <RuCard
              title={'頂級熟成菲力牛排'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'addCart-btn-7'}
              parentId={'addCart-btn-warp-7'}
              imgId={'card-img-7'}
            />
            <RuCard
              title={'炙燒干貝'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'addCart-btn-8'}
              parentId={'addCart-btn-warp-8'}
              imgId={'card-img-8'}
              cardMargin={'card-margin'}
            />
          </div>
          <div className="ru-itemWarp ru-itemWarp5">
            <RuCard
              title={'會議雙拼組合'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'addCart-btn-9'}
              parentId={'addCart-btn-warp-9'}
              imgId={'card-img-9'}
            />
            <RuCard
              title={'這是用於排版的'}
              comment={'xxxx'}
              buy={'xxx'}
              price={'$XXX'}
              id={''}
              parentId={''}
              imgId={'card-img-1'}
            />
          </div>
        </div>
        {/* 卡片區 e */}
        {/* 背景米圖 s */}
        <img src={background}></img>
        {/* 背景米圖 e */}
      </div>
      {/* 商品區- ipad版e */}
      {/* 商品區 - 手機版 s */}
      <div className="ru-item-containerC">
        {/* 卡片區 s */}
        <div className="ru-card-warp">
          <div className="ru-itemWarp ru-itemWarp1">
            <RuCard
              title={'慢煮嫩雞胸-蒜味香草'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'addCart-btn-1'}
              parentId={'addCart-btn-warp-1'}
              imgId={'card-img-1'}
            />
          </div>

          <div className="ru-itemWarp ru-itemWarp2">
            <RuCard
              title={'慢煮嫩雞胸-中歐香料'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'addCart-btn-2'}
              parentId={'addCart-btn-warp-2'}
              imgId={'card-img-2'}
              cardMargin={'card-margin'}
            />
          </div>

          <div className="ru-itemWarp ru-itemWarp3">
            <RuCard
              title={'醬烤厚切1983黑豚'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'addCart-btn-3'}
              parentId={'addCart-btn-warp-3'}
              imgId={'card-img-3'}
            />
          </div>
          <div className="ru-itemWarp ru-itemWarp4">
            <RuCard
              title={'熱帶火烤萊姆蝦'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'addCart-btn-4'}
              parentId={'addCart-btn-warp-4'}
              imgId={'card-img-4'}
            />
          </div>
          <div className="ru-itemWarp ru-itemWarp5">
            <RuCard
              title={'麴塩五香松阪豬'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'addCart-btn-5'}
              parentId={'addCart-btn-warp-5'}
              imgId={'card-img-5'}
              cardMargin={'card-margin'}
            />
          </div>
          <div className="ru-itemWarp ru-itemWarp6">
            <RuCard
              title={'美式熟成烤牛肋條'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'addCart-btn-6'}
              parentId={'addCart-btn-warp-6'}
              imgId={'card-img-6'}
            />
          </div>
          <div className="ru-itemWarp ru-itemWarp7">
            <RuCard
              title={'頂級熟成菲力牛排'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'addCart-btn-7'}
              parentId={'addCart-btn-warp-7'}
              imgId={'card-img-7'}
            />
          </div>
          <div className="ru-itemWarp ru-itemWarp8">
            <RuCard
              title={'炙燒干貝'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'addCart-btn-8'}
              parentId={'addCart-btn-warp-8'}
              imgId={'card-img-8'}
              cardMargin={'card-margin'}
            />
          </div>
          <div className="ru-itemWarp ru-itemWarp9">
            <RuCard
              title={'會議雙拼組合'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'addCart-btn-9'}
              parentId={'addCart-btn-warp-9'}
              imgId={'card-img-9'}
            />
          </div>
        </div>
        {/* 卡片區 e */}
        {/* 背景米圖 s */}
        <img src={background}></img>
        {/* 背景米圖 e */}
      </div>
      {/* 商品區- 手機版e */}
    </>
  )
}

export default RuBento
