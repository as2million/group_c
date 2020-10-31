import React from 'react';
import './ClaudiaModalContent.scss';
import Reset from './Images/reset.svg';
import Calender from './Images/calender.svg';

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
                        <h3>前往方式</h3>
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
                    <h3>數量</h3>
                    <div className="claudia-modal-signup-num-box">
                        <span>成人</span>
                    </div>
                    <div className="claudia-modal-signup-num-box">
                        <span>兒童</span>
                    </div>
                </div>
                <div className="claudia-modal-total-price">
                    <span>總金額：</span>
                    <span>$2600</span>
                </div>
                <div className="claudia-modal-total-price">Button</div>

            </div>

        </>
    )
}

export default ClaudaiModalContent;