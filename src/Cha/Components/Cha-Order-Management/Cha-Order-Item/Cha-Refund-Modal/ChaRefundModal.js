import React from 'react';
import './ChaRefundModal.scss';
// import Cross from './Images/cross.svg';
import ChaCartButton from './Cha-Cart-Button/ChaCartButton';
const ChaRefundModal = (props) => {
  const {
    closeModal,
    closeModalSecret,
    takeDate,
    takeTime,
    changeOrderState,
  } = props;
  // , takeDate, takeTime
  const RefundDisplay = (props) => {
    // const { takeDate, takeTime } = props;
    // .slice(0, 10)
    return (
      <>
        <div className="cha-refund-modal-container">
          {/* <span>下單成功</span> */}
          <div className="cha-happy-mons"></div>
          <div className="cha-horizontal-line-in-refund-modal"></div>
          {/* <p>
            餐點預計於{takeDate}
            <span> </span>
            {takeTime}前送達，請於1樓取餐
          </p> */}
          <p> 確定要退費嗎？ 提醒您，若該訂單已使用優惠券，將無法退還 </p>
          <div className="d-flex">
            <div onClick={changeOrderState}>
              <ChaCartButton
                text="確認"
                className="cha-refund-modal-btn cha-refund-modal-button-btn"
              />
              <div onClick={closeModal}>
                <ChaCartButton
                  text="取消"
                  className="cha-refund-modal-btn cha-refund-modal-button-btn"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="cha-refund-claudia-overlay">
        <div className="cha-refund-claudia-modal-bg">
          <div
            className="cha-refund-claudia-modal-cross-img"
            alt=""
            // src={Cross}
          />
          {/* 光箱內容頂部 */}
          <div className="cha-refund-wrap-coupon-container">
            <div className="cha-refund-iris-coupon-container">
              <RefundDisplay takeDate={takeDate} takeTime={takeTime} />
            </div>
          </div>
          {/* 光箱內容底部 */}
        </div>
      </div>
    </>
  );
};

export default ChaRefundModal;
