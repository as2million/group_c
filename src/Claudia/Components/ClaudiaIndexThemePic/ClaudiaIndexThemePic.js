import React from 'react';
import './ClaudiaIndexThemePic.scss'
import IndexBg from './Images/index_bg.jpg';

function ClaudiaIndexThemePic() {

    return (
        <>
            <div className="claudia-index-background">
                <div className="claudia-fake-navbar"></div>
                <img className="claudia-index-background-image" alt="index_bg" src={IndexBg} />
                <div className="claudia-index-text">
                    <h1 className="claudia-index-text-1"><b>哈囉小農！</b></h1>
                    <h1 className="claudia-index-text-2"><b>一日活動體驗</b></h1>
                </div>
            </div>
        </>
    )
}

export default ClaudiaIndexThemePic;