import React from 'react';
import './ClaudiaDetailedNavButtons.scss'
import Taiwan from './Images/taiwan.png';
import Bento from './Images/bento.png';
import Vegs from './Images/vegs.png';

function ClaudiaDetailedNavButtons() {

    return (
        <>
            <div className="claudia-detailed-nav-buttons-outside">
                <div className="claudia-detailed-nav-buttons">
                    <div className="claudia-detailed-nav-buttons-container">
                        <h1>Button</h1>
                        <h1>沒有要參加這個活動嗎？</h1>
                        <div className="claudia-detailed-nav-buttons-area">
                            <div className="claudia-detailed-nav-buttons-box">
                                <div className="claudia-detailed-nav-buttons-icons"><img className="claudia-taiwan" alt="taiwan" src={Taiwan} /></div>
                                <h2>Button</h2>
                            </div>
                            <div className="claudia-detailed-nav-buttons-box">
                                <div className="claudia-detailed-nav-buttons-icons"><img alt="bento" src={Bento} /></div>
                                <h2>Button</h2>
                            </div>
                            <div className="claudia-detailed-nav-buttons-box">
                                <div className="claudia-detailed-nav-buttons-icons"><img alt="vegs" src={Vegs} /></div>
                                <h2>Button</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClaudiaDetailedNavButtons;