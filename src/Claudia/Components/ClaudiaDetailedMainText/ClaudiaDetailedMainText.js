import React from 'react';
import './ClaudiaDetailedMainText.scss';
import ClaudiaDetailedMainTextLeft from '../ClaudiaDetailedMainTextLeft/ClaudiaDetailedMainTextLeft';
import ClaudiaDetailedMainTextRight from '../ClaudiaDetailedMainTextRight/ClaudiaDetailedMainTextRight'

function ClaudiaDetailedMainText() {

    return (
        <>
            <div className="claudia-detailed-maintext">
                <div className="claudia-detailed-maintext-left"><ClaudiaDetailedMainTextLeft /></div>
                <div className="claudia-detailed-maintext-right"><ClaudiaDetailedMainTextRight /></div>
            </div>
        </>
    )
}

export default ClaudiaDetailedMainText;