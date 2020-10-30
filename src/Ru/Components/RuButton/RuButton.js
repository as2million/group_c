import React from 'react';
import 'Ru/Components/RuButton/Style.scss';
import { withRouter } from 'react-router';

function RuButton(props) {
  // text 按鈕文字
  // className 橘色樣式為button-btn 綠色樣式為button-btn-g

  const {
    text,
    className,
    id,
    setIsShowRuBento,
    setIsShowRuSalad,
    setIsShowRuCustom,
  } = props;

  // 換頁邏輯
  function handleCardArea(e) {
    console.log(props);
    if (id === 'button-btn-1') {
      setIsShowRuBento(true);
      setIsShowRuSalad(false);
      setIsShowRuCustom(false);
    } else if (id === 'button-btn-2') {
      setIsShowRuBento(false);
      setIsShowRuSalad(true);
      setIsShowRuCustom(false);
    } else if (id === 'button-btn-3') {
      setIsShowRuBento(false);
      setIsShowRuSalad(false);
      setIsShowRuCustom(true);
    } else if (id === 'button-btn-4') {
      props.history.push('/vegBox');
    }
  }

  // 路由方法
  function handleCardArea(e) {
    console.log(props);
    if (id === 'button-btn-1') {
      props.history.push('/productList');
    } else if (id === 'button-btn-2') {
      props.history.push('/productListSalad');
    } else if (id === 'button-btn-3') {
      props.history.push('/productListCustom');
    } else if (id === 'button-btn-4') {
      props.history.push('/vegBox');
    }
  }
  return (
    <>
      <button className={className} onClick={handleCardArea}>
        {text}
      </button>
    </>
  );
}

export default withRouter(RuButton);
