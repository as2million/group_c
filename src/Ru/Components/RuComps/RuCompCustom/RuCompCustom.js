import React, { useState } from 'react';
import RuShowWidth from 'Ru/Components/Ru-ShowWidth/RuShowWidth';
import RuCustom from 'Ru/Components/RuCards/RuCustom/RuCustom';
import RuButton from 'Ru/Components/RuButton/RuButton';
import 'Ru/Components/RuComps/Style.scss';

// 引用共用元件
import SearchBar from 'Share/Components/Input/SearchBar';
import ScrollButton from 'Share/ToTopButton/ScrollButton';
// 引用圖片
import line from './Images/line.png';

function RuCompCustom(props) {
  console.log(props);
  const [searchInput, setSearchInput] = useState('');

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
          <SearchBar />
          {/* 搜尋欄e */}

          {/* 選項按鈕 s */}
          <section className="ru-buttonWarpA">
            <RuButton
              text={'低GI便當'}
              className={'button-btn'}
              id={'button-btn-1'}
            />
            <RuButton
              text={'鮮蔬沙拉'}
              className={'button-btn'}
              id={'button-btn-2'}
            />
            <RuButton
              text={'客製化便當'}
              className={'button-btn'}
              id={'button-btn-3'}
            />
            <RuButton
              text={'蔬菜箱'}
              className={'button-btn-g'}
              id={'button-btn-4'}
            />
          </section>

          <section className="ru-buttonWarpB">
            <div>
              <RuButton
                text={'低GI便當'}
                className={'button-btn'}
                id={'button-btn-1'}
              />
              <RuButton
                text={'客製化便當'}
                className={'button-btn'}
                id={'button-btn-2'}
              />
            </div>
            <div>
              <RuButton
                text={'鮮蔬沙拉'}
                className={'button-btn'}
                id={'button-btn-3'}
              />
              <RuButton
                text={'蔬菜箱'}
                className={'button-btn-g'}
                id={'button-btn-4'}
              />
            </div>
          </section>
          {/* 選項按鈕 e */}
        </div>

        {/* 分隔曲線 s*/}
        <div className="ru-line">
          <img src={line}></img>
        </div>
        {/* 分隔曲線 e*/}
      </div>

      {/* 商品卡片區 s */}
      <RuCustom />
      {/* 商品卡片區 e */}

      {/* to top s */}
      <ScrollButton />
      {/* to top e */}
      
      {/* <div style={{ height: '222px', backgroundColor: '#FF5151' }}>
        我是footer
      </div> */}
    </>
  );
}

export default RuCompCustom;
