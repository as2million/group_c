import React from 'react';
import ClaudiaMainContent from '../../Claudia/Components/ClaudiaMainContent/ClaudiaMainContent';
import ClaudiaThemePic from '../../Claudia/Components/ClaudiaThemePic/ClaudiaThemePic';
import ClaudiaInducText from '../../Claudia/Components/ClaudiaInducText/ClaudiaInducText';
import ClaudiaIndexContent from '../../Claudia/Components/ClaudiaIndexContent/ClaudiaIndexContent';
import Footer from '../../Share/Components/Footer/Footer'

function ClaudiaFarmIndex() {

    return (
        <>
            <ClaudiaMainContent>
                <ClaudiaThemePic />
                <ClaudiaInducText />
                <ClaudiaIndexContent />
            </ClaudiaMainContent>
            <Footer />
        </>
    )
}

export default ClaudiaFarmIndex;