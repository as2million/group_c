import React, { useState } from 'react';
import './ClaudiaIndexContent.scss'
import ClaudiaIndexMap from '../ClaudiaIndexMap/ClaudiaIndexMap';
import ClaudiaIndexCardIntro from '../ClaudiaIndexCardIntro/ClaudiaIndexCardIntro';
import ClaudiaIndexCardList from '../ClaudiaIndexCardList/ClaudiaIndexCardList';

function ClaudiaIndexContent() {

    const [city, setCity] = useState('');
    const [data, setData] = useState('');

    return (
        <>
            <div className="claudia-index-content">
                <div className="claudia-index-content-container">
                    <div className="claudia-index-map"><ClaudiaIndexMap setCity={setCity} setData={setData} /></div>
                    <div className="claudia-index-card">
                        <ClaudiaIndexCardList city={city} data={data} />
                        <ClaudiaIndexCardIntro />
                    </div>
                </div>
                {/* <div className="claudia-fake-footer"></div> */}
            </div>

        </>
    )
}

export default ClaudiaIndexContent;