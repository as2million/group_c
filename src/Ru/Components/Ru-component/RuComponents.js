import React, { useState } from 'react';
import RuShowWidth from 'Ru/Components/Ru-ShowWidth/RuShowWidth';
import 'Ru/Components/Ru-component/Style.scss';

// 引用共用元件
import Button from 'Share/Components/Button/Button';
import Card from 'Share/Components/Card/Card';
import SearchBar from 'Share/Components/Input/SearchBar';
// 引用圖片
import line from 'Ru/Components/Ru-component/Images/line.png';
import background from 'Ru/Components/Ru-component/Images/background.png';

function RuComponents() {

  const { searchInput, setSearchInput } = useState('')
  // JSX
  return (
    <>
      {/* <div
        className="fix"
        style={{
          width: '100%',
          height: '135px',
          backgroundColor: '#FF5151',
          position: 'fixed',
          zIndex: '300',
        }}
      >
        我是navbar
        <img
          className="ru-cart target"
          id="target"
          style={{
            width: '30px',
            height: '30px',
            backgroundColor: 'white',
            position: 'absolute',
            top: '50%',
            left: '90%',
          }}
          // src={cart}
        />
      </div> */}
      <div style={{ height: '100px', backgroundColor: '#FF5151' }}></div>
      <RuShowWidth />

      <div className="ru-mainImg-warp">
        <h1>享受美食 不需要理由</h1>
        <div className="ru-mainImg"></div>
      </div>

      <div className="ru-productList-container">
        <div className="ru-optionWarp">
          {/* 搜尋欄s */}
          <SearchBar/>
          {/* 搜尋欄e */}

          {/* 選項按鈕 s */}
          <section className="ru-buttonWarpA">
            <Button text={'低GI便當'} className={'button-btn'} />
            <Button text={'鮮蔬沙拉'} className={'button-btn'} />
            <Button text={'客製化便當'} className={'button-btn'} />
            <Button text={'蔬菜箱'} className={'button-btn-g'} />
          </section>

          <section className="ru-buttonWarpB">
          
            <div>
              <Button text={'低GI便當'} className={'button-btn'} />
              <Button text={'客製化便當'} className={'button-btn'} />
            </div>
            <div>
              <Button text={'鮮蔬沙拉'} className={'button-btn'} />
              <Button text={'蔬菜箱'} className={'button-btn-g'} />
            </div>
       
          </section>
          {/* 選項按鈕 e */}
        </div>

        {/* 分隔曲線 s*/}
        <div className="ru-line">
          <img src={line}></img>
        </div>
        {/* 分隔曲線 e*/}

        {/* 商品區 - 網頁版 / 手機板s */}
        <div className="ru-item-containerA">
          {/* 卡片區 s */}
          <div className="ru-card-warp">
            <div className="ru-itemWarp ru-itemWarp1">
              <Card
                title={'慢煮嫩雞胸-蒜味香草'}
                comment={'1180'}
                buy={'234'}
                price={'$130'}
                id={'addCart-btn-1'}
                parentId={'addCart-btn-warp-1'}
                imgId={'card-img-1'}
              />
              <Card
                title={'慢煮嫩雞胸-中歐香料'}
                comment={'1180'}
                buy={'234'}
                price={'$130'}
                id={'addCart-btn-2'}
                parentId={'addCart-btn-warp-2'}
                imgId={'card-img-2'}
                cardMargin={'card-margin'}
              />
              <Card
                title={'醬烤厚切1983黑豚'}
                comment={'1180'}
                buy={'234'}
                price={'$130'}
                id={'addCart-btn-3'}
                parentId={'addCart-btn-warp-3'}
                imgId={'card-img-3'}
              />
            </div>

            <div className="ru-itemWarp ru-itemWarp2">
              <Card
                title={'熱帶火烤萊姆蝦'}
                comment={'1180'}
                buy={'234'}
                price={'$130'}
                id={'addCart-btn-4'}
                parentId={'addCart-btn-warp-4'}
                imgId={'card-img-4'}
              />
              <Card
                title={'麴塩五香松阪豬'}
                comment={'1180'}
                buy={'234'}
                price={'$130'}
                id={'addCart-btn-5'}
                parentId={'addCart-btn-warp-5'}
                imgId={'card-img-5'}
                cardMargin={'card-margin'}
              />
              <Card
                title={'美式熟成烤牛肋條'}
                comment={'1180'}
                buy={'234'}
                price={'$130'}
                id={'addCart-btn-6'}
                parentId={'addCart-btn-warp-6'}
                imgId={'card-img-6'}
              />
            </div>

            <div className="ru-itemWarp ru-itemWarp3">
              <Card
                title={'頂級熟成菲力牛排'}
                comment={'1180'}
                buy={'234'}
                price={'$130'}
                id={'addCart-btn-7'}
                parentId={'addCart-btn-warp-7'}
                imgId={'card-img-7'}
              />
              <Card
                title={'炙燒干貝'}
                comment={'1180'}
                buy={'234'}
                price={'$130'}
                id={'addCart-btn-8'}
                parentId={'addCart-btn-warp-8'}
                imgId={'card-img-8'}
                cardMargin={'card-margin'}
              />
              <Card
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
        {/* 商品區 - 網頁版 / 手機板e */}

        {/* 商品區 - ipad版 s */}
        <div className="ru-item-containerB">
          {/* 卡片區 s */}
          <div className="ru-card-warp">
            <div className="ru-itemWarp ru-itemWarp1">
              <Card
                title={'慢煮嫩雞胸-蒜味香草'}
                comment={'1180'}
                buy={'234'}
                price={'$130'}
                id={'addCart-btn-1'}
                parentId={'addCart-btn-warp-1'}
                imgId={'card-img-1'}
              />
              <Card
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
              <Card
                title={'醬烤厚切1983黑豚'}
                comment={'1180'}
                buy={'234'}
                price={'$130'}
                id={'addCart-btn-3'}
                parentId={'addCart-btn-warp-3'}
                imgId={'card-img-3'}
              />
              <Card
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
              <Card
                title={'麴塩五香松阪豬'}
                comment={'1180'}
                buy={'234'}
                price={'$130'}
                id={'addCart-btn-5'}
                parentId={'addCart-btn-warp-5'}
                imgId={'card-img-5'}
                cardMargin={'card-margin'}
              />
              <Card
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
              <Card
                title={'頂級熟成菲力牛排'}
                comment={'1180'}
                buy={'234'}
                price={'$130'}
                id={'addCart-btn-7'}
                parentId={'addCart-btn-warp-7'}
                imgId={'card-img-7'}
              />
              <Card
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
              <Card
                title={'會議雙拼組合'}
                comment={'1180'}
                buy={'234'}
                price={'$130'}
                id={'addCart-btn-9'}
                parentId={'addCart-btn-warp-9'}
                imgId={'card-img-9'}
              />
              <Card
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
              <Card
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
              <Card
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
              <Card
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
              <Card
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
              <Card
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
              <Card
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
              <Card
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
              <Card
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
              <Card
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
      </div>

      {/* <div style={{ height: '222px', backgroundColor: '#FF5151' }}>
        我是footer
      </div> */}
    </>
  );
}

export default RuComponents;
