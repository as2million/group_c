import React from 'react';
import './ClaudiaDetailedMainText.scss';
import ClaudiaDetailedMainTextLeft from '../ClaudiaDetailedMainTextLeft/ClaudiaDetailedMainTextLeft';
import ClaudiaDetailedMainTextRight from '../ClaudiaDetailedMainTextRight/ClaudiaDetailedMainTextRight'

function ClaudiaDetailedMainText(props) {
    const { handleAddCartNumber } = props;

    return (
        <>
            <div className="claudia-detailed-maintext">
                <div className="claudia-detailed-maintext-left"><ClaudiaDetailedMainTextLeft /></div>
                <div className="claudia-detailed-maintext-right"><ClaudiaDetailedMainTextRight handleAddCartNumber={handleAddCartNumber} /></div>
            </div>
        </>
    )
}

export default ClaudiaDetailedMainText;