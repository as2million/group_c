import React from 'react';
import './ClaudiaDetailedMainTextRight.scss';

function ClaudiaDetailedMainTextRight() {
    return (
        <>
            <div className="claudia-detailed-maintext-signup">
                <div className="claudia-detailed-maintext-signup-box">
                    <h1><b>可選擇團體報名或自行前往</b></h1>
                    <div className="claudia-signup-text claudia-signup-box"><p><b>團體報名</b></p></div>
                    <div className="claudia-signup-text"><span><b>集合時間：</b></span><span>9:00</span></div>
                    <div className="claudia-signup-text"><span><b>集合地點：</b></span><span>台北車站</span></div>
                    <div className="claudia-signup-text claudia-signup-text-group"><b>5人以上成團</b></div>
                    <div className="claudia-signup-text claudia-signup-text-group"><span><b>目前報名人數：7人</b></span><span className="claudia-yellow-confirm"><b>確定成團</b></span></div>
                    <div className="claudia-signup-text claudia-signup-box"><p><b>自行前往</b></p></div>
                    <div className="claudia-signup-text"><span><b>集合時間：</b></span><span>9:20</span></div>
                    <div className="claudia-signup-text"><span className="claudia-signup-text-group-adr"><b>集合地點：</b></span><span>台北市內湖區碧山路58-1號</span></div>
                    <div className="claudia-signup-text-map"><p>點我看地圖</p></div>
                    <div className="claudia-signup-date-button"><p>查看可預訂日期</p></div>
                </div>
            </div>
        </>
    )

}

export default ClaudiaDetailedMainTextRight;