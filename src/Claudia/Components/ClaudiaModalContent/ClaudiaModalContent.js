import React from 'react';
import './ClaudiaModalContent.scss';
import Reset from './Images/reset.svg';
import Calender from './Images/calender.svg';
import Counter from '../../../Share/Components/Counter/Counter'

function ClaudaiModalContent() {

    return (

        <>
            <div className="claudia-modal">
                <h1>請選擇日期、預定選項</h1>
                <div className="claudia-modal-inline">
                    <h2><b>請選擇參加日期</b></h2>
                    <button className="claudia-modal-inline-reset-button">
                        <h3 className="claudia-modal-inline-right">清除全部</h3>
                        <img alt="" src={Reset} />
                    </button>

                </div>
                <div className="claudia-modal-calender-button">
                    <img alt="" src={Calender} />
                    <h3>查看可預訂日期</h3>
                </div>
                <div className="claudia-modal-middle">
                    <div className="claudia-modal-middle-transport">
                        <h3><b>前往方式</b></h3>
                        <div className="claudia-modal-middle-transport-buttons">
                            <button>團體報名*</button>
                            <button>自行前往</button>
                        </div>
                    </div>
                    <div className="claudia-modal-middle-group-notes">
                        <h4 className="claudia-modal-middle-group-notes-title">*團體報名注意事項</h4>
                        <h4 className="claudia-modal-middle-group-notes-second">5人以上成團</h4>
                        <div className="claudia-modal-middle-group-nums">
                            <h4>目前報名人數：7人</h4>
                            <h5>確定成團</h5>
                        </div>
                        <h4>若人數不足無法成團，會再以email方式聯繫</h4>
                    </div>
                </div>
                <div className="claudia-modal-signup-num">
                    <h3><b>數量</b></h3>
                    <div className="claudia-modal-signup-num-box">
                        <div className="claudia-modal-signup-num-box-left"><b>成人</b></div>
                        <div className="claudia-modal-signup-num-box-right">
                            <span><del><b>$1000</b></del></span>
                            <span><b>$800</b></span>
                            {/* <h6>Counter</h6> */}
                        </div>
                    </div>
                    <div className="claudia-modal-signup-num-box">
                        <div className="claudia-modal-signup-num-box-left"><b>兒童</b></div>
                        <div className="claudia-modal-signup-num-box-right">
                            <span><del><b>$700</b></del></span>
                            <span><b>$500</b></span>
                            {/* <h6>Counter</h6> */}
                        </div>
                    </div>
                </div>
                <div className="claudia-modal-last-block">
                    <div className="claudia-modal-total-price">
                        <span><b>總金額：</b></span>
                        <span className="claudia-modal-total-price-orange"><b>$2600</b></span>
                    </div>
                    <div className="claudia-modal-cart-button"><button>加入購物車</button></div>

                </div>


            </div>

        </>
    )
}

export default ClaudaiModalContent;