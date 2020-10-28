import React from 'react';
import './ClaudiaIndexContent.scss'
import ClaudiaIndexMap from '../ClaudiaIndexMap/ClaudiaIndexMap';
import ClaudiaIndexCard from '../ClaudiaIndexCard/ClaudiaIndexCard';

function ClaudiaIndexContent() {

    return (
        <>
            <div className="claudia-index-content">
                <div id="claudia-index-map"><ClaudiaIndexMap /></div>
                <div id="claudia-index-card"><ClaudiaIndexCard /></div>

            </div>
        </>
    )
}

export default ClaudiaIndexContent;