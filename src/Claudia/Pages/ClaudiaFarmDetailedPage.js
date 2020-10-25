import React from 'react';
import ClaudiaMainContent from '../Components/ClaudiaMainContent/ClaudiaMainContent';
import ClaudiaDetailedThemePic from '../Components/ClaudiaDetailedThemePic/ClaudiaDetailedThemePic';
import ClaudiaDetailedMainText from '../Components/ClaudiaDetailedMainText/ClaudiaDetailedMainText';
import ClaudiaDetailedSilder from '../Components/ClaudiaDetailedSilder/ClaudiaDetailedSilder';
import ClaudiaDetailedSchedule from '../Components/ClaudiaDetailedSchedule/ClaudiaDetailedSchedule';
import ClaudiaDetailedFarmIntro from '../Components/ClaudiaDetailedFarmIntro/ClaudiaDetailedFarmIntro'
import ClaudiaDetailedFarmAdr from '../Components/ClaudiaDetailedFarmAdr/ClaudiaDetailedFarmAdr';
import Footer from '../../Share/Components/Footer/Footer';

function ClaudiaFarmIntroPage() {

    return (
        <>
            <ClaudiaMainContent>
                <ClaudiaDetailedThemePic />
                <ClaudiaDetailedMainText />
                <ClaudiaDetailedSilder />
                <ClaudiaDetailedSchedule />
                <ClaudiaDetailedFarmIntro />
                <ClaudiaDetailedFarmAdr />
            </ClaudiaMainContent>
            <Footer />
        </>
    )
}

export default ClaudiaFarmIntroPage;