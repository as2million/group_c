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
  const [itemWarp10, setItemWarp10] = useState(false)
  const [itemWarp11, setItemWarp11] = useState(false)
  const [itemWarp12, setItemWarp12] = useState(false)
  const [isShowNothing, setIsShowNothing] = useState(false)
  // 後端資料
  const [data, setData] = useState('')

  // 向後端請求資料
  useEffect(() => {
    fetch('http://localhost:5000/product/bento') // 非同步
      .then(function (response) {
        return response.json()
      })
      .then(function (myJson) {
        // console.log(myJson)
        const copyJson = [...myJson]
        setData(copyJson)
      })
  }, [])

  // 搜尋功能 s
  useEffect(() => {
    if (!data) {
      return
    }
    let title1 = data[0].productname
    let title2 =data[1].productname
    let title3 = data[2].productname
    let title4 = data[3].productname
    let title5 = data[4].productname
    let title6 = data[5].productname
    let title7 = data[6].productname
    let title8 = data[7].productname
    let title9 = data[8].productname
    let title10 = data[9].productname
    let title11 = data[10].productname
    let title12 = data[11].productname
    const $containerA = document.querySelector('.ru-itemWarp')

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
    setItemWarp10(true)
    setItemWarp11(true)
    setItemWarp12(true)
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
    if (title10.indexOf(searchInput) == -1) {
      setItemWarp10(false)
    }
    if (title11.indexOf(searchInput) == -1) {
      setItemWarp11(false)
    }
    if (title12.indexOf(searchInput) == -1) {
      setItemWarp12(false)
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
      title9.indexOf(searchInput) == -1 &&
      title10.indexOf(searchInput) == -1 &&
      title11.indexOf(searchInput) == -1 &&
      title12.indexOf(searchInput) == -1
    ) {
      setIsShowNothing(true)
    }
    return () => {}
  }, [searchInput, data]) // 如果這邊沒有設定state, 就只會在掛載時執行一次 / 如果有, 在每次state變動時都會執行一次.
  // 搜尋功能 e
  if (!data) {
    return <></>
  }
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
                title={data[0].productname}
                comment={'1180'}
                buy={'234'}
                price={data[0].price}
                id={'ru-addCart-btn-1'}
                parentId={'ru-addCart-btn-warp-1'}
                imgId={data[0].img_id}
                handleAddCartNumber={handleAddCartNumber}
                currentUser={currentUser}
              />
            )}
            {itemWarp2 && (
              <RuCard
                title={data[1].productname}
                comment={'1180'}
                buy={'234'}
                price={data[1].price}
                id={'ru-addCart-btn-2'}
                parentId={'ru-addCart-btn-warp-2'}
                imgId={data[1].img_id}
                handleAddCartNumber={handleAddCartNumber}
                currentUser={currentUser}
              />
            )}
            {itemWarp3 && (
              <RuCard
                title={data[2].productname}
                comment={'1180'}
                buy={'234'}
                price={data[2].price}
                id={'ru-addCart-btn-3'}
                parentId={'ru-addCart-btn-warp-3'}
                imgId={data[2].img_id}
                handleAddCartNumber={handleAddCartNumber}
                currentUser={currentUser}
              />
            )}

            {itemWarp4 && (
              <RuCard
                title={data[3].productname}
                comment={'1180'}
                buy={'234'}
                price={data[3].price}
                id={'ru-addCart-btn-4'}
                parentId={'ru-addCart-btn-warp-4'}
                imgId={data[3].img_id}
                handleAddCartNumber={handleAddCartNumber}
                currentUser={currentUser}
              />
            )}
            {itemWarp5 && (
              <RuCard
                title={data[4].productname}
                comment={'1180'}
                buy={'234'}
                price={data[4].price}
                id={'ru-addCart-btn-5'}
                parentId={'ru-addCart-btn-warp-5'}
                imgId={data[4].img_id}
                handleAddCartNumber={handleAddCartNumber}
                currentUser={currentUser}
              />
            )}
            {itemWarp6 && (
              <RuCard
                title={data[5].productname}
                comment={'1180'}
                buy={'234'}
                price={data[5].price}
                id={'ru-addCart-btn-6'}
                parentId={'ru-addCart-btn-warp-6'}
                imgId={data[5].img_id}
                handleAddCartNumber={handleAddCartNumber}
                currentUser={currentUser}
              />
            )}

            {itemWarp7 && (
              <RuCard
                title={data[6].productname}
                comment={'1180'}
                buy={'234'}
                price={data[6].price}
                id={'ru-addCart-btn-7'}
                parentId={'ru-addCart-btn-warp-7'}
                imgId={data[6].img_id}
                handleAddCartNumber={handleAddCartNumber}
                currentUser={currentUser}
              />
            )}
            {itemWarp8 && (
              <RuCard
                title={data[7].productname}
                comment={'1180'}
                buy={'234'}
                price={data[7].price}
                id={'ru-addCart-btn-8'}
                parentId={'ru-addCart-btn-warp-8'}
                imgId={data[7].img_id}
                handleAddCartNumber={handleAddCartNumber}
                currentUser={currentUser}
              />
            )}
            {itemWarp9 && (
              <RuCard
                title={data[8].productname}
                comment={'1180'}
                buy={'234'}
                price={data[8].price}
                id={'ru-addCart-btn-9'}
                parentId={'ru-addCart-btn-warp-9'}
                imgId={data[8].img_id}
                handleAddCartNumber={handleAddCartNumber}
                currentUser={currentUser}
              />
            )}
             {itemWarp10 && (
              <RuCard
                title={data[9].productname}
                comment={'1180'}
                buy={'234'}
                price={data[9].price}
                id={'ru-addCart-btn-10'}
                parentId={'ru-addCart-btn-warp-10'}
                imgId={data[9].img_id}
                handleAddCartNumber={handleAddCartNumber}
                currentUser={currentUser}
              />
            )}
             {itemWarp11 && (
              <RuCard
                title={data[10].productname}
                comment={'1180'}
                buy={'234'}
                price={data[10].price}
                id={'ru-addCart-btn-11'}
                parentId={'ru-addCart-btn-warp-11'}
                imgId={data[10].img_id}
                handleAddCartNumber={handleAddCartNumber}
                currentUser={currentUser}
              />
            )}
             {itemWarp12 && (
              <RuCard
                title={data[11].productname}
                comment={'1180'}
                buy={'234'}
                price={data[11].price}
                id={'ru-addCart-btn-12'}
                parentId={'ru-addCart-btn-warp-12'}
                imgId={data[11].img_id}
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
              id={'ru-addCart-btn-1'}
              parentId={'ru-addCart-btn-warp-1'}
              imgId={'ru-card-img-1'}
            />
            <RuCard
              title={'慢煮嫩雞胸-中歐香料'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'ru-addCart-btn-2'}
              parentId={'ru-addCart-btn-warp-2'}
              imgId={'ru-card-img-2'}
              cardMargin={'ru-card-margin'}
            />
          </div>

          <div className="ru-itemWarp ru-itemWarp2">
            <RuCard
              title={'醬烤厚切1983黑豚'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'ru-addCart-btn-3'}
              parentId={'ru-addCart-btn-warp-3'}
              imgId={'ru-card-img-3'}
            />
            <RuCard
              title={'熱帶火烤萊姆蝦'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'ru-addCart-btn-4'}
              parentId={'ru-addCart-btn-warp-4'}
              imgId={'ru-card-img-4'}
            />
          </div>

          <div className="ru-itemWarp ru-itemWarp3">
            <RuCard
              title={'麴塩五香松阪豬'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'ru-addCart-btn-5'}
              parentId={'ru-addCart-btn-warp-5'}
              imgId={'ru-card-img-5'}
              cardMargin={'ru-card-margin'}
            />
            <RuCard
              title={'美式熟成烤牛肋條'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'ru-addCart-btn-6'}
              parentId={'ru-addCart-btn-warp-6'}
              imgId={'ru-card-img-6'}
            />
          </div>
          <div className="ru-itemWarp ru-itemWarp4">
            <RuCard
              title={'頂級熟成菲力牛排'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'ru-addCart-btn-7'}
              parentId={'ru-addCart-btn-warp-7'}
              imgId={'ru-card-img-7'}
            />
            <RuCard
              title={'炙燒干貝'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'ru-addCart-btn-8'}
              parentId={'ru-addCart-btn-warp-8'}
              imgId={'ru-card-img-8'}
              cardMargin={'ru-card-margin'}
            />
          </div>
          <div className="ru-itemWarp ru-itemWarp5">
            <RuCard
              title={'會議雙拼組合'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'ru-addCart-btn-9'}
              parentId={'ru-addCart-btn-warp-9'}
              imgId={'ru-card-img-9'}
            />
            <RuCard
              title={'這是用於排版的'}
              comment={'xxxx'}
              buy={'xxx'}
              price={'$XXX'}
              id={'ru-'}
              parentId={'ru-'}
              imgId={'ru-card-img-1'}
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
              id={'ru-addCart-btn-1'}
              parentId={'ru-addCart-btn-warp-1'}
              imgId={'ru-card-img-1'}
            />
          </div>

          <div className="ru-itemWarp ru-itemWarp2">
            <RuCard
              title={'慢煮嫩雞胸-中歐香料'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'ru-addCart-btn-2'}
              parentId={'ru-addCart-btn-warp-2'}
              imgId={'ru-card-img-2'}
              cardMargin={'ru-card-margin'}
            />
          </div>

          <div className="ru-itemWarp ru-itemWarp3">
            <RuCard
              title={'醬烤厚切1983黑豚'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'ru-addCart-btn-3'}
              parentId={'ru-addCart-btn-warp-3'}
              imgId={'ru-card-img-3'}
            />
          </div>
          <div className="ru-itemWarp ru-itemWarp4">
            <RuCard
              title={'熱帶火烤萊姆蝦'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'ru-addCart-btn-4'}
              parentId={'ru-addCart-btn-warp-4'}
              imgId={'ru-card-img-4'}
            />
          </div>
          <div className="ru-itemWarp ru-itemWarp5">
            <RuCard
              title={'麴塩五香松阪豬'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'ru-addCart-btn-5'}
              parentId={'ru-addCart-btn-warp-5'}
              imgId={'ru-card-img-5'}
              cardMargin={'ru-card-margin'}
            />
          </div>
          <div className="ru-itemWarp ru-itemWarp6">
            <RuCard
              title={'美式熟成烤牛肋條'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'ru-addCart-btn-6'}
              parentId={'ru-addCart-btn-warp-6'}
              imgId={'ru-card-img-6'}
            />
          </div>
          <div className="ru-itemWarp ru-itemWarp7">
            <RuCard
              title={'頂級熟成菲力牛排'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'ru-addCart-btn-7'}
              parentId={'ru-addCart-btn-warp-7'}
              imgId={'ru-card-img-7'}
            />
          </div>
          <div className="ru-itemWarp ru-itemWarp8">
            <RuCard
              title={'炙燒干貝'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'ru-addCart-btn-8'}
              parentId={'ru-addCart-btn-warp-8'}
              imgId={'ru-card-img-8'}
              cardMargin={'ru-card-margin'}
            />
          </div>
          <div className="ru-itemWarp ru-itemWarp9">
            <RuCard
              title={'會議雙拼組合'}
              comment={'1180'}
              buy={'234'}
              price={'$130'}
              id={'ru-addCart-btn-9'}
              parentId={'ru-addCart-btn-warp-9'}
              imgId={'ru-card-img-9'}
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
