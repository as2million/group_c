import React from 'react';
import './ClaudiaThemePic.scss'
import IndexBg from './Images/index_bg.jpg';

function ClaudiaThemePic() {

    return (
        <>
            <div className="claudia-index-background">
                <div className="claudia-fake-navbar"></div>
                <img className="claudia-background-image" src={IndexBg} />
                <div className="claudia-text">
                    <h1 className="claudia-text-1"><b>哈囉小農！</b></h1>
                    <h1 className="claudia-text-2"><b>一日活動體驗</b></h1>
                </div>
            </div>
        </>
    )
}

export default ClaudiaThemePic;