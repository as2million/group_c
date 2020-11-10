import React from 'react';
import './ClaudiaDetailedNavButtons.scss'
import Taiwan from './Images/taiwan.png';
import Bento from './Images/bento.png';
import Vegs from './Images/vegs.png';
import Button from '../../../Share/Components/Button/Button';
import { Link } from 'react-router-dom';

function ClaudiaDetailedNavButtons() {

    return (
        <>
            <div className="claudia-detailed-nav-buttons-outside">
                <div className="claudia-detailed-nav-buttons">
                    <div className="claudia-detailed-nav-buttons-container">
                        <div className="claudia-detailed-nav-button1"><Button className="button-btn-g" text="點我報名" /></div>
                        <h1>沒有要參加這個活動嗎？</h1>
                        <div className="claudia-detailed-nav-buttons-area">
                            <div className="claudia-detailed-nav-buttons-box">
                                <div className="claudia-detailed-nav-buttons-icons"><img className="claudia-taiwan" alt="taiwan" src={Taiwan} /></div>
                                <Link to="/farmMap">
                                    <div className="claudia-detailed-nav-button2"><Button className="button-btn-g" text="回小農地圖" /></div>
                                </Link>
                            </div>
                            <div className="claudia-detailed-nav-buttons-box">
                                <div className="claudia-detailed-nav-buttons-icons"><img alt="bento" src={Bento} /></div>
                                {/* add link */}
                                <div className="claudia-detailed-nav-button2"><Button className="button-btn-g" text="我想訂便當" /></div>
                            </div>
                            <div className="claudia-detailed-nav-buttons-box">
                                <div className="claudia-detailed-nav-buttons-icons"><img alt="vegs" src={Vegs} /></div>
                                {/* add link */}
                                <div className="claudia-detailed-nav-button2"><Button className="button-btn-g" text="我想訂蔬菜箱" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClaudiaDetailedNavButtons;