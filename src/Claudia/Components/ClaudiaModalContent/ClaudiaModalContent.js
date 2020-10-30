import React from 'react';
import './ClaudiaModalContent.scss';
import Reset from './Images/reset.svg';

function ClaudaiModalContent() {

    return (

        <>
            <div className="claudia-modal">
                <h1>請選擇日期、預定選項</h1>
                <div className="claudia-modal-inline">
                    <h3>請選擇參加日期</h3>
                    <div className="claudia-modal-inline-reset-button">
                        <img alt="" src={Reset} />
                        <h3 className="claudia-modal-inline-right">清除全部</h3>
                    </div>

                </div>
                <h3>查看可預訂日期</h3>
                <div className="claudia-modal-middle">
                    <div className="claudia-modal-middle-transport">
                        <h3>前往方式</h3>
                    </div>
                    <div className="claudia-modal-middle-group">
                        <h4>團體報名注意事項</h4>
                    </div>
                </div>
                <div className="claudia-modal-signup-num">
                    <h3>數量</h3>

                </div>
                <div className="claudia-modal-total-price"></div>
                <div className="claudia-modal-total-price">Button</div>

            </div>

        </>
    )
}

export default ClaudaiModalContent;