import React from 'react';
import './ClaudiaIndexContent.scss'
import ClaudiaIndexMap from '../ClaudiaIndexMap/ClaudiaIndexMap';
import ClaudiaIndexCardIntro from '../ClaudiaIndexCardIntro/ClaudiaIndexCardIntro';
import ClaudiaIndexCardList from '../ClaudiaIndexCardList/ClaudiaIndexCardList';

function ClaudiaIndexContent() {

    return (
        <>
            <div className="claudia-index-content">
                <div className="claudia-index-content-container">
                    <div className="claudia-index-map"><ClaudiaIndexMap /></div>
                    <div className="claudia-index-card">
                        <ClaudiaIndexCardList />
                        <ClaudiaIndexCardIntro />
                    </div>
                </div>
                {/* <div className="claudia-fake-footer"></div> */}
            </div>

        </>
    )
}

export default ClaudiaIndexContent;