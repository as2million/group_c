import React from 'react';
import './ChaRefundModal.scss';
// import Cross from './Images/cross.svg';
import ChaCartButton from './Cha-Cart-Button/ChaCartButton';
const ChaRefundModal = (props) => {
  const { closeModal, closeModalSecret, takeDate, takeTime } = props;
  // , takeDate, takeTime
  const RefundDisplay = (props) => {
    const { takeDate, takeTime } = props;
    // .slice(0, 10)
    return (
      <>
        <div className="cha-submit-modal-container">
          <span onClick={closeModalSecret}>下單成功</span>
          <div className="cha-happy-mons"></div>
          <div className="cha-horizontal-line-in-submit-modal"></div>
          {/* <p>
            餐點預計於{takeDate}
            <span> </span>
            {takeTime}前送達，請於1樓取餐
          </p> */}
          <p> 款項及發票將於「取餐核銷完成」後請款與開立 </p>
          <div onClick={closeModal}>
            <ChaCartButton
              text="確認"
              className="cha-submit-modal-btn cha-submit-modal-button-btn"
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="cha-submit-claudia-overlay">
        <div className="cha-submit-claudia-modal-bg">
          <div
            className="cha-submit-claudia-modal-cross-img"
            alt=""
            // src={Cross}
          />
          {/* 光箱內容頂部 */}
          <div className="cha-submit-wrap-coupon-container">
            <div className="cha-submit-iris-coupon-container">
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
