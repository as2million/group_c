import React from 'react';
import './ClaudiaDetailedSilder.scss';
import Pic1 from './Images/JPG/strawberry.jpg';
import Pic2 from './Images/JPG/strawberry1.jpg';
import Pic3 from './Images/JPG/strawberry2.jpg';
import Pic4 from './Images/JPG/strawberry3.jpg';
import Rice from './Images/SVG/rice.svg';

function ClaudiaDetailedSilder() {

    return (
        <>
            <div className="claudia-detailed-slider">
                <img className="claudia-detailed-slider-ricebg" alt="" src={Rice} />
                <div className="claudia-detailed-slider-container">
                    <div className="claudia-image-select">
                        <img alt="" src={Pic2} />
                        <img alt="" src={Pic1} />
                        <img alt="" src={Pic3} />
                        <img alt="" src={Pic4} />
                    </div>
                    <div className="claudia-image-triangle-area">
                        <div className="claudia-image-triangle-box"><div className="claudia-image-triangle "></div></div>
                        <div className="claudia-image-triangle-box"><div className="claudia-image-triangle "></div></div>
                        <div className="claudia-image-triangle-box"><div className="claudia-image-triangle "></div></div>
                        <div className="claudia-image-triangle-box"><div className="claudia-image-triangle "></div></div>
                    </div>
                    <div className="claudia-image-large">
                        <img alt="" src={Pic4} />
                    </div>
                </div>

            </div>


        </>
    )
}

export default ClaudiaDetailedSilder;