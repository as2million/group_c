import React, { useState } from 'react';
import 'Ru/Components/RuCustom/Style.scss';

// 引用共用元件
import Card from 'Share/Components/Card/Card';

// 引用圖片
import line from 'Ru/Components/Ru-component/Images/line.png';
import background from 'Ru/Components/Ru-component/Images/background.png';

function RuCustom() {
  return (
    <>
      <h1 style={{ textAlign: 'center', fontSize: '80px' }}>
        ----- 這頁是客製化便當 -----
      </h1>
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
      ;{/* 商品區- ipad版e */}
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
      ;{/* 商品區- 手機版e */}
    </>
  );
}

export default RuCustom;
