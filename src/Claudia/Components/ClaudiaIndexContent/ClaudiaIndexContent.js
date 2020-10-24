import React from 'react';
import './ClaudiaIndexContent.scss'
import ClaudiaMap from '../ClaudiaMap/ClaudiaMap';
import ClaudiaCard from '../ClaudiaCard/ClaudiaCard';

function ClaudiaIndexContent() {

    return (
        <>
            <div className="claudia-index-content">
                <div id="claudia-index-map"><ClaudiaMap /></div>
                <div id="claudia-index-card"><ClaudiaCard /></div>

            </div>
        </>
    )
}

export default ClaudiaIndexContent;